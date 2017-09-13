import * as i0 from '@angular/core';
import * as i1 from './ngrx.data.module';
import * as i2 from '@angular/common';
import * as i3 from '@ngrx/effects/src/bootstrap-listener';
import * as i4 from '@ngrx/router-store/src/router-store-module';
import * as i5 from '@ngrx/effects/src/effects-subscription';
import * as i6 from '@angular/router';
import * as i7 from '@ngrx/store/src/dispatcher';
import * as i8 from '@ngrx/store/src/store';
import * as i9 from '@angular/http';
import * as i10 from '@ngrx/store/src/ng2';
import * as i11 from './reducers/index';
import * as i12 from '@ngrx/store/src/reducer';
import * as i13 from '@ngrx/store/src/state';
import * as i14 from '@ngrx/effects/src/actions';
import * as i15 from './effects/error.effects';
import * as i16 from '../sorting-services/sorting.service';
import * as i17 from './effects/portal.effects';
import * as i18 from '../api-services/http.wrapper.service';
import * as i19 from '../api-services/garment.service';
import * as i20 from './effects/garment.effects';
import * as i21 from '@ngrx/effects/src/effects.module';
export const NGRxDataModuleNgFactory = i0.ɵcmf(i1.NGRxDataModule, [], (_l) => {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, (p0_0, p0_1, p1_0, p1_1, p1_2, p1_3) => {
            return [i3.runAfterBootstrapEffects(p0_0, p0_1), i4.setupRouterStore(p1_0, p1_1, p1_2, p1_3)];
        }, [i0.Injector, i5.EffectsSubscription, i6.Router, i2.Location, i7.Dispatcher,
            i8.Store]), i0.ɵmpd(512, i2.CommonModule, i2.CommonModule, []),
        i0.ɵmpd(512, i9.HttpModule, i9.HttpModule, []), i0.ɵmpd(512, i6.RouterModule, i6.RouterModule, [[2, i6.ɵa], [2, i6.Router]]), i0.ɵmpd(512, i10.StoreModule, i10.StoreModule, []), i0.ɵmpd(512, i4.RouterStoreModule, i4.RouterStoreModule, []), i0.ɵmpd(512, i7.Dispatcher, i7.Dispatcher, []),
        i0.ɵmpd(256, i10._INITIAL_REDUCER, i11.reducer, []), i0.ɵmpd(1024, i10.INITIAL_REDUCER, i10._initialReducerFactory, [i10._INITIAL_REDUCER]),
        i0.ɵmpd(1024, i12.Reducer, i10._reducerFactory, [i7.Dispatcher, i10.INITIAL_REDUCER]),
        i0.ɵmpd(256, i10._INITIAL_STATE, undefined, []), i0.ɵmpd(1024, i10.INITIAL_STATE, i10._initialStateFactory, [i10._INITIAL_STATE, i10.INITIAL_REDUCER]),
        i0.ɵmpd(1024, i13.State, i10._stateFactory, [i10.INITIAL_STATE, i7.Dispatcher,
            i12.Reducer]), i0.ɵmpd(1024, i8.Store, i10._storeFactory, [i7.Dispatcher,
            i12.Reducer, i13.State]), i0.ɵmpd(512, i14.Actions, i14.Actions, [i7.Dispatcher]),
        i0.ɵmpd(512, i15.ErrorEffects, i15.ErrorEffects, [i14.Actions, i6.Router]), i0.ɵmpd(512, i16.SortingServices, i16.SortingServices, [i8.Store]), i0.ɵmpd(512, i17.PortalEffects, i17.PortalEffects, [i8.Store, i14.Actions, i16.SortingServices]), i0.ɵmpd(512, i9.BrowserXhr, i9.BrowserXhr, []), i0.ɵmpd(512, i9.ResponseOptions, i9.BaseResponseOptions, []), i0.ɵmpd(1024, i9.XSRFStrategy, i9.ɵb, []), i0.ɵmpd(512, i9.XHRBackend, i9.XHRBackend, [i9.BrowserXhr,
            i9.ResponseOptions, i9.XSRFStrategy]), i0.ɵmpd(512, i9.RequestOptions, i9.BaseRequestOptions, []), i0.ɵmpd(1024, i9.Http, i9.ɵc, [i9.XHRBackend, i9.RequestOptions]),
        i0.ɵmpd(512, i18.HttpWrapperService, i18.HttpWrapperService, [i9.Http]), i0.ɵmpd(512, i19.GarmentService, i19.GarmentService, [i18.HttpWrapperService]), i0.ɵmpd(512, i20.GarmentEffects, i20.GarmentEffects, [i8.Store, i19.GarmentService, i16.SortingServices,
            i14.Actions]), i0.ɵmpd(1024, i5.effects, (p0_0, p1_0, p2_0) => {
            return [p0_0, p1_0, p2_0];
        }, [i15.ErrorEffects, i17.PortalEffects, i20.GarmentEffects]), i0.ɵmpd(131584, i5.EffectsSubscription, i5.EffectsSubscription, [i8.Store, [3, i5.EffectsSubscription],
            [2, i5.effects]]), i0.ɵmpd(512, i21.EffectsModule, i21.EffectsModule, [i5.EffectsSubscription]), i0.ɵmpd(512, i1.NGRxDataModule, i1.NGRxDataModule, [[3, i1.NGRxDataModule]])]);
});
