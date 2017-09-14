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
var store_1 = require("@ngrx/store");
var broker_action_builder_1 = require("../../pubsub-broker/services/broker.action.builder");
var fromRoot = require("../../../data-layer/ngrx-data/reducers/index");
var portalActions = require("../../../data-layer/ngrx-data/actions/portal.actions");
var PortalActionTypes = require("../../shared-types/actions/portal.action.types");
var brokerlist_1 = require("./brokerlist");
var BrokerPaginatorStore = (function () {
    function BrokerPaginatorStore(store, brkrActnBuilder) {
        this.store = store;
        this.brkrActnBuilder = brkrActnBuilder;
        this.brokerLabel = brokerlist_1.BrokerList.BROKER_PAGINATOR_STORE;
    }
    BrokerPaginatorStore.prototype.getComponentSupplies = function () {
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
    };
    BrokerPaginatorStore.prototype.dispatchAction = function (brokerAction) {
        switch (brokerAction.actionType) {
            case PortalActionTypes.SET_CURRENT_PAGE_NUMBER:
                this.store.dispatch(new portalActions.SetCurrentPageNumber(brokerAction.payLoad));
                break;
            case PortalActionTypes.UPDATE_VIEWABLE_PER_PAGE_COUNT:
                this.store.dispatch(new portalActions.UpdateViewablePerPageCount(brokerAction.payLoad));
                break;
        }
    };
    return BrokerPaginatorStore;
}());
BrokerPaginatorStore = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store,
        broker_action_builder_1.BrokerActionBuilder])
], BrokerPaginatorStore);
exports.BrokerPaginatorStore = BrokerPaginatorStore;
