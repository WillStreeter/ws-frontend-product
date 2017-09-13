"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var broker_publisher_1 = require("../../pubsub-broker/outlet/broker.publisher");
var ngrx_broker_consumer_1 = require("../consumers/ngrx.broker.consumer");
var NGRxBrokerRegistrationService = (function () {
    function NGRxBrokerRegistrationService(ngrxBrokerConsumer, brokerPublisher) {
        this.ngrxBrokerConsumer = ngrxBrokerConsumer;
        this.brokerPublisher = brokerPublisher;
        this.brokerPublisher.RegisterBrokerConsumer(this.ngrxBrokerConsumer);
    }
    return NGRxBrokerRegistrationService;
}());
NGRxBrokerRegistrationService.decorators = [
    { type: core_1.Injectable },
];
NGRxBrokerRegistrationService.ctorParameters = function () { return [
    { type: ngrx_broker_consumer_1.NGRxBrokerConsumer, },
    { type: broker_publisher_1.BrokerPublisher, },
]; };
exports.NGRxBrokerRegistrationService = NGRxBrokerRegistrationService;
//# sourceMappingURL=ngrx.broker.registration.service.js.map