import * as i0 from '@angular/core';
import * as i1 from './app.stage.module';
import * as i2 from './app.stage.component';
import * as i3 from '../view-layer/modules-by-route/home/home.component.ngfactory';
import * as i4 from '../../node_modules/@angular/material/typings/index.ngfactory';
import * as i5 from '../view-layer/modules-by-route/notfound/notfound.page.component.ngfactory';
import * as i6 from './app.stage.component.ngfactory';
import * as i7 from '@angular/common';
import * as i8 from '@angular/platform-browser';
import * as i9 from '@angular/material';
import * as i10 from '@angular/animations/browser';
import * as i11 from '@angular/platform-browser/animations';
import * as i12 from '@angular/animations';
import * as i13 from '@angular/forms';
import * as i14 from '@angular/http';
import * as i15 from '@angular/router';
import * as i16 from '@ngrx/effects/src/bootstrap-listener';
import * as i17 from '@ngrx/router-store/src/router-store-module';
import * as i18 from '@ngrx/effects/src/effects-subscription';
import * as i19 from '@ngrx/store/src/dispatcher';
import * as i20 from '@ngrx/store/src/store';
import * as i21 from '../business-layer/pubsub-broker/services/broker.dispatcher.service';
import * as i22 from '../business-layer/pubsub-broker/outlet/broker.publisher';
import * as i23 from '@angular/flex-layout/media-query/match-media';
import * as i24 from '@angular/flex-layout/media-query/breakpoints/break-point-registry';
import * as i25 from '@angular/flex-layout/media-query/breakpoints/break-points';
import * as i26 from '@angular/flex-layout/media-query/media-monitor';
import * as i27 from '@angular/flex-layout/media-query/observable-media-service';
import * as i28 from '../business-layer/validators/services/validation.service';
import * as i29 from '../view-layer/modules-by-route/home/home.component';
import * as i30 from '../view-layer/modules-by-route/notfound/notfound.page.component';
import * as i31 from '@ngrx/store/src/ng2';
import * as i32 from '../data-layer/ngrx-data/reducers/index';
import * as i33 from '@ngrx/store/src/reducer';
import * as i34 from '@ngrx/store/src/state';
import * as i35 from '@ngrx/effects/src/actions';
import * as i36 from '../data-layer/ngrx-data/effects/error.effects';
import * as i37 from '../data-layer/sorting-services/sorting.service';
import * as i38 from '../data-layer/ngrx-data/effects/portal.effects';
import * as i39 from '@angular/http/testing';
import * as i40 from '../shared-utils/dev-mocked-backend/fake-backend';
import * as i41 from '../data-layer/api-services/http.wrapper.service';
import * as i42 from '../data-layer/api-services/garment.service';
import * as i43 from '../data-layer/ngrx-data/effects/garment.effects';
import * as i44 from '@ngrx/effects/src/effects.module';
import * as i45 from '../data-layer/ngrx-data/ngrx.data.module';
import * as i46 from '../business-layer/pubsub-broker/pubsub.broker.module';
import * as i47 from '../business-layer/brokerage/brokerage.module';
import * as i48 from './app.stage.routing.module';
import * as i49 from '../view-layer/modules-by-route/home/home.routing.module';
import * as i50 from '@angular/flex-layout/media-query/_module';
import * as i51 from '@angular/flex-layout/flexbox/_module';
import * as i52 from '../view-layer/common-views/grid-masthead/grid.masthead.module';
import * as i53 from '../view-layer/common-views/search-ahead/search.ahead.module';
import * as i54 from '../view-layer/common-views/garmentGrid/garment.grid.module';
import * as i55 from '../view-layer/common-views/paginator-toolbar/paginator.toolbar.module';
import * as i56 from '../view-layer/modules-by-route/home/home.module';
import * as i57 from '../view-layer/modules-by-route/notfound/notfound.page.routing.module';
import * as i58 from '../view-layer/modules-by-route/notfound/notfound.page.module';
import * as i59 from '../business-layer/pubsub-broker/services/broker.action.builder';
import * as i60 from '../business-layer/brokerage/ngrx-stubs/broker.grid.store';
import * as i61 from '../business-layer/brokerage/ngrx-stubs/broker.masthead.store';
import * as i62 from '../business-layer/brokerage/ngrx-stubs/broker.paginator.store';
import * as i63 from '../business-layer/brokerage/ngrx-stubs/broker.search.store';
import * as i64 from '../business-layer/brokerage/consumers/ngrx.broker.consumer';
import * as i65 from '../business-layer/brokerage/registries/ngrx.broker.registration.service';
export const AppStageModuleNgFactory = i0.ɵcmf(i1.AppStageModule, [i2.AppStageComponent], (_l) => {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.HomeComponentNgFactory, i4.MdDialogContainerNgFactory, i4.MdDatepickerContentNgFactory,
                    i4.MdSnackBarContainerNgFactory, i4.SimpleSnackBarNgFactory, i4.TooltipComponentNgFactory,
                    i5.NotfoundPageComponentNgFactory, i6.AppStageComponentNgFactory]], [3,
                i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵm, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i7.NgLocalization, i7.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(5120, i0.APP_ID, i0.ɵf, []), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵk, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵl, []), i0.ɵmpd(4608, i8.DomSanitizer, i8.ɵe, [i7.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i8.DomSanitizer]), i0.ɵmpd(4608, i8.HAMMER_GESTURE_CONFIG, i9.GestureConfig, []), i0.ɵmpd(5120, i8.EVENT_MANAGER_PLUGINS, (p0_0, p1_0, p2_0, p2_1) => {
            return [new i8.ɵDomEventsPlugin(p0_0), new i8.ɵKeyEventsPlugin(p1_0), new i8.ɵHammerGesturesPlugin(p2_0, p2_1)];
        }, [i7.DOCUMENT, i7.DOCUMENT, i7.DOCUMENT, i8.HAMMER_GESTURE_CONFIG]), i0.ɵmpd(4608, i8.EventManager, i8.EventManager, [i8.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i8.ɵDomSharedStylesHost, i8.ɵDomSharedStylesHost, [i7.DOCUMENT]), i0.ɵmpd(4608, i8.ɵDomRendererFactory2, i8.ɵDomRendererFactory2, [i8.EventManager, i8.ɵDomSharedStylesHost]),
        i0.ɵmpd(5120, i10.AnimationDriver, i11.ɵc, []), i0.ɵmpd(5120, i10.ɵAnimationStyleNormalizer, i11.ɵd, []), i0.ɵmpd(4608, i10.ɵAnimationEngine, i11.ɵb, [i10.AnimationDriver,
            i10.ɵAnimationStyleNormalizer]), i0.ɵmpd(5120, i0.RendererFactory2, i11.ɵe, [i8.ɵDomRendererFactory2, i10.ɵAnimationEngine, i0.NgZone]), i0.ɵmpd(6144, i8.ɵSharedStylesHost, null, [i8.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i0.Testability, i0.Testability, [i0.NgZone]), i0.ɵmpd(4608, i8.Meta, i8.Meta, [i7.DOCUMENT]), i0.ɵmpd(4608, i8.Title, i8.Title, [i7.DOCUMENT]), i0.ɵmpd(4608, i12.AnimationBuilder, i11.ɵBrowserAnimationBuilder, [i0.RendererFactory2,
            i8.DOCUMENT]), i0.ɵmpd(4608, i13.ɵi, i13.ɵi, []), i0.ɵmpd(4608, i13.FormBuilder, i13.FormBuilder, []), i0.ɵmpd(4608, i14.RequestOptions, i14.BaseRequestOptions, []), i0.ɵmpd(5120, i15.ROUTER_INITIALIZER, i15.ɵi, [i15.ɵg]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, (p0_0, p0_1, p1_0, p1_1, p1_2, p1_3, p2_0) => {
            return [i16.runAfterBootstrapEffects(p0_0, p0_1), i17.setupRouterStore(p1_0, p1_1, p1_2, p1_3), p2_0];
        }, [i0.Injector, i18.EffectsSubscription, i15.Router, i7.Location, i19.Dispatcher,
            i20.Store, i15.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i21.BrokerDispatcherService, i21.BrokerDispatcherService, [i22.BrokerPublisher]), i0.ɵmpd(5120, i15.ActivatedRoute, i15.ɵf, [i15.Router]), i0.ɵmpd(4608, i15.NoPreloading, i15.NoPreloading, []), i0.ɵmpd(6144, i15.PreloadingStrategy, null, [i15.NoPreloading]),
        i0.ɵmpd(135680, i15.RouterPreloader, i15.RouterPreloader, [i15.Router, i0.NgModuleFactoryLoader,
            i0.Compiler, i0.Injector, i15.PreloadingStrategy]), i0.ɵmpd(4608, i15.PreloadAllModules, i15.PreloadAllModules, []), i0.ɵmpd(4608, i9.Platform, i9.Platform, []), i0.ɵmpd(5120, i9.ScrollDispatcher, i9.ɵd, [[3, i9.ScrollDispatcher],
            i0.NgZone, i9.Platform]), i0.ɵmpd(5120, i9.ɵo, i9.ɵp, [[3, i9.ɵo], i9.ScrollDispatcher]),
        i0.ɵmpd(5120, i9.OverlayContainer, i9.ɵb, [[3, i9.OverlayContainer]]), i0.ɵmpd(4608, i9.ɵr, i9.ɵr, [i9.ɵo]), i0.ɵmpd(4608, i9.Overlay, i9.Overlay, [i9.OverlayContainer,
            i0.ComponentFactoryResolver, i9.ɵr, i0.ApplicationRef, i0.Injector, i0.NgZone]),
        i0.ɵmpd(5120, i9.FocusOriginMonitor, i9.FOCUS_ORIGIN_MONITOR_PROVIDER_FACTORY, [[3, i9.FocusOriginMonitor], i0.NgZone, i9.Platform]), i0.ɵmpd(5120, i9.UniqueSelectionDispatcher, i9.ɵh, [[3, i9.UniqueSelectionDispatcher]]), i0.ɵmpd(4608, i9.InteractivityChecker, i9.InteractivityChecker, [i9.Platform]), i0.ɵmpd(4608, i9.FocusTrapFactory, i9.FocusTrapFactory, [i9.InteractivityChecker, i0.NgZone]), i0.ɵmpd(5120, i9.LiveAnnouncer, i9.ɵg, [[3, i9.LiveAnnouncer], [2, i9.LIVE_ANNOUNCER_ELEMENT_TOKEN],
            i9.Platform]), i0.ɵmpd(4608, i9.MdDialog, i9.MdDialog, [i9.Overlay, i0.Injector,
            [2, i7.Location], [3, i9.MdDialog]]), i0.ɵmpd(4608, i9.MdDatepickerIntl, i9.MdDatepickerIntl, []), i0.ɵmpd(5120, i9.MdIconRegistry, i9.ICON_REGISTRY_PROVIDER_FACTORY, [[3, i9.MdIconRegistry], [2, i14.Http], i8.DomSanitizer]), i0.ɵmpd(4608, i9.MdSnackBar, i9.MdSnackBar, [i9.Overlay, i9.LiveAnnouncer, [3, i9.MdSnackBar]]), i0.ɵmpd(4608, i9.ɵa, i9.ɵa, []), i0.ɵmpd(4608, i23.MatchMedia, i23.MatchMedia, [i0.NgZone]), i0.ɵmpd(4608, i24.BreakPointRegistry, i24.BreakPointRegistry, [i25.BREAKPOINTS]), i0.ɵmpd(4608, i26.MediaMonitor, i26.MediaMonitor, [i24.BreakPointRegistry,
            i23.MatchMedia]), i0.ɵmpd(4608, i27.ObservableMedia, i27.MediaService, [i23.MatchMedia,
            i24.BreakPointRegistry]), i0.ɵmpd(4608, i28.ValidationService, i28.ValidationService, []), i0.ɵmpd(512, i7.CommonModule, i7.CommonModule, []),
        i0.ɵmpd(1024, i0.ErrorHandler, i8.ɵa, []), i0.ɵmpd(1024, i0.NgProbeToken, () => {
            return [i15.ɵb()];
        }, []), i0.ɵmpd(512, i15.ɵg, i15.ɵg, [i0.Injector]), i0.ɵmpd(1024, i0.APP_INITIALIZER, (p0_0, p0_1, p1_0) => {
            return [i8.ɵc(p0_0, p0_1), i15.ɵh(p1_0)];
        }, [[2, i8.NgProbeToken], [2, i0.NgProbeToken], i15.ɵg]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ɵe, i0.ɵe, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver,
            i0.ApplicationInitStatus]), i0.ɵmpd(2048, i0.ApplicationRef, null, [i0.ɵe]), i0.ɵmpd(512, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]),
        i0.ɵmpd(512, i8.BrowserModule, i8.BrowserModule, [[3, i8.BrowserModule]]), i0.ɵmpd(512, i11.BrowserAnimationsModule, i11.BrowserAnimationsModule, []),
        i0.ɵmpd(512, i13.ɵba, i13.ɵba, []), i0.ɵmpd(512, i13.FormsModule, i13.FormsModule, []), i0.ɵmpd(512, i13.ReactiveFormsModule, i13.ReactiveFormsModule, []), i0.ɵmpd(512, i14.HttpModule, i14.HttpModule, []),
        i0.ɵmpd(1024, i15.ɵa, i15.ɵd, [[3, i15.Router]]), i0.ɵmpd(512, i15.UrlSerializer, i15.DefaultUrlSerializer, []), i0.ɵmpd(512, i15.ChildrenOutletContexts, i15.ChildrenOutletContexts, []), i0.ɵmpd(256, i7.APP_BASE_HREF, '/', []), i0.ɵmpd(256, i15.ROUTER_CONFIGURATION, { useHash: true }, []), i0.ɵmpd(1024, i7.LocationStrategy, i15.ɵc, [i7.PlatformLocation, [2, i7.APP_BASE_HREF], i15.ROUTER_CONFIGURATION]),
        i0.ɵmpd(512, i7.Location, i7.Location, [i7.LocationStrategy]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i0.SystemJsNgModuleLoader, [i0.Compiler, [2, i0.SystemJsNgModuleLoaderConfig]]), i0.ɵmpd(1024, i15.ROUTES, () => {
            return [[{ path: '', loadChildren: 'app/view-layer/modules-by-route/home/home.module#HomeModule' },
                    { path: 'error', loadChildren: 'app/view-layer/modules-by-route/notfound/notfound.page.module#NotfoundPageModule' }],
                [{ path: '', component: i29.HomeComponent }], [{ path: '**', component: i30.NotfoundPageComponent }]];
        }, []), i0.ɵmpd(1024, i15.Router, i15.ɵe, [i0.ApplicationRef, i15.UrlSerializer,
            i15.ChildrenOutletContexts, i7.Location, i0.Injector, i0.NgModuleFactoryLoader,
            i0.Compiler, i15.ROUTES, i15.ROUTER_CONFIGURATION, [2, i15.UrlHandlingStrategy],
            [2, i15.RouteReuseStrategy]]), i0.ɵmpd(512, i15.RouterModule, i15.RouterModule, [[2, i15.ɵa], [2, i15.Router]]), i0.ɵmpd(512, i31.StoreModule, i31.StoreModule, []), i0.ɵmpd(512, i17.RouterStoreModule, i17.RouterStoreModule, []), i0.ɵmpd(512, i19.Dispatcher, i19.Dispatcher, []),
        i0.ɵmpd(256, i31._INITIAL_REDUCER, i32.reducer, []), i0.ɵmpd(1024, i31.INITIAL_REDUCER, i31._initialReducerFactory, [i31._INITIAL_REDUCER]),
        i0.ɵmpd(1024, i33.Reducer, i31._reducerFactory, [i19.Dispatcher, i31.INITIAL_REDUCER]),
        i0.ɵmpd(256, i31._INITIAL_STATE, undefined, []), i0.ɵmpd(1024, i31.INITIAL_STATE, i31._initialStateFactory, [i31._INITIAL_STATE, i31.INITIAL_REDUCER]),
        i0.ɵmpd(1024, i34.State, i31._stateFactory, [i31.INITIAL_STATE, i19.Dispatcher,
            i33.Reducer]), i0.ɵmpd(1024, i20.Store, i31._storeFactory, [i19.Dispatcher,
            i33.Reducer, i34.State]), i0.ɵmpd(512, i35.Actions, i35.Actions, [i19.Dispatcher]),
        i0.ɵmpd(512, i36.ErrorEffects, i36.ErrorEffects, [i35.Actions, i15.Router]),
        i0.ɵmpd(512, i37.SortingServices, i37.SortingServices, [i20.Store]), i0.ɵmpd(512, i38.PortalEffects, i38.PortalEffects, [i20.Store, i35.Actions, i37.SortingServices]),
        i0.ɵmpd(512, i39.MockBackend, i39.MockBackend, []), i0.ɵmpd(512, i14.BaseRequestOptions, i14.BaseRequestOptions, []), i0.ɵmpd(512, i14.BrowserXhr, i14.BrowserXhr, []), i0.ɵmpd(512, i14.ResponseOptions, i14.BaseResponseOptions, []), i0.ɵmpd(1024, i14.XSRFStrategy, i14.ɵb, []), i0.ɵmpd(512, i14.XHRBackend, i14.XHRBackend, [i14.BrowserXhr, i14.ResponseOptions, i14.XSRFStrategy]),
        i0.ɵmpd(1024, i14.Http, i40.fakeBackendFactory, [i39.MockBackend, i14.BaseRequestOptions,
            i14.XHRBackend]), i0.ɵmpd(512, i41.HttpWrapperService, i41.HttpWrapperService, [i14.Http]), i0.ɵmpd(512, i42.GarmentService, i42.GarmentService, [i41.HttpWrapperService]),
        i0.ɵmpd(512, i43.GarmentEffects, i43.GarmentEffects, [i20.Store, i42.GarmentService,
            i37.SortingServices, i35.Actions]), i0.ɵmpd(1024, i18.effects, (p0_0, p1_0, p2_0) => {
            return [p0_0, p1_0, p2_0];
        }, [i36.ErrorEffects, i38.PortalEffects, i43.GarmentEffects]), i0.ɵmpd(131584, i18.EffectsSubscription, i18.EffectsSubscription, [i20.Store, [3, i18.EffectsSubscription],
            [2, i18.effects]]), i0.ɵmpd(512, i44.EffectsModule, i44.EffectsModule, [i18.EffectsSubscription]), i0.ɵmpd(512, i45.NGRxDataModule, i45.NGRxDataModule, [[3, i45.NGRxDataModule]]), i0.ɵmpd(512, i46.PubSubBrokerModule, i46.PubSubBrokerModule, [[3, i46.PubSubBrokerModule]]), i0.ɵmpd(512, i47.BrokerageModule, i47.BrokerageModule, [[3, i47.BrokerageModule]]), i0.ɵmpd(512, i48.AppStageRoutingModule, i48.AppStageRoutingModule, []), i0.ɵmpd(512, i49.HomeRoutingModule, i49.HomeRoutingModule, []), i0.ɵmpd(256, i9.MATERIAL_SANITY_CHECKS, true, []),
        i0.ɵmpd(512, i9.CompatibilityModule, i9.CompatibilityModule, [[2, i8.DOCUMENT],
            [2, i9.MATERIAL_SANITY_CHECKS]]), i0.ɵmpd(512, i9.MdCommonModule, i9.MdCommonModule, []), i0.ɵmpd(512, i9.PlatformModule, i9.PlatformModule, []),
        i0.ɵmpd(512, i9.ɵm, i9.ɵm, []), i0.ɵmpd(512, i9.MdRippleModule, i9.MdRippleModule, []), i0.ɵmpd(512, i9.MdSelectionModule, i9.MdSelectionModule, []), i0.ɵmpd(512, i9.MdOptionModule, i9.MdOptionModule, []),
        i0.ɵmpd(512, i9.PortalModule, i9.PortalModule, []), i0.ɵmpd(512, i9.OverlayModule, i9.OverlayModule, []), i0.ɵmpd(512, i9.MdAutocompleteModule, i9.MdAutocompleteModule, []), i0.ɵmpd(512, i9.StyleModule, i9.StyleModule, []), i0.ɵmpd(512, i9.MdButtonModule, i9.MdButtonModule, []),
        i0.ɵmpd(512, i9.MdButtonToggleModule, i9.MdButtonToggleModule, []),
        i0.ɵmpd(512, i9.MdCardModule, i9.MdCardModule, []), i0.ɵmpd(512, i9.MdChipsModule, i9.MdChipsModule, []), i0.ɵmpd(512, i9.MdCheckboxModule, i9.MdCheckboxModule, []), i0.ɵmpd(512, i9.A11yModule, i9.A11yModule, []),
        i0.ɵmpd(512, i9.MdDialogModule, i9.MdDialogModule, []), i0.ɵmpd(512, i9.MdDatepickerModule, i9.MdDatepickerModule, []), i0.ɵmpd(512, i9.MdLineModule, i9.MdLineModule, []), i0.ɵmpd(512, i9.MdGridListModule, i9.MdGridListModule, []), i0.ɵmpd(512, i9.MdIconModule, i9.MdIconModule, []), i0.ɵmpd(512, i9.MdInputModule, i9.MdInputModule, []),
        i0.ɵmpd(512, i9.MdListModule, i9.MdListModule, []), i0.ɵmpd(512, i9.MdMenuModule, i9.MdMenuModule, []), i0.ɵmpd(512, i9.MdProgressBarModule, i9.MdProgressBarModule, []), i0.ɵmpd(512, i9.MdProgressSpinnerModule, i9.MdProgressSpinnerModule, []), i0.ɵmpd(512, i9.MdRadioModule, i9.MdRadioModule, []),
        i0.ɵmpd(512, i9.MdSelectModule, i9.MdSelectModule, []), i0.ɵmpd(512, i9.MdSidenavModule, i9.MdSidenavModule, []), i0.ɵmpd(512, i9.RtlModule, i9.RtlModule, []), i0.ɵmpd(512, i9.MdSliderModule, i9.MdSliderModule, []), i0.ɵmpd(512, i9.MdSlideToggleModule, i9.MdSlideToggleModule, []), i0.ɵmpd(512, i9.MdSnackBarModule, i9.MdSnackBarModule, []),
        i0.ɵmpd(512, i9.ObserveContentModule, i9.ObserveContentModule, []),
        i0.ɵmpd(512, i9.MdTabsModule, i9.MdTabsModule, []), i0.ɵmpd(512, i9.MdToolbarModule, i9.MdToolbarModule, []), i0.ɵmpd(512, i9.MdTooltipModule, i9.MdTooltipModule, []), i0.ɵmpd(512, i9.MaterialModule, i9.MaterialModule, []),
        i0.ɵmpd(512, i50.MediaQueriesModule, i50.MediaQueriesModule, []),
        i0.ɵmpd(512, i51.FlexLayoutModule, i51.FlexLayoutModule, []), i0.ɵmpd(512, i52.GridMastheadModule, i52.GridMastheadModule, []), i0.ɵmpd(512, i53.SearchAheadModule, i53.SearchAheadModule, []), i0.ɵmpd(512, i54.GarmentGridModule, i54.GarmentGridModule, []), i0.ɵmpd(512, i55.PaginatorToolbarModule, i55.PaginatorToolbarModule, []),
        i0.ɵmpd(512, i56.HomeModule, i56.HomeModule, []), i0.ɵmpd(512, i57.NotfoundPageRoutingModule, i57.NotfoundPageRoutingModule, []), i0.ɵmpd(512, i58.NotfoundPageModule, i58.NotfoundPageModule, []), i0.ɵmpd(512, i59.BrokerActionBuilder, i59.BrokerActionBuilder, []), i0.ɵmpd(512, i60.BrokerGridStore, i60.BrokerGridStore, [i20.Store, i59.BrokerActionBuilder]), i0.ɵmpd(512, i61.BrokerMastheadStore, i61.BrokerMastheadStore, [i20.Store, i59.BrokerActionBuilder]),
        i0.ɵmpd(512, i62.BrokerPaginatorStore, i62.BrokerPaginatorStore, [i20.Store,
            i59.BrokerActionBuilder]), i0.ɵmpd(512, i63.BrokerSearchStore, i63.BrokerSearchStore, [i20.Store, i59.BrokerActionBuilder]), i0.ɵmpd(512, i64.NGRxBrokerConsumer, i64.NGRxBrokerConsumer, [i60.BrokerGridStore, i61.BrokerMastheadStore,
            i62.BrokerPaginatorStore, i63.BrokerSearchStore]), i0.ɵmpd(512, i22.BrokerPublisher, i22.BrokerPublisher, []), i0.ɵmpd(512, i65.NGRxBrokerRegistrationService, i65.NGRxBrokerRegistrationService, [i64.NGRxBrokerConsumer, i22.BrokerPublisher]),
        i0.ɵmpd(512, i1.AppStageModule, i1.AppStageModule, [i65.NGRxBrokerRegistrationService]),
        i0.ɵmpd(256, i25.BREAKPOINTS, i25.RAW_DEFAULTS, [])]);
});
