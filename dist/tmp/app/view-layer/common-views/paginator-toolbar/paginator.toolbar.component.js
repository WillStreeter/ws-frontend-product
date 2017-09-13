"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var broker_dispatcher_service_1 = require("../../../business-layer/pubsub-broker/services/broker.dispatcher.service");
var brokerlist_1 = require("../../../business-layer/brokerage/ngrx-stubs/brokerlist");
var PaginatorToolbarComponent = (function () {
    function PaginatorToolbarComponent(bDS) {
        this.bDS = bDS;
        this.onLastPage = false;
        this.disabled5 = false;
        this.disabled10 = false;
        this.disabled15 = false;
        var brokerResponse = this.bDS.dispatchBrokerSelector(brokerlist_1.BrokerList.BROKER_PAGINATOR_STORE);
        this.brokerRef = brokerResponse.brokerRequested;
    }
    PaginatorToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.portalState$ = this.brokerRef.storeObs.brokerPortalState.subscribe(function (prtlState) {
            _this.viewablePerPage = prtlState.viewablePerPage;
            _this.currentPage = prtlState.currentPage;
        });
        this.currentGarmentCollection$ = this.brokerRef.storeObs.brokerCurrentGarmentCollection.subscribe(function (garmentCollection) {
            if (garmentCollection && garmentCollection.products) {
                _this.totalNumberProducts = garmentCollection.products.length;
                _this.totalNumberOfPages = Math.ceil(garmentCollection.products.length / _this.viewablePerPage);
                _this.pageList = Array.from(Array(_this.totalNumberOfPages).keys());
                if (_this.totalNumberProducts <= 5) {
                    _this.disabled5 = true;
                }
                else if (_this.totalNumberProducts >= 5 && _this.totalNumberProducts <= 10) {
                    _this.disabled5 = false;
                    _this.disabled10 = false;
                }
                else {
                    _this.disabled5 = false;
                    _this.disabled10 = false;
                    _this.disabled15 = false;
                }
                _this.onLastPage = (_this.currentPage === _this.totalNumberOfPages) ? true : false;
            }
        });
    };
    PaginatorToolbarComponent.prototype.setViewableCount = function (viewCount) {
        var note = this.brokerRef.storeDsp.UPDATE_VIEWABLE_PER_PAGE_COUNT;
        note.payLoad = viewCount;
        this.bDS.dispatchBrokerAction(note);
    };
    PaginatorToolbarComponent.prototype.goToPage = function (page) {
        var note = this.brokerRef.storeDsp.SET_CURRENT_PAGE_NUMBER;
        note.payLoad = page;
        this.bDS.dispatchBrokerAction(note);
    };
    return PaginatorToolbarComponent;
}());
PaginatorToolbarComponent.decorators = [
    { type: core_1.Component, args: [{
                moduleId: module.id,
                selector: 'paginator-toolbar',
                templateUrl: 'paginator.toolbar.component.html',
                styleUrls: ['paginator.toolbar.component.css']
            },] },
];
PaginatorToolbarComponent.ctorParameters = function () { return [
    { type: broker_dispatcher_service_1.BrokerDispatcherService, },
]; };
exports.PaginatorToolbarComponent = PaginatorToolbarComponent;
//# sourceMappingURL=paginator.toolbar.component.js.map