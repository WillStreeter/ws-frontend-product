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
var GarmentGridComponent = (function () {
    function GarmentGridComponent(bDS) {
        this.bDS = bDS;
        this.revealCreateRow = false;
        var brokerResponse = this.bDS.dispatchBrokerSelector(brokerlist_1.BrokerList.BROKER_GRID_STORE);
        this.brokerRef = brokerResponse.brokerRequested;
    }
    GarmentGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentGarmentSubset$ = this.brokerRef.storeObs.brokerGarmentSubset;
        this.currentPortalStateSub = this.brokerRef.storeObs.brokerPortalState.subscribe(function (value) {
            _this.currentPortalState = (value);
            _this.revealCreateRow = _this.currentPortalState.revealAddGarmentRow;
        });
    };
    GarmentGridComponent.prototype.exitEditState = function (val) {
        console.log('GarmentGridComponent  --- exitEditState  =', val);
        var note = this.brokerRef.storeDsp.UPDATE_REVEAL_GARMENT_ADD_ROW;
        note.payLoad = val;
        this.bDS.dispatchBrokerAction(note);
    };
    GarmentGridComponent.prototype.updateEditRowState = function (val) {
        this.exitEditState(false);
        var note = this.brokerRef.storeDsp.SET_GARMENT_ADD_BTN_STATUS;
        note.payLoad = val;
        this.bDS.dispatchBrokerAction(note);
    };
    GarmentGridComponent.prototype.garmentModelAdd = function (garment) {
        var note = this.brokerRef.storeDsp.ADD_GARMENT_TO_COLLECTION_ATTEMPT;
        note.payLoad = garment;
        this.bDS.dispatchBrokerAction(note);
    };
    GarmentGridComponent.prototype.garmentModelUpdate = function (garment) {
        this.exitEditState(false);
        var note = this.brokerRef.storeDsp.UPDATE_GARMENT_IN_COLLECTION_ATTEMPT;
        note.payLoad = garment;
        this.bDS.dispatchBrokerAction(note);
    };
    GarmentGridComponent.prototype.toolbarSortUpdate = function (newSort) {
        var note = this.brokerRef.storeDsp.UPDATE_SORT_STATE;
        note.payLoad = newSort;
        this.bDS.dispatchBrokerAction(note);
    };
    return GarmentGridComponent;
}());
GarmentGridComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'garment-grid',
        template: "<!-- ngrx smart-container--> <div class='flex-container' fxFlexFill>    <div class='grid-layout' fxLayout='column' fxFlex='100'  >        <grid-toolbar  (updateSort)='toolbarSortUpdate($event)'></grid-toolbar>        <grid-create-row *ngIf='revealCreateRow===true'                         (removeAddRow)='exitEditState($event)'                         (addGarmentModel)='garmentModelAdd($event)'></grid-create-row>        <grid-row *ngFor=' let garment of currentGarmentSubset$ | async'                  (updateGarmentModel)='garmentModelUpdate($event)'                  (addRowState)='updateEditRowState($event)'                  [rowUpdateState]='revealCreateRow'                  [garment]='garment'></grid-row>    </div> </div>",
        styles: [".flex-container{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.nav-link.active-btn{color:#03538a}button.mat-button{background-color:transparent;backgroundcolor:transparent;font-size:1em;line-height:36px;font-weight:500;color:#522b11}button.mat-button:hover{color:#a88a6e}button.mat-button:active{color:#035994}a.nav-link{background-color:transparent;backgroundcolor:transparent;font-size:18px;line-height:36px;font-weight:500;color:#522b11}a.nav-link:hover{color:#a88a6e}a.nav-link:active{color:#035994}md-toolbar.md-mainNav-theme{background:#bfb405;background:linear-gradient(180deg,#bfb405 0,#b0a605)} /*# sourceMappingURL=/app/view-layer/common-views/garmentGrid/garment.grid.component.css.map */"]
    }),
    __metadata("design:paramtypes", [broker_dispatcher_service_1.BrokerDispatcherService])
], GarmentGridComponent);
exports.GarmentGridComponent = GarmentGridComponent;
