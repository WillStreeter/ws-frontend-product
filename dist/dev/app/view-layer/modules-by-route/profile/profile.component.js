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
var router_1 = require("@angular/router");
var broker_dispatcher_service_1 = require("../../../business-layer/pubsub-broker/services/broker.dispatcher.service");
var brokerlist_1 = require("../../../business-layer/brokerage/ngrx-stubs/brokerlist");
require("rxjs/add/operator/let");
var ProfileComponent = (function () {
    function ProfileComponent(activatedRoute, bDS) {
        this.activatedRoute = activatedRoute;
        this.bDS = bDS;
        var brokerResponse = this.bDS.dispatchBrokerSelector(brokerlist_1.BrokerList.BROKER_PROFILE_STORE);
        this.brokerRef = brokerResponse.brokerRequested;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userProfile$ = this.brokerRef.storeObs.userProfile$;
        this.subscribeHandler = this.activatedRoute.params.subscribe(function (params) {
            var note = _this.brokerRef.storeDsp.GET_USER_PROFILE_ATTEMPT;
            note.payLoad = params['username'];
            _this.bDS.dispatchBrokerAction(note);
        });
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        if (this.subscribeHandler) {
            this.subscribeHandler.unsubscribe();
        }
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        broker_dispatcher_service_1.BrokerDispatcherService])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL21vZHVsZXMtYnktcm91dGUvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUE2RDtBQUM3RCwwQ0FBaUQ7QUFHakQsc0hBQW1IO0FBQ25ILHNGQUFxRjtBQUVyRixpQ0FBK0I7QUFhL0IsSUFBYSxnQkFBZ0I7SUFLdkIsMEJBQXFCLGNBQTZCLEVBQzVCLEdBQTJCO1FBRDVCLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzVCLFFBQUcsR0FBSCxHQUFHLENBQXdCO1FBRW5DLElBQUksY0FBYyxHQUFrQixJQUFJLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLHVCQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNyRyxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxlQUFlLENBQUM7SUFDbkQsQ0FBQztJQUVaLG1DQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO1FBRXpELElBQUksQ0FBQyxnQkFBZ0IsR0FBSyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzlELElBQUksSUFBSSxHQUFJLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDO1lBQzdELElBQUksQ0FBQyxPQUFPLEdBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ25DLEtBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBR0Qsc0NBQVcsR0FBWDtRQUNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZDLENBQUM7SUFDSCxDQUFDO0lBQ1AsdUJBQUM7QUFBRCxDQTVCQSxBQTRCQyxJQUFBO0FBNUJZLGdCQUFnQjtJQVI1QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFdBQVcsRUFBRSwwQkFBMEI7UUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7S0FDekMsQ0FBQztxQ0FRd0MsdUJBQWM7UUFDeEIsbURBQXVCO0dBTjFDLGdCQUFnQixDQTRCNUI7QUE1QlksNENBQWdCIiwiZmlsZSI6ImFwcC92aWV3LWxheWVyL21vZHVsZXMtYnktcm91dGUvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgQnJva2VyUmVzcG9uc2UgfSBmcm9tICcuLi8uLi8uLi9idXNpbmVzcy1sYXllci9wdWJzdWItYnJva2VyL21vZGVscy9icm9rZXIucmVzcG9uc2UubW9kZWwnO1xuaW1wb3J0IHsgQnJva2VyRGlzcGF0Y2hlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9idXNpbmVzcy1sYXllci9wdWJzdWItYnJva2VyL3NlcnZpY2VzL2Jyb2tlci5kaXNwYXRjaGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQnJva2VyTGlzdCB9IGZyb20gJy4uLy4uLy4uL2J1c2luZXNzLWxheWVyL2Jyb2tlcmFnZS9uZ3J4LXN0dWJzL2Jyb2tlcmxpc3QnO1xuXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2xldCc7XG5cbi8qKlxuICogVXNlcidzIGluZm9ybWF0aW9uIGFzIHByb2ZpbGVcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3NkLXByb2ZpbGUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9wcm9maWxlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9wcm9maWxlLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5cblxuZXhwb3J0IGNsYXNzIFByb2ZpbGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgICBzdWJzY3JpYmVIYW5kbGVyOmFueTtcbiAgICAgIHVzZXJQcm9maWxlJDpPYnNlcnZhYmxlPGFueT47XG4gICAgICBicm9rZXJSZWY6YW55O1xuXG4gICAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTpBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBiRFM6QnJva2VyRGlzcGF0Y2hlclNlcnZpY2UpIHtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgYnJva2VyUmVzcG9uc2U6QnJva2VyUmVzcG9uc2UgPSB0aGlzLmJEUy5kaXNwYXRjaEJyb2tlclNlbGVjdG9yKEJyb2tlckxpc3QuQlJPS0VSX1BST0ZJTEVfU1RPUkUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJyb2tlclJlZiA9IGJyb2tlclJlc3BvbnNlLmJyb2tlclJlcXVlc3RlZDtcbiAgICAgICAgICAgICAgICAgfVxuXG4gICAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgICB0aGlzLnVzZXJQcm9maWxlJCA9IHRoaXMuYnJva2VyUmVmLnN0b3JlT2JzLnVzZXJQcm9maWxlJDtcblxuICAgICAgICAgIHRoaXMuc3Vic2NyaWJlSGFuZGxlciAgPSAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICAgICAgIHZhciBub3RlID0gIHRoaXMuYnJva2VyUmVmLnN0b3JlRHNwLkdFVF9VU0VSX1BST0ZJTEVfQVRURU1QVDtcbiAgICAgICAgICAgICAgICAgbm90ZS5wYXlMb2FkID0gIHBhcmFtc1sndXNlcm5hbWUnXTtcbiAgICAgICAgICAgICAgICAgdGhpcy5iRFMuZGlzcGF0Y2hCcm9rZXJBY3Rpb24obm90ZSk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgfVxuXG5cbiAgICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICBpZih0aGlzLnN1YnNjcmliZUhhbmRsZXIpIHtcbiAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVIYW5kbGVyLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbn1cbiJdfQ==
