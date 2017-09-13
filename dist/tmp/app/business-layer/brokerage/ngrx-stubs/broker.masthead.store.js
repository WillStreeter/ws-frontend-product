"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var broker_action_builder_1 = require("../../pubsub-broker/services/broker.action.builder");
var fromRoot = require("../../../data-layer/ngrx-data/reducers/index");
var portalActions = require("../../../data-layer/ngrx-data/actions/portal.actions");
var PortalActionTypes = require("../../shared-types/actions/portal.action.types");
var brokerlist_1 = require("./brokerlist");
var BrokerMastheadStore = (function () {
    function BrokerMastheadStore(store, brkrActnBuilder) {
        this.store = store;
        this.brkrActnBuilder = brkrActnBuilder;
        this.brokerLabel = brokerlist_1.BrokerList.BROKER_MASTHEAD_STORE;
    }
    BrokerMastheadStore.prototype.getComponentSupplies = function () {
        return Object.assign({
            brokerLabel: this.brokerLabel,
            storeObs: {
                brokerGarmentAddLock$: this.store.select(fromRoot.getGarmentAddLock),
            },
            storeDsp: {
                UPDATE_REVEAL_GARMENT_ADD_ROW: this.brkrActnBuilder.create(PortalActionTypes.UPDATE_REVEAL_GARMENT_ADD_ROW, this.brokerLabel, null),
            }
        });
    };
    BrokerMastheadStore.prototype.dispatchAction = function (brokerAction) {
        switch (brokerAction.actionType) {
            case PortalActionTypes.UPDATE_REVEAL_GARMENT_ADD_ROW:
                this.store.dispatch(new portalActions.UpdateAddRowGarment(brokerAction.payLoad));
                break;
        }
    };
    return BrokerMastheadStore;
}());
BrokerMastheadStore.decorators = [
    { type: core_1.Injectable },
];
BrokerMastheadStore.ctorParameters = function () { return [
    { type: store_1.Store, },
    { type: broker_action_builder_1.BrokerActionBuilder, },
]; };
exports.BrokerMastheadStore = BrokerMastheadStore;
//# sourceMappingURL=broker.masthead.store.js.map