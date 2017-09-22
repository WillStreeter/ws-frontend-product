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
import {PortalModel} from "../../../business-layer/models/portal.model";



@Component({
    moduleId: module.id,
    selector: 'paginator-toolbar',
    templateUrl: 'paginator.toolbar.component.html',
    styleUrls: ['paginator.toolbar.component.scss']
})
export class PaginatorToolbarComponent implements OnInit {
    portalState$: Subscription;
    currentGarmentCollection$:Subscription;
    brokerRef:any;
    currentPage:number;
    viewablePerPage:number;
    totalNumberOfPages:number;
    onLastPage:boolean = false;
    disabled5:boolean = false;
    disabled10:boolean = false;
    disabled15:boolean = false;
    totalNumberProducts:number;
    pageList:number[];




    constructor(private bDS:BrokerDispatcherService) {

        var brokerResponse:BrokerResponse = this.bDS.dispatchBrokerSelector(BrokerList.BROKER_PAGINATOR_STORE);
        this.brokerRef = brokerResponse.brokerRequested;
    }

    ngOnInit() {

      this.portalState$ = this.brokerRef.storeObs.brokerPortalState.subscribe( (prtlState)=>{
              this.viewablePerPage = prtlState.viewablePerPage;
              this.currentPage = prtlState.currentPage;
      });

      this.currentGarmentCollection$= this.brokerRef.storeObs.brokerCurrentGarmentCollection.subscribe( (garmentCollection)=>{
              if(garmentCollection && garmentCollection.garments && garmentCollection.garments.length>0){
                  this.totalNumberProducts = garmentCollection.garments.length;
                  this.totalNumberOfPages = Math.ceil(garmentCollection.garments.length/this.viewablePerPage);
                  this.pageList = Array.from(Array(this.totalNumberOfPages).keys());
                  if(this.totalNumberProducts<=5){
                     this.disabled5 = true;
                  }else if(this.totalNumberProducts>=5 && this.totalNumberProducts <=10){
                       this.disabled5 = false;
                       this.disabled10 = false;
                  }else{
                       this.disabled5 = false;
                       this.disabled10 = false;
                       this.disabled15 = false;
                  }
                  this.onLastPage =(this.currentPage === this.totalNumberOfPages)?true:false;
              }
      });
    }

    setViewableCount(viewCount){
         var note = this.brokerRef.storeDsp.UPDATE_VIEWABLE_PER_PAGE_COUNT;
         note.payLoad = viewCount;
         this.bDS.dispatchBrokerAction(note);
    }

    goToPage(page){
         var note = this.brokerRef.storeDsp.SET_CURRENT_PAGE_NUMBER;
         note.payLoad = page;
         this.bDS.dispatchBrokerAction(note);
    }

}
