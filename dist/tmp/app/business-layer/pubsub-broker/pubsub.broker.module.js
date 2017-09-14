"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var broker_action_builder_1 = require("./services/broker.action.builder");
var broker_dispatcher_service_1 = require("./services/broker.dispatcher.service");
var broker_publisher_1 = require("./outlet/broker.publisher");
var PubSubBrokerModule = PubSubBrokerModule_1 = (function () {
    function PubSubBrokerModule(parentModule) {
        if (parentModule) {
            throw new Error('PubSubBroker already loaded; Import in root module only.');
        }
    }
    PubSubBrokerModule.forRoot = function () {
        return {
            ngModule: PubSubBrokerModule_1,
            providers: [broker_action_builder_1.BrokerActionBuilder,
                broker_dispatcher_service_1.BrokerDispatcherService,
                broker_publisher_1.BrokerPublisher],
        };
    };
    return PubSubBrokerModule;
}());
PubSubBrokerModule = PubSubBrokerModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        providers: [broker_action_builder_1.BrokerActionBuilder,
            broker_dispatcher_service_1.BrokerDispatcherService,
            broker_publisher_1.BrokerPublisher]
    }),
    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
    __metadata("design:paramtypes", [PubSubBrokerModule])
], PubSubBrokerModule);
exports.PubSubBrokerModule = PubSubBrokerModule;
var PubSubBrokerModule_1;
