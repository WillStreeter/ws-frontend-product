/**
 * Created by willstreeter on 9/10/17.
 */
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/debounceTime";
import { NgForm, FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BrokerDispatcherService } from '../../../business-layer/pubsub-broker/services/broker.dispatcher.service';
import { BrokerResponse } from "../../../business-layer/pubsub-broker/models/broker.response.model";
import { BrokerList } from '../../../business-layer/brokerage/ngrx-stubs/brokerlist';
import {PortalModel} from "../../../business-layer/models/portal.model";



@Component({
    moduleId: module.id,
    selector: 'search-ahead',
    templateUrl: 'search.ahead.component.html',
    styleUrls: ['search.ahead.component.scss']
})
export class SearchAheadComponent implements OnInit {
    @ViewChild('searchBox') input: ElementRef;
    portalState$:Observable<PortalModel>;
    searchInput:string;
    brokerRef:any;
    lineValue:string;
    searchTerm:string[]=[];

    constructor(private bDS:BrokerDispatcherService) {

        var brokerResponse:BrokerResponse = this.bDS.dispatchBrokerSelector(BrokerList.BROKER_SEARCH_STORE);
        this.brokerRef = brokerResponse.brokerRequested;
    }

    ngOnInit() {
        this.portalState$ = this.brokerRef.storeObs.brokerPortalState
    }

    ngAfterViewInit(): void{

        let searchValue$ = Observable.fromEvent(this.input.nativeElement, 'keyup')
                            .map(x => {
                               if(x['key'].length>1){
                                   return '*';
                                }else{
                                   return x['key']
                                }

                            })
                            .debounceTime(50)


        const value = searchValue$.subscribe(x => {
            if(x.match(/^[a-z\d\-\s]+$/i) || x==='*'){
                this.doSearch(this.searchInput.replace(/[^A-Za-z0-9]/g, ''))
            }
            return x;
        });
    }

    searchTermReq(formData:NgForm){
            if(this.searchInput.match(/^[a-z\d\-\s]+$/i)){
                this.doSearch(this.searchInput.replace(/[^A-Za-z0-9]/g, ''))
            }
    }

    doSearch(terrm:string){
          let note = this.brokerRef.storeDsp.SEARCH_COLLECTION_BY_TERM;
          note.payLoad = terrm && terrm[0].toUpperCase() + terrm.slice(1);
          this.bDS.dispatchBrokerAction(note);
    }
}

