var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Observable } from 'rxjs/Observable';
import { Component, ElementRef, ViewChild } from '@angular/core';
import "rxjs/add/observable/fromEvent";
import { BrokerDispatcherService } from '../../../business-layer/pubsub-broker/services/broker.dispatcher.service';
import { BrokerList } from '../../../business-layer/brokerage/ngrx-stubs/brokerlist';
let SearchAheadComponent = class SearchAheadComponent {
    constructor(bDS) {
        this.bDS = bDS;
        this.searchTerm = [];
        var brokerResponse = this.bDS.dispatchBrokerSelector(BrokerList.BROKER_SEARCH_STORE);
        this.brokerRef = brokerResponse.brokerRequested;
    }
    ngOnInit() {
        this.portalState$ = this.brokerRef.storeObs.brokerPortalState;
    }
    ngAfterViewInit() {
        let searchValue$ = Observable.fromEvent(this.input.nativeElement, 'keyup')
            .map(x => {
            return x['key'];
        })
            .debounceTime(100);
        const value = searchValue$.subscribe(x => {
            if (x.length > 1) {
                if (x === 'Backspace' && this.searchTerm.length > 0) {
                    this.searchTerm.pop();
                }
                if (x === 'Enter') {
                }
            }
            else {
                console.log(' doSearch  doSearch =', x);
                this.searchTerm.push(x);
                this.doSearch(this.searchTerm.join('').replace(/[^A-Za-z0-9]/g, ''));
            }
            return x;
        });
    }
    doSearch(terrm) {
        console.log(' doSearch  doSearch =', terrm);
        let note = this.brokerRef.storeDsp.SEARCH_COLLECTION_BY_TERM;
        note.payLoad = terrm && terrm[0].toUpperCase() + terrm.slice(1);
        this.bDS.dispatchBrokerAction(note);
    }
};
__decorate([
    ViewChild('searchBox'),
    __metadata("design:type", ElementRef)
], SearchAheadComponent.prototype, "input", void 0);
SearchAheadComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'search-ahead',
        templateUrl: 'search.ahead.component.html',
        styleUrls: ['search.ahead.component.css']
    }),
    __metadata("design:paramtypes", [BrokerDispatcherService])
], SearchAheadComponent);
export { SearchAheadComponent };
