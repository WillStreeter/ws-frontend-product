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
var userSessionAction = require("../../../data-layer/ngrx-data/actions/usersession.actions");
var UserSessionActionTypes = require("../../shared-types/actions/usersession.action.types");
var brokerlist_1 = require("./brokerlist");
var BrokerLoginStore = (function () {
    function BrokerLoginStore(store, brkrActnBuilder) {
        this.store = store;
        this.brkrActnBuilder = brkrActnBuilder;
        this.brokerLabel = brokerlist_1.BrokerList.BROKER_LOGIN_STORE;
    }
    BrokerLoginStore.prototype.getComponentSupplies = function () {
        return Object.assign({
            brokerLabel: this.brokerLabel,
            storeObs: {
                layoutState$: this.store.select(fromRoot.getLayoutState),
                userSessionState$: this.store.select(fromRoot.getUsersessionState)
            },
            storeDsp: {
                LOGIN_USER_ATTEMPT: this.brkrActnBuilder.create(UserSessionActionTypes.LOGIN_USER_ATTEMPT, this.brokerLabel, null)
            }
        });
    };
    BrokerLoginStore.prototype.dispatchAction = function (brokerAction) {
        switch (brokerAction.actionType) {
            case UserSessionActionTypes.LOGIN_USER_ATTEMPT:
                this.store.dispatch(new userSessionAction.UserLoginAttempt(brokerAction.payLoad));
                break;
        }
    };
    return BrokerLoginStore;
}());
BrokerLoginStore = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store,
        broker_action_builder_1.BrokerActionBuilder])
], BrokerLoginStore);
exports.BrokerLoginStore = BrokerLoginStore;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9idXNpbmVzcy1sYXllci9icm9rZXJhZ2UvbmdyeC1zdHVicy9icm9rZXIubG9naW4uc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFJQSxzQ0FBeUM7QUFDekMscUNBQW9DO0FBRXBDLDRGQUEwRjtBQUUxRix1RUFBeUU7QUFHekUsNkZBQStGO0FBQy9GLDRGQUE4RjtBQUM5RiwyQ0FBMEM7QUFJMUMsSUFBYSxnQkFBZ0I7SUFFekIsMEJBQXFCLEtBQTRCLEVBQzVCLGVBQW1DO1FBRG5DLFVBQUssR0FBTCxLQUFLLENBQXVCO1FBQzVCLG9CQUFlLEdBQWYsZUFBZSxDQUFvQjtRQUZ4RCxnQkFBVyxHQUFVLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7SUFFVSxDQUFDO0lBRTlELCtDQUFvQixHQUFwQjtRQUNHLE1BQU0sQ0FBRSxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ1YsV0FBVyxFQUFDLElBQUksQ0FBQyxXQUFXO1lBQzVCLFFBQVEsRUFBQztnQkFDTCxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQztnQkFDeEQsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDO2FBQ2xFO1lBQ0osUUFBUSxFQUFDO2dCQUNMLGtCQUFrQixFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFHLHNCQUFzQixDQUFDLGtCQUFrQixFQUNwRCxJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUM7YUFDM0M7U0FDRixDQUFDLENBQUM7SUFFbkIsQ0FBQztJQUVELHlDQUFjLEdBQWQsVUFBZSxZQUF5QjtRQUNwQyxNQUFNLENBQUEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQztZQUM1QixLQUFLLHNCQUFzQixDQUFDLGtCQUFrQjtnQkFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDdkYsS0FBSyxDQUFDO1FBQ1YsQ0FBQztJQUNMLENBQUM7SUFHTCx1QkFBQztBQUFELENBOUJBLEFBOEJDLElBQUE7QUE5QlksZ0JBQWdCO0lBRDVCLGlCQUFVLEVBQUU7cUNBR21CLGFBQUs7UUFDSSwyQ0FBbUI7R0FIL0MsZ0JBQWdCLENBOEI1QjtBQTlCWSw0Q0FBZ0IiLCJmaWxlIjoiYXBwL2J1c2luZXNzLWxheWVyL2Jyb2tlcmFnZS9uZ3J4LXN0dWJzL2Jyb2tlci5sb2dpbi5zdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB3aWxsc3RyZWV0ZXIgb24gNS8yMy8xNy5cbiAqL1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xuXG5pbXBvcnQgeyBCcm9rZXJBY3Rpb25CdWlsZGVyIH0gIGZyb20gJy4uLy4uL3B1YnN1Yi1icm9rZXIvc2VydmljZXMvYnJva2VyLmFjdGlvbi5idWlsZGVyJztcbmltcG9ydCB7IEJyb2tlckFjdGlvbiAgfSBmcm9tICcuLi8uLi9wdWJzdWItYnJva2VyL21vZGVscy9icm9rZXIuYWN0aW9uLm1vZGVsJ1xuaW1wb3J0ICogYXMgZnJvbVJvb3QgZnJvbSAnLi4vLi4vLi4vZGF0YS1sYXllci9uZ3J4LWRhdGEvcmVkdWNlcnMvaW5kZXgnO1xuaW1wb3J0ICogYXMgbGF5b3V0QWN0aW9ucyBmcm9tICcuLi8uLi8uLi9kYXRhLWxheWVyL25ncngtZGF0YS9hY3Rpb25zL2xheW91dC5hY3Rpb25zJztcbmltcG9ydCAqIGFzIExheW91dEFjdGlvblR5cGVzIGZyb20gJy4uLy4uL3NoYXJlZC10eXBlcy9hY3Rpb25zL2xheW91dC5hY3Rpb24udHlwZXMnO1xuaW1wb3J0ICogYXMgdXNlclNlc3Npb25BY3Rpb24gZnJvbSAnLi4vLi4vLi4vZGF0YS1sYXllci9uZ3J4LWRhdGEvYWN0aW9ucy91c2Vyc2Vzc2lvbi5hY3Rpb25zJztcbmltcG9ydCAqIGFzIFVzZXJTZXNzaW9uQWN0aW9uVHlwZXMgZnJvbSAnLi4vLi4vc2hhcmVkLXR5cGVzL2FjdGlvbnMvdXNlcnNlc3Npb24uYWN0aW9uLnR5cGVzJztcbmltcG9ydCB7IEJyb2tlckxpc3QgfSBmcm9tICcuL2Jyb2tlcmxpc3QnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCcm9rZXJMb2dpblN0b3JlIHtcbiAgICBicm9rZXJMYWJlbDpzdHJpbmcgPSBCcm9rZXJMaXN0LkJST0tFUl9MT0dJTl9TVE9SRTtcbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBzdG9yZTogU3RvcmU8ZnJvbVJvb3QuU3RhdGU+LFxuICAgICAgICAgICAgICAgICBwcml2YXRlIGJya3JBY3RuQnVpbGRlcjpCcm9rZXJBY3Rpb25CdWlsZGVyICkgeyB9XG5cbiAgICBnZXRDb21wb25lbnRTdXBwbGllcygpOmFueXtcbiAgICAgICByZXR1cm4gIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgIGJyb2tlckxhYmVsOnRoaXMuYnJva2VyTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgc3RvcmVPYnM6e1xuICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXRTdGF0ZSQ6IHRoaXMuc3RvcmUuc2VsZWN0KGZyb21Sb290LmdldExheW91dFN0YXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgdXNlclNlc3Npb25TdGF0ZSQ6IHRoaXMuc3RvcmUuc2VsZWN0KGZyb21Sb290LmdldFVzZXJzZXNzaW9uU3RhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICBzdG9yZURzcDp7XG4gICAgICAgICAgICAgICAgICAgICAgIExPR0lOX1VTRVJfQVRURU1QVDp0aGlzLmJya3JBY3RuQnVpbGRlci5jcmVhdGUoICBVc2VyU2Vzc2lvbkFjdGlvblR5cGVzLkxPR0lOX1VTRVJfQVRURU1QVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJyb2tlckxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGRpc3BhdGNoQWN0aW9uKGJyb2tlckFjdGlvbjpCcm9rZXJBY3Rpb24pOnZvaWQge1xuICAgICAgICBzd2l0Y2goYnJva2VyQWN0aW9uLmFjdGlvblR5cGUpe1xuICAgICAgICAgICAgY2FzZSBVc2VyU2Vzc2lvbkFjdGlvblR5cGVzLkxPR0lOX1VTRVJfQVRURU1QVDpcbiAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgdXNlclNlc3Npb25BY3Rpb24uVXNlckxvZ2luQXR0ZW1wdChicm9rZXJBY3Rpb24ucGF5TG9hZCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuXG4iXX0=
