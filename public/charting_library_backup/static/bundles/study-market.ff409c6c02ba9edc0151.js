(window.webpackJsonp = window.webpackJsonp || []).push([
  ['study-market'],
  {
    '24k8': function (t, e, i) {
      'use strict';
      (function (e, s) {
        function a(t, i) {
          (this.HIGHLIGHT_STUDY_NUM_FLICKS = 2),
            (this.SCROLL_TOLERANCE = 10),
            (this._BASIC_STUDIES_PACKAGE_NAME = 'tv-basicstudies'),
            (this._CUSTOM_STUDIES_PACKAGE_NAME = 'Script$USER'),
            (this._PUBLISHED_STUDIES_PACKAGE_NAME = 'Script$PUB'),
            (this._STANDARD_STUDIES_PACKAGE_NAME = 'Script$STD'),
            (this._SCRIPTING_PACKAGE_NAME = 'tv-scripting'),
            (this._BASIC_STUDIES_PAGE_NAME = n.enabled('plain_studymarket')
              ? $.t('Technical Analysis')
              : $.t('Built-ins')),
            (this._dialog = null),
            (this._selectedStudy = null),
            (this._keyDownListener = null),
            (this._shortCutsLockId = null),
            (this.visibilityChanged = new e()),
            (this._trialAddonDialogShown = !1),
            (this._chartWidgetCollection = t),
            (this._chart = t.activeChartWidget.value()),
            (this._options = $.extend({}, this.DEFAULT_OPTIONS, i || {})),
            this.concretizeOptions(),
            (this._user = window.user),
            this.setup(),
            (this.favsModel = m.getInstance()),
            this.favsModel
              .favoritesChanged()
              .subscribe(this, this.updateFavorites);
        }
        var n, r, o, d, h, c, l, u, _, p, g, v, f, y, S, m, b, E, C, A, w;
        i('pfXf'),
          (n = i('Kxc7')),
          (r = i('Eyy1').assert),
          (o = i('FQhm')),
          (d = i('sFgq').SidebarCustomScroll),
          (h = i('0YCj')),
          (c = i('cBZt').extractStudyId),
          i('TcSq').extractPineId,
          (l = i('YDhE').createDialog),
          i('oNDq').createConfirmDialog,
          (u = i('UIZs').createSearchControl),
          (_ = i('j1f4')),
          (p = i('Vdly')),
          (g = i('33OQ')),
          (v = i('6et/')),
          (f = i('wmOI')),
          (y = i('1hzI').KeyboardListener),
          (S = i('Bruo')),
          (m = i('LiyS').FavoriteScriptsModel),
          (b = i('GVHu').Study),
          (E = i('mMWL')),
          i('uOxu').getLogger('Chart.StudyMarketDialog'),
          i('xUY+'),
          i('IwoD'),
          i('m/4m'),
          (C =
            '<div class="tv-insert-indicator-dialog__body js-dialog__scroll-wrap"><div class="tv-insert-indicator-dialog__left-panel">{{^minimized}}<div id="js-search-placeholder"></div>{{/minimized}}<div class="tv-insert-indicator-dialog__left-panel-content-wrapper js-left-panel-wrapper"><div class="tv-insert-indicator-dialog__tabs-viewport js-tabs-viewport"><div class="tv-insert-indicator-dialog__tabs-container js-tabs-container"></div></div></div></div><div class="tv-insert-indicator-dialog__right-panel js-right-panel">{{#minimized}}{{#withSearch}}<div id="js-search-placeholder"></div>{{/withSearch}}{{/minimized}}<div class="tv-insert-indicator-dialog__pages js-pages"><div id="js-search-results-placeholder"></div></div></div></div>'),
          (A =
            '<div class="tv-insert-indicator-dialog__tabs-group"><div class="tv-insert-indicator-dialog__tab tv-insert-indicator-dialog__tab--group-head js-tab js-tab-head">{{title}}<span class="tv-caret"></span></div><div class="tv-insert-indicator-dialog__tabs"></div></div>'),
          (w =
            '<div class="js-study-item tv-insert-study-item {{^withFavorites}}i-without-stars{{/withFavorites}}">{{#withFavorites}}<div class="tv-insert-study-item__favorite-icon js-favorite-icon"><span class="tv-insert-study-item__star tv-insert-study-item__star--filled">' +
            i('HHbT') +
            '</span><span class="tv-insert-study-item__star tv-insert-study-item__star--empty">' +
            i('GWvR') +
            '</span></div>{{/withFavorites}}<div class="tv-insert-study-item__title"><div class="tv-insert-study-item__title-text" title="{{titleTooltip}}">{{{title}}}</div></div></div>'),
          (a.prototype.destroy = function () {}),
          (a.prototype.setup = function () {
            (this._initialized = !1),
              (this._loadMore = null),
              (this._$symbolSearchPopup = null),
              (this._market = null),
              (this._studies = null),
              (this._packagesWithTabNames = {}),
              (this._pages = {}),
              (this._tabs = {}),
              (this._subProductIds = {}),
              (this.favsChanged = new e()),
              (this._previousInviteOnlyStudiesIds = []),
              (this.studiesReady = new $.Deferred()),
              (this.marketPagesReady = new $.Deferred()),
              (this._pubSearchCount = [0, 0, 0]),
              (this._pubSearchCanLoad = [!0, !0, !0]),
              (this._pubSearchEntries = []),
              (this._pubSearchCache = []),
              (this._pubSearchDfd = null),
              (this._pubSearchPageShown = !1),
              (this._w_market_tabs = null),
              (this._w_technical_tabs = null);
          }),
          (a.prototype.init = function () {
            var t,
              e = this;
            return this._initialized
              ? this.getStudyInfo()
              : ((t = function () {
                  e.setupMarketInfo(),
                    e.getStudyInfo(),
                    e.setUser(e._user),
                    e.prepareLayout(),
                    e.attachHandlers(),
                    (e._initialized = !0);
                }),
                new Promise(function (e) {
                  return t(), e();
                }));
          }),
          (a.prototype.DEFAULT_OPTIONS = {
            onWidget: !1,
            hideMarketPages: !1,
            selectBasicPage: !0,
            minimized: !1,
            searchKeywords: {
              earning: new RegExp('EPS'),
              earnings: new RegExp('EPS'),
              'trailing twelve months': new RegExp('TTM'),
            },
          }),
          (a.prototype._PAGE_KEY = 'studyMarket.page'),
          (a.prototype._PUB_SEARCH_ENTRIES_ON_PAGE = 20),
          (a.prototype.loadFavorites = function () {
            this.favsModel.loadFavs();
          }),
          (a.prototype.concretizeOptions = function () {
            n.enabled('study_market_minimized') &&
              ((this._options.hideMarketPages = !0),
              (this._options.selectBasicPage = !0),
              (this._options.minimized = !0)),
              this._options.onWidget && (this._options.hideMarketPages = !0);
          }),
          (a.prototype.setupMarketInfo = function () {}),
          (a.prototype.getStudyInfo = function () {
            var t = this;
            return new Promise(function (e, i) {
              t._chart.withModel(t, function () {
                t.setupStudyInfo()
                  .then(function () {
                    e();
                  })
                  .catch(function (t) {
                    i(t);
                  });
              });
            });
          }),
          (a.prototype.setupStudyInfo = function () {
            var t = this._chartWidgetCollection.activeChartWidget
              .value()
              .metaInfoRepository();
            return t.findAll().then(
              function (e) {
                return (
                  (e = e.concat(t.getAllStubs())).length,
                  (this._studies = {}),
                  (e = e.filter(function (t) {
                    return !this.isHidedStudy(t);
                  }, this)).forEach(
                    function (t) {
                      var e,
                        i = this.getStudyPackageName(t.id),
                        s = !(
                          (this._options.minimized &&
                            i !== this._BASIC_STUDIES_PACKAGE_NAME) ||
                          (this._options.onWidget &&
                            (h.isScriptStrategy(t) ||
                              i === this._CUSTOM_STUDIES_PACKAGE_NAME))
                        );
                      s &&
                        ((e = this.resolvePackageName(i)),
                        r(void 0 !== e, 'Cannot resolve packageName ' + i),
                        (this._studies[e] = this._studies[e] || []),
                        this._studies[e].push(t));
                    }.bind(this),
                    this,
                  ),
                  this.studiesReady.resolve()
                );
              }.bind(this),
            );
          }),
          (a.prototype.setupAddonsInfo = function () {
            var t,
              e,
              i,
              s,
              a = [],
              n = {};
            for (t in this._market.products)
              (e = this._market.products[t]),
                pro.hasPackage(t) &&
                  e.subproduct_ids &&
                  e.subproduct_ids[0] &&
                  ((i = e.subproduct_ids[0].split('$')[1]),
                  (n[i] = t),
                  a.push(ScriptLib.requestPineAddons(i)));
            return (
              (s = this),
              Promise.all(a).then(function (t) {
                return t.reduce(function (t, e) {
                  var i, a;
                  return e && e.length
                    ? ((i = e[0].scriptIdPart.split('_')[0]),
                      (a = []),
                      s._fillScriptsMetainfo(e, a),
                      (t[n[i]] = a),
                      t)
                    : t;
                }, {});
              })
            );
          }),
          (a.prototype.resolvePackageName = function (t) {
            return t in this._subProductIds ? this._subProductIds[t] : t;
          }),
          (a.prototype.setUser = function (t) {
            window.is_authenticated
              ? this.setupUserData(t)
              : this.setAnonymous();
          }),
          (a.prototype.setupUserData = function (t) {
            (this._user = t), this.loadFavorites(), this.updateMarketPages();
          }),
          (a.prototype.setAnonymous = function () {
            this.setupUserData(null), this.favsChanged.fire();
          }),
          (a.prototype.isHidedStudy = function (t) {
            var e = !1,
              i = !1;
            return !!t.is_hidden_study || (e && !i);
          }),
          (a._breakpointDevice = 'phone-vertical'),
          (a.prototype._switchPagesContainer = function (t, e) {
            this._options.minimized ||
              this._options.onWidget ||
              (t === a._breakpointDevice
                ? this._w_pages
                    .detach()
                    .appendTo(this._widget.find('.js-left-panel-wrapper'))
                : e === a._breakpointDevice &&
                  this._w_pages
                    .detach()
                    .appendTo(this._widget.find('.js-right-panel')));
          }),
          (a.prototype.prepareLayout = function () {
            (this._widget = $(
              s.render(C, {
                withSearch:
                  n.enabled('study_dialog_search_control') ||
                  this._options.onWidget,
                minimized: this._options.minimized || this._options.onWidget,
              }),
            )),
              (this._w_tabs = this._widget.find('.js-tabs-container')),
              (this._w_pages = this._widget.find('.js-pages')),
              (this._loadMore = null),
              this.preparePages(),
              this._options.selectBasicPage &&
                this.selectPage(this._BASIC_STUDIES_PAGE_NAME),
              (this._scroll = new d(
                this._widget.find('.js-tabs-viewport'),
                this._w_tabs,
                { showBottomShadow: !1 },
              ));
            var t =
              '<div class="tv-dialog__section tv-dialog__section--title js-dialog__drag tv-insert-indicator-dialog__title-container js-title-container"><div class="tv-insert-indicator-dialog__back-button js-back-button js-dialog__no-drag">' +
              i('MjtL') +
              '</div><div class="js-title-text tv-dialog__title tv-insert-indicator-dialog__title-text">{{{ title }}}</div></div>';
            (this._dialog = l({
              title: ' ',
              titleTemplate: t,
              contentWrapTemplate: this._widget,
              addClass:
                'tv-insert-indicator-dialog ' +
                (this._options.onWidget || this._options.minimized
                  ? 'i-minimized'
                  : ''),
              width:
                this._options.onWidget || this._options.minimized ? 490 : 842,
              height: 630,
              withScroll: !1,
              focusFirstControl: !1,
              closeOnClickAtOtherDialogs: !1,
              isClickOutFn: function (t) {
                var e, s;
                return (
                  !this._trialAddonDialogShown &&
                  ((e = i.c.wv8n) && (s = e.exports.instance())
                    ? s.isEventOut(t)
                    : this._$symbolSearchPopup
                    ? this._$symbolSearchPopup[0] !== t.target &&
                      !this._$symbolSearchPopup[0].contains(t.target) &&
                      void 0
                    : void 0)
                );
              }.bind(this),
            })),
              this._dialog.on('afterClose', this._onDialogClosed.bind(this)),
              this._dialog.$title
                .find('.js-back-button')
                .on(
                  Modernizr.mobiletouch ? 'touchend' : 'click',
                  this.selectPage.bind(this, ''),
                ),
              g.on(
                'changeDevice',
                function (t, e) {
                  t === a._breakpointDevice &&
                    this.currentPage() &&
                    this.currentPage().hasClass('js-marketplace-page') &&
                    this.selectPage(''),
                    t === a._breakpointDevice &&
                      (this._scroll.scrollToStart(),
                      this._updateDialogTitleText()),
                    this._switchPagesContainer(t, e);
                }.bind(this),
              ),
              this._switchPagesContainer(g.device, ''),
              this._showHideBackButton(),
              this.hide();
          }),
          (a.prototype.scrollHandler = function () {
            var t, e;
            this._loadMore
              ? ((t = $.map(this._w_pages.children(':visible'), function (t) {
                  return $(t).outerHeight(!0);
                }).reduce(function (t, e) {
                  return t + e;
                }, 0)),
                (e = this._widget.find('.js-right-panel').height()),
                this._w_pages.scrollTop() > t - e - this.SCROLL_TOLERANCE &&
                  (this._w_pages.off('scroll.loadMoreOnEnd'), this._loadMore()))
              : this._w_pages.off('scroll.loadMoreOnEnd');
          }),
          (a.prototype._updateDialogTitleText = function () {
            var t;
            this._dialog &&
              (!('' !== this._currentPageTitle) ||
              this._options.onWidget ||
              this._options.minimized ||
              'phone-vertical' !== g.device
                ? this._dialog.setTitleText(this._dialogTitleText)
                : ((t = this.currentPage()),
                  this._dialog.setTitleText(t.data('fullTitle'))));
          }),
          (a.prototype.currentPage = function () {
            return this._pages[this._currentPageTitle];
          }),
          (a.prototype.preparePages = function () {
            this.addSearchPage(),
              n.enabled('items_favoriting') && this.addFavoritesPage(),
              this.prepareBasicPage();
          }),
          (a.prototype.addFavoritesPage = function () {
            this.addPage('Favorites', { localizedTitle: $.t('Favorites') }),
              this.loadFavorites(),
              this.updateFavorites();
          }),
          (a.prototype.addInvitesOnlyPage = function () {
            this.addPage('invitesOnly', {
              localizedTitle: $.t('Invite-Only Scripts'),
            });
          }),
          (a.prototype.prepareBasicPage = function () {
            var t = this.addPage(this._BASIC_STUDIES_PAGE_NAME, {
              packageName: this._BASIC_STUDIES_PACKAGE_NAME,
            });
            (this._basicPage = t),
              this.studiesReady.done(
                function () {
                  this.resetBasicPage();
                }.bind(this),
              );
          }),
          (a.prototype._applyGlobalFilter = function (t) {
            return this._parentSource && (t = t.filter(h.canBeChild)), t;
          }),
          (a.prototype._applyStrategiesFilter = function (t) {
            var e = this._parentSource ? 'not_strategies' : 'none';
            return (
              ('not_strategies' !== e && 'only_strategies' !== e) ||
                (t = t.filter(function (t) {
                  var i = h.isScriptStrategy(t);
                  return 'not_strategies' === e ? !i : i;
                })),
              t
            );
          }),
          (a.prototype.resetBasicPage = function () {
            var t,
              e,
              i = this.getPage(this._BASIC_STUDIES_PAGE_NAME);
            this._studies &&
              ((t = this._studies[this._BASIC_STUDIES_PACKAGE_NAME] || []),
              (e = this._studies[this._STANDARD_STUDIES_PACKAGE_NAME] || []),
              (t = t.concat(e)),
              (t = this._applyStrategiesFilter(t)),
              (t = this._applyGlobalFilter(t)),
              this.preparePageStudies(i, t),
              this._renderStudiesPage(i));
          }),
          (a.prototype.resetAllPages = function () {
            this.resetBasicPage(),
              this.resetCustomScriptPage(),
              this.resetPublishedScriptPage(),
              this.resetInvitesOnlyPage();
          }),
          (a.prototype._fillScriptsMetainfo = function (t, e) {
            var i, s, a;
            for (i = 0; i < t.length; i++)
              (s = t[i]),
                (a = createStudyMetaInfoStub(s, '1')),
                TradingView.merge(a, h.parseIdString(a.id)),
                e.push(a);
          }),
          (a.prototype.resetCustomScriptPage = function () {}),
          (a.prototype.resetPublishedScriptPage = function () {}),
          (a.prototype._createItemsList = function () {
            return $('<div class="tv-insert-indicator-dialog__items-list">');
          }),
          (a.prototype._createSubGroupItem = function (t) {
            return $(
              '<div class="tv-insert-study-item tv-insert-study-item--subgroup-header">',
            ).text(t);
          }),
          (a.prototype._createItemsGroup = function (t, e, i) {
            var s,
              a = this._createItemsList();
            return (
              this.fillStudies(a, t, i),
              (s = $('<div class="tv-insert-indicator-dialog__subgroup">')),
              e.length && s.append(this._createSubGroupItem(e)),
              s.append(a),
              s
            );
          }),
          (a.prototype.addSearchPage = function () {
            var t,
              e,
              i = u({ addClass: 'tv-insert-indicator-dialog__search-control' });
            (this._tabs.search = i.$control.data('title', 'search')),
              (this._pages.search = $(
                '<div class="tv-insert-indicator-dialog__page tv-insert-indicator-dialog__page--search">',
              ).data('title', 'search')),
              this._pages.search.data('fullTitle', $.t('Search')),
              (t = null),
              (this._search_value = null),
              (this._search_input = i.$input),
              i.inputChangedDelegate.subscribe(
                null,
                function () {
                  t && clearTimeout(t),
                    (t = setTimeout(
                      function () {
                        (t = null),
                          this.search(this._search_input.val()),
                          this._w_pages.scrollTop(0);
                      }.bind(this),
                      200,
                    ));
                }.bind(this),
              ),
              this._search_input.focus(
                function () {
                  this.search(this._search_input.val());
                }.bind(this),
              ),
              this._widget
                .find('#js-search-placeholder')
                .replaceWith(this._tabs.search),
              this._widget
                .find('#js-search-results-placeholder')
                .replaceWith(this._pages.search),
              ((e = {})[f.ENTER] = this._onEnterKeyHandler.bind(this)),
              (e[f.UP_ARROW] = this._onUpKeyHandler.bind(this)),
              (e[f.DOWN_ARROW] = this._onDownKeyHandler.bind(this)),
              (this._keyDownListener = new y('keydown', !1)),
              this._keyDownListener.regHandlers(e);
          }),
          (a.prototype._onEnterKeyHandler = function (t) {
            null !== this._selectedStudy
              ? this.insertThisStudy(this._selectedStudy)
              : this._insertStudyByShortDescription();
          }),
          (a.prototype._onUpKeyHandler = function (t) {
            var e, i, s;
            t.preventDefault(),
              null !== this._selectedStudy &&
                ((i = (e = this.currentPage().find('.js-study-item')).index(
                  this._selectedStudy,
                )),
                (s = e.eq(i - 1)).length &&
                  i > 0 &&
                  (this._selectedStudy.removeClass(
                    'tv-insert-study-item--selected',
                  ),
                  s.addClass('tv-insert-study-item--selected'),
                  (this._selectedStudy = s),
                  this._ensureSelectedItemIsVisible()));
          }),
          (a.prototype._onDownKeyHandler = function (t) {
            var e, i, s;
            t.preventDefault(),
              null !== this._selectedStudy &&
              this.currentPage()[0].contains(this._selectedStudy[0])
                ? ((i = (e = this.currentPage().find('.js-study-item')).index(
                    this._selectedStudy,
                  )),
                  (s = e.eq(i + 1)).length &&
                    (this._selectedStudy.removeClass(
                      'tv-insert-study-item--selected',
                    ),
                    s.addClass('tv-insert-study-item--selected'),
                    (this._selectedStudy = s),
                    this._ensureSelectedItemIsVisible()))
                : ((this._selectedStudy = this.currentPage()
                    .find('.js-study-item')
                    .first()),
                  this._selectedStudy.addClass(
                    'tv-insert-study-item--selected',
                  ));
          }),
          (a.prototype._ensureSelectedItemIsVisible = function () {
            var t, e, i, s, a, n;
            null !== this._selectedStudy &&
              ((t = this._w_pages),
              (e = this._selectedStudy[0].getBoundingClientRect()),
              (i = t[0].getBoundingClientRect()),
              (s = this.currentPage()[0].getBoundingClientRect().top),
              (a = e.top - s),
              (n = 3),
              e.top - i.top < 0
                ? t.scrollTop(a - n)
                : e.bottom - i.bottom > 0 &&
                  t.scrollTop(a - i.height + e.height + n));
          }),
          (a.prototype.search = function (t, e, i) {
            function s(t, e, i, s, a, n) {
              t.push(e),
                (t[t.length - 1].matchPriority = s),
                a && (t[t.length - 1].matchIndex = i.match(n).index);
            }
            var a,
              r,
              o,
              d,
              h,
              c = this;
            (this._search_value !== t || e) &&
              ((a = this._pages.search),
              (r = []),
              (o = function (t) {
                return t.replace(/[!-\/[-^{-}]/g, '\\$&');
              }),
              '' !== t &&
                ((d =
                  t
                    .split('')
                    .map(function (t, e) {
                      var i = o(t);
                      return 0 !== e && (i = '[/\\s-]' + i), '(' + i + ')';
                    })
                    .join('(.*?)') + '(.*)'),
                r.push({
                  fullMatch: new RegExp('(' + o(t) + ')', 'i'),
                  re: new RegExp('^' + d, 'i'),
                  reserveRe: new RegExp(d, 'i'),
                  fuzzyHighlight: !0,
                }),
                t.toLowerCase() in this.DEFAULT_OPTIONS.searchKeywords &&
                  r.push({
                    fullMatch: this.DEFAULT_OPTIONS.searchKeywords[
                      t.toLowerCase()
                    ],
                    re: this.DEFAULT_OPTIONS.searchKeywords[t.toLowerCase()],
                    fuzzyHighlight: !1,
                  })),
              (this._search_value = t),
              (h = $.Deferred()),
              (c._currentAsyncSearchDfd = h),
              n.enabled('plain_studymarket')
                ? h.resolve([])
                : PublishedScript.suggest(t)
                    .done(function (t) {
                      var e = [];
                      t && t.results;
                      h.resolve(e);
                    })
                    .fail(function () {
                      h.resolve([]);
                    }),
              h.done(
                function (e) {
                  var i,
                    n,
                    o,
                    d,
                    l,
                    u,
                    _,
                    p,
                    g,
                    v,
                    f,
                    y,
                    S,
                    m,
                    b,
                    E,
                    C,
                    A,
                    w,
                    P,
                    I,
                    T;
                  if (c._currentAsyncSearchDfd === h) {
                    for (
                      (i = Object.keys(c._studies)).indexOf(
                        c._PUBLISHED_STUDIES_PACKAGE_NAME,
                      ) < 0 && i.push(c._PUBLISHED_STUDIES_PACKAGE_NAME),
                        i.sort(),
                        o = (n = [
                          c._BASIC_STUDIES_PACKAGE_NAME,
                          c._STANDARD_STUDIES_PACKAGE_NAME,
                          c._PUBLISHED_STUDIES_PACKAGE_NAME,
                          c._CUSTOM_STUDIES_PACKAGE_NAME,
                        ]).length;
                      o--;

                    )
                      (d = n[o]),
                        -1 !== (l = i.indexOf(d)) &&
                          (i.splice(l, 1), i.unshift(d));
                    for (u = {}, _ = 0, p = 0; p < i.length; p++) {
                      for (
                        g = i[p],
                          v = [],
                          f = c._studies[g],
                          g === c._PUBLISHED_STUDIES_PACKAGE_NAME && (f = e),
                          o = 0;
                        o < f.length;
                        o++
                      )
                        if (((y = f[o]), r.length))
                          for (S = 0; S < r.length; S++)
                            ((m = r[S].re).lastIndex = 0),
                              (b = r[S].fullMatch),
                              (E = y.shortDescription) &&
                              E.toLowerCase() === t.toLowerCase()
                                ? s(v, y, E, 3, !0, b)
                                : E && b.test(E)
                                ? s(v, y, E, 2, !0, b)
                                : ((E = this._getScriptLocalizedName(y)),
                                  b.test(E)
                                    ? s(v, y, E, 1, !0, b)
                                    : m.test(E) && s(v, y, E, 0, !0, m));
                        else v.push(y);
                      if ((v = c._applyGlobalFilter(v)).length) {
                        switch (((C = g), g)) {
                          case c._BASIC_STUDIES_PACKAGE_NAME:
                          case c._STANDARD_STUDIES_PACKAGE_NAME:
                            C = c._BASIC_STUDIES_PAGE_NAME;
                            break;
                          case c._CUSTOM_STUDIES_PACKAGE_NAME:
                            C = $.t('My Scripts');
                            break;
                          case c._PUBLISHED_STUDIES_PACKAGE_NAME:
                            C = $.t('Public Library');
                            break;
                          default:
                            g in c._packagesWithTabNames &&
                              (C = c._packagesWithTabNames[C]);
                        }
                        C in u || (u[C] = []),
                          (u[C] = u[C].concat(v)),
                          (_ += v.length);
                      }
                    }
                    for (
                      A = this._selectedStudy
                        ? this._selectedStudy.data('study')
                        : null,
                        a.html(''),
                        w = Object.keys(u),
                        o = 0;
                      o < w.length;
                      ++o
                    )
                      if (
                        ((v = u[(C = w[o])]),
                        r.length &&
                          Array.prototype.sort.call(v, function (t, e) {
                            if (t.matchPriority < e.matchPriority) return 1;
                            if (t.matchPriority > e.matchPriority) return -1;
                            if (t.matchPriority === e.matchPriority)
                              switch (t.matchIndex) {
                                case void 0:
                                  return 0;
                                default:
                                  return t.matchIndex > e.matchIndex
                                    ? 1
                                    : t.matchIndex < e.matchIndex
                                    ? -1
                                    : 0;
                              }
                          }),
                        (P = this._createItemsGroup(
                          v,
                          this._options.minimized ? '' : $.t(C),
                          r,
                        )),
                        a.append(P),
                        (this._selectedStudy = null),
                        A && A.pine && A.pine.version < 0)
                      )
                        for (
                          I = this.currentPage().find('.js-study-item'), S = 0;
                          S < I.length;
                          ++S
                        )
                          if ((T = $(I[S])).data('study').id === A.id) {
                            (this._selectedStudy = T),
                              this._selectedStudy.addClass(
                                'tv-insert-study-item--selected',
                              );
                            break;
                          }
                    0 === _ &&
                      a.append(
                        '<p class="tv-insert-indicator-dialog__not-found-message">' +
                          $.t('No indicators matched your criteria.') +
                          '</p>',
                      );
                  }
                }.bind(this),
              )),
              i || this.selectPage('search');
          }),
          (a.prototype.updateSearchPage = function () {
            var t = this._search_input.val();
            this.search(t, !0, !0);
          }),
          (a.prototype.updateMarketPages = function () {}),
          (a.prototype.preparePageStudies = function (t, e, i, s) {
            t && (s || (e = this.sortStudies(e)), t.data('studies', e));
          }),
          (a.prototype.addPage = function (t, e) {
            var i, s, a, n;
            return (
              (i = (e = $.extend({}, e)).localizedTitle || $.t(t)),
              (s = t.toLowerCase()),
              (a = $('<div class="tv-insert-indicator-dialog__page">').data(
                'title',
                s,
              )),
              (n = $(
                '<div class="tv-insert-indicator-dialog__tab js-tab"></div>',
              )
                .text(i)
                .data('title', s)
                .attr('title', i)),
              a.data('fullTitle', i),
              n.toggleClass('tv-insert-indicator-dialog__tab--beta', !!e.beta),
              e.packageName && (this._packagesWithTabNames[e.packageName] = t),
              (this._pages[s] = a),
              (this._tabs[s] = n),
              e.withoutTopPadding &&
                a.addClass(
                  'tv-insert-indicator-dialog__page--without-top-padding',
                ),
              e.noFlex &&
                a.addClass('tv-insert-indicator-dialog__page--no-flex'),
              e.market
                ? (this._getOrCreateMarketTab()
                    .find('.tv-insert-indicator-dialog__tabs')
                    .append(n),
                  a.addClass('js-marketplace-page'))
                : this._w_market_tabs
                ? n.insertBefore(this._w_market_tabs)
                : this._w_tabs.append(n),
              this._w_pages.append(a),
              a.toggleClass('i-hidden', s !== this._currentPageTitle),
              a
            );
          }),
          (a.prototype._createGroupTab = function (t, e) {
            var i = $(s.render(A, { title: t }));
            return (
              i.find('.js-tab-head').on(
                'click',
                function () {
                  this._expandCollapseTabs(i, e);
                }.bind(this),
              ),
              this._expandCollapseTabs(i, e, p.getBool(e, !0), !0),
              i.data('settings-open-key', e),
              this._w_tabs.append(i),
              i
            );
          }),
          (a.prototype._getOrCreateMarketTab = function () {
            return (
              this._w_market_tabs ||
                (g.device === a._breakpointDevice &&
                  p.setValue('studyMarket.marketTabIsOpen', !1),
                (this._w_market_tabs = this._createGroupTab(
                  $.t('Marketplace Add-ons'),
                  'studyMarket.marketTabIsOpen',
                )),
                this._w_market_tabs.addClass(
                  'tv-insert-indicator-dialog__tabs-group--marketplace',
                )),
              this._w_market_tabs
            );
          }),
          (a.prototype._onDialogClosed = function () {
            this._keyDownListener.stopWatching(window),
              this._shortCutsLockId && S.enable(this._shortCutsLockId),
              null !== this._selectedStudy &&
                this._selectedStudy.removeClass(
                  'tv-insert-study-item--selected',
                ),
              (this._selectedStudy = null),
              this.visibilityChanged.fire(!1),
              v.removeListener('StudyMarketDialog');
          }),
          (a.prototype.hide = function () {
            this._dialog.close();
          }),
          (a.prototype.show = function (t) {
            return this.init().then(
              function () {
                var e = !1,
                  i = (t instanceof b && t) || null;
                i !== this._parentSource &&
                  ((this._parentSource = i),
                  (this._dialogTitleText = this._parentSource
                    ? $.t('Apply Indicator on {0}').format(
                        this._parentSource.title(!0),
                      )
                    : n.enabled('study_dialog_fundamentals_economy_addons')
                    ? $.t('Indicators & Strategies')
                    : $.t('Indicators')),
                  (e = !0)),
                  this._updateDialogTitleText(),
                  this._widget.on(
                    'keyup.hideDialogStudy',
                    function (t) {
                      t.which === f.ESC &&
                        (this._widget.unbind('keyup.hideDialogStudy'),
                        this.hide());
                    }.bind(this),
                  ),
                  this._clearInput(),
                  this.loadFavorites(),
                  e && this.resetAllPages(),
                  this._scroll.scrollTo(0),
                  this.visibilityChanged.fire(!0),
                  (this._shortCutsLockId = S.disable()),
                  this._keyDownListener.watchOn(window),
                  v.registerListener(
                    'StudyMarketDialog',
                    function (t) {
                      return (
                        !t.ctrlKey &&
                        47 !== t.which &&
                        !!t.charCode &&
                        !(!t.which || t.which <= 32) &&
                        !/^(input|textarea)$/i.test(t.target.tagName) &&
                        (t.preventDefault(),
                        !!(
                          TradingView.onWidget() ||
                          (this._options.minimized &&
                            !n.enabled('study_dialog_search_control'))
                        ) ||
                          (this._search_input.focus(),
                          (this._search_input[0].value = String.fromCharCode(
                            t.charCode,
                          )),
                          !0))
                      );
                    }.bind(this),
                  ),
                  this._dialog.open(),
                  o.emit('indicators_dialog');
              }.bind(this),
            );
          }),
          (a.prototype.isVisible = function () {
            return !!this._initialized && this._widget.is(':visible');
          }),
          (a.prototype.getPage = function (t) {
            return (t = t.toLowerCase()), this._pages[t];
          }),
          (a.prototype._showHideBackButton = function () {
            var t, e, i;
            this._dialog &&
              ((t = '' !== this._currentPageTitle),
              (e = this._options.minimized),
              (i = this._options.onWidget),
              this._dialog.$el
                .find('.js-title-container')
                .toggleClass('i-with-back-button', t && !e && !i));
          }),
          (a.prototype._renderPageStudiesList = function (t) {
            var e,
              i = this._selectedStudy
                ? this._selectedStudy.data('study')
                : null,
              s = t.data('studies') || [];
            s.length > 0 &&
              (t.empty(),
              (e = this._createItemsList()),
              this.fillStudies(e, s, null, i && i.id),
              t.append(e));
          }),
          (a.prototype._renderStudiesPage = function (t, e) {
            (e || t.is(':empty')) && this._renderPageStudiesList(t);
          }),
          (a.prototype.selectPage = function (t) {
            var e,
              i,
              s,
              a,
              n,
              r,
              o = this;
            (t = t.toLowerCase()),
              this._currentPageTitle !== t &&
                ('' === t ||
                (t in this._pages &&
                  t in this._tabs &&
                  ('favorites' !== t || this.hasVisibleFavorites()))
                  ? ((i = (e =
                      this._currentPageTitle ||
                      Object.keys(this._pages).find(function (t) {
                        return (
                          t in o._pages && !o._pages[t].hasClass('i-hidden')
                        );
                      }))
                      ? this.getPage(e)
                      : void 0),
                    (s = this.getPage(t)) &&
                      (i &&
                        (i.addClass('i-hidden'),
                        this._tabs[e].removeClass('i-active')),
                      s.removeClass('i-hidden'),
                      this._tabs[t].addClass('i-active'),
                      s.trigger('show-page'),
                      0 !==
                        (a = this._tabs[t].parents(
                          '.tv-insert-indicator-dialog__tabs-group',
                        )).length &&
                        ((n = a.find('.js-tab-head')),
                        this._expandCollapseTabs(
                          a,
                          n.data('settings-open-key'),
                          !0,
                          !0,
                        ))),
                    (this._currentPageTitle = t),
                    this._w_pages.scrollTop(0),
                    p.setValue(this._PAGE_KEY, t),
                    this._selectedStudy &&
                      (this._selectedStudy.removeClass(
                        'tv-insert-study-item--selected',
                      ),
                      (this._selectedStudy = null)),
                    (r = '' !== this._currentPageTitle),
                    this._widget
                      .find('.js-tabs-viewport')
                      .toggleClass('i-active', !r),
                    this._w_pages.toggleClass('i-active', r),
                    this._showHideBackButton(),
                    r || this._search_input.blur(),
                    this._updateDialogTitleText())
                  : this.selectPage(this._BASIC_STUDIES_PAGE_NAME));
          }),
          (a.prototype.attachHandlers = function () {
            var t = Modernizr.mobiletouch ? 'touchend' : 'click',
              e = this;
            Modernizr.mobiletouch &&
              this._w_pages.on('touchstart', '.js-study-item', function (t) {
                e._touchStart = $.extend({}, t.originalEvent.touches[0]);
              }),
              this._w_tabs.on(
                'click',
                '.js-tab',
                this._onTabClicked.bind(this),
              ),
              n.enabled('items_favoriting') &&
                this._w_pages.on(
                  t,
                  '.js-favorite-icon',
                  this.toggleItem.bind(this),
                ),
              this._w_pages.on(t, '.js-study-item', function (t) {
                var i;
                (e._touchStart &&
                  ((i = e._w_pages.find('.tv-insert-study-item')[0]
                    .clientHeight),
                  Math.abs(
                    e._touchStart.screenY -
                      t.originalEvent.changedTouches[0].screenY,
                  ) > i)) ||
                  (e._selectedStudy &&
                    e._selectedStudy.removeClass(
                      'tv-insert-study-item--selected',
                    ),
                  (e._selectedStudy = $(t.target).closest('.js-study-item')),
                  e._selectedStudy.addClass('tv-insert-study-item--selected'),
                  e.insertThisStudy(e._selectedStudy));
              });
          }),
          (a.prototype._onTabClicked = function (t) {
            var e = $(t.currentTarget).data('title');
            e && 'search' !== e && this.selectPage(e), t.stopPropagation();
          }),
          (a.prototype._expandCollapseTabs = function (t, e, i, s) {
            var a,
              n = t.hasClass('i-dropped');
            if (void 0 === i) i = !t.hasClass('i-dropped');
            else if (n === i && !s) return;
            (a = t.find('.tv-insert-indicator-dialog__tabs')),
              t.toggleClass('i-dropped', !!i),
              s
                ? a.toggleClass('i-hidden', !i)
                : (a.removeClass('i-hidden'),
                  a.velocity(i ? 'slideDown' : 'slideUp', {
                    duration: _.dur / 2,
                    complete: function () {
                      p.setValue(e, i), this._scroll.updateScroll();
                    }.bind(this),
                  }));
          }),
          (a.prototype.toggleItem = function (t) {
            var e = $(t.target).closest('.js-study-item').data('study');
            return this.toggleFavorite(e.id), this.toggleEverywhere(e.id), !1;
          }),
          (a.prototype.toggleEverywhere = function (t) {
            var e = this,
              i = this.isFavorite(t);
            this._w_pages
              .find('.js-study-item')
              .filter(function (i, s) {
                var a = $(s).data('study');
                return !!a && e.favsModel.favId(a.id) === e.favsModel.favId(t);
              })
              .find('.js-favorite-icon')
              .toggleClass('i-starred', i)
              .attr('title', this.favTitle(i));
          }),
          (a.prototype.toggleFavorite = function (t) {
            this.favsModel.favorite(t);
          }),
          (a.prototype.isFavorite = function (t) {
            return this.favsModel.isFav(t);
          }),
          (a.prototype._getInviteOnlyStudies = function () {
            return new Promise(function (t, e) {
              t([]);
            });
          }),
          (a.prototype.resetInvitesOnlyPage = function () {
            var t = this;
            t._tabs.invitesonly &&
              (t._previousInviteOnlyStudiesIds &&
              0 !== t._previousInviteOnlyStudiesIds.length
                ? t._tabs.invitesonly.show()
                : t._tabs.invitesonly.hide()),
              t._getInviteOnlyStudies().then(
                function (e) {
                  (t._previousInviteOnlyStudies = e),
                    t.preparePageStudies(t._pages.invitesonly, e),
                    t._tabs.invitesonly &&
                      (e && 0 !== e.length
                        ? t._tabs.invitesonly.show()
                        : t._tabs.invitesonly.hide());
                },
                function () {
                  t.preparePageStudies(t._pages.invitesonly, []),
                    t._tabs.invitesonly && t._tabs.invitesonly.hide();
                },
              );
          }),
          (a.prototype.updateFavorites = function () {
            var t, e;
            this._w_pages &&
              ((t = this),
              (e = function () {
                var e,
                  i,
                  s,
                  n,
                  r,
                  o,
                  d,
                  h,
                  l = this.getVisibleFavorites(),
                  u = function () {
                    'favorites' === t._currentPageTitle &&
                      t.selectPage(
                        g.device === a._breakpointDevice
                          ? ''
                          : t._BASIC_STUDIES_PAGE_NAME,
                      ),
                      t._w_pages
                        .find('.js-favorite-icon')
                        .removeClass('i-starred'),
                      t._tabs && t._tabs.favorites && t._tabs.favorites.hide();
                  };
                if (t._tabs.favorites && 0 === l.length) u();
                else {
                  for (
                    e = $.Deferred(), i = [], s = [], n = 0;
                    n < l.length;
                    n++
                  )
                    if (
                      ((r = l[n]),
                      (o = this.getStudyPackageName(r)) !==
                        t._PUBLISHED_STUDIES_PACKAGE_NAME)
                    ) {
                      for (d = this._studies[o] || [], h = 0; h < d.length; h++)
                        if (
                          t.favsModel.favId(c(d[h].id)) === t.favsModel.favId(r)
                        ) {
                          i.push(d[h]);
                          break;
                        }
                    } else s.push(r);
                  (s.length && !this._options.minimized) || e.resolve(i),
                    e.done(
                      function (t) {
                        0 === t.length ? u() : this._tabs.favorites.show(),
                          (t = this._applyStrategiesFilter(t)),
                          this.preparePageStudies(this._pages.favorites, t),
                          this._renderStudiesPage(this._pages.favorites, !0),
                          this._w_pages
                            .find('.js-study-item')
                            .find('.js-favorite-icon')
                            .removeClass('i-starred'),
                          l.forEach(this.toggleEverywhere, this);
                      }.bind(this),
                    ),
                    i && 0 !== i.length && this._tabs.favorites.show();
                }
              }.bind(this)),
              this.studiesReady.isResolved() ? e() : this.studiesReady.done(e));
          }),
          (a.prototype.hasVisibleFavorites = function () {
            return !!this.getVisibleFavorites().length;
          }),
          (a.prototype.getVisibleFavorites = function () {
            return this.checkExcludePackageStudies(this.favsModel.favorites());
          }),
          (a.prototype.checkExcludePackageStudies = function (t) {
            return t.filter(function (t) {
              var e = this.getStudyPackageName(t);
              return (
                e === this._PUBLISHED_STUDIES_PACKAGE_NAME ||
                (!!(
                  this._studies &&
                  this._studies[e] &&
                  $.grep(this._studies[e], function (e) {
                    return e.id.indexOf(t) >= 0;
                  }).length > 0
                ) &&
                  (e === this._BASIC_STUDIES_PACKAGE_NAME ||
                    e === this._STANDARD_STUDIES_PACKAGE_NAME ||
                    e === this._CUSTOM_STUDIES_PACKAGE_NAME ||
                    e === this._SCRIPTING_PACKAGE_NAME ||
                    (pro.hasPackage(e) && e in this._studies)))
              );
            }, this);
          }),
          (a.prototype.sortStudies = function (t) {
            return t.sort(function (t, e) {
              return (t =
                t.scriptName || t.description_localized || t.description) >
                (e = e.scriptName || e.description_localized || e.description)
                ? 1
                : t < e
                ? -1
                : 0;
            });
          }),
          (a.prototype.fillStudies = function (t, e, i, s) {
            var a;
            t.empty(),
              e.forEach(function (e) {
                e
                  ? ((a = this.createStudyListItem(e, i)),
                    e.id === s &&
                      ((this._selectedStudy = a),
                      this._selectedStudy.addClass(
                        'tv-insert-study-item--selected',
                      )))
                  : ((a = document.createElement('div')).className =
                      'placeholder'),
                  t.append(a);
              }, this);
          }),
          (a.prototype.createStudyListItem = function (t, e) {
            var i,
              a,
              r,
              o,
              d,
              c,
              l,
              u,
              _,
              p,
              g,
              v,
              f,
              y,
              S,
              m,
              b,
              E,
              C,
              A,
              P,
              I,
              T,
              D,
              k,
              M,
              N = this._getScriptLocalizedName(t),
              x = this.isFavorite(t.id),
              U = [];
            if (e && N)
              for (
                i = [],
                  e instanceof RegExp
                    ? i.push({ re: e, fuzzyHighlight: !1 })
                    : $.isArray(e) && (i = e),
                  a = 0;
                a < i.length;
                a++
              )
                if (
                  ((r = i[a].fullMatch),
                  (o = i[a].reserveRe),
                  (d = i[a].re),
                  (r.lastIndex = 0),
                  (d.lastIndex = 0),
                  (c = r.exec(N))
                    ? (i[a].fuzzyHighlight = !1)
                    : (!(c = d.exec(N)) && o && (c = o.exec(N)),
                      (i[a].fuzzyHighlight = !0)),
                  c)
                )
                  if (i[a].fuzzyHighlight)
                    for (l = c.index, u = 1; u < c.length; u++)
                      (_ = c[u].length), u % 2 && (U[l] = !0), (l += _);
                  else for (p = 0; p < c[0].length; p++) U[c.index + p] = !0;
            return (
              (v = (g = TradingView.clean(N, !0)).replace(
                /./g,
                function (t, e) {
                  if (
                    ('<' === t
                      ? (t = '&lt;')
                      : '&' === t
                      ? (t = '&amp;')
                      : '"' === t && (t = '&quot;'),
                    U[e])
                  ) {
                    if (' ' === t || '-' === t || '/' === t)
                      return (U[e + 1] = !0), t;
                    t = '<span class="i-match">' + t + '</span>';
                  }
                  return t;
                },
              )),
              (f = !!t.pine),
              (y = this.getStudyPackageName(t.id)),
              (S = f && y === this._PUBLISHED_STUDIES_PACKAGE_NAME),
              (m = f && y === this._CUSTOM_STUDIES_PACKAGE_NAME),
              (b = f && y === this._STANDARD_STUDIES_PACKAGE_NAME),
              (E =
                f &&
                [
                  TVScript.Access.ACCESS_CLOSED_NEEDS_AUTH,
                  TVScript.Access.ACCESS_CLOSED_NO_AUTH,
                ].indexOf(t.pine.access) >= 0),
              (C =
                f &&
                TVScript.Access.ACCESS_CLOSED_NEEDS_AUTH === t.pine.access),
              (A = f && C && void 0 !== t.pine.userHaveAccess),
              (P = f && t.pine.userHaveAccess),
              (I = !!t.TVScriptSourceCode),
              (T = f && !b && !E && (m || S || I || (x && !!1))),
              (D = {
                closed: $.t(
                  'Invite-only script. Contact the author for more information.',
                ),
                open: $.t('Invite-only script. You have been granted access.'),
              }),
              (k = $(
                s.render(w, {
                  publishedOrUserScript: m || S,
                  title: v,
                  titleTooltip: TradingView.strip_tags(g),
                  isStrategy: h.isScriptStrategy(t),
                  isInviteOnly: C,
                  showAccessIcon: A,
                  accessIconClass: P
                    ? 'tv-insert-study-item__green-lock-icon'
                    : 'tv-insert-study-item__red-lock-icon',
                  accessTooltip: P ? D.open : D.closed,
                  author: t.author && t.author.username,
                  likes: t.agreeCount
                    ? t.agreeCount +
                      ' ' +
                      $.t('like', { plural: 'likes', count: t.agreeCount })
                    : '',
                  showMoreButton: !!t.imageUrl,
                  deleteButton: !t.imageUrl && m,
                  withFavorites:
                    n.enabled('items_favoriting') &&
                    !this._options.minimized &&
                    !this._options.onWidget,
                }),
              )),
              T ||
                k
                  .find('.js-show-source-btn')
                  .removeClass('js-show-source-btn')
                  .addClass('i-empty'),
              k.data('study', t),
              void 0 !== t.isCustomIndicator && k.addClass('custom-indicator'),
              n.enabled('items_favoriting') &&
                ((M = k.find('.js-favorite-icon')).toggleClass(
                  'i-starred',
                  !!x,
                ),
                M.attr('title', this.favTitle(!!x))),
              n.enabled('graying_disabled_tools_enabled') &&
                ChartApiInstance.studiesAccessController.isToolGrayed(
                  t.description,
                ) &&
                k.addClass('i-grayed'),
              k
            );
          }),
          (a.prototype.favTitle = function (t) {
            return t ? $.t('Remove from favorites') : $.t('Add to favorites');
          }),
          (a.prototype.insertThisStudy = function (t) {
            var e;
            if (!t.hasClass('placeholder'))
              return (
                (e = t.data('study')),
                function () {
                  n.enabled('graying_disabled_tools_enabled') &&
                  ChartApiInstance.studiesAccessController.isToolGrayed(
                    e.description,
                  )
                    ? o.emit('onGrayedObjectClicked', {
                        type: 'study',
                        name: e.description,
                      })
                    : (t.highlight(this.HIGHLIGHT_STUDY_NUM_FLICKS),
                      this._insertStudy(e));
                }.bind(this)(),
                !1
              );
          }),
          (a.prototype._insertStudy = function (t) {
            var e,
              i,
              s,
              a = t.id;
            if (b.isPointsBasedStudy(a))
              return (
                (e = b.lineToolNameForPointsBasedStudy(a)),
                void E.tool.setValue(e)
              );
            (i = this._chartWidgetCollection.activeChartWidget.value()) &&
              ((s = this._dialog.focus.bind(this._dialog)),
              i
                .insertStudy(a, this._parentSource, t.description)
                .then(s)
                .catch(s));
          }),
          (a.prototype.onPackagesUpdated = function () {
            var t = this._chartWidgetCollection.activeChartWidget.value();
            window.is_authenticated
              ? (t.onConnected().subscribe(this, this.update, !0),
                t.chartSession().isConnected().value() && reconnectChartApi(!0))
              : this.update();
          }),
          (a.prototype.update = function () {
            this.setUser(window.user),
              PublishedScript.cleanCache(),
              this.resetAllPages();
            var t = this;
            this.init().then(function () {
              t._renderMarketAddonPage(t.currentPage(), !0);
            });
          }),
          (a.prototype.getStudyList = function (t) {
            function e(t) {
              i.push(t);
            }
            var i, s;
            if (!this.studiesReady.isResolved()) return [];
            for (s in ((i = []), this._studies))
              (s === this._BASIC_STUDIES_PACKAGE_NAME || pro.hasPackage(s)) &&
                (this._studies[s].forEach(e), t && i.push({ separator: !0 }));
            return t && i.splice(i.length - 1, 1), i;
          }),
          (a.prototype.getStudyPackageName = function (t) {
            var e, i, s, a, n, r;
            if (t)
              return (i = 1 === (e = t.split('@')).length) ||
                (s = h.getPackageName(t)) === this._SCRIPTING_PACKAGE_NAME
                ? ((a = e[0]),
                  i || /^(Strategy)?Script\$/.test(a)
                    ? -1 !== (n = a.indexOf('_'))
                      ? ((r =
                          (s = a.substring(0, n)).indexOf('Script$') >= 0
                            ? s
                            : 'Script$' + s),
                        pro.getSuperProduct(r) || r)
                      : /USER;/.test(a)
                      ? this._CUSTOM_STUDIES_PACKAGE_NAME
                      : /PUB;/.test(a)
                      ? this._PUBLISHED_STUDIES_PACKAGE_NAME
                      : /STD;/.test(a)
                      ? this._STANDARD_STUDIES_PACKAGE_NAME
                      : a
                    : s)
                : s;
          }),
          (a.prototype.selectSearchPage = function () {
            this.selectPage('search'), this._clearInput();
          }),
          (a.prototype._insertStudyByShortDescription = function () {
            var t,
              e,
              i,
              s = this._search_value;
            for (
              s = s.trim(),
                t = this._studies[this._BASIC_STUDIES_PACKAGE_NAME],
                e = 0;
              e < t.length;
              e++
            )
              if (
                (i = t[e]).shortDescription &&
                i.shortDescription.toUpperCase() === s.toUpperCase()
              ) {
                this._insertStudy(i);
                break;
              }
          }),
          (a.prototype._clearInput = function () {
            this._search_input.val(''),
              'search' === this._currentPageTitle &&
                this._search_input.val('').trigger('input').focus();
          }),
          (a.prototype._getScriptType = function () {
            return 0;
          }),
          (a.prototype._getScriptLocalizedName = function (t) {
            return (
              t.description_localized ||
              $.t(t.scriptName || t.description || ' ', { context: 'study' })
            );
          }),
          (a.prototype._pubSearchEntryAlreadyLoaded = function (t) {
            var e = t.scriptIdPart.split(';')[1];
            return (
              !(this._pubSearchCache.indexOf(e) < 0) ||
              (this._pubSearchCache.push(e), !1)
            );
          }),
          (a.prototype._addPubSearchResult = function (t, e) {
            t.length &&
              (t.forEach(function (t) {
                this._pubSearchEntryAlreadyLoaded(t) ||
                  (this._pubSearchEntries.push(t),
                  this._pubSearchCount[t.scriptType]++);
              }, this),
              0 === e && (this._pubSearchCount[0] += t.length),
              this._pubSearchEntries.sort(function (t, e) {
                return e.agreeCount - t.agreeCount;
              }));
          }),
          (a.prototype._getPublicLibraryRequestParams = function (t) {
            var e = this._pubSearchCount[t],
              i = this._PUB_SEARCH_ENTRIES_ON_PAGE;
            return (
              e < this._PUB_SEARCH_ENTRIES_ON_PAGE &&
                (i = this._PUB_SEARCH_ENTRIES_ON_PAGE - e),
              { offset: e, count: i, type: t }
            );
          }),
          (t.exports.StudyMarketDialog = a);
      }.call(this, i('aIyQ'), i('OiQe')));
    },
    Ald9: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.939 95.939" width="95.939" height="95.939"><path d="M62.82 47.97l32.53-32.534a2 2 0 0 0 0-2.828L83.332.586a2 2 0 0 0-2.827 0L47.97 33.12 15.435.587c-.75-.75-2.078-.75-2.828 0L.587 12.607a2 2 0 0 0 0 2.83L33.12 47.97.588 80.504a2 2 0 0 0 0 2.828l12.02 12.02a1.997 1.997 0 0 0 2.83 0L47.97 62.818l32.535 32.535a2 2 0 0 0 2.827 0l12.02-12.02c.78-.783.78-2.05 0-2.83L62.82 47.97z"/></svg>';
    },
    EulZ: function (t, e, i) {},
    'G0+C': function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18px" height="18px"><path fill-rule="evenodd" d="M12.5 11h-.79l-.28-.27A6.47 6.47 0 0 0 13 6.5 6.5 6.5 0 1 0 6.5 13c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L17.49 16l-4.99-5zm-6 0C4.01 11 2 8.99 2 6.5S4.01 2 6.5 2 11 4.01 11 6.5 8.99 11 6.5 11z"/></svg>';
    },
    GWvR: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path d="M9.901 9.639c-.102-.797.218-1.775.77-2.356l1.438-1.527-2.07-.395c-.784-.142-1.615-.742-2.008-1.446L7.003 2.06 5.97 3.917c-.391.702-1.222 1.301-2 1.443l-2.08.396 1.44 1.526c.547.577.866 1.549.77 2.353l-.262 2.086 1.93-.897a2.95 2.95 0 0 1 1.233-.254c.44 0 .87.085 1.233.254l1.93.897-.263-2.082zm.992-.127l.458 3.624c.014.105-.006.16-.02.176-.028.03-.109.005-.182-.03L7.812 11.73a1.973 1.973 0 0 0-.811-.16c-.302 0-.59.057-.81.16l-3.338 1.552c-.118.056-.164.051-.182.03-.014-.016-.034-.07-.02-.178L3.11 9.51c.06-.503-.162-1.18-.505-1.54L.087 5.302c-.085-.091-.09-.148-.086-.158.003-.01.04-.053.16-.077l3.621-.689c.491-.09 1.069-.506 1.315-.948L7.004 0l1.902 3.43c.246.442.824.859 1.312.947l3.617.69c.123.024.162.068.164.077.003.01-.003.066-.089.157L11.4 7.97c-.348.367-.57 1.045-.506 1.543z"/></svg>';
    },
    HHbT: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path d="M10.893 9.512l.458 3.624c.014.105-.006.16-.02.176-.028.03-.109.005-.182-.03L7.812 11.73a1.973 1.973 0 0 0-.811-.16c-.302 0-.59.057-.81.16l-3.338 1.552c-.118.056-.164.051-.182.03-.014-.016-.034-.07-.02-.178L3.11 9.51c.06-.503-.162-1.18-.505-1.54L.087 5.302c-.085-.091-.09-.148-.086-.158.003-.01.04-.053.16-.077l3.621-.689c.491-.09 1.069-.506 1.315-.948L7.004 0l1.902 3.43c.246.442.824.859 1.312.947l3.617.69c.123.024.162.068.164.077.003.01-.003.066-.089.157L11.4 7.97c-.348.367-.57 1.045-.506 1.543z"/></svg>';
    },
    LiyS: function (t, e, i) {
      'use strict';
      var s, a, n, r, o, d, h, c, l, u, _;
      i.r(e),
        i.d(e, 'FavoriteScriptsModel', function () {
          return _;
        }),
        (s = i('Vdly')),
        (a = i('FBuY')),
        (n = i('cBZt')),
        (r = i('TcSq')),
        (o = i('aIyQ')),
        (d = i.n(o)),
        (h = i('ogJP')),
        (c = 'studyMarket.favorites'),
        (l = 'studyMarket.favorites.extra'),
        (u = null),
        (_ = (function () {
          function t() {
            var t = this;
            (this._previousFavorites = []),
              (this._favorites = []),
              (this._favoritesExtra = {}),
              (this._favoritesChanged = new d.a()),
              this.loadFavs(),
              a.TVXWindowEvents.on('StudyFavoritesChanged', function (e) {
                var i = JSON.parse(e);
                t._updateFavorites(i.favorites || []),
                  t._updateFavoritesExtra(i.favoritesExtra || {});
              }),
              window.loginStateChange.subscribe(null, function () {
                t.loadFavs();
              });
          }
          return (
            (t.prototype.loadFavs = function () {
              var t = s.getJSON(c, []),
                e = s.getJSON(l, {}),
                i = this._migrate(t, e);
              this._updateFavorites(i.favs),
                this._updateFavoritesExtra(i.favsExtra);
            }),
            (t.prototype.isFav = function (t) {
              0 === this._favorites.length && this.loadFavs();
              var e = this.favId(t);
              return -1 !== this._favorites.indexOf(e);
            }),
            (t.prototype.favorite = function (t, e) {
              var i, s, n, r;
              (0 !== this._favorites.length &&
                0 !== Object.keys(this._favoritesExtra).length) ||
                this.loadFavs(),
                (i = this.favId(t)),
                (s = this.favorites()),
                (n = this.favoritesExtra()),
                -1 !== (r = s.indexOf(i))
                  ? (s.splice(r, 1), delete n[i])
                  : (s.push(i), void 0 !== e && (n[i] = e)),
                this._updateFavorites(s),
                this._updateFavoritesExtra(n),
                this._saveFavs(s, n),
                a.TVXWindowEvents.emit(
                  'StudyFavoritesChanged',
                  JSON.stringify({ favorites: s, favoritesExtra: n }),
                );
            }),
            (t.prototype.favId = function (t) {
              return Object(r.extractPineId)(t) || Object(n.extractStudyId)(t);
            }),
            (t.prototype.previousFavorites = function () {
              return this._previousFavorites.slice();
            }),
            (t.prototype.favorites = function () {
              return this._favorites.slice();
            }),
            (t.prototype.favoritesExtra = function () {
              return Object.assign({}, this._favoritesExtra);
            }),
            (t.prototype.favoritesChanged = function () {
              return this._favoritesChanged;
            }),
            (t.getInstance = function () {
              return null === u && (u = new t()), u;
            }),
            (t.prototype._saveFavs = function (t, e) {
              s.setJSON(c, t), s.setJSON(l, e);
            }),
            (t.prototype._migrate = function (t, e) {
              var i,
                s,
                a = [],
                n = {};
              for (i = 0; i < t.length; i++)
                (s = this.favId(t[i])),
                  -1 === a.indexOf(s) && (a.push(s), (n[s] = e[t[i]]));
              return { favs: a, favsExtra: n };
            }),
            (t.prototype._updateFavorites = function (t) {
              Object(h.deepEquals)(this._favorites, t)[0] ||
                ((this._previousFavorites = this.favorites()),
                (this._favorites = t),
                this._favoritesChanged.fire(this.favorites()));
            }),
            (t.prototype._updateFavoritesExtra = function (t) {
              this._favoritesExtra = t;
            }),
            t
          );
        })());
    },
    MjtL: function (t, e) {
      t.exports =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8.5 1.5L3.5 7l5 5.5"/></svg>';
    },
    UIZs: function (t, e, i) {
      'use strict';
      function s(t, e, i) {
        e.toggleClass('i-hidden', '' === t.val()), i.fire(t.val());
      }
      function a(t) {
        var e,
          i,
          a,
          n = $(c);
        return (
          t.addClass && n.addClass(t.addClass),
          t.withoutControls && n.addClass('tv-search-row--without-controls'),
          (e = n.find('.js-input-control')),
          (i = n.find('.js-reset-button')),
          t.placeholder && e.attr('placeholder', t.placeholder),
          i[0].addEventListener('click', function () {
            e.val('').trigger('input').focus();
          }),
          (a = new r.a()),
          e.on('input propertychange', s.bind(null, e, i, a)),
          s(e, i, a),
          { $control: n, $input: e, inputChangedDelegate: a }
        );
      }
      var n, r, o, d, h, c;
      i.r(e),
        i.d(e, 'createSearchControl', function () {
          return a;
        }),
        (n = i('aIyQ')),
        (r = i.n(n)),
        (o = i('Ald9')),
        (d = i('G0+C')),
        (h = i('EulZ')),
        (c =
          '<div class="tv-search-row"><input class="tv-search-row__input js-input-control" type="text" name="q" value="" autocomplete="off"><span class="tv-search-row__input-reset i-hidden js-reset-button">' +
          o +
          '</span><span class="tv-search-row__search-icon">' +
          d +
          '</span></div>');
    },
    UgcK: function (t, e, i) {},
    'm/4m': function (t, e, i) {},
    pfXf: function (t, e, i) {
      'use strict';
      i('UgcK'),
        (function (t) {
          function e(t) {
            t.stop(!0),
              t.css('background-color', ''),
              t.removeData(o),
              t.removeData(d);
          }
          function i(i) {
            var a = i.data(o);
            a &&
              (!0 !== a
                ? --a
                  ? (s(i), i.data(o, a))
                  : (function (i) {
                      var s = i.data(d).complete;
                      e(i), s && t.isFunction(s) && s();
                    })(i)
                : s(i));
          }
          function s(t) {
            var e = t.css('background-color'),
              s = t.data(d),
              a = s.highlightColor || h,
              n = s.duration || c,
              r = s.easing || l;
            t.animate({ 'background-color': a }, n, r).animate(
              { 'background-color': e },
              n,
              r,
              i.bind(t, t),
            );
          }
          var a,
            n,
            r,
            o,
            d,
            h,
            c,
            l,
            u = !1,
            _ = document.body || document.documentElement,
            p = 'animation',
            g = 'Webkit Moz O ms Khtml'.split(' '),
            v = '';
          if ((void 0 !== _.style.animationName && (u = !0), !1 === u))
            for (a = 0; a < g.length; a++)
              if (void 0 !== _.style[g[a] + 'AnimationName']) {
                (v = g[a]),
                  (p = v + 'Animation'),
                  '-' + v.toLowerCase() + '-',
                  (u = !0);
                break;
              }
          (n = ['webkit', 'moz', 'MS', 'o', '']),
            (o = (r = 'flicker-') + 'enable'),
            (d = r + 'options'),
            (h = '#fbf8e9'),
            (c = 400),
            (l = 'swing'),
            (t.fn.highlight = function (i, a) {
              switch (i) {
                default:
                  return (
                    (i = void 0 === i || i),
                    this.each(function () {
                      var e;
                      u
                        ? ((i = !0 === i ? 'infinite' : i),
                          (function (t, e, i) {
                            for (var s = 0; s < n.length; s++)
                              n[s] || (e = e.toLowerCase()),
                                t.addEventListener(n[s] + e, i, !1);
                          })(this, 'AnimationEnd', function () {
                            this.style[p] = '';
                          }),
                          document
                            .getElementsByTagName('html')[0]
                            .classList.contains('theme-dark')
                            ? (this.style[p] =
                                'highlight-animation-theme-dark 0.4s ease-in-out ' +
                                i +
                                ' alternate')
                            : (this.style[p] =
                                'highlight-animation 0.4s ease-in-out ' +
                                i +
                                ' alternate'))
                        : ((e = t(this)).data(o, i),
                          e.data(d, t.extend({}, a || {})),
                          e.is(':animated') || s(e));
                    })
                  );
                case !1:
                  return this.each(function () {
                    u ? (this.style[p] = '') : e(t(this));
                  });
              }
            });
        })(jQuery);
    },
    'xUY+': function (t, e, i) {},
  },
]);
