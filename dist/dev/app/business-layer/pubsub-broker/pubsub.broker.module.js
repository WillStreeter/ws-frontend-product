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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var broker_action_builder_1 = require("./services/broker.action.builder");
var broker_dispatcher_service_1 = require("./services/broker.dispatcher.service");
var broker_publisher_1 = require("./outlet/broker.publisher");
var PubSubBrokerModule = PubSubBrokerModule_1 = (function () {
    function PubSubBrokerModule(parentModule) {
        if (parentModule) {
            throw new Error('PubSubBroker already loaded; Import in root module only.');
        }
    }
    PubSubBrokerModule.forRoot = function () {
        return {
            ngModule: PubSubBrokerModule_1,
            providers: [broker_action_builder_1.BrokerActionBuilder,
                broker_dispatcher_service_1.BrokerDispatcherService,
                broker_publisher_1.BrokerPublisher]
        };
    };
    return PubSubBrokerModule;
}());
PubSubBrokerModule = PubSubBrokerModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        providers: [broker_action_builder_1.BrokerActionBuilder,
            broker_dispatcher_service_1.BrokerDispatcherService,
            broker_publisher_1.BrokerPublisher]
    }),
    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
    __metadata("design:paramtypes", [PubSubBrokerModule])
], PubSubBrokerModule);
exports.PubSubBrokerModule = PubSubBrokerModule;
var PubSubBrokerModule_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9idXNpbmVzcy1sYXllci9wdWJzdWItYnJva2VyL3B1YnN1Yi5icm9rZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWtGO0FBQ2xGLDBDQUErQztBQUMvQywwRUFBd0U7QUFDeEUsa0ZBQStFO0FBQy9FLDhEQUE0RDtBQVE1RCxJQUFhLGtCQUFrQjtJQUU3Qiw0QkFBb0MsWUFBZ0M7UUFDbEUsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7UUFDOUUsQ0FBQztJQUNILENBQUM7SUFDTSwwQkFBTyxHQUFkO1FBQ0UsTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFFLG9CQUFrQjtZQUM1QixTQUFTLEVBQUUsQ0FBRSwyQ0FBbUI7Z0JBQ25CLG1EQUF1QjtnQkFDdkIsa0NBQWUsQ0FBRTtTQUMvQixDQUFBO0lBQ0gsQ0FBQztJQUVILHlCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSxrQkFBa0I7SUFOOUIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUUscUJBQVksQ0FBRTtRQUN6QixTQUFTLEVBQUUsQ0FBRywyQ0FBbUI7WUFDbkIsbURBQXVCO1lBQ3ZCLGtDQUFlLENBQUM7S0FDakMsQ0FBQztJQUdhLFdBQUEsZUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLGVBQVEsRUFBRSxDQUFBO3FDQUFlLGtCQUFrQjtHQUZ6RCxrQkFBa0IsQ0FnQjlCO0FBaEJZLGdEQUFrQiIsImZpbGUiOiJhcHAvYnVzaW5lc3MtbGF5ZXIvcHVic3ViLWJyb2tlci9wdWJzdWIuYnJva2VyLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJyb2tlckFjdGlvbkJ1aWxkZXIgfSAgZnJvbSAnLi9zZXJ2aWNlcy9icm9rZXIuYWN0aW9uLmJ1aWxkZXInO1xuaW1wb3J0IHsgQnJva2VyRGlzcGF0Y2hlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2Jyb2tlci5kaXNwYXRjaGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQnJva2VyUHVibGlzaGVyIH0gZnJvbSAnLi9vdXRsZXQvYnJva2VyLnB1Ymxpc2hlcic7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogWyBDb21tb25Nb2R1bGUgXSxcbiAgICBwcm92aWRlcnM6IFsgIEJyb2tlckFjdGlvbkJ1aWxkZXIsXG4gICAgICAgICAgICAgICAgICBCcm9rZXJEaXNwYXRjaGVyU2VydmljZSxcbiAgICAgICAgICAgICAgICAgIEJyb2tlclB1Ymxpc2hlcl1cbn0pXG5leHBvcnQgY2xhc3MgUHViU3ViQnJva2VyTW9kdWxlIHtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IFB1YlN1YkJyb2tlck1vZHVsZSkge1xuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUHViU3ViQnJva2VyIGFscmVhZHkgbG9hZGVkOyBJbXBvcnQgaW4gcm9vdCBtb2R1bGUgb25seS4nKTtcbiAgICB9XG4gIH1cbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBQdWJTdWJCcm9rZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFsgQnJva2VyQWN0aW9uQnVpbGRlcixcbiAgICAgICAgICAgICAgICAgICBCcm9rZXJEaXNwYXRjaGVyU2VydmljZSxcbiAgICAgICAgICAgICAgICAgICBCcm9rZXJQdWJsaXNoZXIgXVxuICAgIH1cbiAgfVxuXG59Il19
