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
        var brokerResponse = this.bDS.dispatchBrokerSelector(brokerlist_1.BrokerList.BROKER_GRID_STORE);
        this.brokerRef = brokerResponse.brokerRequested;
    }
    PaginatorToolbarComponent.prototype.ngOnInit = function () {
    };
    return PaginatorToolbarComponent;
}());
PaginatorToolbarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'paginator-toolbar',
        templateUrl: 'paginator.toolbar.component.html',
        styleUrls: ['paginator.toolbar.component.css']
    }),
    __metadata("design:paramtypes", [broker_dispatcher_service_1.BrokerDispatcherService])
], PaginatorToolbarComponent);
exports.PaginatorToolbarComponent = PaginatorToolbarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9wYWdpbmF0b3ItdG9vbGJhci9wYWdpbmF0b3IudG9vbGJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHQSxzQ0FBa0Q7QUFJbEQsc0hBQW1IO0FBRW5ILHNGQUFxRjtBQVVyRixJQUFhLHlCQUF5QjtJQU1sQyxtQ0FBb0IsR0FBMkI7UUFBM0IsUUFBRyxHQUFILEdBQUcsQ0FBd0I7UUFFM0MsSUFBSSxjQUFjLEdBQWtCLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsdUJBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2xHLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLGVBQWUsQ0FBQztJQUNwRCxDQUFDO0lBRUQsNENBQVEsR0FBUjtJQUdBLENBQUM7SUFFTCxnQ0FBQztBQUFELENBakJBLEFBaUJDLElBQUE7QUFqQlkseUJBQXlCO0lBTnJDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixXQUFXLEVBQUUsa0NBQWtDO1FBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO0tBQ2pELENBQUM7cUNBTzBCLG1EQUF1QjtHQU50Qyx5QkFBeUIsQ0FpQnJDO0FBakJZLDhEQUF5QiIsImZpbGUiOiJhcHAvdmlldy1sYXllci9jb21tb24tdmlld3MvcGFnaW5hdG9yLXRvb2xiYXIvcGFnaW5hdG9yLnRvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHdpbGxzdHJlZXRlciBvbiA5LzEwLzE3LlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG4vL2ltcG9ydCB7IEdhcm1lbnRNb2RlbCB9IGZyb20gJy4uLy4uLy4uL2J1c2luZXNzLWxheWVyL21vZGVscydcbmltcG9ydCB7IEJyb2tlckRpc3BhdGNoZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYnVzaW5lc3MtbGF5ZXIvcHVic3ViLWJyb2tlci9zZXJ2aWNlcy9icm9rZXIuZGlzcGF0Y2hlci5zZXJ2aWNlJztcbmltcG9ydCB7IEJyb2tlclJlc3BvbnNlIH0gZnJvbSBcIi4uLy4uLy4uL2J1c2luZXNzLWxheWVyL3B1YnN1Yi1icm9rZXIvbW9kZWxzL2Jyb2tlci5yZXNwb25zZS5tb2RlbFwiO1xuaW1wb3J0IHsgQnJva2VyTGlzdCB9IGZyb20gJy4uLy4uLy4uL2J1c2luZXNzLWxheWVyL2Jyb2tlcmFnZS9uZ3J4LXN0dWJzL2Jyb2tlcmxpc3QnO1xuXG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3BhZ2luYXRvci10b29sYmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3BhZ2luYXRvci50b29sYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsncGFnaW5hdG9yLnRvb2xiYXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRvclRvb2xiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIC8vY3VycmVudEdhcm1lbnRTdWJzZXQkOiBPYnNlcnZhYmxlPEdhcm1lbnRNb2RlbFtdPjtcbiAgICBicm9rZXJSZWY6YW55O1xuXG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYkRTOkJyb2tlckRpc3BhdGNoZXJTZXJ2aWNlKSB7XG5cbiAgICAgICAgdmFyIGJyb2tlclJlc3BvbnNlOkJyb2tlclJlc3BvbnNlID0gdGhpcy5iRFMuZGlzcGF0Y2hCcm9rZXJTZWxlY3RvcihCcm9rZXJMaXN0LkJST0tFUl9HUklEX1NUT1JFKTtcbiAgICAgICAgdGhpcy5icm9rZXJSZWYgPSBicm9rZXJSZXNwb25zZS5icm9rZXJSZXF1ZXN0ZWQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICAvLy90aGlzLmN1cnJlbnRHYXJtZW50U3Vic2V0JCA9IHRoaXMuYnJva2VyUmVmLnN0b3JlT2JzLmJyb2tlckdhcm1lbnRTdWJzZXQ7XG4gICAgfVxuXG59XG4iXX0=
