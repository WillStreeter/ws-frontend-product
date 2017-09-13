import * as i0 from './pubsub.broker.module';
import * as i1 from '@angular/common';
import * as i2 from '@angular/core';
import * as i3 from './services/broker.action.builder';
import * as i4 from './services/broker.dispatcher.service';
import * as i5 from './outlet/broker.publisher';
import * as i6 from '../../../node_modules/@angular/common/common.ngsummary';
export function PubSubBrokerModuleNgSummary() {
    return [{ summaryKind: 2, type: { reference: i0.PubSubBrokerModule, diDeps: [{ isAttribute: false,
                        isHost: false, isSelf: false, isSkipSelf: true, isOptional: true, token: { identifier: { reference: i0.PubSubBrokerModule } } }],
                lifecycleHooks: [] }, entryComponents: [], providers: [{ provider: { token: { identifier: { reference: i1.NgLocalization } },
                        useClass: { reference: i1.NgLocaleLocalization, diDeps: [{ isAttribute: false, isHost: false,
                                    isSelf: false, isSkipSelf: false, isOptional: false, token: { identifier: { reference: i2.LOCALE_ID } } }],
                            lifecycleHooks: [] }, useValue: undefined, useFactory: null,
                        useExisting: undefined, deps: [{ isAttribute: false, isHost: false, isSelf: false,
                                isSkipSelf: false, isOptional: false, token: { identifier: { reference: i2.LOCALE_ID } } }],
                        multi: false }, module: { reference: i1.CommonModule, diDeps: [], lifecycleHooks: [] } },
                { provider: { token: { identifier: { reference: i3.BrokerActionBuilder, diDeps: [],
                                lifecycleHooks: [] } }, useClass: { reference: i3.BrokerActionBuilder,
                            diDeps: [], lifecycleHooks: [] }, useValue: undefined,
                        useFactory: null, useExisting: undefined, deps: [],
                        multi: false }, module: { reference: i0.PubSubBrokerModule, diDeps: [{ isAttribute: false,
                                isHost: false, isSelf: false, isSkipSelf: true, isOptional: true, token: { identifier: { reference: i0.PubSubBrokerModule } } }],
                        lifecycleHooks: [] } }, { provider: { token: { identifier: { reference: i4.BrokerDispatcherService,
                                diDeps: [{ isAttribute: false, isHost: false, isSelf: false, isSkipSelf: false, isOptional: false,
                                        token: { identifier: { reference: i5.BrokerPublisher } } }], lifecycleHooks: [] } },
                        useClass: { reference: i4.BrokerDispatcherService, diDeps: [{ isAttribute: false,
                                    isHost: false, isSelf: false, isSkipSelf: false, isOptional: false, token: { identifier: { reference: i5.BrokerPublisher } } }],
                            lifecycleHooks: [] }, useValue: undefined, useFactory: null,
                        useExisting: undefined, deps: [{ isAttribute: false, isHost: false, isSelf: false,
                                isSkipSelf: false, isOptional: false, token: { identifier: { reference: i5.BrokerPublisher } } }],
                        multi: false }, module: { reference: i0.PubSubBrokerModule, diDeps: [{ isAttribute: false,
                                isHost: false, isSelf: false, isSkipSelf: true, isOptional: true, token: { identifier: { reference: i0.PubSubBrokerModule } } }],
                        lifecycleHooks: [] } }, { provider: { token: { identifier: { reference: i5.BrokerPublisher,
                                diDeps: [], lifecycleHooks: [] } }, useClass: { reference: i5.BrokerPublisher,
                            diDeps: [], lifecycleHooks: [] }, useValue: undefined,
                        useFactory: null, useExisting: undefined, deps: [],
                        multi: false }, module: { reference: i0.PubSubBrokerModule, diDeps: [{ isAttribute: false,
                                isHost: false, isSelf: false, isSkipSelf: true, isOptional: true, token: { identifier: { reference: i0.PubSubBrokerModule } } }],
                        lifecycleHooks: [] } }], modules: [{ reference: i1.CommonModule, diDeps: [],
                    lifecycleHooks: [] }, { reference: i0.PubSubBrokerModule, diDeps: [{ isAttribute: false,
                            isHost: false, isSelf: false, isSkipSelf: true, isOptional: true, token: { identifier: { reference: i0.PubSubBrokerModule } } }],
                    lifecycleHooks: [] }], exportedDirectives: [], exportedPipes: [] },
        i6.CommonModuleNgSummary, { summaryKind: 3, type: { reference: i3.BrokerActionBuilder,
                diDeps: [], lifecycleHooks: [] } }, { summaryKind: 3, type: { reference: i4.BrokerDispatcherService,
                diDeps: [{ isAttribute: false, isHost: false, isSelf: false, isSkipSelf: false, isOptional: false,
                        token: { identifier: { reference: i5.BrokerPublisher } } }], lifecycleHooks: [] } },
        { summaryKind: 3, type: { reference: i5.BrokerPublisher, diDeps: [], lifecycleHooks: [] } }];
}
