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
PaginatorToolbarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'paginator-toolbar',
        template: "<div fxLayout=\"row\" fxFlex=\"100\" class=\"paginator-toolbar\">    <div fxLayout=\"column\" fxFlex=\"30\">        <div class=\"garment-toolbar-type\" fxLayout=\"column\" fxFlex=\"20\">          <div *ngIf=\"disabled5===true\">              1  page of: {{totalNumberProducts}}          </div>         <button md-button [mdMenuTriggerFor]=\"ppItems\"            *ngIf=\"disabled5 ===false\"             class=\"per-page-trigger\">              items per page: {{viewablePerPage}}              <i class=\"material-icons\">arrow_drop_down</i>         </button>         <md-menu #ppItems=\"mdMenu\">           <button md-menu-item [disabled]=\"disabled5\"(click)=\"setViewableCount(5)\">5</button>           <button md-menu-item  [disabled]=\"disabled10\"(click)=\"setViewableCount(10)\">10</button>           <button md-menu-item [disabled]=\"disabled15\"(click)=\"setViewableCount(15)\">15</button>         </md-menu>      </div>    </div>    <div fxLayout=\"column\" fxFlex=\"70\">       <div fxLayout=\"row\" class=\"pp-btn-group\">           <button md-icon-button class=\"page-back\"                  [disabled]=\"currentPage===1\"                  (click)=\"goToPage(currentPage-1)\">                  <i class=\"material-icons\">chevron_left</i>           </button>             <button md-button [mdMenuTriggerFor]=\"pages\" class=\"pages-trigger\">                   {{currentPage}}                  <i class=\"material-icons\">arrow_drop_down</i>             </button>             <md-menu #pages=\"mdMenu\">               <button md-menu-item  *ngFor=\" let index of pageList\"                        [disabled]=\"onLastPage && (index+1) == totalNumberOfPages\"                        (click)=\"goToPage(index+1)\"> {{index+1}}</button>             </md-menu>           <button md-icon-button  class=\"page-ahead\" [disabled]=\"onLastPage\"                  (click)=\"goToPage(currentPage+1)\">                  <i class=\"material-icons\">chevron_right</i>           </button>       </div>    </div> </div>",
        styles: [".paginator-toolbar{padding-top:10px}.pp-btn-group{-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.pages-trigger{width:20px;min-width:20px;text-align:left}.page-ahead{margin-left:20px} /*# sourceMappingURL=/app/view-layer/common-views/paginator-toolbar/paginator.toolbar.component.css.map */"]
    }),
    __metadata("design:paramtypes", [broker_dispatcher_service_1.BrokerDispatcherService])
], PaginatorToolbarComponent);
exports.PaginatorToolbarComponent = PaginatorToolbarComponent;
