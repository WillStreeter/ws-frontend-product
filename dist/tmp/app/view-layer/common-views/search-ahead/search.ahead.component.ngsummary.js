import * as i0 from './search.ahead.component';
import * as i1 from '../../../business-layer/pubsub-broker/services/broker.dispatcher.service';
import * as i2 from './search.ahead.component.ngfactory';
export function SearchAheadComponentNgSummary() {
    return [{ summaryKind: 1, type: { reference: i0.SearchAheadComponent, diDeps: [{ isAttribute: false,
                        isHost: false, isSelf: false, isSkipSelf: false, isOptional: false, token: { identifier: { reference: i1.BrokerDispatcherService } } }],
                lifecycleHooks: [0, 6] }, isComponent: true, selector: 'search-ahead', exportAs: null,
            inputs: {}, outputs: {}, hostListeners: {}, hostProperties: {}, hostAttributes: {}, providers: [],
            viewProviders: [], queries: [], viewQueries: [{ selectors: [{ value: 'searchBox' }],
                    first: true, descendants: true, propertyName: 'input', read: null }], entryComponents: [],
            changeDetection: 1, template: { animations: [], ngContentSelectors: [],
                encapsulation: 0 }, componentViewType: i2.View_SearchAheadComponent_0, rendererType: i2.RenderType_SearchAheadComponent,
            componentFactory: i2.SearchAheadComponentNgFactory }];
}
