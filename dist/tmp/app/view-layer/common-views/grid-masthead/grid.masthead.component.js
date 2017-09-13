"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var broker_dispatcher_service_1 = require("../../../business-layer/pubsub-broker/services/broker.dispatcher.service");
var brokerlist_1 = require("../../../business-layer/brokerage/ngrx-stubs/brokerlist");
var GridMastheadComponent = (function () {
    function GridMastheadComponent(bDS) {
        this.bDS = bDS;
        var brokerResponse = this.bDS.dispatchBrokerSelector(brokerlist_1.BrokerList.BROKER_MASTHEAD_STORE);
        this.brokerRef = brokerResponse.brokerRequested;
    }
    GridMastheadComponent.prototype.ngOnInit = function () {
        this.addBtnDisable$ = this.brokerRef.storeObs.brokerGarmentAddLock$;
    };
    GridMastheadComponent.prototype.showCreateGarment = function () {
        var note = this.brokerRef.storeDsp.UPDATE_REVEAL_GARMENT_ADD_ROW;
        note.payLoad = true;
        this.bDS.dispatchBrokerAction(note);
    };
    return GridMastheadComponent;
}());
GridMastheadComponent.decorators = [
    { type: core_1.Component, args: [{
                moduleId: module.id,
                selector: 'grid-masthead',
                templateUrl: 'grid.masthead.component.html',
                styleUrls: ['grid.masthead.component.css']
            },] },
];
GridMastheadComponent.ctorParameters = function () { return [
    { type: broker_dispatcher_service_1.BrokerDispatcherService, },
]; };
exports.GridMastheadComponent = GridMastheadComponent;
//# sourceMappingURL=grid.masthead.component.js.map