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
import * as portalActions from '../../../data-layer/ngrx-data/actions/portal.actions';
import * as PortalActionTypes from '../../shared-types/actions/portal.action.types';
import { BrokerList } from './brokerlist';
let BrokerPaginatorStore = class BrokerPaginatorStore {
    constructor(store, brkrActnBuilder) {
        this.store = store;
        this.brkrActnBuilder = brkrActnBuilder;
        this.brokerLabel = BrokerList.BROKER_PAGINATOR_STORE;
    }
    getComponentSupplies() {
        return Object.assign({
            brokerLabel: this.brokerLabel,
            storeObs: {
                brokerPortalState: this.store.select(fromRoot.getPortalState),
                brokerCurrentGarmentCollection: this.store.select(fromRoot.getCurrentGarmentCollection)
            },
            storeDsp: {
                SET_CURRENT_PAGE_NUMBER: this.brkrActnBuilder.create(PortalActionTypes.SET_CURRENT_PAGE_NUMBER, this.brokerLabel, null),
                UPDATE_VIEWABLE_PER_PAGE_COUNT: this.brkrActnBuilder.create(PortalActionTypes.UPDATE_VIEWABLE_PER_PAGE_COUNT, this.brokerLabel, null),
            }
        });
    }
    dispatchAction(brokerAction) {
        switch (brokerAction.actionType) {
            case PortalActionTypes.SET_CURRENT_PAGE_NUMBER:
                this.store.dispatch(new portalActions.SetCurrentPageNumber(brokerAction.payLoad));
                break;
            case PortalActionTypes.UPDATE_VIEWABLE_PER_PAGE_COUNT:
                this.store.dispatch(new portalActions.UpdateViewablePerPageCount(brokerAction.payLoad));
                break;
        }
    }
};
BrokerPaginatorStore = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Store,
        BrokerActionBuilder])
], BrokerPaginatorStore);
export { BrokerPaginatorStore };
