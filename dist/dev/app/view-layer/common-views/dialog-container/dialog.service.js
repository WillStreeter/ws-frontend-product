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
var material_1 = require("@angular/material");
var dialog_container_1 = require("./dialog.container");
var login_container_1 = require("../login-container/login.container");
var broker_dispatcher_service_1 = require("../../../business-layer/pubsub-broker/services/broker.dispatcher.service");
var brokerlist_1 = require("../../../business-layer/brokerage/ngrx-stubs/brokerlist");
var DialogsService = (function () {
    function DialogsService(bDS, dialog) {
        this.bDS = bDS;
        this.dialog = dialog;
        this.pubSubSubscription = null;
        var brokerResponse = this.bDS.dispatchBrokerSelector(brokerlist_1.BrokerList.BROKER_DIALOG_STORE);
        this.brokerRef = brokerResponse.brokerRequested;
        this.layoutState$ = this.brokerRef.storeObs.layoutState$;
        this.serviceInit();
    }
    DialogsService.prototype.serviceInit = function () {
        var _this = this;
        this.layoutState$.subscribe(function (state) {
            if (state.showLoginDialog) {
                _this.exposeDialog(login_container_1.LoginContainerComponent).subscribe(function (res) {
                    _this.dialogRef = null;
                    _this.bDS.dispatchBrokerAction(_this.brokerRef.storeDsp.HIDE_LOGIN_DIALOG);
                });
            }
            else {
                if (_this.dialogRef) {
                    _this.dialogRef.close();
                }
            }
        });
    };
    DialogsService.prototype.exposeDialog = function (dialogComponent) {
        this.dialogRef = this.dialog.open(dialog_container_1.DialogContainerComponent);
        this.dialogRef.componentInstance.loadComponent(dialogComponent);
        return this.dialogRef.afterClosed();
    };
    return DialogsService;
}());
DialogsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [broker_dispatcher_service_1.BrokerDispatcherService,
        material_1.MdDialog])
], DialogsService);
exports.DialogsService = DialogsService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9kaWFsb2ctY29udGFpbmVyL2RpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0Esc0NBQXlIO0FBQ3pILDhDQUEwRTtBQUMxRSx1REFBOEQ7QUFDOUQsc0VBQTZFO0FBQzdFLHNIQUFtSDtBQUVuSCxzRkFBcUY7QUFJckYsSUFBYSxjQUFjO0lBTXZCLHdCQUFzQixHQUEyQixFQUMzQixNQUFnQjtRQURoQixRQUFHLEdBQUgsR0FBRyxDQUF3QjtRQUMzQixXQUFNLEdBQU4sTUFBTSxDQUFVO1FBSnRDLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUtSLElBQUksY0FBYyxHQUFrQixJQUFJLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFFLHVCQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNyRyxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxlQUFlLENBQUM7UUFDaEQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFDekQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFQyxvQ0FBVyxHQUFuQjtRQUFBLGlCQW1CQztRQWxCSyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEtBQUs7WUFDL0IsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7Z0JBTXZCLEtBQUksQ0FBQyxZQUFZLENBQUUseUNBQXVCLENBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHO29CQUN4QyxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDdEIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUMzRSxDQUFDLENBQUMsQ0FBQztZQUN0QixDQUFDO1lBQUEsSUFBSSxDQUFDLENBQUM7Z0JBQ0gsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLFNBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQ2xCLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzFCLENBQUM7WUFDSixDQUFDO1FBRU4sQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRU0scUNBQVksR0FBbkIsVUFBb0IsZUFBbUI7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywyQ0FBd0IsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFTCxxQkFBQztBQUFELENBekNBLEFBeUNDLElBQUE7QUF6Q1ksY0FBYztJQUQxQixpQkFBVSxFQUFFO3FDQU9pQixtREFBdUI7UUFDbkIsbUJBQVE7R0FQN0IsY0FBYyxDQXlDMUI7QUF6Q1ksd0NBQWMiLCJmaWxlIjoiYXBwL3ZpZXctbGF5ZXIvY29tbW9uLXZpZXdzL2RpYWxvZy1jb250YWluZXIvZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEluamVjdGFibGUsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmLCBJbmplY3QsIFZpZXdDb250YWluZXJSZWYsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1kRGlhbG9nUmVmLCBNZERpYWxvZywgTWREaWFsb2dDb25maWcgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBEaWFsb2dDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2RpYWxvZy5jb250YWluZXInO1xuaW1wb3J0IHsgTG9naW5Db250YWluZXJDb21wb25lbnQgfSBmcm9tICcuLi9sb2dpbi1jb250YWluZXIvbG9naW4uY29udGFpbmVyJztcbmltcG9ydCB7IEJyb2tlckRpc3BhdGNoZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYnVzaW5lc3MtbGF5ZXIvcHVic3ViLWJyb2tlci9zZXJ2aWNlcy9icm9rZXIuZGlzcGF0Y2hlci5zZXJ2aWNlJztcbmltcG9ydCB7IEJyb2tlclJlc3BvbnNlIH0gZnJvbSBcIi4uLy4uLy4uL2J1c2luZXNzLWxheWVyL3B1YnN1Yi1icm9rZXIvbW9kZWxzL2Jyb2tlci5yZXNwb25zZS5tb2RlbFwiO1xuaW1wb3J0IHsgQnJva2VyTGlzdCB9IGZyb20gJy4uLy4uLy4uL2J1c2luZXNzLWxheWVyL2Jyb2tlcmFnZS9uZ3J4LXN0dWJzL2Jyb2tlcmxpc3QnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEaWFsb2dzU2VydmljZSB7XG4gICAgbGF5b3V0U3RhdGUkOk9ic2VydmFibGU8YW55PjtcbiAgICBkaWFsb2dSZWY6TWREaWFsb2dSZWY8RGlhbG9nQ29udGFpbmVyQ29tcG9uZW50PjtcbiAgICBwdWJTdWJTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIGJyb2tlclJlZjphbnk7XG5cbiAgICBjb25zdHJ1Y3RvciggIHByaXZhdGUgYkRTOkJyb2tlckRpc3BhdGNoZXJTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBkaWFsb2c6IE1kRGlhbG9nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgbGV0IGJyb2tlclJlc3BvbnNlOkJyb2tlclJlc3BvbnNlID0gdGhpcy5iRFMuZGlzcGF0Y2hCcm9rZXJTZWxlY3RvciggQnJva2VyTGlzdC5CUk9LRVJfRElBTE9HX1NUT1JFKTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJyb2tlclJlZiA9IGJyb2tlclJlc3BvbnNlLmJyb2tlclJlcXVlc3RlZDtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxheW91dFN0YXRlJCA9IHRoaXMuYnJva2VyUmVmLnN0b3JlT2JzLmxheW91dFN0YXRlJDtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VJbml0KCk7XG4gICAgICAgICAgfVxuXG4gICAgcHJpdmF0ZSBzZXJ2aWNlSW5pdCgpe1xuICAgICAgICAgIHRoaXMubGF5b3V0U3RhdGUkLnN1YnNjcmliZShzdGF0ZSA9PiB7XG4gICAgICAgICAgICBpZihzdGF0ZS5zaG93TG9naW5EaWFsb2cpIHtcblxuICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICAjVE9ETzogc3Vic3RpdHV0ZSByZWZlcmVuY2UgbGlrZSBMb2dpbk5HUnhDb250YWluZXJDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgIyAgICAgICAgZm9yIGEgc3RyaW5nICBsb2FkZWQgZnJvbSBzdG9yZSByZWR1Y2VyXG4gICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwb3NlRGlhbG9nKCBMb2dpbkNvbnRhaW5lckNvbXBvbmVudCApLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nUmVmID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJEUy5kaXNwYXRjaEJyb2tlckFjdGlvbih0aGlzLmJyb2tlclJlZi5zdG9yZURzcC5ISURFX0xPR0lOX0RJQUxPRyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgaWYodGhpcy5kaWFsb2dSZWYgKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXhwb3NlRGlhbG9nKGRpYWxvZ0NvbXBvbmVudDphbnkpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICAgICAgICB0aGlzLmRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nQ29udGFpbmVyQ29tcG9uZW50KTtcbiAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZS5sb2FkQ29tcG9uZW50KGRpYWxvZ0NvbXBvbmVudCk7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCk7XG4gICAgfVxuXG59XG4iXX0=
