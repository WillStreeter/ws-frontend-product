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
var BrokerProfileStore = (function () {
    function BrokerProfileStore(store, brkrActnBuilder) {
        this.store = store;
        this.brkrActnBuilder = brkrActnBuilder;
        this.brokerLabel = brokerlist_1.BrokerList.BROKER_PROFILE_STORE;
    }
    BrokerProfileStore.prototype.getComponentSupplies = function () {
        return Object.assign({
            brokerLabel: this.brokerLabel,
            storeObs: {
                userProfile$: this.store.select(fromRoot.getSelectedProfile)
            },
            storeDsp: {
                GET_USER_PROFILE_ATTEMPT: this.brkrActnBuilder.create(ProfileActionTypes.GET_USER_PROFILE_ATTEMPT, this.brokerLabel, null)
            }
        });
    };
    BrokerProfileStore.prototype.dispatchAction = function (brokerAction) {
        switch (brokerAction.actionType) {
            case ProfileActionTypes.GET_USER_PROFILE_ATTEMPT:
                this.store.dispatch(new profileActions.GetUserProfileAttempt(brokerAction.payLoad));
                break;
        }
    };
    return BrokerProfileStore;
}());
BrokerProfileStore = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store,
        broker_action_builder_1.BrokerActionBuilder])
], BrokerProfileStore);
exports.BrokerProfileStore = BrokerProfileStore;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9idXNpbmVzcy1sYXllci9icm9rZXJhZ2UvbmdyeC1zdHVicy9icm9rZXIucHJvZmlsZS5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUlBLHNDQUF5QztBQUN6QyxxQ0FBb0M7QUFFcEMsNEZBQTBGO0FBRTFGLHVFQUF5RTtBQUN6RSxzRkFBd0Y7QUFDeEYsb0ZBQXNGO0FBQ3RGLDJDQUEwQztBQUcxQyxJQUFhLGtCQUFrQjtJQUUzQiw0QkFBcUIsS0FBNEIsRUFDNUIsZUFBbUM7UUFEbkMsVUFBSyxHQUFMLEtBQUssQ0FBdUI7UUFDNUIsb0JBQWUsR0FBZixlQUFlLENBQW9CO1FBRnhELGdCQUFXLEdBQVUsdUJBQVUsQ0FBQyxvQkFBb0IsQ0FBQztJQUVRLENBQUM7SUFFOUQsaURBQW9CLEdBQXBCO1FBQ0csTUFBTSxDQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDVixXQUFXLEVBQUMsSUFBSSxDQUFDLFdBQVc7WUFDNUIsUUFBUSxFQUFDO2dCQUNMLFlBQVksRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUM7YUFDM0Q7WUFDSixRQUFRLEVBQUM7Z0JBQ0wsd0JBQXdCLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUUsa0JBQWtCLENBQUMsd0JBQXdCLEVBQzdELElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQzthQUN6QztTQUNGLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRUQsMkNBQWMsR0FBZCxVQUFlLFlBQXlCO1FBQ3BDLE1BQU0sQ0FBQSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQSxDQUFDO1lBQzVCLEtBQUssa0JBQWtCLENBQUMsd0JBQXdCO2dCQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDekYsS0FBSyxDQUFDO1FBQ1YsQ0FBQztJQUNMLENBQUM7SUFHTCx5QkFBQztBQUFELENBNUJBLEFBNEJDLElBQUE7QUE1Qlksa0JBQWtCO0lBRDlCLGlCQUFVLEVBQUU7cUNBR21CLGFBQUs7UUFDSSwyQ0FBbUI7R0FIL0Msa0JBQWtCLENBNEI5QjtBQTVCWSxnREFBa0IiLCJmaWxlIjoiYXBwL2J1c2luZXNzLWxheWVyL2Jyb2tlcmFnZS9uZ3J4LXN0dWJzL2Jyb2tlci5wcm9maWxlLnN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHdpbGxzdHJlZXRlciBvbiA1LzIzLzE3LlxuICovXG5cbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XG5cbmltcG9ydCB7IEJyb2tlckFjdGlvbkJ1aWxkZXIgfSAgZnJvbSAnLi4vLi4vcHVic3ViLWJyb2tlci9zZXJ2aWNlcy9icm9rZXIuYWN0aW9uLmJ1aWxkZXInO1xuaW1wb3J0IHsgQnJva2VyQWN0aW9uICB9IGZyb20gJy4uLy4uL3B1YnN1Yi1icm9rZXIvbW9kZWxzL2Jyb2tlci5hY3Rpb24ubW9kZWwnXG5pbXBvcnQgKiBhcyBmcm9tUm9vdCBmcm9tICcuLi8uLi8uLi9kYXRhLWxheWVyL25ncngtZGF0YS9yZWR1Y2Vycy9pbmRleCc7XG5pbXBvcnQgKiBhcyBwcm9maWxlQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9kYXRhLWxheWVyL25ncngtZGF0YS9hY3Rpb25zL3Byb2ZpbGUuYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBQcm9maWxlQWN0aW9uVHlwZXMgZnJvbSAnLi4vLi4vc2hhcmVkLXR5cGVzL2FjdGlvbnMvcHJvZmlsZS5hY3Rpb24udHlwZXMnO1xuaW1wb3J0IHsgQnJva2VyTGlzdCB9IGZyb20gJy4vYnJva2VybGlzdCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCcm9rZXJQcm9maWxlU3RvcmUge1xuICAgIGJyb2tlckxhYmVsOnN0cmluZyA9IEJyb2tlckxpc3QuQlJPS0VSX1BST0ZJTEVfU1RPUkU7XG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgc3RvcmU6IFN0b3JlPGZyb21Sb290LlN0YXRlPixcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBicmtyQWN0bkJ1aWxkZXI6QnJva2VyQWN0aW9uQnVpbGRlciApIHsgfVxuXG4gICAgZ2V0Q29tcG9uZW50U3VwcGxpZXMoKTphbnl7XG4gICAgICAgcmV0dXJuICBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICBicm9rZXJMYWJlbDp0aGlzLmJyb2tlckxhYmVsLFxuICAgICAgICAgICAgICAgICAgIHN0b3JlT2JzOntcbiAgICAgICAgICAgICAgICAgICAgICAgdXNlclByb2ZpbGUkOnRoaXMuc3RvcmUuc2VsZWN0KGZyb21Sb290LmdldFNlbGVjdGVkUHJvZmlsZSlcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgIHN0b3JlRHNwOntcbiAgICAgICAgICAgICAgICAgICAgICAgR0VUX1VTRVJfUFJPRklMRV9BVFRFTVBUOnRoaXMuYnJrckFjdG5CdWlsZGVyLmNyZWF0ZSggUHJvZmlsZUFjdGlvblR5cGVzLkdFVF9VU0VSX1BST0ZJTEVfQVRURU1QVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5icm9rZXJMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRpc3BhdGNoQWN0aW9uKGJyb2tlckFjdGlvbjpCcm9rZXJBY3Rpb24pOnZvaWQge1xuICAgICAgICBzd2l0Y2goYnJva2VyQWN0aW9uLmFjdGlvblR5cGUpe1xuICAgICAgICAgICAgY2FzZSBQcm9maWxlQWN0aW9uVHlwZXMuR0VUX1VTRVJfUFJPRklMRV9BVFRFTVBUOlxuICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBwcm9maWxlQWN0aW9ucy5HZXRVc2VyUHJvZmlsZUF0dGVtcHQoYnJva2VyQWN0aW9uLnBheUxvYWQpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbiJdfQ==
