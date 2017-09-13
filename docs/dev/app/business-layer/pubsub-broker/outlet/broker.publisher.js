"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var abstract_broker_trader_1 = require("./abstract.broker.trader");
var BrokerPublisher = (function (_super) {
    __extends(BrokerPublisher, _super);
    function BrokerPublisher() {
        return _super.call(this) || this;
    }
    BrokerPublisher.prototype.NotifyBrokerActionConsumers = function (brokerAction) {
        this._consumers[0].ReceiveBrokerAction(brokerAction);
    };
    BrokerPublisher.prototype.NotifyBrokerSelectorConsumer = function (brokerRequest) {
        return this._consumers[0].ReceivedBrokerSelectorRequest(brokerRequest);
    };
    return BrokerPublisher;
}(abstract_broker_trader_1.AbstractBrokerTrader));
BrokerPublisher = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], BrokerPublisher);
exports.BrokerPublisher = BrokerPublisher;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9idXNpbmVzcy1sYXllci9wdWJzdWItYnJva2VyL291dGxldC9icm9rZXIucHVibGlzaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxtRUFBZ0U7QUFPaEUsSUFBYSxlQUFlO0lBQVMsbUNBQW9CO0lBRWpEO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBR00scURBQTJCLEdBQWxDLFVBQW1DLFlBQXlCO1FBQ3hELElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVNLHNEQUE0QixHQUFuQyxVQUFvQyxhQUFvQjtRQUNwRCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRVQsc0JBQUM7QUFBRCxDQWZBLEFBZUMsQ0Fmb0MsNkNBQW9CLEdBZXhEO0FBZlksZUFBZTtJQUQzQixpQkFBVSxFQUFFOztHQUNBLGVBQWUsQ0FlM0I7QUFmWSwwQ0FBZSIsImZpbGUiOiJhcHAvYnVzaW5lc3MtbGF5ZXIvcHVic3ViLWJyb2tlci9vdXRsZXQvYnJva2VyLnB1Ymxpc2hlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0QnJva2VyVHJhZGVyIH0gZnJvbSAnLi9hYnN0cmFjdC5icm9rZXIudHJhZGVyJztcbmltcG9ydCB7IEJyb2tlckFjdGlvbiAgfSBmcm9tICcuLi9tb2RlbHMvYnJva2VyLmFjdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBCcm9rZXJSZXNwb25zZSB9IGZyb20gXCIuLi9tb2RlbHMvYnJva2VyLnJlc3BvbnNlLm1vZGVsXCI7XG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnJva2VyUHVibGlzaGVyIGV4dGVuZHMgQWJzdHJhY3RCcm9rZXJUcmFkZXIge1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoaXMgb3ZlcnJpZGVzIHRoZSBlbXB0eSBOb3RpZnlPYnNlcnZlcnMoKSBpbiB0aGUgYmFzZSBjbGFzcy5cbiAgICAgICAgcHVibGljIE5vdGlmeUJyb2tlckFjdGlvbkNvbnN1bWVycyhicm9rZXJBY3Rpb246QnJva2VyQWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLl9jb25zdW1lcnNbMF0uUmVjZWl2ZUJyb2tlckFjdGlvbihicm9rZXJBY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIE5vdGlmeUJyb2tlclNlbGVjdG9yQ29uc3VtZXIoYnJva2VyUmVxdWVzdDpzdHJpbmcpOkJyb2tlclJlc3BvbnNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb25zdW1lcnNbMF0uUmVjZWl2ZWRCcm9rZXJTZWxlY3RvclJlcXVlc3QoYnJva2VyUmVxdWVzdCk7XG4gICAgICAgIH1cblxufSJdfQ==
