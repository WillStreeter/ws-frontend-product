"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var broker_action_builder_1 = require("./services/broker.action.builder");
var broker_dispatcher_service_1 = require("./services/broker.dispatcher.service");
var broker_publisher_1 = require("./outlet/broker.publisher");
var PubSubBrokerModule = (function () {
    function PubSubBrokerModule(parentModule) {
        if (parentModule) {
            throw new Error('PubSubBroker already loaded; Import in root module only.');
        }
    }
    PubSubBrokerModule.forRoot = function () {
        return {
            ngModule: PubSubBrokerModule,
            providers: [broker_action_builder_1.BrokerActionBuilder,
                broker_dispatcher_service_1.BrokerDispatcherService,
                broker_publisher_1.BrokerPublisher]
        };
    };
    return PubSubBrokerModule;
}());
PubSubBrokerModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [common_1.CommonModule],
                providers: [broker_action_builder_1.BrokerActionBuilder,
                    broker_dispatcher_service_1.BrokerDispatcherService,
                    broker_publisher_1.BrokerPublisher]
            },] },
];
PubSubBrokerModule.ctorParameters = function () { return [
    { type: PubSubBrokerModule, decorators: [{ type: core_1.Optional }, { type: core_1.SkipSelf },] },
]; };
exports.PubSubBrokerModule = PubSubBrokerModule;
//# sourceMappingURL=pubsub.broker.module.js.map