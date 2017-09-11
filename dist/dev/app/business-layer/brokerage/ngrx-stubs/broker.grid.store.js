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
var garmentActions = require("../../../data-layer/ngrx-data/actions/garment.actions");
var portalActions = require("../../../data-layer/ngrx-data/actions/portal.actions");
var GarmentActionTypes = require("../../shared-types/actions/garment.action.types");
var PortalActionTypes = require("../../shared-types/actions/portal.action.types");
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
                brokerPortalState: this.store.select(fromRoot.getPortalState),
            },
            storeDsp: {
                UPDATE_SORT_STATE: this.brkrActnBuilder.create(PortalActionTypes.UPDATE_SORT_STATE, this.brokerLabel, null),
                UPDATE_GARMENT_IN_COLLECTION_ATTEMPT: this.brkrActnBuilder.create(GarmentActionTypes.UPDATE_GARMENT_IN_COLLECTION_ATTEMPT, this.brokerLabel, null),
                ADD_GARMENT_TO_COLLECTION_ATTEMPT: this.brkrActnBuilder.create(GarmentActionTypes.ADD_GARMENT_TO_COLLECTION_ATTEMPT, this.brokerLabel, null),
            }
        });
    };
    BrokerGridStore.prototype.dispatchAction = function (brokerAction) {
        switch (brokerAction.actionType) {
            case PortalActionTypes.UPDATE_SORT_STATE:
                console.log('BrokerGridStore  ---- dispatchAction =', brokerAction);
                this.store.dispatch(new portalActions.UpdateCurrentSortState(brokerAction.payLoad));
                break;
            case GarmentActionTypes.UPDATE_GARMENT_IN_COLLECTION_ATTEMPT:
                console.log('BrokerGridStore  ---- dispatchAction =', brokerAction);
                this.store.dispatch(new garmentActions.UpdateGarmentAttempt(brokerAction.payLoad));
                break;
            case GarmentActionTypes.ADD_GARMENT_TO_COLLECTION_ATTEMPT:
                console.log('BrokerGridStore  ---- dispatchAction =', brokerAction);
                this.store.dispatch(new garmentActions.AddGarmentToCollectionAttempt(brokerAction.payLoad));
                break;
        }
    };
    return BrokerGridStore;
}());
BrokerGridStore = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store,
        broker_action_builder_1.BrokerActionBuilder])
], BrokerGridStore);
exports.BrokerGridStore = BrokerGridStore;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9idXNpbmVzcy1sYXllci9icm9rZXJhZ2UvbmdyeC1zdHVicy9icm9rZXIuZ3JpZC5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxxQ0FBb0M7QUFFcEMsNEZBQTBGO0FBRTFGLHVFQUF5RTtBQUN6RSxzRkFBd0Y7QUFDeEYsb0ZBQXNGO0FBQ3RGLG9GQUFzRjtBQUN0RixrRkFBb0Y7QUFFcEYsMkNBQTBDO0FBSTFDLElBQWEsZUFBZTtJQUV4Qix5QkFBcUIsS0FBNEIsRUFDNUIsZUFBbUM7UUFEbkMsVUFBSyxHQUFMLEtBQUssQ0FBdUI7UUFDNUIsb0JBQWUsR0FBZixlQUFlLENBQW9CO1FBRnhELGdCQUFXLEdBQVUsdUJBQVUsQ0FBQyxpQkFBaUIsQ0FBQztJQUVXLENBQUM7SUFFOUQsOENBQW9CLEdBQXBCO1FBQ0csTUFBTSxDQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDVixXQUFXLEVBQUMsSUFBSSxDQUFDLFdBQVc7WUFDNUIsUUFBUSxFQUFDO2dCQUNKLG1CQUFtQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDakUsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQzthQUNoRTtZQUNGLFFBQVEsRUFBQztnQkFDTCxpQkFBaUIsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBRyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFDL0MsSUFBSSxDQUFDLFdBQVcsRUFDakIsSUFBSSxDQUFDO2dCQUV4QyxvQ0FBb0MsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FDM0Isa0JBQWtCLENBQUMsb0NBQW9DLEVBQ3ZELElBQUksQ0FBQyxXQUFXLEVBQ2YsSUFBSSxDQUFDO2dCQUUzQyxpQ0FBaUMsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FDeEIsa0JBQWtCLENBQUMsaUNBQWlDLEVBQ3BELElBQUksQ0FBQyxXQUFXLEVBQ2YsSUFBSSxDQUFDO2FBQzNDO1NBQ04sQ0FBQyxDQUFDO0lBRWYsQ0FBQztJQUVELHdDQUFjLEdBQWQsVUFBZSxZQUF5QjtRQUNuQyxNQUFNLENBQUEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQztZQUM1QixLQUFLLGlCQUFpQixDQUFDLGlCQUFpQjtnQkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsRUFBQyxZQUFZLENBQUMsQ0FBQTtnQkFDbEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxhQUFhLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3hGLEtBQUssQ0FBQztZQUNOLEtBQUssa0JBQWtCLENBQUMsb0NBQW9DO2dCQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxFQUFDLFlBQVksQ0FBQyxDQUFBO2dCQUNsRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDdkYsS0FBSyxDQUFDO1lBQ04sS0FBSyxrQkFBa0IsQ0FBQyxpQ0FBaUM7Z0JBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLEVBQUMsWUFBWSxDQUFDLENBQUE7Z0JBQ2xFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksY0FBYyxDQUFDLDZCQUE2QixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNoRyxLQUFLLENBQUM7UUFDVixDQUFDO0lBQ04sQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0EvQ0EsQUErQ0MsSUFBQTtBQS9DWSxlQUFlO0lBRDNCLGlCQUFVLEVBQUU7cUNBR21CLGFBQUs7UUFDSSwyQ0FBbUI7R0FIL0MsZUFBZSxDQStDM0I7QUEvQ1ksMENBQWUiLCJmaWxlIjoiYXBwL2J1c2luZXNzLWxheWVyL2Jyb2tlcmFnZS9uZ3J4LXN0dWJzL2Jyb2tlci5ncmlkLnN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xuXG5pbXBvcnQgeyBCcm9rZXJBY3Rpb25CdWlsZGVyIH0gIGZyb20gJy4uLy4uL3B1YnN1Yi1icm9rZXIvc2VydmljZXMvYnJva2VyLmFjdGlvbi5idWlsZGVyJztcbmltcG9ydCB7IEJyb2tlckFjdGlvbiAgfSBmcm9tICcuLi8uLi9wdWJzdWItYnJva2VyL21vZGVscy9icm9rZXIuYWN0aW9uLm1vZGVsJ1xuaW1wb3J0ICogYXMgZnJvbVJvb3QgZnJvbSAnLi4vLi4vLi4vZGF0YS1sYXllci9uZ3J4LWRhdGEvcmVkdWNlcnMvaW5kZXgnO1xuaW1wb3J0ICogYXMgZ2FybWVudEFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vZGF0YS1sYXllci9uZ3J4LWRhdGEvYWN0aW9ucy9nYXJtZW50LmFjdGlvbnMnO1xuaW1wb3J0ICogYXMgcG9ydGFsQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9kYXRhLWxheWVyL25ncngtZGF0YS9hY3Rpb25zL3BvcnRhbC5hY3Rpb25zJztcbmltcG9ydCAqIGFzIEdhcm1lbnRBY3Rpb25UeXBlcyBmcm9tICcuLi8uLi9zaGFyZWQtdHlwZXMvYWN0aW9ucy9nYXJtZW50LmFjdGlvbi50eXBlcyc7XG5pbXBvcnQgKiBhcyBQb3J0YWxBY3Rpb25UeXBlcyBmcm9tICcuLi8uLi9zaGFyZWQtdHlwZXMvYWN0aW9ucy9wb3J0YWwuYWN0aW9uLnR5cGVzJztcblxuaW1wb3J0IHsgQnJva2VyTGlzdCB9IGZyb20gJy4vYnJva2VybGlzdCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJyb2tlckdyaWRTdG9yZSB7XG4gICAgYnJva2VyTGFiZWw6c3RyaW5nID0gQnJva2VyTGlzdC5CUk9LRVJfR1JJRF9TVE9SRTtcbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBzdG9yZTogU3RvcmU8ZnJvbVJvb3QuU3RhdGU+LFxuICAgICAgICAgICAgICAgICBwcml2YXRlIGJya3JBY3RuQnVpbGRlcjpCcm9rZXJBY3Rpb25CdWlsZGVyICkgeyB9XG5cbiAgICBnZXRDb21wb25lbnRTdXBwbGllcygpOmFueXtcbiAgICAgICByZXR1cm4gIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgIGJyb2tlckxhYmVsOnRoaXMuYnJva2VyTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgc3RvcmVPYnM6e1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJva2VyR2FybWVudFN1YnNldDogdGhpcy5zdG9yZS5zZWxlY3QoZnJvbVJvb3QuZ2V0Q3VycmVudFN1YlNldCksXG4gICAgICAgICAgICAgICAgICAgICAgICBicm9rZXJQb3J0YWxTdGF0ZTogdGhpcy5zdG9yZS5zZWxlY3QoZnJvbVJvb3QuZ2V0UG9ydGFsU3RhdGUpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgIHN0b3JlRHNwOntcbiAgICAgICAgICAgICAgICAgICAgICAgVVBEQVRFX1NPUlRfU1RBVEU6dGhpcy5icmtyQWN0bkJ1aWxkZXIuY3JlYXRlKCAgUG9ydGFsQWN0aW9uVHlwZXMuVVBEQVRFX1NPUlRfU1RBVEUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnJva2VyTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCksXG5cbiAgICAgICAgICAgICAgICAgICAgICAgVVBEQVRFX0dBUk1FTlRfSU5fQ09MTEVDVElPTl9BVFRFTVBUOnRoaXMuYnJrckFjdG5CdWlsZGVyLmNyZWF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdhcm1lbnRBY3Rpb25UeXBlcy5VUERBVEVfR0FSTUVOVF9JTl9DT0xMRUNUSU9OX0FUVEVNUFQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJyb2tlckxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwpLFxuXG4gICAgICAgICAgICAgICAgICAgICAgIEFERF9HQVJNRU5UX1RPX0NPTExFQ1RJT05fQVRURU1QVDp0aGlzLmJya3JBY3RuQnVpbGRlci5jcmVhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHYXJtZW50QWN0aW9uVHlwZXMuQUREX0dBUk1FTlRfVE9fQ09MTEVDVElPTl9BVFRFTVBULFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5icm9rZXJMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBkaXNwYXRjaEFjdGlvbihicm9rZXJBY3Rpb246QnJva2VyQWN0aW9uKTp2b2lkIHtcbiAgICAgICAgIHN3aXRjaChicm9rZXJBY3Rpb24uYWN0aW9uVHlwZSl7XG4gICAgICAgICAgICAgY2FzZSBQb3J0YWxBY3Rpb25UeXBlcy5VUERBVEVfU09SVF9TVEFURTpcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Jyb2tlckdyaWRTdG9yZSAgLS0tLSBkaXNwYXRjaEFjdGlvbiA9Jyxicm9rZXJBY3Rpb24pXG4gICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IHBvcnRhbEFjdGlvbnMuVXBkYXRlQ3VycmVudFNvcnRTdGF0ZShicm9rZXJBY3Rpb24ucGF5TG9hZCkpO1xuICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgIGNhc2UgR2FybWVudEFjdGlvblR5cGVzLlVQREFURV9HQVJNRU5UX0lOX0NPTExFQ1RJT05fQVRURU1QVDpcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Jyb2tlckdyaWRTdG9yZSAgLS0tLSBkaXNwYXRjaEFjdGlvbiA9Jyxicm9rZXJBY3Rpb24pXG4gICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGdhcm1lbnRBY3Rpb25zLlVwZGF0ZUdhcm1lbnRBdHRlbXB0KGJyb2tlckFjdGlvbi5wYXlMb2FkKSk7XG4gICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgY2FzZSBHYXJtZW50QWN0aW9uVHlwZXMuQUREX0dBUk1FTlRfVE9fQ09MTEVDVElPTl9BVFRFTVBUOlxuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQnJva2VyR3JpZFN0b3JlICAtLS0tIGRpc3BhdGNoQWN0aW9uID0nLGJyb2tlckFjdGlvbilcbiAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZ2FybWVudEFjdGlvbnMuQWRkR2FybWVudFRvQ29sbGVjdGlvbkF0dGVtcHQoYnJva2VyQWN0aW9uLnBheUxvYWQpKTtcbiAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgIH1cbiAgICB9XG59XG5cblxuIl19
