"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var broker_action_builder_1 = require("../../pubsub-broker/services/broker.action.builder");
var fromRoot = require("../../../data-layer/ngrx-data/reducers/index");
var garmentActions = require("../../../data-layer/ngrx-data/actions/garment.actions");
var GarmentActionTypes = require("../../shared-types/actions/garment.action.types");
var brokerlist_1 = require("./brokerlist");
var BrokerSearchStore = (function () {
    function BrokerSearchStore(store, brkrActnBuilder) {
        this.store = store;
        this.brkrActnBuilder = brkrActnBuilder;
        this.brokerLabel = brokerlist_1.BrokerList.BROKER_SEARCH_STORE;
    }
    BrokerSearchStore.prototype.getComponentSupplies = function () {
        return Object.assign({
            brokerLabel: this.brokerLabel,
            storeObs: {
                brokerPortalState: this.store.select(fromRoot.getPortalState),
            },
            storeDsp: {
                SEARCH_COLLECTION_BY_TERM: this.brkrActnBuilder.create(GarmentActionTypes.SEARCH_COLLECTION_BY_TERM, this.brokerLabel, null),
            }
        });
    };
    BrokerSearchStore.prototype.dispatchAction = function (brokerAction) {
        console.log(' dispatchAction brokerAction =', brokerAction);
        switch (brokerAction.actionType) {
            case GarmentActionTypes.SEARCH_COLLECTION_BY_TERM:
                console.log(' dispatchAction  brokerAction.payLoad) =', brokerAction.payLoad);
                this.store.dispatch(new garmentActions.SearchCollectionByTerm(brokerAction.payLoad));
                break;
        }
    };
    return BrokerSearchStore;
}());
BrokerSearchStore.decorators = [
    { type: core_1.Injectable },
];
BrokerSearchStore.ctorParameters = function () { return [
    { type: store_1.Store, },
    { type: broker_action_builder_1.BrokerActionBuilder, },
]; };
exports.BrokerSearchStore = BrokerSearchStore;
//# sourceMappingURL=broker.search.store.js.map