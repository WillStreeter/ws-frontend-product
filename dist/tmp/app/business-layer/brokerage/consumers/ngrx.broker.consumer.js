var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { BrokerResponse } from "../../pubsub-broker/models/broker.response.model";
import { BrokerGridStore, BrokerMastheadStore, BrokerPaginatorStore, BrokerSearchStore } from "../ngrx-stubs/index";
let NGRxBrokerConsumer = class NGRxBrokerConsumer {
    constructor(brokerGridStore, brokerMastheadStore, brokerPaginatorStore, brokerSearchStore) {
        this.brokerGridStore = brokerGridStore;
        this.brokerMastheadStore = brokerMastheadStore;
        this.brokerPaginatorStore = brokerPaginatorStore;
        this.brokerSearchStore = brokerSearchStore;
    }
    ReceiveBrokerAction(brokerAction) {
        switch (brokerAction.brokerType) {
            case this.brokerGridStore.brokerLabel:
                this.brokerGridStore.dispatchAction(brokerAction);
                break;
            case this.brokerMastheadStore.brokerLabel:
                this.brokerMastheadStore.dispatchAction(brokerAction);
                break;
            case this.brokerPaginatorStore.brokerLabel:
                this.brokerPaginatorStore.dispatchAction(brokerAction);
                break;
            case this.brokerSearchStore.brokerLabel:
                this.brokerSearchStore.dispatchAction(brokerAction);
                break;
        }
    }
    ReceivedBrokerSelectorRequest(brokerType) {
        var brokerResponse = new BrokerResponse();
        switch (brokerType) {
            case this.brokerGridStore.brokerLabel:
                brokerResponse.brokerRequested = this.brokerGridStore.getComponentSupplies();
                break;
            case this.brokerMastheadStore.brokerLabel:
                brokerResponse.brokerRequested = this.brokerMastheadStore.getComponentSupplies();
                break;
            case this.brokerPaginatorStore.brokerLabel:
                brokerResponse.brokerRequested = this.brokerPaginatorStore.getComponentSupplies();
                break;
            case this.brokerSearchStore.brokerLabel:
                brokerResponse.brokerRequested = this.brokerSearchStore.getComponentSupplies();
                break;
        }
        return brokerResponse;
    }
};
NGRxBrokerConsumer = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [BrokerGridStore,
        BrokerMastheadStore,
        BrokerPaginatorStore,
        BrokerSearchStore])
], NGRxBrokerConsumer);
export { NGRxBrokerConsumer };
