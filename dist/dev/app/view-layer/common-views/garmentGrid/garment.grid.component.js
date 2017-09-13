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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9nYXJtZW50R3JpZC9nYXJtZW50LmdyaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQ3NGO0FBT3RGLHNIQUFtSDtBQUVuSCxzRkFBcUY7QUFRckYsSUFBYSxvQkFBb0I7SUFTN0IsOEJBQW9CLEdBQTJCO1FBQTNCLFFBQUcsR0FBSCxHQUFHLENBQXdCO1FBTC9DLG9CQUFlLEdBQVcsS0FBSyxDQUFDO1FBTTVCLElBQUksY0FBYyxHQUFrQixJQUFJLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLHVCQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNsRyxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxlQUFlLENBQUM7SUFDcEQsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQztRQUUxRSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUNqRixLQUFJLENBQUMsa0JBQWtCLEdBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0MsS0FBSSxDQUFDLGVBQWUsR0FBSSxLQUFJLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUM7UUFDekUsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBRUQsNENBQWEsR0FBYixVQUFjLEdBQUc7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQzlELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLDZCQUE2QixDQUFDO1FBQ2pFLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELGlEQUFrQixHQUFsQixVQUFtQixHQUFXO1FBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUM7UUFDOUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsOENBQWUsR0FBZixVQUFnQixPQUFvQjtRQUMvQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxpQ0FBaUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxpREFBa0IsR0FBbEIsVUFBbUIsT0FBb0I7UUFDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN4QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxvQ0FBb0MsQ0FBQztRQUN4RSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxnREFBaUIsR0FBakIsVUFBa0IsT0FBd0I7UUFDckMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUM7UUFDckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUwsMkJBQUM7QUFBRCxDQXhEQSxBQXdEQyxJQUFBO0FBeERZLG9CQUFvQjtJQU5oQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFdBQVcsRUFBRSw2QkFBNkI7UUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7S0FDNUMsQ0FBQztxQ0FVMEIsbURBQXVCO0dBVHRDLG9CQUFvQixDQXdEaEM7QUF4RFksb0RBQW9CIiwiZmlsZSI6ImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9nYXJtZW50R3JpZC9nYXJtZW50LmdyaWQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPdXRwdXQsSW5wdXQsXG4gICAgICAgICBTaW1wbGVDaGFuZ2UsIE9uSW5pdCwgRXZlbnRFbWl0dGVyLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBHYXJtZW50TW9kZWwsXG4gICAgICAgICBQb3J0YWxNb2RlbCxcbiAgICAgICAgIFNvcnRSZXF1ZXN0TW9kZWwsXG4gICAgICAgICBHYXJtZW50U29ydE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vYnVzaW5lc3MtbGF5ZXIvbW9kZWxzJ1xuaW1wb3J0IHsgQnJva2VyRGlzcGF0Y2hlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9idXNpbmVzcy1sYXllci9wdWJzdWItYnJva2VyL3NlcnZpY2VzL2Jyb2tlci5kaXNwYXRjaGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQnJva2VyUmVzcG9uc2UgfSBmcm9tIFwiLi4vLi4vLi4vYnVzaW5lc3MtbGF5ZXIvcHVic3ViLWJyb2tlci9tb2RlbHMvYnJva2VyLnJlc3BvbnNlLm1vZGVsXCI7XG5pbXBvcnQgeyBCcm9rZXJMaXN0IH0gZnJvbSAnLi4vLi4vLi4vYnVzaW5lc3MtbGF5ZXIvYnJva2VyYWdlL25ncngtc3R1YnMvYnJva2VybGlzdCc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdnYXJtZW50LWdyaWQnLFxuICAgIHRlbXBsYXRlVXJsOiAnZ2FybWVudC5ncmlkLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnZ2FybWVudC5ncmlkLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHYXJtZW50R3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY3VycmVudEdhcm1lbnRTdWJzZXQkOiBPYnNlcnZhYmxlPEdhcm1lbnRNb2RlbFtdPjtcbiAgICBjdXJyZW50UG9ydGFsU3RhdGVTdWI6U3Vic2NyaXB0aW9uO1xuICAgIGN1cnJlbnRQb3J0YWxTdGF0ZTpQb3J0YWxNb2RlbDtcbiAgICByZXZlYWxDcmVhdGVSb3c6Ym9vbGVhbiA9IGZhbHNlO1xuXG4gICAgYnJva2VyUmVmOmFueTtcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBiRFM6QnJva2VyRGlzcGF0Y2hlclNlcnZpY2UpIHtcbiAgICAgICAgdmFyIGJyb2tlclJlc3BvbnNlOkJyb2tlclJlc3BvbnNlID0gdGhpcy5iRFMuZGlzcGF0Y2hCcm9rZXJTZWxlY3RvcihCcm9rZXJMaXN0LkJST0tFUl9HUklEX1NUT1JFKTtcbiAgICAgICAgdGhpcy5icm9rZXJSZWYgPSBicm9rZXJSZXNwb25zZS5icm9rZXJSZXF1ZXN0ZWQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEdhcm1lbnRTdWJzZXQkID0gdGhpcy5icm9rZXJSZWYuc3RvcmVPYnMuYnJva2VyR2FybWVudFN1YnNldDtcblxuICAgICAgIHRoaXMuY3VycmVudFBvcnRhbFN0YXRlU3ViID0gdGhpcy5icm9rZXJSZWYuc3RvcmVPYnMuYnJva2VyUG9ydGFsU3RhdGUuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBvcnRhbFN0YXRlID0gPFBvcnRhbE1vZGVsPih2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnJldmVhbENyZWF0ZVJvdyA9ICB0aGlzLmN1cnJlbnRQb3J0YWxTdGF0ZS5yZXZlYWxBZGRHYXJtZW50Um93O1xuICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4aXRFZGl0U3RhdGUodmFsKXtcbiAgICAgICAgY29uc29sZS5sb2coJ0dhcm1lbnRHcmlkQ29tcG9uZW50ICAtLS0gZXhpdEVkaXRTdGF0ZSAgPScsIHZhbClcbiAgICAgICAgdmFyIG5vdGUgPSB0aGlzLmJyb2tlclJlZi5zdG9yZURzcC5VUERBVEVfUkVWRUFMX0dBUk1FTlRfQUREX1JPVztcbiAgICAgICAgbm90ZS5wYXlMb2FkID0gdmFsO1xuICAgICAgICB0aGlzLmJEUy5kaXNwYXRjaEJyb2tlckFjdGlvbihub3RlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVFZGl0Um93U3RhdGUodmFsOmJvb2xlYW4pe1xuICAgICAgICB0aGlzLmV4aXRFZGl0U3RhdGUoZmFsc2UpXG4gICAgICAgIHZhciBub3RlID0gdGhpcy5icm9rZXJSZWYuc3RvcmVEc3AuU0VUX0dBUk1FTlRfQUREX0JUTl9TVEFUVVM7XG4gICAgICAgIG5vdGUucGF5TG9hZCA9IHZhbDtcbiAgICAgICAgdGhpcy5iRFMuZGlzcGF0Y2hCcm9rZXJBY3Rpb24obm90ZSk7XG4gICAgfVxuXG4gICAgZ2FybWVudE1vZGVsQWRkKGdhcm1lbnQ6R2FybWVudE1vZGVsKXtcbiAgICAgICAgIHZhciBub3RlID0gdGhpcy5icm9rZXJSZWYuc3RvcmVEc3AuQUREX0dBUk1FTlRfVE9fQ09MTEVDVElPTl9BVFRFTVBUO1xuICAgICAgICAgbm90ZS5wYXlMb2FkID0gZ2FybWVudDtcbiAgICAgICAgIHRoaXMuYkRTLmRpc3BhdGNoQnJva2VyQWN0aW9uKG5vdGUpO1xuICAgIH1cblxuICAgIGdhcm1lbnRNb2RlbFVwZGF0ZShnYXJtZW50Okdhcm1lbnRNb2RlbCl7XG4gICAgICAgIHRoaXMuZXhpdEVkaXRTdGF0ZShmYWxzZSlcbiAgICAgICAgIHZhciBub3RlID0gdGhpcy5icm9rZXJSZWYuc3RvcmVEc3AuVVBEQVRFX0dBUk1FTlRfSU5fQ09MTEVDVElPTl9BVFRFTVBUO1xuICAgICAgICAgbm90ZS5wYXlMb2FkID0gZ2FybWVudDtcbiAgICAgICAgIHRoaXMuYkRTLmRpc3BhdGNoQnJva2VyQWN0aW9uKG5vdGUpO1xuICAgIH1cblxuICAgIHRvb2xiYXJTb3J0VXBkYXRlKG5ld1NvcnQ6U29ydFJlcXVlc3RNb2RlbCl7XG4gICAgICAgICB2YXIgbm90ZSA9IHRoaXMuYnJva2VyUmVmLnN0b3JlRHNwLlVQREFURV9TT1JUX1NUQVRFO1xuICAgICAgICAgbm90ZS5wYXlMb2FkID0gbmV3U29ydDtcbiAgICAgICAgIHRoaXMuYkRTLmRpc3BhdGNoQnJva2VyQWN0aW9uKG5vdGUpO1xuICAgIH1cblxufVxuIl19
