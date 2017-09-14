"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
__decorate([
    core_1.ViewChild('searchBox'),
    __metadata("design:type", core_1.ElementRef)
], SearchAheadComponent.prototype, "input", void 0);
SearchAheadComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'search-ahead',
        template: " <div fxLayout=\"row\" fxFlex=\"100\">    <div fxLayout=\"column\" fxFlex=\"50\">        <form class=\"search-cntr\">          <label class=\"search-label\" for=\"searchBox\"><i class=\"material-icons\">search</i></label>          <input id=\"searchBox\"  #searchBox class=\"search-box\" placeholder=\" Search...\">        </form>    </div> </div>",
        styles: [".search-cntr{position:relative;display:-webkit-flex;display:-ms-flexbox;display:flex;font-weight:300;color:#555;border:1px solid #c4c4c4}.search-label{position:absolute;top:8px;left:10px;font-size:20px}.search-box{-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;margin:0 12px;padding:8px 20px;height:30px;font-size:18px;border:0}.search-box:focus{-webkit-flex:1 0 90%;-ms-flex:1 0 90%;flex:1 0 90%;padding-left:35px;margin:0;outline:0} /*# sourceMappingURL=/app/view-layer/common-views/search-ahead/search.ahead.component.css.map */"]
    }),
    __metadata("design:paramtypes", [broker_dispatcher_service_1.BrokerDispatcherService])
], SearchAheadComponent);
exports.SearchAheadComponent = SearchAheadComponent;
