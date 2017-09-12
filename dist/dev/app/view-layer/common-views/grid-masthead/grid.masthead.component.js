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
        this.addBtnDisable$ = this.brokerRef.storeObs.brokerRevealAddRowState$;
    };
    GridMastheadComponent.prototype.showCreateGarment = function () {
        console.log('GridMasthead  ---- showCreateGarment ');
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
        templateUrl: 'grid.masthead.component.html',
        styleUrls: ['grid.masthead.component.css']
    }),
    __metadata("design:paramtypes", [broker_dispatcher_service_1.BrokerDispatcherService])
], GridMastheadComponent);
exports.GridMastheadComponent = GridMastheadComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9ncmlkLW1hc3RoZWFkL2dyaWQubWFzdGhlYWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR0Esc0NBQWtEO0FBSWxELHNIQUFtSDtBQUVuSCxzRkFBcUY7QUFVckYsSUFBYSxxQkFBcUI7SUFLOUIsK0JBQW9CLEdBQTJCO1FBQTNCLFFBQUcsR0FBSCxHQUFHLENBQXdCO1FBRTNDLElBQUksY0FBYyxHQUFrQixJQUFJLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLHVCQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUN0RyxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxlQUFlLENBQUM7SUFDcEQsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFFRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDO0lBQ3pFLENBQUM7SUFFRCxpREFBaUIsR0FBakI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7UUFDcEQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsNkJBQTZCLENBQUM7UUFDakUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV4QyxDQUFDO0lBRUwsNEJBQUM7QUFBRCxDQXhCQSxBQXdCQyxJQUFBO0FBeEJZLHFCQUFxQjtJQU5qQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFdBQVcsRUFBRSw4QkFBOEI7UUFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7S0FDN0MsQ0FBQztxQ0FNMEIsbURBQXVCO0dBTHRDLHFCQUFxQixDQXdCakM7QUF4Qlksc0RBQXFCIiwiZmlsZSI6ImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9ncmlkLW1hc3RoZWFkL2dyaWQubWFzdGhlYWQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHdpbGxzdHJlZXRlciBvbiA5LzEwLzE3LlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBHYXJtZW50TW9kZWwgfSBmcm9tICcuLi8uLi8uLi9idXNpbmVzcy1sYXllci9tb2RlbHMnXG5pbXBvcnQgeyBCcm9rZXJEaXNwYXRjaGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2J1c2luZXNzLWxheWVyL3B1YnN1Yi1icm9rZXIvc2VydmljZXMvYnJva2VyLmRpc3BhdGNoZXIuc2VydmljZSc7XG5pbXBvcnQgeyBCcm9rZXJSZXNwb25zZSB9IGZyb20gXCIuLi8uLi8uLi9idXNpbmVzcy1sYXllci9wdWJzdWItYnJva2VyL21vZGVscy9icm9rZXIucmVzcG9uc2UubW9kZWxcIjtcbmltcG9ydCB7IEJyb2tlckxpc3QgfSBmcm9tICcuLi8uLi8uLi9idXNpbmVzcy1sYXllci9icm9rZXJhZ2UvbmdyeC1zdHVicy9icm9rZXJsaXN0JztcblxuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdncmlkLW1hc3RoZWFkJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2dyaWQubWFzdGhlYWQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydncmlkLm1hc3RoZWFkLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHcmlkTWFzdGhlYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGJyb2tlclJlZjphbnk7XG4gICAgYWRkQnRuRGlzYWJsZSQ6T2JzZXJ2YWJsZTxib29sZWFuPjtcblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBiRFM6QnJva2VyRGlzcGF0Y2hlclNlcnZpY2UpIHtcblxuICAgICAgICB2YXIgYnJva2VyUmVzcG9uc2U6QnJva2VyUmVzcG9uc2UgPSB0aGlzLmJEUy5kaXNwYXRjaEJyb2tlclNlbGVjdG9yKEJyb2tlckxpc3QuQlJPS0VSX01BU1RIRUFEX1NUT1JFKTtcbiAgICAgICAgdGhpcy5icm9rZXJSZWYgPSBicm9rZXJSZXNwb25zZS5icm9rZXJSZXF1ZXN0ZWQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICAgIHRoaXMuYWRkQnRuRGlzYWJsZSQgPSB0aGlzLmJyb2tlclJlZi5zdG9yZU9icy5icm9rZXJSZXZlYWxBZGRSb3dTdGF0ZSQ7XG4gICAgfVxuXG4gICAgc2hvd0NyZWF0ZUdhcm1lbnQoKXtcbiAgICAgICAgY29uc29sZS5sb2coJ0dyaWRNYXN0aGVhZCAgLS0tLSBzaG93Q3JlYXRlR2FybWVudCAnKTtcbiAgICAgICAgIHZhciBub3RlID0gdGhpcy5icm9rZXJSZWYuc3RvcmVEc3AuVVBEQVRFX1JFVkVBTF9HQVJNRU5UX0FERF9ST1c7XG4gICAgICAgICBub3RlLnBheUxvYWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmJEUy5kaXNwYXRjaEJyb2tlckFjdGlvbihub3RlKTtcblxuICAgIH1cblxufVxuIl19
