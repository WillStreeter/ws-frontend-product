/**
 * Created by willstreeter on 9/10/17.
 */
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
//import { GarmentModel } from '../../../business-layer/models'
import { BrokerDispatcherService } from '../../../business-layer/pubsub-broker/services/broker.dispatcher.service';
import { BrokerResponse } from "../../../business-layer/pubsub-broker/models/broker.response.model";
import { BrokerList } from '../../../business-layer/brokerage/ngrx-stubs/brokerlist';



@Component({
    moduleId: module.id,
    selector: 'grid-masthead',
    templateUrl: 'grid.masthead.component.html',
    styleUrls: ['grid.masthead.component.css']
})
export class GridMastheadComponent implements OnInit {
    //currentGarmentSubset$: Observable<GarmentModel[]>;
    brokerRef:any;



    constructor(private bDS:BrokerDispatcherService) {

        var brokerResponse:BrokerResponse = this.bDS.dispatchBrokerSelector(BrokerList.BROKER_GRID_STORE);
        this.brokerRef = brokerResponse.brokerRequested;
    }

    ngOnInit() {

    ///this.currentGarmentSubset$ = this.brokerRef.storeObs.brokerGarmentSubset;
    }

}
