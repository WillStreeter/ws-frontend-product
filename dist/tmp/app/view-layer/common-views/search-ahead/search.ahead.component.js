"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var core_1 = require("@angular/core");
require("rxjs/add/observable/fromEvent");
var broker_dispatcher_service_1 = require("../../../business-layer/pubsub-broker/services/broker.dispatcher.service");
var brokerlist_1 = require("../../../business-layer/brokerage/ngrx-stubs/brokerlist");
var SearchAheadComponent = (function () {
    function SearchAheadComponent(bDS) {
        this.bDS = bDS;
        this.searchTerm = [];
        var brokerResponse = this.bDS.dispatchBrokerSelector(brokerlist_1.BrokerList.BROKER_SEARCH_STORE);
        this.brokerRef = brokerResponse.brokerRequested;
    }
    SearchAheadComponent.prototype.ngOnInit = function () {
        this.portalState$ = this.brokerRef.storeObs.brokerPortalState;
    };
    SearchAheadComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var searchValue$ = Observable_1.Observable.fromEvent(this.input.nativeElement, 'keyup')
            .map(function (x) {
            return x['key'];
        })
            .debounceTime(100);
        var value = searchValue$.subscribe(function (x) {
            if (x.length > 1) {
                if (x === 'Backspace' && _this.searchTerm.length > 0) {
                    _this.searchTerm.pop();
                }
                if (x === 'Enter') {
                }
            }
            else {
                console.log(' doSearch  doSearch =', x);
                _this.searchTerm.push(x);
                _this.doSearch(_this.searchTerm.join('').replace(/[^A-Za-z0-9]/g, ''));
            }
            return x;
        });
    };
    SearchAheadComponent.prototype.doSearch = function (terrm) {
        console.log(' doSearch  doSearch =', terrm);
        var note = this.brokerRef.storeDsp.SEARCH_COLLECTION_BY_TERM;
        note.payLoad = terrm && terrm[0].toUpperCase() + terrm.slice(1);
        this.bDS.dispatchBrokerAction(note);
    };
    return SearchAheadComponent;
}());
SearchAheadComponent.decorators = [
    { type: core_1.Component, args: [{
                moduleId: module.id,
                selector: 'search-ahead',
                templateUrl: 'search.ahead.component.html',
                styleUrls: ['search.ahead.component.css']
            },] },
];
SearchAheadComponent.ctorParameters = function () { return [
    { type: broker_dispatcher_service_1.BrokerDispatcherService, },
]; };
SearchAheadComponent.propDecorators = {
    'input': [{ type: core_1.ViewChild, args: ['searchBox',] },],
};
exports.SearchAheadComponent = SearchAheadComponent;
//# sourceMappingURL=search.ahead.component.js.map