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
var GarmentActionTypes = require("../../shared-types/actions/garment.action.types");
var brokerlist_1 = require("./brokerlist");
var BrokerSearchStore = (function () {
    function BrokerSearchStore(store, brkrActnBuilder) {
        this.store = store;
        this.brkrActnBuilder = brkrActnBuilder;
        this.brokerLabel = brokerlist_1.BrokerList.BROKER_SEARCH_STORE;
    }
    BrokerSearchStore.prototype.getComponentSupplies = function () {
        return Object.assign({
            brokerLabel: this.brokerLabel,
            storeObs: {
                brokerPortalState: this.store.select(fromRoot.getPortalState),
            },
            storeDsp: {
                SEARCH_COLLECTION_BY_TERM: this.brkrActnBuilder.create(GarmentActionTypes.SEARCH_COLLECTION_BY_TERM, this.brokerLabel, null),
            }
        });
    };
    BrokerSearchStore.prototype.dispatchAction = function (brokerAction) {
        console.log(' dispatchAction brokerAction =', brokerAction);
        switch (brokerAction.actionType) {
            case GarmentActionTypes.SEARCH_COLLECTION_BY_TERM:
                console.log(' dispatchAction  brokerAction.payLoad) =', brokerAction.payLoad);
                this.store.dispatch(new garmentActions.SearchCollectionByTerm(brokerAction.payLoad));
                break;
        }
    };
    return BrokerSearchStore;
}());
BrokerSearchStore = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store,
        broker_action_builder_1.BrokerActionBuilder])
], BrokerSearchStore);
exports.BrokerSearchStore = BrokerSearchStore;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9idXNpbmVzcy1sYXllci9icm9rZXJhZ2UvbmdyeC1zdHVicy9icm9rZXIuc2VhcmNoLnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBSUEsc0NBQTJDO0FBQzNDLHFDQUFvQztBQUVwQyw0RkFBMEY7QUFFMUYsdUVBQXlFO0FBQ3pFLHNGQUF3RjtBQUN4RixvRkFBc0Y7QUFHdEYsMkNBQTBDO0FBSTFDLElBQWEsaUJBQWlCO0lBRTFCLDJCQUFxQixLQUE0QixFQUM1QixlQUFtQztRQURuQyxVQUFLLEdBQUwsS0FBSyxDQUF1QjtRQUM1QixvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUFGeEQsZ0JBQVcsR0FBVSx1QkFBVSxDQUFDLG1CQUFtQixDQUFDO0lBRVMsQ0FBQztJQUU5RCxnREFBb0IsR0FBcEI7UUFDSSxNQUFNLENBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNsQixXQUFXLEVBQUMsSUFBSSxDQUFDLFdBQVc7WUFDNUIsUUFBUSxFQUFDO2dCQUNMLGlCQUFpQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7YUFDaEU7WUFDRCxRQUFRLEVBQUM7Z0JBRUwseUJBQXlCLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQ2pELGtCQUFrQixDQUFDLHlCQUF5QixFQUM1QyxJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUM7YUFDWjtTQUNKLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCwwQ0FBYyxHQUFkLFVBQWUsWUFBeUI7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBQyxZQUFZLENBQUMsQ0FBQTtRQUMxRCxNQUFNLENBQUEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQztZQUM1QixLQUFLLGtCQUFrQixDQUFDLHlCQUF5QjtnQkFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsRUFBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQzVFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksY0FBYyxDQUFDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNyRixLQUFLLENBQUM7UUFDZCxDQUFDO0lBQ0wsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0EvQkEsQUErQkMsSUFBQTtBQS9CWSxpQkFBaUI7SUFEN0IsaUJBQVUsRUFBRTtxQ0FHbUIsYUFBSztRQUNJLDJDQUFtQjtHQUgvQyxpQkFBaUIsQ0ErQjdCO0FBL0JZLDhDQUFpQiIsImZpbGUiOiJhcHAvYnVzaW5lc3MtbGF5ZXIvYnJva2VyYWdlL25ncngtc3R1YnMvYnJva2VyLnNlYXJjaC5zdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB3aWxsaWVzdHJlZXRlciBvbiA5LzEyLzE3LlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBCcm9rZXJBY3Rpb25CdWlsZGVyIH0gIGZyb20gJy4uLy4uL3B1YnN1Yi1icm9rZXIvc2VydmljZXMvYnJva2VyLmFjdGlvbi5idWlsZGVyJztcbmltcG9ydCB7IEJyb2tlckFjdGlvbiAgfSBmcm9tICcuLi8uLi9wdWJzdWItYnJva2VyL21vZGVscy9icm9rZXIuYWN0aW9uLm1vZGVsJ1xuaW1wb3J0ICogYXMgZnJvbVJvb3QgZnJvbSAnLi4vLi4vLi4vZGF0YS1sYXllci9uZ3J4LWRhdGEvcmVkdWNlcnMvaW5kZXgnO1xuaW1wb3J0ICogYXMgZ2FybWVudEFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vZGF0YS1sYXllci9uZ3J4LWRhdGEvYWN0aW9ucy9nYXJtZW50LmFjdGlvbnMnO1xuaW1wb3J0ICogYXMgR2FybWVudEFjdGlvblR5cGVzIGZyb20gJy4uLy4uL3NoYXJlZC10eXBlcy9hY3Rpb25zL2dhcm1lbnQuYWN0aW9uLnR5cGVzJztcbmltcG9ydCAqIGFzIFBvcnRhbEFjdGlvblR5cGVzIGZyb20gJy4uLy4uL3NoYXJlZC10eXBlcy9hY3Rpb25zL3BvcnRhbC5hY3Rpb24udHlwZXMnO1xuXG5pbXBvcnQgeyBCcm9rZXJMaXN0IH0gZnJvbSAnLi9icm9rZXJsaXN0JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnJva2VyU2VhcmNoU3RvcmUge1xuICAgIGJyb2tlckxhYmVsOnN0cmluZyA9IEJyb2tlckxpc3QuQlJPS0VSX1NFQVJDSF9TVE9SRTtcbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBzdG9yZTogU3RvcmU8ZnJvbVJvb3QuU3RhdGU+LFxuICAgICAgICAgICAgICAgICBwcml2YXRlIGJya3JBY3RuQnVpbGRlcjpCcm9rZXJBY3Rpb25CdWlsZGVyICkgeyB9XG5cbiAgICBnZXRDb21wb25lbnRTdXBwbGllcygpOmFueXtcbiAgICAgICAgcmV0dXJuICBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIGJyb2tlckxhYmVsOnRoaXMuYnJva2VyTGFiZWwsXG4gICAgICAgICAgICBzdG9yZU9iczp7XG4gICAgICAgICAgICAgICAgYnJva2VyUG9ydGFsU3RhdGU6IHRoaXMuc3RvcmUuc2VsZWN0KGZyb21Sb290LmdldFBvcnRhbFN0YXRlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdG9yZURzcDp7XG5cbiAgICAgICAgICAgICAgICBTRUFSQ0hfQ09MTEVDVElPTl9CWV9URVJNOnRoaXMuYnJrckFjdG5CdWlsZGVyLmNyZWF0ZShcbiAgICAgICAgICAgICAgICAgICAgR2FybWVudEFjdGlvblR5cGVzLlNFQVJDSF9DT0xMRUNUSU9OX0JZX1RFUk0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnJva2VyTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIG51bGwpLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGRpc3BhdGNoQWN0aW9uKGJyb2tlckFjdGlvbjpCcm9rZXJBY3Rpb24pOnZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZygnIGRpc3BhdGNoQWN0aW9uIGJyb2tlckFjdGlvbiA9Jyxicm9rZXJBY3Rpb24pXG4gICAgICAgIHN3aXRjaChicm9rZXJBY3Rpb24uYWN0aW9uVHlwZSl7XG4gICAgICAgICAgICBjYXNlIEdhcm1lbnRBY3Rpb25UeXBlcy5TRUFSQ0hfQ09MTEVDVElPTl9CWV9URVJNOlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcgZGlzcGF0Y2hBY3Rpb24gIGJyb2tlckFjdGlvbi5wYXlMb2FkKSA9Jyxicm9rZXJBY3Rpb24ucGF5TG9hZClcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBnYXJtZW50QWN0aW9ucy5TZWFyY2hDb2xsZWN0aW9uQnlUZXJtKGJyb2tlckFjdGlvbi5wYXlMb2FkKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4iXX0=
