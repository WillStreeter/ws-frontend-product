/**
 * Created by willstreeter on 9/10/17.
 */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { GarmentModel } from '../../../business-layer/models';
import { BrokerDispatcherService } from '../../../business-layer/pubsub-broker/services/broker.dispatcher.service';
import { BrokerResponse } from "../../../business-layer/pubsub-broker/models/broker.response.model";
import { BrokerList } from '../../../business-layer/brokerage/ngrx-stubs/brokerlist';



@Component({
    moduleId: module.id,
    selector: 'grid-masthead',
    templateUrl: 'grid.masthead.component.html',
    styleUrls: ['grid.masthead.component.scss']
})
export class GridMastheadComponent implements OnInit {
    brokerRef:any;
    addBtnDisable$:Observable<boolean>;


    constructor(private bDS:BrokerDispatcherService) {

        var brokerResponse:BrokerResponse = this.bDS.dispatchBrokerSelector(BrokerList.BROKER_MASTHEAD_STORE);
        this.brokerRef = brokerResponse.brokerRequested;
    }

    ngOnInit() {

      this.addBtnDisable$ = this.brokerRef.storeObs.brokerGarmentAddLock$;
    }

    showCreateGarment(){
         var note = this.brokerRef.storeDsp.UPDATE_REVEAL_GARMENT_ADD_ROW;
         note.payLoad = true;
        this.bDS.dispatchBrokerAction(note);
    }

}
