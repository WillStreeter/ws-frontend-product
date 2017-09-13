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
let PaginatorToolbarComponent = class PaginatorToolbarComponent {
    constructor(bDS) {
        this.bDS = bDS;
        this.onLastPage = false;
        this.disabled5 = false;
        this.disabled10 = false;
        this.disabled15 = false;
        var brokerResponse = this.bDS.dispatchBrokerSelector(BrokerList.BROKER_PAGINATOR_STORE);
        this.brokerRef = brokerResponse.brokerRequested;
    }
    ngOnInit() {
        this.portalState$ = this.brokerRef.storeObs.brokerPortalState.subscribe((prtlState) => {
            this.viewablePerPage = prtlState.viewablePerPage;
            this.currentPage = prtlState.currentPage;
        });
        this.currentGarmentCollection$ = this.brokerRef.storeObs.brokerCurrentGarmentCollection.subscribe((garmentCollection) => {
            if (garmentCollection && garmentCollection.products) {
                this.totalNumberProducts = garmentCollection.products.length;
                this.totalNumberOfPages = Math.ceil(garmentCollection.products.length / this.viewablePerPage);
                this.pageList = Array.from(Array(this.totalNumberOfPages).keys());
                if (this.totalNumberProducts <= 5) {
                    this.disabled5 = true;
                }
                else if (this.totalNumberProducts >= 5 && this.totalNumberProducts <= 10) {
                    this.disabled5 = false;
                    this.disabled10 = false;
                }
                else {
                    this.disabled5 = false;
                    this.disabled10 = false;
                    this.disabled15 = false;
                }
                this.onLastPage = (this.currentPage === this.totalNumberOfPages) ? true : false;
            }
        });
    }
    setViewableCount(viewCount) {
        var note = this.brokerRef.storeDsp.UPDATE_VIEWABLE_PER_PAGE_COUNT;
        note.payLoad = viewCount;
        this.bDS.dispatchBrokerAction(note);
    }
    goToPage(page) {
        var note = this.brokerRef.storeDsp.SET_CURRENT_PAGE_NUMBER;
        note.payLoad = page;
        this.bDS.dispatchBrokerAction(note);
    }
};
PaginatorToolbarComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'paginator-toolbar',
        templateUrl: 'paginator.toolbar.component.html',
        styleUrls: ['paginator.toolbar.component.css']
    }),
    __metadata("design:paramtypes", [BrokerDispatcherService])
], PaginatorToolbarComponent);
export { PaginatorToolbarComponent };
