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
var layoutActions = require("../../../data-layer/ngrx-data/actions/layout.actions");
var LayoutActionTypes = require("../../shared-types/actions/layout.action.types");
var userSessionAction = require("../../../data-layer/ngrx-data/actions/usersession.actions");
var UserSessionActionTypes = require("../../shared-types/actions/usersession.action.types");
var brokerlist_1 = require("./brokerlist");
var BrokerNavStore = (function () {
    function BrokerNavStore(store, brkrActnBuilder) {
        this.store = store;
        this.brkrActnBuilder = brkrActnBuilder;
        this.brokerLabel = brokerlist_1.BrokerList.BROKER_NAV_STORE;
    }
    BrokerNavStore.prototype.getComponentSupplies = function () {
        return Object.assign({
            brokerLabel: this.brokerLabel,
            storeObs: {
                hasLoggedInUser$: this.store.select(fromRoot.hasLoggedInUser),
                usersessionState$: this.store.select(fromRoot.getUsersessionState)
            },
            storeDsp: {
                SHOW_LOGIN_DIALOG: this.brkrActnBuilder.create(LayoutActionTypes.SHOW_LOGIN_DIALOG, this.brokerLabel, null),
                LOGOUT_USER_ATTEMPT: this.brkrActnBuilder.create(UserSessionActionTypes.LOGOUT_USER_ATTEMPT, this.brokerLabel, null)
            }
        });
    };
    BrokerNavStore.prototype.dispatchAction = function (brokerAction) {
        switch (brokerAction.actionType) {
            case LayoutActionTypes.SHOW_LOGIN_DIALOG:
                this.store.dispatch(new layoutActions.ShowLoginDialog());
                break;
            case UserSessionActionTypes.LOGOUT_USER_ATTEMPT:
                this.store.dispatch(new userSessionAction.UserLogoutAttempt());
                break;
        }
    };
    return BrokerNavStore;
}());
BrokerNavStore = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store,
        broker_action_builder_1.BrokerActionBuilder])
], BrokerNavStore);
exports.BrokerNavStore = BrokerNavStore;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9idXNpbmVzcy1sYXllci9icm9rZXJhZ2UvbmdyeC1zdHVicy9icm9rZXIubmF2LnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0Esc0NBQXlDO0FBQ3pDLHFDQUFvQztBQUVwQyw0RkFBMEY7QUFFMUYsdUVBQXlFO0FBQ3pFLG9GQUFzRjtBQUN0RixrRkFBb0Y7QUFDcEYsNkZBQStGO0FBQy9GLDRGQUE4RjtBQUM5RiwyQ0FBMEM7QUFHMUMsSUFBYSxjQUFjO0lBRXZCLHdCQUFxQixLQUE0QixFQUM1QixlQUFtQztRQURuQyxVQUFLLEdBQUwsS0FBSyxDQUF1QjtRQUM1QixvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUFGeEQsZ0JBQVcsR0FBVSx1QkFBVSxDQUFDLGdCQUFnQixDQUFDO0lBRVksQ0FBQztJQUU5RCw2Q0FBb0IsR0FBcEI7UUFDRyxNQUFNLENBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNWLFdBQVcsRUFBQyxJQUFJLENBQUMsV0FBVztZQUM1QixRQUFRLEVBQUM7Z0JBQ0wsZ0JBQWdCLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztnQkFDNUQsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDO2FBQ2xFO1lBQ0osUUFBUSxFQUFDO2dCQUNMLGlCQUFpQixFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFFLGlCQUFpQixDQUFDLGlCQUFpQixFQUM5QyxJQUFJLENBQUMsV0FBVyxFQUNqQixJQUFJLENBQUM7Z0JBQ3hDLG1CQUFtQixFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFFLHNCQUFzQixDQUFDLG1CQUFtQixFQUN0RCxJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUM7YUFDMUM7U0FDRixDQUFDLENBQUM7SUFFbkIsQ0FBQztJQUVELHVDQUFjLEdBQWQsVUFBZSxZQUF5QjtRQUNwQyxNQUFNLENBQUEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQztZQUM1QixLQUFLLGlCQUFpQixDQUFDLGlCQUFpQjtnQkFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxhQUFhLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztnQkFDOUQsS0FBSyxDQUFDO1lBQ04sS0FBSyxzQkFBc0IsQ0FBQyxtQkFBbUI7Z0JBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO2dCQUNwRSxLQUFLLENBQUM7UUFDVixDQUFDO0lBQ0wsQ0FBQztJQUdMLHFCQUFDO0FBQUQsQ0FwQ0EsQUFvQ0MsSUFBQTtBQXBDWSxjQUFjO0lBRDFCLGlCQUFVLEVBQUU7cUNBR21CLGFBQUs7UUFDSSwyQ0FBbUI7R0FIL0MsY0FBYyxDQW9DMUI7QUFwQ1ksd0NBQWMiLCJmaWxlIjoiYXBwL2J1c2luZXNzLWxheWVyL2Jyb2tlcmFnZS9uZ3J4LXN0dWJzL2Jyb2tlci5uYXYuc3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XG5cbmltcG9ydCB7IEJyb2tlckFjdGlvbkJ1aWxkZXIgfSAgZnJvbSAnLi4vLi4vcHVic3ViLWJyb2tlci9zZXJ2aWNlcy9icm9rZXIuYWN0aW9uLmJ1aWxkZXInO1xuaW1wb3J0IHsgQnJva2VyQWN0aW9uICB9IGZyb20gJy4uLy4uL3B1YnN1Yi1icm9rZXIvbW9kZWxzL2Jyb2tlci5hY3Rpb24ubW9kZWwnXG5pbXBvcnQgKiBhcyBmcm9tUm9vdCBmcm9tICcuLi8uLi8uLi9kYXRhLWxheWVyL25ncngtZGF0YS9yZWR1Y2Vycy9pbmRleCc7XG5pbXBvcnQgKiBhcyBsYXlvdXRBY3Rpb25zIGZyb20gJy4uLy4uLy4uL2RhdGEtbGF5ZXIvbmdyeC1kYXRhL2FjdGlvbnMvbGF5b3V0LmFjdGlvbnMnO1xuaW1wb3J0ICogYXMgTGF5b3V0QWN0aW9uVHlwZXMgZnJvbSAnLi4vLi4vc2hhcmVkLXR5cGVzL2FjdGlvbnMvbGF5b3V0LmFjdGlvbi50eXBlcyc7XG5pbXBvcnQgKiBhcyB1c2VyU2Vzc2lvbkFjdGlvbiBmcm9tICcuLi8uLi8uLi9kYXRhLWxheWVyL25ncngtZGF0YS9hY3Rpb25zL3VzZXJzZXNzaW9uLmFjdGlvbnMnO1xuaW1wb3J0ICogYXMgVXNlclNlc3Npb25BY3Rpb25UeXBlcyBmcm9tICcuLi8uLi9zaGFyZWQtdHlwZXMvYWN0aW9ucy91c2Vyc2Vzc2lvbi5hY3Rpb24udHlwZXMnO1xuaW1wb3J0IHsgQnJva2VyTGlzdCB9IGZyb20gJy4vYnJva2VybGlzdCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCcm9rZXJOYXZTdG9yZSB7XG4gICAgYnJva2VyTGFiZWw6c3RyaW5nID0gQnJva2VyTGlzdC5CUk9LRVJfTkFWX1NUT1JFO1xuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIHN0b3JlOiBTdG9yZTxmcm9tUm9vdC5TdGF0ZT4sXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgYnJrckFjdG5CdWlsZGVyOkJyb2tlckFjdGlvbkJ1aWxkZXIgKSB7IH1cblxuICAgIGdldENvbXBvbmVudFN1cHBsaWVzKCk6YW55e1xuICAgICAgIHJldHVybiAgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgYnJva2VyTGFiZWw6dGhpcy5icm9rZXJMYWJlbCxcbiAgICAgICAgICAgICAgICAgICBzdG9yZU9iczp7XG4gICAgICAgICAgICAgICAgICAgICAgIGhhc0xvZ2dlZEluVXNlciQ6dGhpcy5zdG9yZS5zZWxlY3QoZnJvbVJvb3QuaGFzTG9nZ2VkSW5Vc2VyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgdXNlcnNlc3Npb25TdGF0ZSQ6IHRoaXMuc3RvcmUuc2VsZWN0KGZyb21Sb290LmdldFVzZXJzZXNzaW9uU3RhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICBzdG9yZURzcDp7XG4gICAgICAgICAgICAgICAgICAgICAgIFNIT1dfTE9HSU5fRElBTE9HOnRoaXMuYnJrckFjdG5CdWlsZGVyLmNyZWF0ZSggTGF5b3V0QWN0aW9uVHlwZXMuU0hPV19MT0dJTl9ESUFMT0csXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnJva2VyTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCksXG4gICAgICAgICAgICAgICAgICAgICAgIExPR09VVF9VU0VSX0FUVEVNUFQ6dGhpcy5icmtyQWN0bkJ1aWxkZXIuY3JlYXRlKCBVc2VyU2Vzc2lvbkFjdGlvblR5cGVzLkxPR09VVF9VU0VSX0FUVEVNUFQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJyb2tlckxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZGlzcGF0Y2hBY3Rpb24oYnJva2VyQWN0aW9uOkJyb2tlckFjdGlvbik6dm9pZCB7XG4gICAgICAgIHN3aXRjaChicm9rZXJBY3Rpb24uYWN0aW9uVHlwZSl7XG4gICAgICAgICAgICBjYXNlIExheW91dEFjdGlvblR5cGVzLlNIT1dfTE9HSU5fRElBTE9HOlxuICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBsYXlvdXRBY3Rpb25zLlNob3dMb2dpbkRpYWxvZygpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBVc2VyU2Vzc2lvbkFjdGlvblR5cGVzLkxPR09VVF9VU0VSX0FUVEVNUFQ6XG4gICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IHVzZXJTZXNzaW9uQWN0aW9uLlVzZXJMb2dvdXRBdHRlbXB0KCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuIl19
