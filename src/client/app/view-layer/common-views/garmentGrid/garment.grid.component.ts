import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { GarmentModel } from '../../../business-layer/models'
import { BrokerDispatcherService } from '../../../business-layer/pubsub-broker/services/broker.dispatcher.service';
import { BrokerResponse } from "../../../business-layer/pubsub-broker/models/broker.response.model";
import { BrokerList } from '../../../business-layer/brokerage/ngrx-stubs/brokerlist';



@Component({
    moduleId: module.id,
    selector: 'garment-grid',
    templateUrl: 'garment.grid.component.html',
    styleUrls: ['garment.grid.component.css']
})
export class GarmentGridComponent implements OnInit {
    currentGarmentSubset$: Observable<GarmentModel[]>;
    brokerRef:any;



    constructor(private bDS:BrokerDispatcherService) {

        var brokerResponse:BrokerResponse = this.bDS.dispatchBrokerSelector(BrokerList.BROKER_GRID_STORE);
        this.brokerRef = brokerResponse.brokerRequested;
    }

    ngOnInit() {

    this.currentGarmentSubset$ = this.brokerRef.storeObs.brokerGarmentSubset;
    }

}
