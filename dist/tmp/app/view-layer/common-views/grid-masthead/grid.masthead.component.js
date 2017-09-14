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
var GridMastheadComponent = (function () {
    function GridMastheadComponent(bDS) {
        this.bDS = bDS;
        var brokerResponse = this.bDS.dispatchBrokerSelector(brokerlist_1.BrokerList.BROKER_MASTHEAD_STORE);
        this.brokerRef = brokerResponse.brokerRequested;
    }
    GridMastheadComponent.prototype.ngOnInit = function () {
        this.addBtnDisable$ = this.brokerRef.storeObs.brokerGarmentAddLock$;
    };
    GridMastheadComponent.prototype.showCreateGarment = function () {
        var note = this.brokerRef.storeDsp.UPDATE_REVEAL_GARMENT_ADD_ROW;
        note.payLoad = true;
        this.bDS.dispatchBrokerAction(note);
    };
    return GridMastheadComponent;
}());
GridMastheadComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'grid-masthead',
        template: "<div fxLayout=\"row\" fxFlex=\"100\">    <div fxLayout=\"column\" fxFlex=\"50\">       <h2>Product</h2>    </div>    <div fxLayout=\"column\" fxFlex=\"50\">       <div fxLayout=\"row\" class=\"mh-btn-group\">           <button md-raised-button disabled class=\"import-btn\">Export</button>           <button md-raised-button disabled class=\"export-btn\">Import</button>           <button md-raised-button  [disabled]=\"addBtnDisable$| async\"  class=\"add-product-btn\" (click)=\"showCreateGarment()\">AddProduct</button>       </div>    </div> </div>",
        styles: ["h2{color:#1e1e1e;font-weight:400}.mh-btn-group{padding-top:15px;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.add-product-btn{background-color:#0082cb;color:#fefefe}.export-btn,.import-btn{margin-right:3%}.add-product-btn,.export-btn,.import-btn{border-radius:1px}.export-btn[disabled],.import-btn[disabled]{background-color:#fefefe;border:1px solid #c4c4c4} /*# sourceMappingURL=/app/view-layer/common-views/grid-masthead/grid.masthead.component.css.map */"]
    }),
    __metadata("design:paramtypes", [broker_dispatcher_service_1.BrokerDispatcherService])
], GridMastheadComponent);
exports.GridMastheadComponent = GridMastheadComponent;
