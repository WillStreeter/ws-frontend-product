import * as i0 from './paginator.toolbar.component';
import * as i1 from '../../../business-layer/pubsub-broker/services/broker.dispatcher.service';
import * as i2 from './paginator.toolbar.component.ngfactory';
export function PaginatorToolbarComponentNgSummary() {
    return [{ summaryKind: 1, type: { reference: i0.PaginatorToolbarComponent, diDeps: [{ isAttribute: false,
                        isHost: false, isSelf: false, isSkipSelf: false, isOptional: false, token: { identifier: { reference: i1.BrokerDispatcherService } } }],
                lifecycleHooks: [0] }, isComponent: true, selector: 'paginator-toolbar', exportAs: null,
            inputs: {}, outputs: {}, hostListeners: {}, hostProperties: {}, hostAttributes: {}, providers: [],
            viewProviders: [], queries: [], viewQueries: [],
            entryComponents: [], changeDetection: 1, template: { animations: [],
                ngContentSelectors: [], encapsulation: 0 }, componentViewType: i2.View_PaginatorToolbarComponent_0,
            rendererType: i2.RenderType_PaginatorToolbarComponent, componentFactory: i2.PaginatorToolbarComponentNgFactory }];
}
