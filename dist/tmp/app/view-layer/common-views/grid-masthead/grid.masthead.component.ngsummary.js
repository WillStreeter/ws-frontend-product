import * as i0 from './grid.masthead.component';
import * as i1 from '../../../business-layer/pubsub-broker/services/broker.dispatcher.service';
import * as i2 from './grid.masthead.component.ngfactory';
export function GridMastheadComponentNgSummary() {
    return [{ summaryKind: 1, type: { reference: i0.GridMastheadComponent, diDeps: [{ isAttribute: false,
                        isHost: false, isSelf: false, isSkipSelf: false, isOptional: false, token: { identifier: { reference: i1.BrokerDispatcherService } } }],
                lifecycleHooks: [0] }, isComponent: true, selector: 'grid-masthead', exportAs: null,
            inputs: {}, outputs: {}, hostListeners: {}, hostProperties: {}, hostAttributes: {}, providers: [],
            viewProviders: [], queries: [], viewQueries: [],
            entryComponents: [], changeDetection: 1, template: { animations: [],
                ngContentSelectors: [], encapsulation: 0 }, componentViewType: i2.View_GridMastheadComponent_0,
            rendererType: i2.RenderType_GridMastheadComponent, componentFactory: i2.GridMastheadComponentNgFactory }];
}
