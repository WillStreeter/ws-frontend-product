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
        var brokerResponse = this.bDS.dispatchBrokerSelector(brokerlist_1.BrokerList.BROKER_GRID_STORE);
        this.brokerRef = brokerResponse.brokerRequested;
    }
    GarmentGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentGarmentSubset$ = this.brokerRef.storeObs.brokerGarmentSubset;
        this.currentPortalStateSub = this.brokerRef.storeObs.brokerPortalState.subscribe(function (value) {
            _this.currentPortalState = (value);
        });
    };
    GarmentGridComponent.prototype.garmentModelAdd = function (garment) {
        console.log('GarmentGridComponent  ---- garmentModelAdd =', garment);
        var note = this.brokerRef.storeDsp.ADD_GARMENT_TO_COLLECTION_ATTEMPT;
        note.payLoad = garment;
        this.bDS.dispatchBrokerAction(note);
    };
    GarmentGridComponent.prototype.garmentModelUpdate = function (garment) {
        console.log('GarmentGridComponent  ---- garmentModelUpdate =', garment);
        var note = this.brokerRef.storeDsp.UPDATE_GARMENT_IN_COLLECTION_ATTEMPT;
        note.payLoad = garment;
        this.bDS.dispatchBrokerAction(note);
    };
    GarmentGridComponent.prototype.toolbarSortUpdate = function (newSort) {
        console.log('GarmentGridComponent  ---- toolbarSortUpdate =', newSort);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9nYXJtZW50R3JpZC9nYXJtZW50LmdyaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQ3NGO0FBT3RGLHNIQUFtSDtBQUVuSCxzRkFBcUY7QUFRckYsSUFBYSxvQkFBb0I7SUFPN0IsOEJBQW9CLEdBQTJCO1FBQTNCLFFBQUcsR0FBSCxHQUFHLENBQXdCO1FBRTNDLElBQUksY0FBYyxHQUFrQixJQUFJLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLHVCQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNsRyxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxlQUFlLENBQUM7SUFDcEQsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQztRQUUxRSxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUNqRixLQUFJLENBQUMsa0JBQWtCLEdBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0QsOENBQWUsR0FBZixVQUFnQixPQUFvQjtRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLDhDQUE4QyxFQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ2xFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGlDQUFpQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELGlEQUFrQixHQUFsQixVQUFtQixPQUFvQjtRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlEQUFpRCxFQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3JFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLG9DQUFvQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELGdEQUFpQixHQUFqQixVQUFrQixPQUF3QjtRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGdEQUFnRCxFQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3BFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1FBQ3JELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVMLDJCQUFDO0FBQUQsQ0F2Q0EsQUF1Q0MsSUFBQTtBQXZDWSxvQkFBb0I7SUFOaEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsY0FBYztRQUN4QixXQUFXLEVBQUUsNkJBQTZCO1FBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO0tBQzVDLENBQUM7cUNBUTBCLG1EQUF1QjtHQVB0QyxvQkFBb0IsQ0F1Q2hDO0FBdkNZLG9EQUFvQiIsImZpbGUiOiJhcHAvdmlldy1sYXllci9jb21tb24tdmlld3MvZ2FybWVudEdyaWQvZ2FybWVudC5ncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT3V0cHV0LFxuICAgICAgICAgU2ltcGxlQ2hhbmdlLCBPbkluaXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgR2FybWVudE1vZGVsLFxuICAgICAgICAgUG9ydGFsTW9kZWwsXG4gICAgICAgICBTb3J0UmVxdWVzdE1vZGVsLFxuICAgICAgICAgR2FybWVudFNvcnRNb2RlbCB9IGZyb20gJy4uLy4uLy4uL2J1c2luZXNzLWxheWVyL21vZGVscydcbmltcG9ydCB7IEJyb2tlckRpc3BhdGNoZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYnVzaW5lc3MtbGF5ZXIvcHVic3ViLWJyb2tlci9zZXJ2aWNlcy9icm9rZXIuZGlzcGF0Y2hlci5zZXJ2aWNlJztcbmltcG9ydCB7IEJyb2tlclJlc3BvbnNlIH0gZnJvbSBcIi4uLy4uLy4uL2J1c2luZXNzLWxheWVyL3B1YnN1Yi1icm9rZXIvbW9kZWxzL2Jyb2tlci5yZXNwb25zZS5tb2RlbFwiO1xuaW1wb3J0IHsgQnJva2VyTGlzdCB9IGZyb20gJy4uLy4uLy4uL2J1c2luZXNzLWxheWVyL2Jyb2tlcmFnZS9uZ3J4LXN0dWJzL2Jyb2tlcmxpc3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnZ2FybWVudC1ncmlkJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2dhcm1lbnQuZ3JpZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2dhcm1lbnQuZ3JpZC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR2FybWVudEdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGN1cnJlbnRHYXJtZW50U3Vic2V0JDogT2JzZXJ2YWJsZTxHYXJtZW50TW9kZWxbXT47XG4gICAgY3VycmVudFBvcnRhbFN0YXRlU3ViOlN1YnNjcmlwdGlvbjtcbiAgICBjdXJyZW50UG9ydGFsU3RhdGU6UG9ydGFsTW9kZWw7XG4gICAgYnJva2VyUmVmOmFueTtcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBiRFM6QnJva2VyRGlzcGF0Y2hlclNlcnZpY2UpIHtcblxuICAgICAgICB2YXIgYnJva2VyUmVzcG9uc2U6QnJva2VyUmVzcG9uc2UgPSB0aGlzLmJEUy5kaXNwYXRjaEJyb2tlclNlbGVjdG9yKEJyb2tlckxpc3QuQlJPS0VSX0dSSURfU1RPUkUpO1xuICAgICAgICB0aGlzLmJyb2tlclJlZiA9IGJyb2tlclJlc3BvbnNlLmJyb2tlclJlcXVlc3RlZDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50R2FybWVudFN1YnNldCQgPSB0aGlzLmJyb2tlclJlZi5zdG9yZU9icy5icm9rZXJHYXJtZW50U3Vic2V0O1xuXG4gICAgICAgdGhpcy5jdXJyZW50UG9ydGFsU3RhdGVTdWIgPSB0aGlzLmJyb2tlclJlZi5zdG9yZU9icy5icm9rZXJQb3J0YWxTdGF0ZS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UG9ydGFsU3RhdGUgPSA8UG9ydGFsTW9kZWw+KHZhbHVlKTtcbiAgICAgICB9KTtcbiAgICB9XG4gICAgZ2FybWVudE1vZGVsQWRkKGdhcm1lbnQ6R2FybWVudE1vZGVsKXtcbiAgICAgICAgY29uc29sZS5sb2coJ0dhcm1lbnRHcmlkQ29tcG9uZW50ICAtLS0tIGdhcm1lbnRNb2RlbEFkZCA9JyxnYXJtZW50KVxuICAgICAgICAgdmFyIG5vdGUgPSB0aGlzLmJyb2tlclJlZi5zdG9yZURzcC5BRERfR0FSTUVOVF9UT19DT0xMRUNUSU9OX0FUVEVNUFQ7XG4gICAgICAgICBub3RlLnBheUxvYWQgPSBnYXJtZW50O1xuICAgICAgICAgdGhpcy5iRFMuZGlzcGF0Y2hCcm9rZXJBY3Rpb24obm90ZSk7XG4gICAgfVxuICAgIGdhcm1lbnRNb2RlbFVwZGF0ZShnYXJtZW50Okdhcm1lbnRNb2RlbCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdHYXJtZW50R3JpZENvbXBvbmVudCAgLS0tLSBnYXJtZW50TW9kZWxVcGRhdGUgPScsZ2FybWVudClcbiAgICAgICAgIHZhciBub3RlID0gdGhpcy5icm9rZXJSZWYuc3RvcmVEc3AuVVBEQVRFX0dBUk1FTlRfSU5fQ09MTEVDVElPTl9BVFRFTVBUO1xuICAgICAgICAgbm90ZS5wYXlMb2FkID0gZ2FybWVudDtcbiAgICAgICAgIHRoaXMuYkRTLmRpc3BhdGNoQnJva2VyQWN0aW9uKG5vdGUpO1xuICAgIH1cbiAgICB0b29sYmFyU29ydFVwZGF0ZShuZXdTb3J0OlNvcnRSZXF1ZXN0TW9kZWwpe1xuICAgICAgICBjb25zb2xlLmxvZygnR2FybWVudEdyaWRDb21wb25lbnQgIC0tLS0gdG9vbGJhclNvcnRVcGRhdGUgPScsbmV3U29ydClcbiAgICAgICAgIHZhciBub3RlID0gdGhpcy5icm9rZXJSZWYuc3RvcmVEc3AuVVBEQVRFX1NPUlRfU1RBVEU7XG4gICAgICAgICBub3RlLnBheUxvYWQgPSBuZXdTb3J0O1xuICAgICAgICB0aGlzLmJEUy5kaXNwYXRjaEJyb2tlckFjdGlvbihub3RlKTtcbiAgICB9XG5cbn1cbiJdfQ==
