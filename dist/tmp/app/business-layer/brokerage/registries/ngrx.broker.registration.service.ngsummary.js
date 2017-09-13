import * as i0 from './ngrx.broker.registration.service';
import * as i1 from '../consumers/ngrx.broker.consumer';
import * as i2 from '../../pubsub-broker/outlet/broker.publisher';
export function NGRxBrokerRegistrationServiceNgSummary() {
    return [{ summaryKind: 3, type: { reference: i0.NGRxBrokerRegistrationService, diDeps: [{ isAttribute: false,
                        isHost: false, isSelf: false, isSkipSelf: false, isOptional: false, token: { identifier: { reference: i1.NGRxBrokerConsumer } } },
                    { isAttribute: false, isHost: false, isSelf: false, isSkipSelf: false, isOptional: false,
                        token: { identifier: { reference: i2.BrokerPublisher } } }], lifecycleHooks: [] } }];
}
