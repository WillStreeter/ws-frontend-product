"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var broker_publisher_1 = require("../outlet/broker.publisher");
var BrokerDispatcherService = (function () {
    function BrokerDispatcherService(brokerPublisher) {
        this.brokerPublisher = brokerPublisher;
    }
    BrokerDispatcherService.prototype.dispatchBrokerAction = function (brokerAction) {
        this.brokerPublisher.NotifyBrokerActionConsumers(brokerAction);
    };
    BrokerDispatcherService.prototype.dispatchBrokerSelector = function (brokerType) {
        return this.brokerPublisher.NotifyBrokerSelectorConsumer(brokerType);
    };
    return BrokerDispatcherService;
}());
BrokerDispatcherService.decorators = [
    { type: core_1.Injectable },
];
BrokerDispatcherService.ctorParameters = function () { return [
    { type: broker_publisher_1.BrokerPublisher, },
]; };
exports.BrokerDispatcherService = BrokerDispatcherService;
//# sourceMappingURL=broker.dispatcher.service.js.map