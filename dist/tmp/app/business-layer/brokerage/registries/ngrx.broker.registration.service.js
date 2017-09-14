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
NGRxBrokerRegistrationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ngrx_broker_consumer_1.NGRxBrokerConsumer,
        broker_publisher_1.BrokerPublisher])
], NGRxBrokerRegistrationService);
exports.NGRxBrokerRegistrationService = NGRxBrokerRegistrationService;
