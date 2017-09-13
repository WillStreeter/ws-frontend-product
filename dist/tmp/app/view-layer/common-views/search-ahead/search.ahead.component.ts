/**
 * Created by willstreeter on 9/10/17.
 */
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import "rxjs/add/observable/fromEvent";
import { BrokerDispatcherService } from '../../../business-layer/pubsub-broker/services/broker.dispatcher.service';
import { BrokerResponse } from "../../../business-layer/pubsub-broker/models/broker.response.model";
import { BrokerList } from '../../../business-layer/brokerage/ngrx-stubs/brokerlist';
import {PortalModel} from "../../../business-layer/models/portal.model";



@Component({
    moduleId: module.id,
    selector: 'search-ahead',
    templateUrl: 'search.ahead.component.html',
    styleUrls: ['search.ahead.component.css']
})
export class SearchAheadComponent implements OnInit {
    @ViewChild('searchBox') input: ElementRef;
    portalState$:Observable<PortalModel>;

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

        let searchValue$:Observable<any> = Observable.fromEvent(this.input.nativeElement, 'keyup')
                            .map(x => {
                                return x['key']
                            })
                            .debounceTime(100)


        const value = searchValue$.subscribe(x => {
            if(x.length>1){
                if(x==='Backspace' && this.searchTerm.length>0){
                    this.searchTerm.pop();
                }
                if(x==='Enter'){
                    //this.searchTerm=[];
                }


            }else{
                console.log(' doSearch  doSearch =',x)
                this.searchTerm.push(x);
                this.doSearch(this.searchTerm.join('').replace(/[^A-Za-z0-9]/g, ''))
            }
            return x;
        });
    }


    doSearch(terrm:string){
        console.log(' doSearch  doSearch =',terrm)
          let note = this.brokerRef.storeDsp.SEARCH_COLLECTION_BY_TERM;
          note.payLoad = terrm && terrm[0].toUpperCase() + terrm.slice(1);
          this.bDS.dispatchBrokerAction(note);
    }
}

