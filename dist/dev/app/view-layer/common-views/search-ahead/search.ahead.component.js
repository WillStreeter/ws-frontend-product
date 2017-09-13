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
var SearchAheadComponent = (function () {
    function SearchAheadComponent(bDS) {
        this.bDS = bDS;
        var brokerResponse = this.bDS.dispatchBrokerSelector(brokerlist_1.BrokerList.BROKER_GRID_STORE);
        this.brokerRef = brokerResponse.brokerRequested;
    }
    SearchAheadComponent.prototype.ngOnInit = function () {
    };
    return SearchAheadComponent;
}());
SearchAheadComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'search-ahead',
        templateUrl: 'search.ahead.component.html',
        styleUrls: ['search.ahead.component.css']
    }),
    __metadata("design:paramtypes", [broker_dispatcher_service_1.BrokerDispatcherService])
], SearchAheadComponent);
exports.SearchAheadComponent = SearchAheadComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9zZWFyY2gtYWhlYWQvc2VhcmNoLmFoZWFkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBLHNDQUFrRDtBQUlsRCxzSEFBbUg7QUFFbkgsc0ZBQXFGO0FBVXJGLElBQWEsb0JBQW9CO0lBRzdCLDhCQUFvQixHQUEyQjtRQUEzQixRQUFHLEdBQUgsR0FBRyxDQUF3QjtRQUUzQyxJQUFJLGNBQWMsR0FBa0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyx1QkFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbEcsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUMsZUFBZSxDQUFDO0lBQ3BELENBQUM7SUFFRCx1Q0FBUSxHQUFSO0lBR0EsQ0FBQztJQUVMLDJCQUFDO0FBQUQsQ0FkQSxBQWNDLElBQUE7QUFkWSxvQkFBb0I7SUFOaEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsY0FBYztRQUN4QixXQUFXLEVBQUUsNkJBQTZCO1FBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO0tBQzVDLENBQUM7cUNBSTBCLG1EQUF1QjtHQUh0QyxvQkFBb0IsQ0FjaEM7QUFkWSxvREFBb0IiLCJmaWxlIjoiYXBwL3ZpZXctbGF5ZXIvY29tbW9uLXZpZXdzL3NlYXJjaC1haGVhZC9zZWFyY2guYWhlYWQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHdpbGxzdHJlZXRlciBvbiA5LzEwLzE3LlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG4vL2ltcG9ydCB7IEdhcm1lbnRNb2RlbCB9IGZyb20gJy4uLy4uLy4uL2J1c2luZXNzLWxheWVyL21vZGVscydcbmltcG9ydCB7IEJyb2tlckRpc3BhdGNoZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYnVzaW5lc3MtbGF5ZXIvcHVic3ViLWJyb2tlci9zZXJ2aWNlcy9icm9rZXIuZGlzcGF0Y2hlci5zZXJ2aWNlJztcbmltcG9ydCB7IEJyb2tlclJlc3BvbnNlIH0gZnJvbSBcIi4uLy4uLy4uL2J1c2luZXNzLWxheWVyL3B1YnN1Yi1icm9rZXIvbW9kZWxzL2Jyb2tlci5yZXNwb25zZS5tb2RlbFwiO1xuaW1wb3J0IHsgQnJva2VyTGlzdCB9IGZyb20gJy4uLy4uLy4uL2J1c2luZXNzLWxheWVyL2Jyb2tlcmFnZS9uZ3J4LXN0dWJzL2Jyb2tlcmxpc3QnO1xuXG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3NlYXJjaC1haGVhZCcsXG4gICAgdGVtcGxhdGVVcmw6ICdzZWFyY2guYWhlYWQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydzZWFyY2guYWhlYWQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaEFoZWFkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBicm9rZXJSZWY6YW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBiRFM6QnJva2VyRGlzcGF0Y2hlclNlcnZpY2UpIHtcblxuICAgICAgICB2YXIgYnJva2VyUmVzcG9uc2U6QnJva2VyUmVzcG9uc2UgPSB0aGlzLmJEUy5kaXNwYXRjaEJyb2tlclNlbGVjdG9yKEJyb2tlckxpc3QuQlJPS0VSX0dSSURfU1RPUkUpO1xuICAgICAgICB0aGlzLmJyb2tlclJlZiA9IGJyb2tlclJlc3BvbnNlLmJyb2tlclJlcXVlc3RlZDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgIC8vdGhpcy5jdXJyZW50R2FybWVudFN1YnNldCQgPSB0aGlzLmJyb2tlclJlZi5zdG9yZU9icy5icm9rZXJHYXJtZW50U3Vic2V0O1xuICAgIH1cblxufVxuXG4iXX0=