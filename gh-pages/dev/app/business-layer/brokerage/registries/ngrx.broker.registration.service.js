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
var broker_publisher_1 = require("../../pubsub-broker/outlet/broker.publisher");
var ngrx_broker_consumer_1 = require("../consumers/ngrx.broker.consumer");
var NGRxBrokerRegistrationService = (function () {
    function NGRxBrokerRegistrationService(ngrxBrokerConsumer, brokerPublisher) {
        this.ngrxBrokerConsumer = ngrxBrokerConsumer;
        this.brokerPublisher = brokerPublisher;
        this.brokerPublisher.RegisterBrokerConsumer(this.ngrxBrokerConsumer);
    }
    return NGRxBrokerRegistrationService;
}());
NGRxBrokerRegistrationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ngrx_broker_consumer_1.NGRxBrokerConsumer,
        broker_publisher_1.BrokerPublisher])
], NGRxBrokerRegistrationService);
exports.NGRxBrokerRegistrationService = NGRxBrokerRegistrationService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9idXNpbmVzcy1sYXllci9icm9rZXJhZ2UvcmVnaXN0cmllcy9uZ3J4LmJyb2tlci5yZWdpc3RyYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxnRkFBOEU7QUFDOUUsMEVBQXdFO0FBSXhFLElBQWMsNkJBQTZCO0lBRXJDLHVDQUFzQixrQkFBc0MsRUFDdEMsZUFBK0I7UUFEL0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDdkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRVAsb0NBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBhLDZCQUE2QjtJQUQxQyxpQkFBVSxFQUFFO3FDQUdtQyx5Q0FBa0I7UUFDdEIsa0NBQWU7R0FIN0MsNkJBQTZCLENBTzFDO0FBUGEsc0VBQTZCIiwiZmlsZSI6ImFwcC9idXNpbmVzcy1sYXllci9icm9rZXJhZ2UvcmVnaXN0cmllcy9uZ3J4LmJyb2tlci5yZWdpc3RyYXRpb24uc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb2tlclB1Ymxpc2hlciB9IGZyb20gJy4uLy4uL3B1YnN1Yi1icm9rZXIvb3V0bGV0L2Jyb2tlci5wdWJsaXNoZXInO1xuaW1wb3J0IHsgTkdSeEJyb2tlckNvbnN1bWVyIH0gIGZyb20gJy4uL2NvbnN1bWVycy9uZ3J4LmJyb2tlci5jb25zdW1lcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzICBOR1J4QnJva2VyUmVnaXN0cmF0aW9uU2VydmljZSB7XG5cbiAgICAgIGNvbnN0cnVjdG9yKCAgcHJpdmF0ZSBuZ3J4QnJva2VyQ29uc3VtZXI6IE5HUnhCcm9rZXJDb25zdW1lcixcbiAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBicm9rZXJQdWJsaXNoZXI6QnJva2VyUHVibGlzaGVyKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5icm9rZXJQdWJsaXNoZXIuUmVnaXN0ZXJCcm9rZXJDb25zdW1lcih0aGlzLm5ncnhCcm9rZXJDb25zdW1lcik7XG4gICAgICB9XG5cbn1cblxuIl19
