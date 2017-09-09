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
var profileActions = require("../../../data-layer/ngrx-data/actions/profile.actions");
var ProfileActionTypes = require("../../shared-types/actions/profile.action.types");
var brokerlist_1 = require("./brokerlist");
var BrokerRegistrationStore = (function () {
    function BrokerRegistrationStore(store, brkrActnBuilder) {
        this.store = store;
        this.brkrActnBuilder = brkrActnBuilder;
        this.brokerLabel = brokerlist_1.BrokerList.BROKER_REGISTRATION_STORE;
    }
    BrokerRegistrationStore.prototype.getComponentSupplies = function () {
        return Object.assign({
            brokerLabel: this.brokerLabel,
            storeObs: {
                layoutRequestedUrl$: this.store.select(fromRoot.getRequestedURL),
                profileState$: this.store.select(fromRoot.getProfilesState),
                hasLoggedInUser$: this.store.select(fromRoot.hasLoggedInUser)
            },
            storeDsp: {
                RESET_USER_PROFILE_NAME_VALID: this.brkrActnBuilder.create(ProfileActionTypes.RESET_USER_PROFILE_NAME_VALID, this.brokerLabel, null),
                REGISTER_USER_ATTEMPT: this.brkrActnBuilder.create(ProfileActionTypes.REGISTER_USER_ATTEMPT, this.brokerLabel, null),
                CHECK_USER_PROFILE_NAME_ATTEMPT: this.brkrActnBuilder.create(ProfileActionTypes.CHECK_USER_PROFILE_NAME_ATTEMPT, this.brokerLabel, null)
            }
        });
    };
    BrokerRegistrationStore.prototype.dispatchAction = function (brokerAction) {
        switch (brokerAction.actionType) {
            case ProfileActionTypes.RESET_USER_PROFILE_NAME_VALID:
                this.store.dispatch(new profileActions.ResetUserNameVailid());
                break;
            case ProfileActionTypes.REGISTER_USER_ATTEMPT:
                this.store.dispatch(new profileActions.UserRegistrationAttempt(brokerAction.payLoad));
                break;
            case ProfileActionTypes.CHECK_USER_PROFILE_NAME_ATTEMPT:
                this.store.dispatch(new profileActions.CheckUserProfileNameAttempt(brokerAction.payLoad));
                break;
        }
    };
    return BrokerRegistrationStore;
}());
BrokerRegistrationStore = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store,
        broker_action_builder_1.BrokerActionBuilder])
], BrokerRegistrationStore);
exports.BrokerRegistrationStore = BrokerRegistrationStore;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9idXNpbmVzcy1sYXllci9icm9rZXJhZ2UvbmdyeC1zdHVicy9icm9rZXIucmVnaXN0cmF0aW9uLnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBSUEsc0NBQXlDO0FBQ3pDLHFDQUFvQztBQUNwQyw0RkFBeUY7QUFFekYsdUVBQXlFO0FBQ3pFLHNGQUF3RjtBQUN4RixvRkFBc0Y7QUFDdEYsMkNBQTBDO0FBRzFDLElBQWEsdUJBQXVCO0lBRWhDLGlDQUFxQixLQUE0QixFQUM1QixlQUFtQztRQURuQyxVQUFLLEdBQUwsS0FBSyxDQUF1QjtRQUM1QixvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUFGeEQsZ0JBQVcsR0FBVSx1QkFBVSxDQUFDLHlCQUF5QixDQUFDO0lBRUcsQ0FBQztJQUU5RCxzREFBb0IsR0FBcEI7UUFDRyxNQUFNLENBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNWLFdBQVcsRUFBQyxJQUFJLENBQUMsV0FBVztZQUM1QixRQUFRLEVBQUM7Z0JBQ0wsbUJBQW1CLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztnQkFDL0QsYUFBYSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDMUQsZ0JBQWdCLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQzthQUM1RDtZQUNKLFFBQVEsRUFBQztnQkFDTCw2QkFBNkIsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBRyxrQkFBa0IsQ0FBQyw2QkFBNkIsRUFDeEUsSUFBSSxDQUFDLFdBQVcsRUFDakIsSUFBSSxDQUFDO2dCQUN4QyxxQkFBcUIsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBRSxrQkFBa0IsQ0FBQyxxQkFBcUIsRUFDdEQsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDO2dCQUMxQywrQkFBK0IsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBRSxrQkFBa0IsQ0FBQywrQkFBK0IsRUFDMUUsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDO2FBQzFDO1NBQ0YsQ0FBQyxDQUFDO0lBRW5CLENBQUM7SUFFRCxnREFBYyxHQUFkLFVBQWUsWUFBeUI7UUFDcEMsTUFBTSxDQUFBLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFBLENBQUM7WUFDNUIsS0FBSyxrQkFBa0IsQ0FBQyw2QkFBNkI7Z0JBQ2hELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksY0FBYyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztnQkFDbkUsS0FBSyxDQUFDO1lBQ04sS0FBSyxrQkFBa0IsQ0FBQyxxQkFBcUI7Z0JBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksY0FBYyxDQUFDLHVCQUF1QixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUMzRixLQUFLLENBQUM7WUFDTixLQUFLLGtCQUFrQixDQUFDLCtCQUErQjtnQkFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxjQUFjLENBQUMsMkJBQTJCLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQy9GLEtBQUssQ0FBQztRQUNWLENBQUM7SUFDTCxDQUFDO0lBR0wsOEJBQUM7QUFBRCxDQTNDQSxBQTJDQyxJQUFBO0FBM0NZLHVCQUF1QjtJQURuQyxpQkFBVSxFQUFFO3FDQUdtQixhQUFLO1FBQ0ksMkNBQW1CO0dBSC9DLHVCQUF1QixDQTJDbkM7QUEzQ1ksMERBQXVCIiwiZmlsZSI6ImFwcC9idXNpbmVzcy1sYXllci9icm9rZXJhZ2UvbmdyeC1zdHVicy9icm9rZXIucmVnaXN0cmF0aW9uLnN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHdpbGxzdHJlZXRlciBvbiA1LzIzLzE3LlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XG5pbXBvcnQgeyBCcm9rZXJBY3Rpb25CdWlsZGVyfSAgZnJvbSAnLi4vLi4vcHVic3ViLWJyb2tlci9zZXJ2aWNlcy9icm9rZXIuYWN0aW9uLmJ1aWxkZXInO1xuaW1wb3J0IHsgQnJva2VyQWN0aW9uICB9IGZyb20gJy4uLy4uL3B1YnN1Yi1icm9rZXIvbW9kZWxzL2Jyb2tlci5hY3Rpb24ubW9kZWwnXG5pbXBvcnQgKiBhcyBmcm9tUm9vdCBmcm9tICcuLi8uLi8uLi9kYXRhLWxheWVyL25ncngtZGF0YS9yZWR1Y2Vycy9pbmRleCc7XG5pbXBvcnQgKiBhcyBwcm9maWxlQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9kYXRhLWxheWVyL25ncngtZGF0YS9hY3Rpb25zL3Byb2ZpbGUuYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBQcm9maWxlQWN0aW9uVHlwZXMgZnJvbSAnLi4vLi4vc2hhcmVkLXR5cGVzL2FjdGlvbnMvcHJvZmlsZS5hY3Rpb24udHlwZXMnO1xuaW1wb3J0IHsgQnJva2VyTGlzdCB9IGZyb20gJy4vYnJva2VybGlzdCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCcm9rZXJSZWdpc3RyYXRpb25TdG9yZSB7XG4gICAgYnJva2VyTGFiZWw6c3RyaW5nID0gQnJva2VyTGlzdC5CUk9LRVJfUkVHSVNUUkFUSU9OX1NUT1JFO1xuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIHN0b3JlOiBTdG9yZTxmcm9tUm9vdC5TdGF0ZT4sXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgYnJrckFjdG5CdWlsZGVyOkJyb2tlckFjdGlvbkJ1aWxkZXIgKSB7IH1cblxuICAgIGdldENvbXBvbmVudFN1cHBsaWVzKCk6YW55e1xuICAgICAgIHJldHVybiAgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgICAgYnJva2VyTGFiZWw6dGhpcy5icm9rZXJMYWJlbCxcbiAgICAgICAgICAgICAgICAgICBzdG9yZU9iczp7XG4gICAgICAgICAgICAgICAgICAgICAgIGxheW91dFJlcXVlc3RlZFVybCQ6dGhpcy5zdG9yZS5zZWxlY3QoZnJvbVJvb3QuZ2V0UmVxdWVzdGVkVVJMKSxcbiAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZVN0YXRlJDp0aGlzLnN0b3JlLnNlbGVjdChmcm9tUm9vdC5nZXRQcm9maWxlc1N0YXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgaGFzTG9nZ2VkSW5Vc2VyJDp0aGlzLnN0b3JlLnNlbGVjdChmcm9tUm9vdC5oYXNMb2dnZWRJblVzZXIpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICBzdG9yZURzcDp7XG4gICAgICAgICAgICAgICAgICAgICAgIFJFU0VUX1VTRVJfUFJPRklMRV9OQU1FX1ZBTElEOnRoaXMuYnJrckFjdG5CdWlsZGVyLmNyZWF0ZSggIFByb2ZpbGVBY3Rpb25UeXBlcy5SRVNFVF9VU0VSX1BST0ZJTEVfTkFNRV9WQUxJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5icm9rZXJMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgUkVHSVNURVJfVVNFUl9BVFRFTVBUOnRoaXMuYnJrckFjdG5CdWlsZGVyLmNyZWF0ZSggUHJvZmlsZUFjdGlvblR5cGVzLlJFR0lTVEVSX1VTRVJfQVRURU1QVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnJva2VyTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgQ0hFQ0tfVVNFUl9QUk9GSUxFX05BTUVfQVRURU1QVDp0aGlzLmJya3JBY3RuQnVpbGRlci5jcmVhdGUoIFByb2ZpbGVBY3Rpb25UeXBlcy5DSEVDS19VU0VSX1BST0ZJTEVfTkFNRV9BVFRFTVBULFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5icm9rZXJMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGRpc3BhdGNoQWN0aW9uKGJyb2tlckFjdGlvbjpCcm9rZXJBY3Rpb24pOnZvaWQge1xuICAgICAgICBzd2l0Y2goYnJva2VyQWN0aW9uLmFjdGlvblR5cGUpe1xuICAgICAgICAgICAgY2FzZSBQcm9maWxlQWN0aW9uVHlwZXMuUkVTRVRfVVNFUl9QUk9GSUxFX05BTUVfVkFMSUQ6XG4gICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IHByb2ZpbGVBY3Rpb25zLlJlc2V0VXNlck5hbWVWYWlsaWQoKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUHJvZmlsZUFjdGlvblR5cGVzLlJFR0lTVEVSX1VTRVJfQVRURU1QVDpcbiAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgcHJvZmlsZUFjdGlvbnMuVXNlclJlZ2lzdHJhdGlvbkF0dGVtcHQoYnJva2VyQWN0aW9uLnBheUxvYWQpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQcm9maWxlQWN0aW9uVHlwZXMuQ0hFQ0tfVVNFUl9QUk9GSUxFX05BTUVfQVRURU1QVDpcbiAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgcHJvZmlsZUFjdGlvbnMuQ2hlY2tVc2VyUHJvZmlsZU5hbWVBdHRlbXB0KGJyb2tlckFjdGlvbi5wYXlMb2FkKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG4iXX0=
