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
var broker_publisher_1 = require("../outlet/broker.publisher");
var BrokerDispatcherService = (function () {
    function BrokerDispatcherService(brokerPublisher) {
        this.brokerPublisher = brokerPublisher;
    }
    BrokerDispatcherService.prototype.dispatchBrokerAction = function (brokerAction) {
        this.brokerPublisher.NotifyBrokerActionConsumers(brokerAction);
    };
    BrokerDispatcherService.prototype.dispatchBrokerSelector = function (brokerType) {
        return this.brokerPublisher.NotifyBrokerSelectorConsumer(brokerType);
    };
    return BrokerDispatcherService;
}());
BrokerDispatcherService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [broker_publisher_1.BrokerPublisher])
], BrokerDispatcherService);
exports.BrokerDispatcherService = BrokerDispatcherService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9idXNpbmVzcy1sYXllci9wdWJzdWItYnJva2VyL3NlcnZpY2VzL2Jyb2tlci5kaXNwYXRjaGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsK0RBQTZEO0FBTzdELElBQWEsdUJBQXVCO0lBRTVCLGlDQUFvQixlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7SUFBSyxDQUFDO0lBR2xELHNEQUFvQixHQUEzQixVQUE0QixZQUF5QjtRQUNqRCxJQUFJLENBQUMsZUFBZSxDQUFDLDJCQUEyQixDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ2xFLENBQUM7SUFHTSx3REFBc0IsR0FBN0IsVUFBOEIsVUFBaUI7UUFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsNEJBQTRCLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDdEUsQ0FBQztJQUdULDhCQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSx1QkFBdUI7SUFEbkMsaUJBQVUsRUFBRTtxQ0FHK0Isa0NBQWU7R0FGOUMsdUJBQXVCLENBZW5DO0FBZlksMERBQXVCIiwiZmlsZSI6ImFwcC9idXNpbmVzcy1sYXllci9wdWJzdWItYnJva2VyL3NlcnZpY2VzL2Jyb2tlci5kaXNwYXRjaGVyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm9rZXJQdWJsaXNoZXIgfSBmcm9tICcuLi9vdXRsZXQvYnJva2VyLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBCcm9rZXJBY3Rpb24gIH0gZnJvbSAnLi4vbW9kZWxzL2Jyb2tlci5hY3Rpb24ubW9kZWwnO1xuaW1wb3J0IHsgQnJva2VyUmVzcG9uc2UgfSBmcm9tICcuLi9tb2RlbHMvYnJva2VyLnJlc3BvbnNlLm1vZGVsJztcblxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCcm9rZXJEaXNwYXRjaGVyU2VydmljZSB7XG5cbiAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSBicm9rZXJQdWJsaXNoZXI6QnJva2VyUHVibGlzaGVyKSB7ICB9XG5cbiAgICAgICAgLy8gVGhpcyBvdmVycmlkZXMgdGhlIGVtcHR5IE5vdGlmeU9ic2VydmVycygpIGluIHRoZSBiYXNlIGNsYXNzLlxuICAgICAgICBwdWJsaWMgZGlzcGF0Y2hCcm9rZXJBY3Rpb24oYnJva2VyQWN0aW9uOkJyb2tlckFjdGlvbil7XG4gICAgICAgICAgICB0aGlzLmJyb2tlclB1Ymxpc2hlci5Ob3RpZnlCcm9rZXJBY3Rpb25Db25zdW1lcnMoYnJva2VyQWN0aW9uKVxuICAgICAgICB9XG5cblxuICAgICAgICBwdWJsaWMgZGlzcGF0Y2hCcm9rZXJTZWxlY3Rvcihicm9rZXJUeXBlOnN0cmluZyk6QnJva2VyUmVzcG9uc2V7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYnJva2VyUHVibGlzaGVyLk5vdGlmeUJyb2tlclNlbGVjdG9yQ29uc3VtZXIoYnJva2VyVHlwZSlcbiAgICAgICAgfVxuXG5cbn0iXX0=
