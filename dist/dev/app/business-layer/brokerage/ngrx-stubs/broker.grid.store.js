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
var store_1 = require("@ngrx/store");
var broker_action_builder_1 = require("../../pubsub-broker/services/broker.action.builder");
var fromRoot = require("../../../data-layer/ngrx-data/reducers/index");
var brokerlist_1 = require("./brokerlist");
var BrokerGridStore = (function () {
    function BrokerGridStore(store, brkrActnBuilder) {
        this.store = store;
        this.brkrActnBuilder = brkrActnBuilder;
        this.brokerLabel = brokerlist_1.BrokerList.BROKER_GRID_STORE;
    }
    BrokerGridStore.prototype.getComponentSupplies = function () {
        return Object.assign({
            brokerLabel: this.brokerLabel,
            storeObs: {
                brokerGarmentSubset: this.store.select(fromRoot.getCurrentSubSet),
            },
        });
    };
    BrokerGridStore.prototype.dispatchAction = function (brokerAction) {
    };
    return BrokerGridStore;
}());
BrokerGridStore = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store,
        broker_action_builder_1.BrokerActionBuilder])
], BrokerGridStore);
exports.BrokerGridStore = BrokerGridStore;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9idXNpbmVzcy1sYXllci9icm9rZXJhZ2UvbmdyeC1zdHVicy9icm9rZXIuZ3JpZC5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxxQ0FBb0M7QUFFcEMsNEZBQTBGO0FBRTFGLHVFQUF5RTtBQUV6RSwyQ0FBMEM7QUFJMUMsSUFBYSxlQUFlO0lBRXhCLHlCQUFxQixLQUE0QixFQUM1QixlQUFtQztRQURuQyxVQUFLLEdBQUwsS0FBSyxDQUF1QjtRQUM1QixvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUFGeEQsZ0JBQVcsR0FBVSx1QkFBVSxDQUFDLGlCQUFpQixDQUFDO0lBRVcsQ0FBQztJQUU5RCw4Q0FBb0IsR0FBcEI7UUFDRyxNQUFNLENBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNWLFdBQVcsRUFBQyxJQUFJLENBQUMsV0FBVztZQUM1QixRQUFRLEVBQUM7Z0JBQ0osbUJBQW1CLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDO2FBQ3BFO1NBQ0osQ0FBQyxDQUFDO0lBRWYsQ0FBQztJQUVELHdDQUFjLEdBQWQsVUFBZSxZQUF5QjtJQU14QyxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBO0FBdEJZLGVBQWU7SUFEM0IsaUJBQVUsRUFBRTtxQ0FHbUIsYUFBSztRQUNJLDJDQUFtQjtHQUgvQyxlQUFlLENBc0IzQjtBQXRCWSwwQ0FBZSIsImZpbGUiOiJhcHAvYnVzaW5lc3MtbGF5ZXIvYnJva2VyYWdlL25ncngtc3R1YnMvYnJva2VyLmdyaWQuc3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XG5cbmltcG9ydCB7IEJyb2tlckFjdGlvbkJ1aWxkZXIgfSAgZnJvbSAnLi4vLi4vcHVic3ViLWJyb2tlci9zZXJ2aWNlcy9icm9rZXIuYWN0aW9uLmJ1aWxkZXInO1xuaW1wb3J0IHsgQnJva2VyQWN0aW9uICB9IGZyb20gJy4uLy4uL3B1YnN1Yi1icm9rZXIvbW9kZWxzL2Jyb2tlci5hY3Rpb24ubW9kZWwnXG5pbXBvcnQgKiBhcyBmcm9tUm9vdCBmcm9tICcuLi8uLi8uLi9kYXRhLWxheWVyL25ncngtZGF0YS9yZWR1Y2Vycy9pbmRleCc7XG5pbXBvcnQgKiBhcyBnYXJtZW50QWN0aW9ucyBmcm9tICcuLi8uLi8uLi9kYXRhLWxheWVyL25ncngtZGF0YS9hY3Rpb25zL2dhcm1lbnQuYWN0aW9ucyc7XG5pbXBvcnQgeyBCcm9rZXJMaXN0IH0gZnJvbSAnLi9icm9rZXJsaXN0JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnJva2VyR3JpZFN0b3JlIHtcbiAgICBicm9rZXJMYWJlbDpzdHJpbmcgPSBCcm9rZXJMaXN0LkJST0tFUl9HUklEX1NUT1JFO1xuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIHN0b3JlOiBTdG9yZTxmcm9tUm9vdC5TdGF0ZT4sXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgYnJrckFjdG5CdWlsZGVyOkJyb2tlckFjdGlvbkJ1aWxkZXIgKSB7IH1cblxuICAgIGdldENvbXBvbmVudFN1cHBsaWVzKCk6YW55e1xuICAgICAgIHJldHVybiAgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgYnJva2VyTGFiZWw6dGhpcy5icm9rZXJMYWJlbCxcbiAgICAgICAgICAgICAgICAgICBzdG9yZU9iczp7XG4gICAgICAgICAgICAgICAgICAgICAgICBicm9rZXJHYXJtZW50U3Vic2V0OiB0aGlzLnN0b3JlLnNlbGVjdChmcm9tUm9vdC5nZXRDdXJyZW50U3ViU2V0KSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGRpc3BhdGNoQWN0aW9uKGJyb2tlckFjdGlvbjpCcm9rZXJBY3Rpb24pOnZvaWQge1xuICAgICAgICAvLyBzd2l0Y2goYnJva2VyQWN0aW9uLmFjdGlvblR5cGUpe1xuICAgICAgICAvLyAgICAgY2FzZSBMYXlvdXRBY3Rpb25UeXBlcy5ISURFX0xPR0lOX0RJQUxPRzpcbiAgICAgICAgLy8gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgbGF5b3V0QWN0aW9ucy5IaWRlTG9naW5EaWFsb2coKSk7XG4gICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgLy8gfVxuICAgIH1cbn1cblxuXG4iXX0=
