"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var broker_dispatcher_service_1 = require("../../../business-layer/pubsub-broker/services/broker.dispatcher.service");
var brokerlist_1 = require("../../../business-layer/brokerage/ngrx-stubs/brokerlist");
var GarmentGridComponent = (function () {
    function GarmentGridComponent(bDS) {
        this.bDS = bDS;
        this.revealCreateRow = false;
        var brokerResponse = this.bDS.dispatchBrokerSelector(brokerlist_1.BrokerList.BROKER_GRID_STORE);
        this.brokerRef = brokerResponse.brokerRequested;
    }
    GarmentGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentGarmentSubset$ = this.brokerRef.storeObs.brokerGarmentSubset;
        this.currentPortalStateSub = this.brokerRef.storeObs.brokerPortalState.subscribe(function (value) {
            _this.currentPortalState = (value);
            _this.revealCreateRow = _this.currentPortalState.revealAddGarmentRow;
        });
    };
    GarmentGridComponent.prototype.exitEditState = function (val) {
        console.log('GarmentGridComponent  --- exitEditState  =', val);
        var note = this.brokerRef.storeDsp.UPDATE_REVEAL_GARMENT_ADD_ROW;
        note.payLoad = val;
        this.bDS.dispatchBrokerAction(note);
    };
    GarmentGridComponent.prototype.updateEditRowState = function (val) {
        this.exitEditState(false);
        var note = this.brokerRef.storeDsp.SET_GARMENT_ADD_BTN_STATUS;
        note.payLoad = val;
        this.bDS.dispatchBrokerAction(note);
    };
    GarmentGridComponent.prototype.garmentModelAdd = function (garment) {
        var note = this.brokerRef.storeDsp.ADD_GARMENT_TO_COLLECTION_ATTEMPT;
        note.payLoad = garment;
        this.bDS.dispatchBrokerAction(note);
    };
    GarmentGridComponent.prototype.garmentModelUpdate = function (garment) {
        this.exitEditState(false);
        var note = this.brokerRef.storeDsp.UPDATE_GARMENT_IN_COLLECTION_ATTEMPT;
        note.payLoad = garment;
        this.bDS.dispatchBrokerAction(note);
    };
    GarmentGridComponent.prototype.toolbarSortUpdate = function (newSort) {
        var note = this.brokerRef.storeDsp.UPDATE_SORT_STATE;
        note.payLoad = newSort;
        this.bDS.dispatchBrokerAction(note);
    };
    return GarmentGridComponent;
}());
GarmentGridComponent.decorators = [
    { type: core_1.Component, args: [{
                moduleId: module.id,
                selector: 'garment-grid',
                templateUrl: 'garment.grid.component.html',
                styleUrls: ['garment.grid.component.css']
            },] },
];
GarmentGridComponent.ctorParameters = function () { return [
    { type: broker_dispatcher_service_1.BrokerDispatcherService, },
]; };
exports.GarmentGridComponent = GarmentGridComponent;
//# sourceMappingURL=garment.grid.component.js.map