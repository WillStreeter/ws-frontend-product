import * as i0 from './broker.paginator.store';
import * as i1 from '@ngrx/store/src/store';
import * as i2 from '../../pubsub-broker/services/broker.action.builder';
export function BrokerPaginatorStoreNgSummary() {
    return [{ summaryKind: 3, type: { reference: i0.BrokerPaginatorStore, diDeps: [{ isAttribute: false,
                        isHost: false, isSelf: false, isSkipSelf: false, isOptional: false, token: { identifier: { reference: i1.Store } } },
                    { isAttribute: false, isHost: false, isSelf: false, isSkipSelf: false, isOptional: false,
                        token: { identifier: { reference: i2.BrokerActionBuilder } } }], lifecycleHooks: [] } }];
}
