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
var common_1 = require("@angular/common");
var dialog_service_1 = require("../dialog-container/dialog.service");
var broker_dispatcher_service_1 = require("../../../business-layer/pubsub-broker/services/broker.dispatcher.service");
var brokerlist_1 = require("../../../business-layer/brokerage/ngrx-stubs/brokerlist");
var MastheadComponent = (function () {
    function MastheadComponent(location, dialogService, router, bDS) {
        this.location = location;
        this.dialogService = dialogService;
        this.router = router;
        this.bDS = bDS;
        this.surpisePath = false;
        this.homePath = false;
        this.myName = null;
        var brokerResponse = this.bDS.dispatchBrokerSelector(brokerlist_1.BrokerList.BROKER_NAV_STORE);
        this.brokerRef = brokerResponse.brokerRequested;
    }
    MastheadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hasLoggedInUser$ = this.brokerRef.storeObs.hasLoggedInUser$;
        this.userSessionSub = this.brokerRef.storeObs.usersessionState$.subscribe(function (state) {
            if (state.token) {
                _this.myName = 'profile/username/' + state.user.username;
            }
        });
        this.routerSub = this.router.events.subscribe(function (val) {
            if (_this.location.path() !== '') {
                _this.surpisePath = (_this.location.path()).indexOf('surprise') > 0 ? true : false;
                _this.homePath = true;
            }
            else {
                _this.homePath = false;
                _this.surpisePath = false;
            }
        });
    };
    MastheadComponent.prototype.requestLogin = function () {
        if (this.router.url.indexOf('register')) {
            this.router.navigateByUrl('/');
        }
        this.bDS.dispatchBrokerAction(this.brokerRef.storeDsp.SHOW_LOGIN_DIALOG);
    };
    MastheadComponent.prototype.requestLogout = function () {
        this.bDS.dispatchBrokerAction(this.brokerRef.storeDsp.LOGOUT_USER_ATTEMPT);
    };
    MastheadComponent.prototype.ngOnDestroy = function () {
        if (this.routerSub) {
            this.routerSub.unsubscribe();
        }
        if (this.userSessionSub) {
            this.userSessionSub.unsubscribe();
        }
    };
    return MastheadComponent;
}());
MastheadComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'mast-head',
        templateUrl: 'masthead.component.html',
        styleUrls: ['masthead.component.css']
    }),
    __metadata("design:paramtypes", [common_1.Location,
        dialog_service_1.DialogsService,
        router_1.Router,
        broker_dispatcher_service_1.BrokerDispatcherService])
], MastheadComponent);
exports.MastheadComponent = MastheadComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9tYXN0aGVhZC9tYXN0aGVhZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FDNkM7QUFDN0MsMENBQXlDO0FBQ3pDLDBDQUEyQztBQUczQyxxRUFBb0U7QUFDcEUsc0hBQW1IO0FBRW5ILHNGQUFxRjtBQVVyRixJQUFhLGlCQUFpQjtJQVkxQiwyQkFBb0IsUUFBaUIsRUFDakIsYUFBNEIsRUFDNUIsTUFBYyxFQUNkLEdBQTJCO1FBSDNCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFFBQUcsR0FBSCxHQUFHLENBQXdCO1FBVi9DLGdCQUFXLEdBQVcsS0FBSyxDQUFDO1FBQzVCLGFBQVEsR0FBVyxLQUFLLENBQUM7UUFDekIsV0FBTSxHQUFTLElBQUksQ0FBQztRQVVoQixJQUFJLGNBQWMsR0FBa0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyx1QkFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDakcsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUMsZUFBZSxDQUFDO0lBQ3BELENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQUEsaUJBb0JDO1FBbEJHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQztRQUVqRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBRSxVQUFBLEtBQUs7WUFDNUUsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUM7Z0JBQ1osS0FBSSxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsR0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMxRCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFHSCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUc7WUFDOUMsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixLQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBQyxDQUFDLEdBQUMsSUFBSSxHQUFDLEtBQUssQ0FBQztnQkFDM0UsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDekIsQ0FBQztZQUFBLElBQUksQ0FBQyxDQUFDO2dCQUNILEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUM3QixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsd0NBQVksR0FBWjtRQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUVELElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBRUQseUNBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBS0QsdUNBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsQ0FBQztRQUNELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEMsQ0FBQztJQUNMLENBQUM7SUFDTCx3QkFBQztBQUFELENBbEVBLEFBa0VDLElBQUE7QUFsRVksaUJBQWlCO0lBTjdCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLHlCQUF5QjtRQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztLQUN4QyxDQUFDO3FDQWErQixpQkFBUTtRQUNILCtCQUFjO1FBQ3BCLGVBQU07UUFDVixtREFBdUI7R0FmdEMsaUJBQWlCLENBa0U3QjtBQWxFWSw4Q0FBaUIiLCJmaWxlIjoiYXBwL3ZpZXctbGF5ZXIvY29tbW9uLXZpZXdzL21hc3RoZWFkL21hc3RoZWFkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxcbiAgICBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgRGlhbG9nc1NlcnZpY2UgfSBmcm9tICcuLi9kaWFsb2ctY29udGFpbmVyL2RpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IEJyb2tlckRpc3BhdGNoZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYnVzaW5lc3MtbGF5ZXIvcHVic3ViLWJyb2tlci9zZXJ2aWNlcy9icm9rZXIuZGlzcGF0Y2hlci5zZXJ2aWNlJztcbmltcG9ydCB7IEJyb2tlclJlc3BvbnNlIH0gZnJvbSBcIi4uLy4uLy4uL2J1c2luZXNzLWxheWVyL3B1YnN1Yi1icm9rZXIvbW9kZWxzL2Jyb2tlci5yZXNwb25zZS5tb2RlbFwiO1xuaW1wb3J0IHsgQnJva2VyTGlzdCB9IGZyb20gJy4uLy4uLy4uL2J1c2luZXNzLWxheWVyL2Jyb2tlcmFnZS9uZ3J4LXN0dWJzL2Jyb2tlcmxpc3QnO1xuXG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ21hc3QtaGVhZCcsXG4gICAgdGVtcGxhdGVVcmw6ICdtYXN0aGVhZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ21hc3RoZWFkLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYXN0aGVhZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAgIGhhc0xvZ2dlZEluVXNlciQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgdXNlclNlc3Npb25TdWI6U3Vic2NyaXB0aW9uO1xuICAgIHJvdXRlclN1Yjphbnk7XG4gICAgc3VycGlzZVBhdGg6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIGhvbWVQYXRoOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBteU5hbWU6c3RyaW5nID1udWxsO1xuICAgIGJyb2tlclJlZjphbnk7XG5cblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhdGlvbjpMb2NhdGlvbixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGRpYWxvZ1NlcnZpY2U6RGlhbG9nc1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGJEUzpCcm9rZXJEaXNwYXRjaGVyU2VydmljZSkge1xuXG4gICAgICAgIHZhciBicm9rZXJSZXNwb25zZTpCcm9rZXJSZXNwb25zZSA9IHRoaXMuYkRTLmRpc3BhdGNoQnJva2VyU2VsZWN0b3IoQnJva2VyTGlzdC5CUk9LRVJfTkFWX1NUT1JFKTtcbiAgICAgICAgdGhpcy5icm9rZXJSZWYgPSBicm9rZXJSZXNwb25zZS5icm9rZXJSZXF1ZXN0ZWQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICAgICAgdGhpcy5oYXNMb2dnZWRJblVzZXIkID0gdGhpcy5icm9rZXJSZWYuc3RvcmVPYnMuaGFzTG9nZ2VkSW5Vc2VyJDtcblxuICAgICAgICB0aGlzLnVzZXJTZXNzaW9uU3ViID0gdGhpcy5icm9rZXJSZWYuc3RvcmVPYnMudXNlcnNlc3Npb25TdGF0ZSQuc3Vic2NyaWJlKCBzdGF0ZSA9PiB7XG4gICAgICAgICAgICBpZihzdGF0ZS50b2tlbil7XG4gICAgICAgICAgICAgICAgdGhpcy5teU5hbWUgPSAncHJvZmlsZS91c2VybmFtZS8nK3N0YXRlLnVzZXIudXNlcm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgdGhpcy5yb3V0ZXJTdWIgPSB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKCh2YWwpID0+IHtcbiAgICAgICAgICAgIGlmKHRoaXMubG9jYXRpb24ucGF0aCgpICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VycGlzZVBhdGggPSAodGhpcy5sb2NhdGlvbi5wYXRoKCkpLmluZGV4T2YoJ3N1cnByaXNlJyk+MD90cnVlOmZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaG9tZVBhdGggPSB0cnVlO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaG9tZVBhdGggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1cnBpc2VQYXRoID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlcXVlc3RMb2dpbigpIHtcbiAgICAgICAgaWYodGhpcy5yb3V0ZXIudXJsLmluZGV4T2YoJ3JlZ2lzdGVyJykpIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYkRTLmRpc3BhdGNoQnJva2VyQWN0aW9uKHRoaXMuYnJva2VyUmVmLnN0b3JlRHNwLlNIT1dfTE9HSU5fRElBTE9HKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0TG9nb3V0KCkge1xuICAgICAgICB0aGlzLmJEUy5kaXNwYXRjaEJyb2tlckFjdGlvbih0aGlzLmJyb2tlclJlZi5zdG9yZURzcC5MT0dPVVRfVVNFUl9BVFRFTVBUKTtcbiAgICB9XG5cblxuXG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgaWYodGhpcy5yb3V0ZXJTdWIpIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy51c2VyU2Vzc2lvblN1Yil7XG4gICAgICAgICAgICB0aGlzLnVzZXJTZXNzaW9uU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
