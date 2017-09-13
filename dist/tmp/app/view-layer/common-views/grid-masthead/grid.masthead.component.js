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
let GridMastheadComponent = class GridMastheadComponent {
    constructor(bDS) {
        this.bDS = bDS;
        var brokerResponse = this.bDS.dispatchBrokerSelector(BrokerList.BROKER_MASTHEAD_STORE);
        this.brokerRef = brokerResponse.brokerRequested;
    }
    ngOnInit() {
        this.addBtnDisable$ = this.brokerRef.storeObs.brokerGarmentAddLock$;
    }
    showCreateGarment() {
        var note = this.brokerRef.storeDsp.UPDATE_REVEAL_GARMENT_ADD_ROW;
        note.payLoad = true;
        this.bDS.dispatchBrokerAction(note);
    }
};
GridMastheadComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'grid-masthead',
        templateUrl: 'grid.masthead.component.html',
        styleUrls: ['grid.masthead.component.css']
    }),
    __metadata("design:paramtypes", [BrokerDispatcherService])
], GridMastheadComponent);
export { GridMastheadComponent };
