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
                broker_publisher_1.BrokerPublisher],
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9idXNpbmVzcy1sYXllci9wdWJzdWItYnJva2VyL3B1YnN1Yi5icm9rZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWtGO0FBQ2xGLDBDQUErQztBQUMvQywwRUFBd0U7QUFDeEUsa0ZBQStFO0FBQy9FLDhEQUE0RDtBQVE1RCxJQUFhLGtCQUFrQjtJQVc3Qiw0QkFBb0MsWUFBZ0M7UUFDbEUsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7UUFDOUUsQ0FBQztJQUNILENBQUM7SUFiTSwwQkFBTyxHQUFkO1FBQ0UsTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFFLG9CQUFrQjtZQUM1QixTQUFTLEVBQUUsQ0FBRSwyQ0FBbUI7Z0JBQ25CLG1EQUF1QjtnQkFDdkIsa0NBQWUsQ0FBRTtTQUMvQixDQUFBO0lBQ0gsQ0FBQztJQU9ILHlCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSxrQkFBa0I7SUFOOUIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUUscUJBQVksQ0FBRTtRQUN6QixTQUFTLEVBQUUsQ0FBRywyQ0FBbUI7WUFDbkIsbURBQXVCO1lBQ3ZCLGtDQUFlLENBQUM7S0FDakMsQ0FBQztJQVlhLFdBQUEsZUFBUSxFQUFFLENBQUEsRUFBRSxXQUFBLGVBQVEsRUFBRSxDQUFBO3FDQUFlLGtCQUFrQjtHQVh6RCxrQkFBa0IsQ0FnQjlCO0FBaEJZLGdEQUFrQiIsImZpbGUiOiJhcHAvYnVzaW5lc3MtbGF5ZXIvcHVic3ViLWJyb2tlci9wdWJzdWIuYnJva2VyLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCcm9rZXJBY3Rpb25CdWlsZGVyIH0gIGZyb20gJy4vc2VydmljZXMvYnJva2VyLmFjdGlvbi5idWlsZGVyJztcbmltcG9ydCB7IEJyb2tlckRpc3BhdGNoZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9icm9rZXIuZGlzcGF0Y2hlci5zZXJ2aWNlJztcbmltcG9ydCB7IEJyb2tlclB1Ymxpc2hlciB9IGZyb20gJy4vb3V0bGV0L2Jyb2tlci5wdWJsaXNoZXInO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFsgQ29tbW9uTW9kdWxlIF0sXG4gICAgcHJvdmlkZXJzOiBbICBCcm9rZXJBY3Rpb25CdWlsZGVyLFxuICAgICAgICAgICAgICAgICAgQnJva2VyRGlzcGF0Y2hlclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgICBCcm9rZXJQdWJsaXNoZXJdXG59KVxuZXhwb3J0IGNsYXNzIFB1YlN1YkJyb2tlck1vZHVsZSB7XG5cbiAgc3RhdGljIGZvclJvb3QoICk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogUHViU3ViQnJva2VyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbIEJyb2tlckFjdGlvbkJ1aWxkZXIsXG4gICAgICAgICAgICAgICAgICAgQnJva2VyRGlzcGF0Y2hlclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgICAgQnJva2VyUHVibGlzaGVyIF0sXG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBQdWJTdWJCcm9rZXJNb2R1bGUpIHtcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1B1YlN1YkJyb2tlciBhbHJlYWR5IGxvYWRlZDsgSW1wb3J0IGluIHJvb3QgbW9kdWxlIG9ubHkuJyk7XG4gICAgfVxuICB9XG59XG4iXX0=
