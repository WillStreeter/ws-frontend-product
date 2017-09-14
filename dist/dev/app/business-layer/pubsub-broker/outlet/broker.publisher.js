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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9idXNpbmVzcy1sYXllci9wdWJzdWItYnJva2VyL291dGxldC9icm9rZXIucHVibGlzaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxtRUFBZ0U7QUFPaEUsSUFBYSxlQUFlO0lBQVMsbUNBQW9CO0lBRWpEO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBR00scURBQTJCLEdBQWxDLFVBQW1DLFlBQXlCO1FBQ3hELElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVNLHNEQUE0QixHQUFuQyxVQUFvQyxhQUFvQjtRQUNwRCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRVQsc0JBQUM7QUFBRCxDQWZBLEFBZUMsQ0Fmb0MsNkNBQW9CLEdBZXhEO0FBZlksZUFBZTtJQUQzQixpQkFBVSxFQUFFOztHQUNBLGVBQWUsQ0FlM0I7QUFmWSwwQ0FBZSIsImZpbGUiOiJhcHAvYnVzaW5lc3MtbGF5ZXIvcHVic3ViLWJyb2tlci9vdXRsZXQvYnJva2VyLnB1Ymxpc2hlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0QnJva2VyVHJhZGVyIH0gZnJvbSAnLi9hYnN0cmFjdC5icm9rZXIudHJhZGVyJztcbmltcG9ydCB7IEJyb2tlckFjdGlvbiAgfSBmcm9tICcuLi9tb2RlbHMvYnJva2VyLmFjdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBCcm9rZXJSZXNwb25zZSB9IGZyb20gJy4uL21vZGVscy9icm9rZXIucmVzcG9uc2UubW9kZWwnO1xuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJyb2tlclB1Ymxpc2hlciBleHRlbmRzIEFic3RyYWN0QnJva2VyVHJhZGVyIHtcblxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGlzIG92ZXJyaWRlcyB0aGUgZW1wdHkgTm90aWZ5T2JzZXJ2ZXJzKCkgaW4gdGhlIGJhc2UgY2xhc3MuXG4gICAgICAgIHB1YmxpYyBOb3RpZnlCcm9rZXJBY3Rpb25Db25zdW1lcnMoYnJva2VyQWN0aW9uOkJyb2tlckFjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5fY29uc3VtZXJzWzBdLlJlY2VpdmVCcm9rZXJBY3Rpb24oYnJva2VyQWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBOb3RpZnlCcm9rZXJTZWxlY3RvckNvbnN1bWVyKGJyb2tlclJlcXVlc3Q6c3RyaW5nKTpCcm9rZXJSZXNwb25zZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29uc3VtZXJzWzBdLlJlY2VpdmVkQnJva2VyU2VsZWN0b3JSZXF1ZXN0KGJyb2tlclJlcXVlc3QpO1xuICAgICAgICB9XG5cbn0iXX0=
