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
        templateUrl: 'garment.grid.component.html',
        styleUrls: ['garment.grid.component.css']
    }),
    __metadata("design:paramtypes", [broker_dispatcher_service_1.BrokerDispatcherService])
], GarmentGridComponent);
exports.GarmentGridComponent = GarmentGridComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9nYXJtZW50R3JpZC9nYXJtZW50LmdyaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQ3NGO0FBT3RGLHNIQUFtSDtBQUVuSCxzRkFBcUY7QUFRckYsSUFBYSxvQkFBb0I7SUFTN0IsOEJBQW9CLEdBQTJCO1FBQTNCLFFBQUcsR0FBSCxHQUFHLENBQXdCO1FBTC9DLG9CQUFlLEdBQVcsS0FBSyxDQUFDO1FBTTVCLElBQUksY0FBYyxHQUFrQixJQUFJLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLHVCQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNsRyxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxlQUFlLENBQUM7SUFDcEQsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQztRQUUxRSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUNqRixLQUFJLENBQUMsa0JBQWtCLEdBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0MsS0FBSSxDQUFDLGVBQWUsR0FBSSxLQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUM7UUFDekUsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBRUQsNENBQWEsR0FBYixVQUFjLEdBQUc7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQzlELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLDZCQUE2QixDQUFDO1FBQ2pFLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELGlEQUFrQixHQUFsQixVQUFtQixHQUFXO1FBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUM7UUFDOUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsOENBQWUsR0FBZixVQUFnQixPQUFvQjtRQUMvQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxpQ0FBaUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxpREFBa0IsR0FBbEIsVUFBbUIsT0FBb0I7UUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN4QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxvQ0FBb0MsQ0FBQztRQUN4RSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxnREFBaUIsR0FBakIsVUFBa0IsT0FBd0I7UUFDckMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUM7UUFDckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUwsMkJBQUM7QUFBRCxDQXhEQSxBQXdEQyxJQUFBO0FBeERZLG9CQUFvQjtJQU5oQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFdBQVcsRUFBRSw2QkFBNkI7UUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7S0FDNUMsQ0FBQztxQ0FVMEIsbURBQXVCO0dBVHRDLG9CQUFvQixDQXdEaEM7QUF4RFksb0RBQW9CIiwiZmlsZSI6ImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9nYXJtZW50R3JpZC9nYXJtZW50LmdyaWQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPdXRwdXQsSW5wdXQsXG4gICAgICAgICBTaW1wbGVDaGFuZ2UsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBHYXJtZW50TW9kZWwsXG4gICAgICAgICBQb3J0YWxNb2RlbCxcbiAgICAgICAgIFNvcnRSZXF1ZXN0TW9kZWwsXG4gICAgICAgICBHYXJtZW50U29ydE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vYnVzaW5lc3MtbGF5ZXIvbW9kZWxzJ1xuaW1wb3J0IHsgQnJva2VyRGlzcGF0Y2hlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9idXNpbmVzcy1sYXllci9wdWJzdWItYnJva2VyL3NlcnZpY2VzL2Jyb2tlci5kaXNwYXRjaGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQnJva2VyUmVzcG9uc2UgfSBmcm9tICcuLi8uLi8uLi9idXNpbmVzcy1sYXllci9wdWJzdWItYnJva2VyL21vZGVscy9icm9rZXIucmVzcG9uc2UubW9kZWwnO1xuaW1wb3J0IHsgQnJva2VyTGlzdCB9IGZyb20gJy4uLy4uLy4uL2J1c2luZXNzLWxheWVyL2Jyb2tlcmFnZS9uZ3J4LXN0dWJzL2Jyb2tlcmxpc3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnZ2FybWVudC1ncmlkJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2dhcm1lbnQuZ3JpZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2dhcm1lbnQuZ3JpZC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2FybWVudEdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGN1cnJlbnRHYXJtZW50U3Vic2V0JDogT2JzZXJ2YWJsZTxHYXJtZW50TW9kZWxbXT47XG4gICAgY3VycmVudFBvcnRhbFN0YXRlU3ViOlN1YnNjcmlwdGlvbjtcbiAgICBjdXJyZW50UG9ydGFsU3RhdGU6UG9ydGFsTW9kZWw7XG4gICAgcmV2ZWFsQ3JlYXRlUm93OmJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGJyb2tlclJlZjphbnk7XG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYkRTOkJyb2tlckRpc3BhdGNoZXJTZXJ2aWNlKSB7XG4gICAgICAgIHZhciBicm9rZXJSZXNwb25zZTpCcm9rZXJSZXNwb25zZSA9IHRoaXMuYkRTLmRpc3BhdGNoQnJva2VyU2VsZWN0b3IoQnJva2VyTGlzdC5CUk9LRVJfR1JJRF9TVE9SRSk7XG4gICAgICAgIHRoaXMuYnJva2VyUmVmID0gYnJva2VyUmVzcG9uc2UuYnJva2VyUmVxdWVzdGVkO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRHYXJtZW50U3Vic2V0JCA9IHRoaXMuYnJva2VyUmVmLnN0b3JlT2JzLmJyb2tlckdhcm1lbnRTdWJzZXQ7XG5cbiAgICAgICB0aGlzLmN1cnJlbnRQb3J0YWxTdGF0ZVN1YiA9IHRoaXMuYnJva2VyUmVmLnN0b3JlT2JzLmJyb2tlclBvcnRhbFN0YXRlLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQb3J0YWxTdGF0ZSA9IDxQb3J0YWxNb2RlbD4odmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5yZXZlYWxDcmVhdGVSb3cgPSAgdGhpcy5jdXJyZW50UG9ydGFsU3RhdGUucmV2ZWFsQWRkR2FybWVudFJvdztcbiAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleGl0RWRpdFN0YXRlKHZhbCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdHYXJtZW50R3JpZENvbXBvbmVudCAgLS0tIGV4aXRFZGl0U3RhdGUgID0nLCB2YWwpXG4gICAgICAgIHZhciBub3RlID0gdGhpcy5icm9rZXJSZWYuc3RvcmVEc3AuVVBEQVRFX1JFVkVBTF9HQVJNRU5UX0FERF9ST1c7XG4gICAgICAgIG5vdGUucGF5TG9hZCA9IHZhbDtcbiAgICAgICAgdGhpcy5iRFMuZGlzcGF0Y2hCcm9rZXJBY3Rpb24obm90ZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlRWRpdFJvd1N0YXRlKHZhbDpib29sZWFuKXtcbiAgICAgICAgdGhpcy5leGl0RWRpdFN0YXRlKGZhbHNlKVxuICAgICAgICB2YXIgbm90ZSA9IHRoaXMuYnJva2VyUmVmLnN0b3JlRHNwLlNFVF9HQVJNRU5UX0FERF9CVE5fU1RBVFVTO1xuICAgICAgICBub3RlLnBheUxvYWQgPSB2YWw7XG4gICAgICAgIHRoaXMuYkRTLmRpc3BhdGNoQnJva2VyQWN0aW9uKG5vdGUpO1xuICAgIH1cblxuICAgIGdhcm1lbnRNb2RlbEFkZChnYXJtZW50Okdhcm1lbnRNb2RlbCl7XG4gICAgICAgICB2YXIgbm90ZSA9IHRoaXMuYnJva2VyUmVmLnN0b3JlRHNwLkFERF9HQVJNRU5UX1RPX0NPTExFQ1RJT05fQVRURU1QVDtcbiAgICAgICAgIG5vdGUucGF5TG9hZCA9IGdhcm1lbnQ7XG4gICAgICAgICB0aGlzLmJEUy5kaXNwYXRjaEJyb2tlckFjdGlvbihub3RlKTtcbiAgICB9XG5cbiAgICBnYXJtZW50TW9kZWxVcGRhdGUoZ2FybWVudDpHYXJtZW50TW9kZWwpe1xuICAgICAgICB0aGlzLmV4aXRFZGl0U3RhdGUoZmFsc2UpXG4gICAgICAgICB2YXIgbm90ZSA9IHRoaXMuYnJva2VyUmVmLnN0b3JlRHNwLlVQREFURV9HQVJNRU5UX0lOX0NPTExFQ1RJT05fQVRURU1QVDtcbiAgICAgICAgIG5vdGUucGF5TG9hZCA9IGdhcm1lbnQ7XG4gICAgICAgICB0aGlzLmJEUy5kaXNwYXRjaEJyb2tlckFjdGlvbihub3RlKTtcbiAgICB9XG5cbiAgICB0b29sYmFyU29ydFVwZGF0ZShuZXdTb3J0OlNvcnRSZXF1ZXN0TW9kZWwpe1xuICAgICAgICAgdmFyIG5vdGUgPSB0aGlzLmJyb2tlclJlZi5zdG9yZURzcC5VUERBVEVfU09SVF9TVEFURTtcbiAgICAgICAgIG5vdGUucGF5TG9hZCA9IG5ld1NvcnQ7XG4gICAgICAgICB0aGlzLmJEUy5kaXNwYXRjaEJyb2tlckFjdGlvbihub3RlKTtcbiAgICB9XG5cbn1cbiJdfQ==
