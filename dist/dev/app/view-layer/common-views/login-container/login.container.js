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
var material_1 = require("@angular/material");
var broker_dispatcher_service_1 = require("../../../business-layer/pubsub-broker/services/broker.dispatcher.service");
var brokerlist_1 = require("../../../business-layer/brokerage/ngrx-stubs/brokerlist");
var LoginContainerComponent = (function () {
    function LoginContainerComponent(router, dialogRef, bDS) {
        this.router = router;
        this.dialogRef = dialogRef;
        this.bDS = bDS;
        this.errorMsg = '';
        var brokerResponse = this.bDS.dispatchBrokerSelector(brokerlist_1.BrokerList.BROKER_LOGIN_STORE);
        this.brokerRef = brokerResponse.brokerRequested;
    }
    LoginContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = {};
        this.layoutSub = this.brokerRef.storeObs.layoutState$.subscribe(function (state) {
            _this.requestedUrl = state.requestedURL;
        });
        this.userSessionSub = this.brokerRef.storeObs.userSessionState$.subscribe(function (state) {
            if (state.token) {
                _this.requestedStarted = false;
                _this.dialogRef.close();
                if (_this.requestedUrl) {
                    _this.router.navigateByUrl(_this.requestedUrl);
                }
            }
            else if (state.errorMessage) {
                _this.errorMsg = state.errorMessage;
                _this.user = {};
            }
        });
    };
    LoginContainerComponent.prototype.onLoginKeyUp = function () {
        if (this.errorMsg && this.requestedStarted) {
            this.requestedStarted = false;
            this.errorMsg = '';
        }
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    LoginContainerComponent.prototype.login = function () {
        if (!this.requestedStarted) {
            this.requestedStarted = true;
            var note = this.brokerRef.storeDsp.LOGIN_USER_ATTEMPT;
            note.payLoad = (this.user);
            this.bDS.dispatchBrokerAction(note);
        }
    };
    LoginContainerComponent.prototype.registrationRequest = function () {
        this.requestedStarted = false;
        this.router.navigateByUrl('register');
    };
    LoginContainerComponent.prototype.ngOnDestroy = function () {
        if (this.userSessionSub) {
            this.userSessionSub.unsubscribe();
        }
        if (this.layoutSub) {
            this.layoutSub.unsubscribe();
        }
    };
    return LoginContainerComponent;
}());
LoginContainerComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login-container',
        templateUrl: 'login.container.html',
        styleUrls: ['login.container.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        material_1.MdDialogRef,
        broker_dispatcher_service_1.BrokerDispatcherService])
], LoginContainerComponent);
exports.LoginContainerComponent = LoginContainerComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9sb2dpbi1jb250YWluZXIvbG9naW4uY29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTZEO0FBQzdELDBDQUF5QztBQUN6Qyw4Q0FBZ0Q7QUFHaEQsc0hBQW1IO0FBRW5ILHNGQUFxRjtBQVFyRixJQUFhLHVCQUF1QjtJQVNsQyxpQ0FBc0IsTUFBYyxFQUNkLFNBQTBCLEVBQzFCLEdBQTJCO1FBRjNCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxjQUFTLEdBQVQsU0FBUyxDQUFpQjtRQUMxQixRQUFHLEdBQUgsR0FBRyxDQUF3QjtRQVAxQyxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBU2IsSUFBSSxjQUFjLEdBQWtCLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25HLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLGVBQWUsQ0FBQztJQUN4RCxDQUFDO0lBRUQsMENBQVEsR0FBUjtRQUFBLGlCQW1CQztRQWxCRyxJQUFJLENBQUMsSUFBSSxHQUFpQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUNqRSxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7UUFHSCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDeEUsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ1osS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztnQkFDOUIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDdkIsRUFBRSxDQUFBLENBQUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDakQsQ0FBQztZQUNMLENBQUM7WUFBQSxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztnQkFDbkMsS0FBSSxDQUFDLElBQUksR0FBaUIsRUFBRSxDQUFDO1lBQ2hDLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFHRCw4Q0FBWSxHQUFaO1FBQ0UsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsZ0JBQWlCLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDeEIsQ0FBQztRQUNELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEMsQ0FBQztJQUNGLENBQUM7SUFJRix1Q0FBSyxHQUFMO1FBQ0csRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7WUFDN0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUM7WUFDdEQsSUFBSSxDQUFDLE9BQU8sR0FBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxDQUFDO0lBQ0osQ0FBQztJQUVELHFEQUFtQixHQUFuQjtRQUNNLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELDZDQUFXLEdBQVg7UUFDSSxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZDLENBQUM7UUFDRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEMsQ0FBQztJQUNMLENBQUM7SUFDSCw4QkFBQztBQUFELENBekVBLEFBeUVDLElBQUE7QUF6RVksdUJBQXVCO0lBTm5DLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixXQUFXLEVBQUUsc0JBQXNCO1FBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO0tBQ25DLENBQUM7cUNBVThCLGVBQU07UUFDSixzQkFBVztRQUNqQixtREFBdUI7R0FYdEMsdUJBQXVCLENBeUVuQztBQXpFWSwwREFBdUIiLCJmaWxlIjoiYXBwL3ZpZXctbGF5ZXIvY29tbW9uLXZpZXdzL2xvZ2luLWNvbnRhaW5lci9sb2dpbi5jb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBTZXNzaW9uTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9idXNpbmVzcy1sYXllci9tb2RlbHMvc2Vzc2lvbi5tb2RlbCc7XG5pbXBvcnQgeyBCcm9rZXJEaXNwYXRjaGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2J1c2luZXNzLWxheWVyL3B1YnN1Yi1icm9rZXIvc2VydmljZXMvYnJva2VyLmRpc3BhdGNoZXIuc2VydmljZSc7XG5pbXBvcnQgeyBCcm9rZXJSZXNwb25zZSB9IGZyb20gXCIuLi8uLi8uLi9idXNpbmVzcy1sYXllci9wdWJzdWItYnJva2VyL21vZGVscy9icm9rZXIucmVzcG9uc2UubW9kZWxcIjtcbmltcG9ydCB7IEJyb2tlckxpc3QgfSBmcm9tICcuLi8uLi8uLi9idXNpbmVzcy1sYXllci9icm9rZXJhZ2UvbmdyeC1zdHVicy9icm9rZXJsaXN0JztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbG9naW4tY29udGFpbmVyJyxcbiAgdGVtcGxhdGVVcmw6ICdsb2dpbi5jb250YWluZXIuaHRtbCcsXG4gIHN0eWxlVXJsczogWydsb2dpbi5jb250YWluZXIuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsICBPbkRlc3Ryb3kge1xuICBsYXlvdXRTdWI6U3Vic2NyaXB0aW9uO1xuICB1c2VyU2Vzc2lvblN1YjpTdWJzY3JpcHRpb247XG4gIHB1YmxpYyB1c2VyOlNlc3Npb25Nb2RlbDtcbiAgcHVibGljIGVycm9yTXNnID0gJyc7XG4gIHByaXZhdGUgcmVxdWVzdGVkVXJsOnN0cmluZztcbiAgcmVxdWVzdGVkU3RhcnRlZDpib29sZWFuO1xuICAgYnJva2VyUmVmOmFueTtcblxuICBjb25zdHJ1Y3RvciggIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHVibGljICBkaWFsb2dSZWY6TWREaWFsb2dSZWY8YW55PixcbiAgICAgICAgICAgICAgICBwcml2YXRlIGJEUzpCcm9rZXJEaXNwYXRjaGVyU2VydmljZSkge1xuXG4gICAgICAgICAgdmFyIGJyb2tlclJlc3BvbnNlOkJyb2tlclJlc3BvbnNlID0gdGhpcy5iRFMuZGlzcGF0Y2hCcm9rZXJTZWxlY3RvcihCcm9rZXJMaXN0LkJST0tFUl9MT0dJTl9TVE9SRSk7XG4gICAgICAgICAgdGhpcy5icm9rZXJSZWYgPSBicm9rZXJSZXNwb25zZS5icm9rZXJSZXF1ZXN0ZWQ7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAgIHRoaXMudXNlciA9IDxTZXNzaW9uTW9kZWw+e307XG4gICAgICB0aGlzLmxheW91dFN1YiA9IHRoaXMuYnJva2VyUmVmLnN0b3JlT2JzLmxheW91dFN0YXRlJC5zdWJzY3JpYmUoc3RhdGUgPT4ge1xuICAgICAgICAgIHRoaXMucmVxdWVzdGVkVXJsID0gc3RhdGUucmVxdWVzdGVkVVJMO1xuICAgICAgfSk7XG5cblxuICAgICAgdGhpcy51c2VyU2Vzc2lvblN1YiA9IHRoaXMuYnJva2VyUmVmLnN0b3JlT2JzLnVzZXJTZXNzaW9uU3RhdGUkLnN1YnNjcmliZShzdGF0ZSA9PiB7XG4gICAgICAgICAgICAgaWYoc3RhdGUudG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdGVkU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgIGlmKCB0aGlzLnJlcXVlc3RlZFVybCkge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy5yZXF1ZXN0ZWRVcmwpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9ZWxzZSBpZihzdGF0ZS5lcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1zZyA9IHN0YXRlLmVycm9yTWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgdGhpcy51c2VyID0gPFNlc3Npb25Nb2RlbD57fTtcbiAgICAgICAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuXG4gIG9uTG9naW5LZXlVcCgpIHtcbiAgICBpZih0aGlzLmVycm9yTXNnICYmIHRoaXMucmVxdWVzdGVkU3RhcnRlZCApIHtcbiAgICAgICAgIHRoaXMucmVxdWVzdGVkU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgdGhpcy5lcnJvck1zZyA9ICcnO1xuICAgIH1cbiAgICBpZih0aGlzLmxheW91dFN1Yikge1xuICAgICAgIHRoaXMubGF5b3V0U3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgfVxuXG5cblxuICBsb2dpbigpIHtcbiAgICAgaWYoIXRoaXMucmVxdWVzdGVkU3RhcnRlZCkge1xuICAgICAgICAgdGhpcy5yZXF1ZXN0ZWRTdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgIHZhciBub3RlID0gdGhpcy5icm9rZXJSZWYuc3RvcmVEc3AuTE9HSU5fVVNFUl9BVFRFTVBUO1xuICAgICAgICAgbm90ZS5wYXlMb2FkID0gIDxTZXNzaW9uTW9kZWw+KHRoaXMudXNlcik7XG4gICAgICAgICB0aGlzLmJEUy5kaXNwYXRjaEJyb2tlckFjdGlvbihub3RlKTtcbiAgICAgfVxuICB9XG5cbiAgcmVnaXN0cmF0aW9uUmVxdWVzdCgpIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0ZWRTdGFydGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJ3JlZ2lzdGVyJyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAgIGlmKHRoaXMudXNlclNlc3Npb25TdWIpIHtcbiAgICAgICAgICAgdGhpcy51c2VyU2Vzc2lvblN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgICAgaWYodGhpcy5sYXlvdXRTdWIpIHtcbiAgICAgICAgICAgdGhpcy5sYXlvdXRTdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgfVxufVxuIl19
