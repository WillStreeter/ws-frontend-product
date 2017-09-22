import {Component, ChangeDetectionStrategy, Output,Input,
         SimpleChange, OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { GarmentModel,
         PortalModel,
         SortRequestModel,
         GarmentSortModel } from '../../../business-layer/models'
import { BrokerDispatcherService } from '../../../business-layer/pubsub-broker/services/broker.dispatcher.service';
import { BrokerResponse } from '../../../business-layer/pubsub-broker/models/broker.response.model';
import { BrokerList } from '../../../business-layer/brokerage/ngrx-stubs/brokerlist';

@Component({
    moduleId: module.id,
    selector: 'garment-grid',
    templateUrl: 'garment.grid.component.html',
    styleUrls: ['garment.grid.component.scss']
})
export class GarmentGridComponent implements OnInit {
    currentGarmentSubset$: Observable<GarmentModel[]>;
    currentPortalStateSub:Subscription;
    currentPortalState:PortalModel;
    revealCreateRow:boolean = false;

    brokerRef:any;


    constructor(private bDS:BrokerDispatcherService) {
        var brokerResponse:BrokerResponse = this.bDS.dispatchBrokerSelector(BrokerList.BROKER_GRID_STORE);
        this.brokerRef = brokerResponse.brokerRequested;
    }

    ngOnInit() {
        this.currentGarmentSubset$ = this.brokerRef.storeObs.brokerGarmentSubset;

       this.currentPortalStateSub = this.brokerRef.storeObs.brokerPortalState.subscribe(value => {
            this.currentPortalState = <PortalModel>(value);
            this.revealCreateRow =  this.currentPortalState.revealAddGarmentRow;
       });
    }

    exitEditState(val){
        var note = this.brokerRef.storeDsp.UPDATE_REVEAL_GARMENT_ADD_ROW;
        note.payLoad = val;
        this.bDS.dispatchBrokerAction(note);
    }

    updateEditRowState(val:boolean){
        this.exitEditState(false)
        var note = this.brokerRef.storeDsp.SET_GARMENT_ADD_BTN_STATUS;
        note.payLoad = val;
        this.bDS.dispatchBrokerAction(note);
    }

    garmentModelAdd(garment:GarmentModel){
         var note = this.brokerRef.storeDsp.ADD_GARMENT_TO_COLLECTION_ATTEMPT;
         note.payLoad = garment;
         this.bDS.dispatchBrokerAction(note);
    }

    garmentModelUpdate(garment:GarmentModel){
        this.exitEditState(false)
         var note = this.brokerRef.storeDsp.UPDATE_GARMENT_IN_COLLECTION_ATTEMPT;
         note.payLoad = garment;
         this.bDS.dispatchBrokerAction(note);
    }

    toolbarSortUpdate(newSort:SortRequestModel){
         var note = this.brokerRef.storeDsp.UPDATE_SORT_STATE;
         note.payLoad = newSort;
         this.bDS.dispatchBrokerAction(note);
    }

}
