import * as i0 from '@angular/core';
import * as i1 from './brokerage.module';
import * as i2 from '@angular/common';
import * as i3 from '@ngrx/effects/src/bootstrap-listener';
import * as i4 from '@ngrx/router-store/src/router-store-module';
import * as i5 from '@ngrx/effects/src/effects-subscription';
import * as i6 from '@angular/router';
import * as i7 from '@ngrx/store/src/dispatcher';
import * as i8 from '@ngrx/store/src/store';
import * as i9 from './ngrx-stubs/broker.grid.store';
import * as i10 from '../pubsub-broker/services/broker.action.builder';
import * as i11 from './ngrx-stubs/broker.masthead.store';
import * as i12 from './ngrx-stubs/broker.paginator.store';
import * as i13 from './ngrx-stubs/broker.search.store';
import * as i14 from './consumers/ngrx.broker.consumer';
import * as i15 from '@angular/http';
import * as i16 from '@ngrx/store/src/ng2';
import * as i17 from '../../data-layer/ngrx-data/reducers/index';
import * as i18 from '@ngrx/store/src/reducer';
import * as i19 from '@ngrx/store/src/state';
import * as i20 from '@ngrx/effects/src/actions';
import * as i21 from '../../data-layer/ngrx-data/effects/error.effects';
import * as i22 from '../../data-layer/sorting-services/sorting.service';
import * as i23 from '../../data-layer/ngrx-data/effects/portal.effects';
import * as i24 from '../../data-layer/api-services/http.wrapper.service';
import * as i25 from '../../data-layer/api-services/garment.service';
import * as i26 from '../../data-layer/ngrx-data/effects/garment.effects';
import * as i27 from '@ngrx/effects/src/effects.module';
import * as i28 from '../../data-layer/ngrx-data/ngrx.data.module';
export const BrokerageModuleNgFactory = i0.ɵcmf(i1.BrokerageModule, [], (_l) => {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, (p0_0, p0_1, p1_0, p1_1, p1_2, p1_3) => {
            return [i3.runAfterBootstrapEffects(p0_0, p0_1), i4.setupRouterStore(p1_0, p1_1, p1_2, p1_3)];
        }, [i0.Injector, i5.EffectsSubscription, i6.Router, i2.Location, i7.Dispatcher,
            i8.Store]), i0.ɵmpd(4608, i9.BrokerGridStore, i9.BrokerGridStore, [i8.Store,
            i10.BrokerActionBuilder]), i0.ɵmpd(4608, i11.BrokerMastheadStore, i11.BrokerMastheadStore, [i8.Store, i10.BrokerActionBuilder]), i0.ɵmpd(4608, i12.BrokerPaginatorStore, i12.BrokerPaginatorStore, [i8.Store, i10.BrokerActionBuilder]), i0.ɵmpd(4608, i13.BrokerSearchStore, i13.BrokerSearchStore, [i8.Store, i10.BrokerActionBuilder]),
        i0.ɵmpd(4608, i14.NGRxBrokerConsumer, i14.NGRxBrokerConsumer, [i9.BrokerGridStore,
            i11.BrokerMastheadStore, i12.BrokerPaginatorStore, i13.BrokerSearchStore]),
        i0.ɵmpd(512, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(512, i15.HttpModule, i15.HttpModule, []), i0.ɵmpd(512, i6.RouterModule, i6.RouterModule, [[2, i6.ɵa], [2, i6.Router]]), i0.ɵmpd(512, i16.StoreModule, i16.StoreModule, []), i0.ɵmpd(512, i4.RouterStoreModule, i4.RouterStoreModule, []), i0.ɵmpd(512, i7.Dispatcher, i7.Dispatcher, []),
        i0.ɵmpd(256, i16._INITIAL_REDUCER, i17.reducer, []), i0.ɵmpd(1024, i16.INITIAL_REDUCER, i16._initialReducerFactory, [i16._INITIAL_REDUCER]),
        i0.ɵmpd(1024, i18.Reducer, i16._reducerFactory, [i7.Dispatcher, i16.INITIAL_REDUCER]),
        i0.ɵmpd(256, i16._INITIAL_STATE, undefined, []), i0.ɵmpd(1024, i16.INITIAL_STATE, i16._initialStateFactory, [i16._INITIAL_STATE, i16.INITIAL_REDUCER]),
        i0.ɵmpd(1024, i19.State, i16._stateFactory, [i16.INITIAL_STATE, i7.Dispatcher,
            i18.Reducer]), i0.ɵmpd(1024, i8.Store, i16._storeFactory, [i7.Dispatcher,
            i18.Reducer, i19.State]), i0.ɵmpd(512, i20.Actions, i20.Actions, [i7.Dispatcher]),
        i0.ɵmpd(512, i21.ErrorEffects, i21.ErrorEffects, [i20.Actions, i6.Router]), i0.ɵmpd(512, i22.SortingServices, i22.SortingServices, [i8.Store]), i0.ɵmpd(512, i23.PortalEffects, i23.PortalEffects, [i8.Store, i20.Actions, i22.SortingServices]), i0.ɵmpd(512, i15.BrowserXhr, i15.BrowserXhr, []), i0.ɵmpd(512, i15.ResponseOptions, i15.BaseResponseOptions, []), i0.ɵmpd(1024, i15.XSRFStrategy, i15.ɵb, []), i0.ɵmpd(512, i15.XHRBackend, i15.XHRBackend, [i15.BrowserXhr,
            i15.ResponseOptions, i15.XSRFStrategy]), i0.ɵmpd(512, i15.RequestOptions, i15.BaseRequestOptions, []), i0.ɵmpd(1024, i15.Http, i15.ɵc, [i15.XHRBackend,
            i15.RequestOptions]), i0.ɵmpd(512, i24.HttpWrapperService, i24.HttpWrapperService, [i15.Http]), i0.ɵmpd(512, i25.GarmentService, i25.GarmentService, [i24.HttpWrapperService]),
        i0.ɵmpd(512, i26.GarmentEffects, i26.GarmentEffects, [i8.Store, i25.GarmentService,
            i22.SortingServices, i20.Actions]), i0.ɵmpd(1024, i5.effects, (p0_0, p1_0, p2_0) => {
            return [p0_0, p1_0, p2_0];
        }, [i21.ErrorEffects, i23.PortalEffects, i26.GarmentEffects]), i0.ɵmpd(131584, i5.EffectsSubscription, i5.EffectsSubscription, [i8.Store, [3, i5.EffectsSubscription],
            [2, i5.effects]]), i0.ɵmpd(512, i27.EffectsModule, i27.EffectsModule, [i5.EffectsSubscription]), i0.ɵmpd(512, i28.NGRxDataModule, i28.NGRxDataModule, [[3, i28.NGRxDataModule]]), i0.ɵmpd(512, i1.BrokerageModule, i1.BrokerageModule, [[3, i1.BrokerageModule]])]);
});
