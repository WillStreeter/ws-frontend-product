"use strict";
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
BrokerPaginatorStore.decorators = [
    { type: core_1.Injectable },
];
BrokerPaginatorStore.ctorParameters = function () { return [
    { type: store_1.Store, },
    { type: broker_action_builder_1.BrokerActionBuilder, },
]; };
exports.BrokerPaginatorStore = BrokerPaginatorStore;
//# sourceMappingURL=broker.paginator.store.js.map