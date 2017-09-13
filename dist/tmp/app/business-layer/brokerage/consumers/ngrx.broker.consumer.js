"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var broker_response_model_1 = require("../../pubsub-broker/models/broker.response.model");
var index_1 = require("../ngrx-stubs/index");
var NGRxBrokerConsumer = (function () {
    function NGRxBrokerConsumer(brokerGridStore, brokerMastheadStore, brokerPaginatorStore, brokerSearchStore) {
        this.brokerGridStore = brokerGridStore;
        this.brokerMastheadStore = brokerMastheadStore;
        this.brokerPaginatorStore = brokerPaginatorStore;
        this.brokerSearchStore = brokerSearchStore;
    }
    NGRxBrokerConsumer.prototype.ReceiveBrokerAction = function (brokerAction) {
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
    };
    NGRxBrokerConsumer.prototype.ReceivedBrokerSelectorRequest = function (brokerType) {
        var brokerResponse = new broker_response_model_1.BrokerResponse();
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
    };
    return NGRxBrokerConsumer;
}());
NGRxBrokerConsumer.decorators = [
    { type: core_1.Injectable },
];
NGRxBrokerConsumer.ctorParameters = function () { return [
    { type: index_1.BrokerGridStore, },
    { type: index_1.BrokerMastheadStore, },
    { type: index_1.BrokerPaginatorStore, },
    { type: index_1.BrokerSearchStore, },
]; };
exports.NGRxBrokerConsumer = NGRxBrokerConsumer;
//# sourceMappingURL=ngrx.broker.consumer.js.map