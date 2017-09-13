var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { BrokerActionBuilder } from '../../pubsub-broker/services/broker.action.builder';
import * as fromRoot from '../../../data-layer/ngrx-data/reducers/index';
import * as garmentActions from '../../../data-layer/ngrx-data/actions/garment.actions';
import * as GarmentActionTypes from '../../shared-types/actions/garment.action.types';
import { BrokerList } from './brokerlist';
let BrokerSearchStore = class BrokerSearchStore {
    constructor(store, brkrActnBuilder) {
        this.store = store;
        this.brkrActnBuilder = brkrActnBuilder;
        this.brokerLabel = BrokerList.BROKER_SEARCH_STORE;
    }
    getComponentSupplies() {
        return Object.assign({
            brokerLabel: this.brokerLabel,
            storeObs: {
                brokerPortalState: this.store.select(fromRoot.getPortalState),
            },
            storeDsp: {
                SEARCH_COLLECTION_BY_TERM: this.brkrActnBuilder.create(GarmentActionTypes.SEARCH_COLLECTION_BY_TERM, this.brokerLabel, null),
            }
        });
    }
    dispatchAction(brokerAction) {
        console.log(' dispatchAction brokerAction =', brokerAction);
        switch (brokerAction.actionType) {
            case GarmentActionTypes.SEARCH_COLLECTION_BY_TERM:
                console.log(' dispatchAction  brokerAction.payLoad) =', brokerAction.payLoad);
                this.store.dispatch(new garmentActions.SearchCollectionByTerm(brokerAction.payLoad));
                break;
        }
    }
};
BrokerSearchStore = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Store,
        BrokerActionBuilder])
], BrokerSearchStore);
export { BrokerSearchStore };
