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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9idXNpbmVzcy1sYXllci9icm9rZXJhZ2UvbmdyeC1zdHVicy9icm9rZXIuc2VhcmNoLnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBSUEsc0NBQTJDO0FBQzNDLHFDQUFvQztBQUVwQyw0RkFBMEY7QUFFMUYsdUVBQXlFO0FBQ3pFLHNGQUF3RjtBQUN4RixvRkFBc0Y7QUFHdEYsMkNBQTBDO0FBSTFDLElBQWEsaUJBQWlCO0lBRTFCLDJCQUFxQixLQUE0QixFQUM1QixlQUFtQztRQURuQyxVQUFLLEdBQUwsS0FBSyxDQUF1QjtRQUM1QixvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUFGeEQsZ0JBQVcsR0FBVSx1QkFBVSxDQUFDLG1CQUFtQixDQUFDO0lBRVMsQ0FBQztJQUU5RCxnREFBb0IsR0FBcEI7UUFDSSxNQUFNLENBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNsQixXQUFXLEVBQUMsSUFBSSxDQUFDLFdBQVc7WUFDNUIsUUFBUSxFQUFDO2dCQUNMLGlCQUFpQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7YUFDaEU7WUFDRCxRQUFRLEVBQUM7Z0JBRUwseUJBQXlCLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQ2pELGtCQUFrQixDQUFDLHlCQUF5QixFQUM1QyxJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUM7YUFDWjtTQUNKLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCwwQ0FBYyxHQUFkLFVBQWUsWUFBeUI7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBQyxZQUFZLENBQUMsQ0FBQTtRQUMxRCxNQUFNLENBQUEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQztZQUM1QixLQUFLLGtCQUFrQixDQUFDLHlCQUF5QjtnQkFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsRUFBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQzVFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksY0FBYyxDQUFDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNyRixLQUFLLENBQUM7UUFDZCxDQUFDO0lBQ0wsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0EvQkEsQUErQkMsSUFBQTtBQS9CWSxpQkFBaUI7SUFEN0IsaUJBQVUsRUFBRTtxQ0FHbUIsYUFBSztRQUNJLDJDQUFtQjtHQUgvQyxpQkFBaUIsQ0ErQjdCO0FBL0JZLDhDQUFpQiIsImZpbGUiOiJhcHAvYnVzaW5lc3MtbGF5ZXIvYnJva2VyYWdlL25ncngtc3R1YnMvYnJva2VyLnNlYXJjaC5zdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB3aWxsaWVzdHJlZXRlciBvbiA5LzEyLzE3LlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcblxuaW1wb3J0IHsgQnJva2VyQWN0aW9uQnVpbGRlciB9ICBmcm9tICcuLi8uLi9wdWJzdWItYnJva2VyL3NlcnZpY2VzL2Jyb2tlci5hY3Rpb24uYnVpbGRlcic7XG5pbXBvcnQgeyBCcm9rZXJBY3Rpb24gIH0gZnJvbSAnLi4vLi4vcHVic3ViLWJyb2tlci9tb2RlbHMvYnJva2VyLmFjdGlvbi5tb2RlbCdcbmltcG9ydCAqIGFzIGZyb21Sb290IGZyb20gJy4uLy4uLy4uL2RhdGEtbGF5ZXIvbmdyeC1kYXRhL3JlZHVjZXJzL2luZGV4JztcbmltcG9ydCAqIGFzIGdhcm1lbnRBY3Rpb25zIGZyb20gJy4uLy4uLy4uL2RhdGEtbGF5ZXIvbmdyeC1kYXRhL2FjdGlvbnMvZ2FybWVudC5hY3Rpb25zJztcbmltcG9ydCAqIGFzIEdhcm1lbnRBY3Rpb25UeXBlcyBmcm9tICcuLi8uLi9zaGFyZWQtdHlwZXMvYWN0aW9ucy9nYXJtZW50LmFjdGlvbi50eXBlcyc7XG5pbXBvcnQgKiBhcyBQb3J0YWxBY3Rpb25UeXBlcyBmcm9tICcuLi8uLi9zaGFyZWQtdHlwZXMvYWN0aW9ucy9wb3J0YWwuYWN0aW9uLnR5cGVzJztcblxuaW1wb3J0IHsgQnJva2VyTGlzdCB9IGZyb20gJy4vYnJva2VybGlzdCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJyb2tlclNlYXJjaFN0b3JlIHtcbiAgICBicm9rZXJMYWJlbDpzdHJpbmcgPSBCcm9rZXJMaXN0LkJST0tFUl9TRUFSQ0hfU1RPUkU7XG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgc3RvcmU6IFN0b3JlPGZyb21Sb290LlN0YXRlPixcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBicmtyQWN0bkJ1aWxkZXI6QnJva2VyQWN0aW9uQnVpbGRlciApIHsgfVxuXG4gICAgZ2V0Q29tcG9uZW50U3VwcGxpZXMoKTphbnl7XG4gICAgICAgIHJldHVybiAgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICBicm9rZXJMYWJlbDp0aGlzLmJyb2tlckxhYmVsLFxuICAgICAgICAgICAgc3RvcmVPYnM6e1xuICAgICAgICAgICAgICAgIGJyb2tlclBvcnRhbFN0YXRlOiB0aGlzLnN0b3JlLnNlbGVjdChmcm9tUm9vdC5nZXRQb3J0YWxTdGF0ZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RvcmVEc3A6e1xuXG4gICAgICAgICAgICAgICAgU0VBUkNIX0NPTExFQ1RJT05fQllfVEVSTTp0aGlzLmJya3JBY3RuQnVpbGRlci5jcmVhdGUoXG4gICAgICAgICAgICAgICAgICAgIEdhcm1lbnRBY3Rpb25UeXBlcy5TRUFSQ0hfQ09MTEVDVElPTl9CWV9URVJNLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJyb2tlckxhYmVsLFxuICAgICAgICAgICAgICAgICAgICBudWxsKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBkaXNwYXRjaEFjdGlvbihicm9rZXJBY3Rpb246QnJva2VyQWN0aW9uKTp2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coJyBkaXNwYXRjaEFjdGlvbiBicm9rZXJBY3Rpb24gPScsYnJva2VyQWN0aW9uKVxuICAgICAgICBzd2l0Y2goYnJva2VyQWN0aW9uLmFjdGlvblR5cGUpe1xuICAgICAgICAgICAgY2FzZSBHYXJtZW50QWN0aW9uVHlwZXMuU0VBUkNIX0NPTExFQ1RJT05fQllfVEVSTTpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnIGRpc3BhdGNoQWN0aW9uICBicm9rZXJBY3Rpb24ucGF5TG9hZCkgPScsYnJva2VyQWN0aW9uLnBheUxvYWQpXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZ2FybWVudEFjdGlvbnMuU2VhcmNoQ29sbGVjdGlvbkJ5VGVybShicm9rZXJBY3Rpb24ucGF5TG9hZCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuIl19
