import * as i0 from './garment.grid.component';
import * as i1 from '../../../business-layer/pubsub-broker/services/broker.dispatcher.service';
import * as i2 from './garment.grid.component.ngfactory';
export function GarmentGridComponentNgSummary() {
    return [{ summaryKind: 1, type: { reference: i0.GarmentGridComponent, diDeps: [{ isAttribute: false,
                        isHost: false, isSelf: false, isSkipSelf: false, isOptional: false, token: { identifier: { reference: i1.BrokerDispatcherService } } }],
                lifecycleHooks: [0] }, isComponent: true, selector: 'garment-grid', exportAs: null,
            inputs: {}, outputs: {}, hostListeners: {}, hostProperties: {}, hostAttributes: {}, providers: [],
            viewProviders: [], queries: [], viewQueries: [],
            entryComponents: [], changeDetection: 1, template: { animations: [],
                ngContentSelectors: [], encapsulation: 0 }, componentViewType: i2.View_GarmentGridComponent_0,
            rendererType: i2.RenderType_GarmentGridComponent, componentFactory: i2.GarmentGridComponentNgFactory }];
}
