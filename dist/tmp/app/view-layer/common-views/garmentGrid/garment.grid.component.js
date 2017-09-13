var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { BrokerDispatcherService } from '../../../business-layer/pubsub-broker/services/broker.dispatcher.service';
import { BrokerList } from '../../../business-layer/brokerage/ngrx-stubs/brokerlist';
let GarmentGridComponent = class GarmentGridComponent {
    constructor(bDS) {
        this.bDS = bDS;
        this.revealCreateRow = false;
        var brokerResponse = this.bDS.dispatchBrokerSelector(BrokerList.BROKER_GRID_STORE);
        this.brokerRef = brokerResponse.brokerRequested;
    }
    ngOnInit() {
        this.currentGarmentSubset$ = this.brokerRef.storeObs.brokerGarmentSubset;
        this.currentPortalStateSub = this.brokerRef.storeObs.brokerPortalState.subscribe(value => {
            this.currentPortalState = (value);
            this.revealCreateRow = this.currentPortalState.revealAddGarmentRow;
        });
    }
    exitEditState(val) {
        console.log('GarmentGridComponent  --- exitEditState  =', val);
        var note = this.brokerRef.storeDsp.UPDATE_REVEAL_GARMENT_ADD_ROW;
        note.payLoad = val;
        this.bDS.dispatchBrokerAction(note);
    }
    updateEditRowState(val) {
        this.exitEditState(false);
        var note = this.brokerRef.storeDsp.SET_GARMENT_ADD_BTN_STATUS;
        note.payLoad = val;
        this.bDS.dispatchBrokerAction(note);
    }
    garmentModelAdd(garment) {
        var note = this.brokerRef.storeDsp.ADD_GARMENT_TO_COLLECTION_ATTEMPT;
        note.payLoad = garment;
        this.bDS.dispatchBrokerAction(note);
    }
    garmentModelUpdate(garment) {
        this.exitEditState(false);
        var note = this.brokerRef.storeDsp.UPDATE_GARMENT_IN_COLLECTION_ATTEMPT;
        note.payLoad = garment;
        this.bDS.dispatchBrokerAction(note);
    }
    toolbarSortUpdate(newSort) {
        var note = this.brokerRef.storeDsp.UPDATE_SORT_STATE;
        note.payLoad = newSort;
        this.bDS.dispatchBrokerAction(note);
    }
};
GarmentGridComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'garment-grid',
        templateUrl: 'garment.grid.component.html',
        styleUrls: ['garment.grid.component.css']
    }),
    __metadata("design:paramtypes", [BrokerDispatcherService])
], GarmentGridComponent);
export { GarmentGridComponent };
