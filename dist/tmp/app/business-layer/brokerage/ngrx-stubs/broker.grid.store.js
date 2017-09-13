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
import * as portalActions from '../../../data-layer/ngrx-data/actions/portal.actions';
import * as GarmentActionTypes from '../../shared-types/actions/garment.action.types';
import * as PortalActionTypes from '../../shared-types/actions/portal.action.types';
import { BrokerList } from './brokerlist';
let BrokerGridStore = class BrokerGridStore {
    constructor(store, brkrActnBuilder) {
        this.store = store;
        this.brkrActnBuilder = brkrActnBuilder;
        this.brokerLabel = BrokerList.BROKER_GRID_STORE;
    }
    getComponentSupplies() {
        return Object.assign({
            brokerLabel: this.brokerLabel,
            storeObs: {
                brokerGarmentSubset: this.store.select(fromRoot.getCurrentSubSet),
                brokerPortalState: this.store.select(fromRoot.getPortalState),
            },
            storeDsp: {
                UPDATE_SORT_STATE: this.brkrActnBuilder.create(PortalActionTypes.UPDATE_SORT_STATE, this.brokerLabel, null),
                UPDATE_GARMENT_IN_COLLECTION_ATTEMPT: this.brkrActnBuilder.create(GarmentActionTypes.UPDATE_GARMENT_IN_COLLECTION_ATTEMPT, this.brokerLabel, null),
                ADD_GARMENT_TO_COLLECTION_ATTEMPT: this.brkrActnBuilder.create(GarmentActionTypes.ADD_GARMENT_TO_COLLECTION_ATTEMPT, this.brokerLabel, null),
                SET_GARMENT_ADD_BTN_STATUS: this.brkrActnBuilder.create(PortalActionTypes.SET_GARMENT_ADD_BTN_STATUS, this.brokerLabel, null),
                UPDATE_REVEAL_GARMENT_ADD_ROW: this.brkrActnBuilder.create(PortalActionTypes.UPDATE_REVEAL_GARMENT_ADD_ROW, this.brokerLabel, null),
            }
        });
    }
    dispatchAction(brokerAction) {
        switch (brokerAction.actionType) {
            case PortalActionTypes.UPDATE_SORT_STATE:
                this.store.dispatch(new portalActions.UpdateCurrentSortState(brokerAction.payLoad));
                break;
            case PortalActionTypes.SET_GARMENT_ADD_BTN_STATUS:
                this.store.dispatch(new portalActions.SetGarmentAddBtnStatus(brokerAction.payLoad));
                break;
            case PortalActionTypes.UPDATE_REVEAL_GARMENT_ADD_ROW:
                this.store.dispatch(new portalActions.UpdateAddRowGarment(brokerAction.payLoad));
                break;
            case GarmentActionTypes.UPDATE_GARMENT_IN_COLLECTION_ATTEMPT:
                this.store.dispatch(new garmentActions.UpdateGarmentAttempt(brokerAction.payLoad));
                break;
            case GarmentActionTypes.ADD_GARMENT_TO_COLLECTION_ATTEMPT:
                this.store.dispatch(new garmentActions.AddGarmentToCollectionAttempt(brokerAction.payLoad));
                break;
        }
    }
};
BrokerGridStore = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Store,
        BrokerActionBuilder])
], BrokerGridStore);
export { BrokerGridStore };
