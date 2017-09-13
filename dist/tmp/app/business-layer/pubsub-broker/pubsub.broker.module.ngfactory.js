import * as i0 from '@angular/core';
import * as i1 from './pubsub.broker.module';
import * as i2 from '@angular/common';
import * as i3 from './services/broker.action.builder';
import * as i4 from './outlet/broker.publisher';
import * as i5 from './services/broker.dispatcher.service';
export const PubSubBrokerModuleNgFactory = i0.ɵcmf(i1.PubSubBrokerModule, [], (_l) => {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(4608, i3.BrokerActionBuilder, i3.BrokerActionBuilder, []), i0.ɵmpd(4608, i4.BrokerPublisher, i4.BrokerPublisher, []), i0.ɵmpd(4608, i5.BrokerDispatcherService, i5.BrokerDispatcherService, [i4.BrokerPublisher]), i0.ɵmpd(512, i2.CommonModule, i2.CommonModule, []),
        i0.ɵmpd(512, i1.PubSubBrokerModule, i1.PubSubBrokerModule, [[3, i1.PubSubBrokerModule]])]);
});
