import * as i0 from './ngrx.broker.consumer';
import * as i1 from '../ngrx-stubs/broker.grid.store';
import * as i2 from '../ngrx-stubs/broker.masthead.store';
import * as i3 from '../ngrx-stubs/broker.paginator.store';
import * as i4 from '../ngrx-stubs/broker.search.store';
export function NGRxBrokerConsumerNgSummary() {
    return [{ summaryKind: 3, type: { reference: i0.NGRxBrokerConsumer, diDeps: [{ isAttribute: false,
                        isHost: false, isSelf: false, isSkipSelf: false, isOptional: false, token: { identifier: { reference: i1.BrokerGridStore } } },
                    { isAttribute: false, isHost: false, isSelf: false, isSkipSelf: false, isOptional: false,
                        token: { identifier: { reference: i2.BrokerMastheadStore } } }, { isAttribute: false,
                        isHost: false, isSelf: false, isSkipSelf: false, isOptional: false, token: { identifier: { reference: i3.BrokerPaginatorStore } } },
                    { isAttribute: false, isHost: false, isSelf: false, isSkipSelf: false, isOptional: false,
                        token: { identifier: { reference: i4.BrokerSearchStore } } }], lifecycleHooks: [] } }];
}
