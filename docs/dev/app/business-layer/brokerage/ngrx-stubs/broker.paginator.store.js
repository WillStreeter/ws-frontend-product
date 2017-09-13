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
var portalActions = require("../../../data-layer/ngrx-data/actions/portal.actions");
var PortalActionTypes = require("../../shared-types/actions/portal.action.types");
var brokerlist_1 = require("./brokerlist");
var BrokerPaginatorStore = (function () {
    function BrokerPaginatorStore(store, brkrActnBuilder) {
        this.store = store;
        this.brkrActnBuilder = brkrActnBuilder;
        this.brokerLabel = brokerlist_1.BrokerList.BROKER_PAGINATOR_STORE;
    }
    BrokerPaginatorStore.prototype.getComponentSupplies = function () {
        return Object.assign({
            brokerLabel: this.brokerLabel,
            storeObs: {
                brokerPortalState: this.store.select(fromRoot.getPortalState),
                brokerCurrentGarmentCollection: this.store.select(fromRoot.getCurrentGarmentCollection)
            },
            storeDsp: {
                SET_CURRENT_PAGE_NUMBER: this.brkrActnBuilder.create(PortalActionTypes.SET_CURRENT_PAGE_NUMBER, this.brokerLabel, null),
                UPDATE_VIEWABLE_PER_PAGE_COUNT: this.brkrActnBuilder.create(PortalActionTypes.UPDATE_VIEWABLE_PER_PAGE_COUNT, this.brokerLabel, null),
            }
        });
    };
    BrokerPaginatorStore.prototype.dispatchAction = function (brokerAction) {
        switch (brokerAction.actionType) {
            case PortalActionTypes.SET_CURRENT_PAGE_NUMBER:
                this.store.dispatch(new portalActions.SetCurrentPageNumber(brokerAction.payLoad));
                break;
            case PortalActionTypes.UPDATE_VIEWABLE_PER_PAGE_COUNT:
                this.store.dispatch(new portalActions.UpdateViewablePerPageCount(brokerAction.payLoad));
                break;
        }
    };
    return BrokerPaginatorStore;
}());
BrokerPaginatorStore = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store,
        broker_action_builder_1.BrokerActionBuilder])
], BrokerPaginatorStore);
exports.BrokerPaginatorStore = BrokerPaginatorStore;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9idXNpbmVzcy1sYXllci9icm9rZXJhZ2UvbmdyeC1zdHVicy9icm9rZXIucGFnaW5hdG9yLnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBS0Msc0NBQTJDO0FBQzVDLHFDQUFvQztBQUVwQyw0RkFBMEY7QUFFMUYsdUVBQXlFO0FBRXpFLG9GQUFzRjtBQUV0RixrRkFBb0Y7QUFFcEYsMkNBQTBDO0FBSTFDLElBQWEsb0JBQW9CO0lBRTdCLDhCQUFxQixLQUE0QixFQUM1QixlQUFtQztRQURuQyxVQUFLLEdBQUwsS0FBSyxDQUF1QjtRQUM1QixvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUFGeEQsZ0JBQVcsR0FBVSx1QkFBVSxDQUFDLHNCQUFzQixDQUFDO0lBRU0sQ0FBQztJQUU5RCxtREFBb0IsR0FBcEI7UUFDRyxNQUFNLENBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNWLFdBQVcsRUFBQyxJQUFJLENBQUMsV0FBVztZQUM1QixRQUFRLEVBQUM7Z0JBQ0osaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQztnQkFDN0QsOEJBQThCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLDJCQUEyQixDQUFDO2FBQzFGO1lBQ0YsUUFBUSxFQUFDO2dCQUNMLHVCQUF1QixFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFHLGlCQUFpQixDQUFDLHVCQUF1QixFQUMzRCxJQUFJLENBQUMsV0FBVyxFQUNkLElBQUksQ0FBQztnQkFDM0MsOEJBQThCLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUcsaUJBQWlCLENBQUMsOEJBQThCLEVBQ3pFLElBQUksQ0FBQyxXQUFXLEVBQ2QsSUFBSSxDQUFDO2FBQzNDO1NBQ04sQ0FBQyxDQUFDO0lBRWYsQ0FBQztJQUVELDZDQUFjLEdBQWQsVUFBZSxZQUF5QjtRQUNuQyxNQUFNLENBQUEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQztZQUM1QixLQUFLLGlCQUFpQixDQUFDLHVCQUF1QjtnQkFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxhQUFhLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3RGLEtBQUssQ0FBQztZQUNOLEtBQUssaUJBQWlCLENBQUMsOEJBQThCO2dCQUNqRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDNUYsS0FBSyxDQUFDO1FBQ1YsQ0FBQztJQUNOLENBQUM7SUFDTCwyQkFBQztBQUFELENBbENBLEFBa0NDLElBQUE7QUFsQ1ksb0JBQW9CO0lBRGhDLGlCQUFVLEVBQUU7cUNBR21CLGFBQUs7UUFDSSwyQ0FBbUI7R0FIL0Msb0JBQW9CLENBa0NoQztBQWxDWSxvREFBb0IiLCJmaWxlIjoiYXBwL2J1c2luZXNzLWxheWVyL2Jyb2tlcmFnZS9uZ3J4LXN0dWJzL2Jyb2tlci5wYWdpbmF0b3Iuc3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgd2lsbHN0cmVldGVyIG9uIDkvMTEvMTcuXG4gKi9cblxuXG4gaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xuXG5pbXBvcnQgeyBCcm9rZXJBY3Rpb25CdWlsZGVyIH0gIGZyb20gJy4uLy4uL3B1YnN1Yi1icm9rZXIvc2VydmljZXMvYnJva2VyLmFjdGlvbi5idWlsZGVyJztcbmltcG9ydCB7IEJyb2tlckFjdGlvbiAgfSBmcm9tICcuLi8uLi9wdWJzdWItYnJva2VyL21vZGVscy9icm9rZXIuYWN0aW9uLm1vZGVsJ1xuaW1wb3J0ICogYXMgZnJvbVJvb3QgZnJvbSAnLi4vLi4vLi4vZGF0YS1sYXllci9uZ3J4LWRhdGEvcmVkdWNlcnMvaW5kZXgnO1xuaW1wb3J0ICogYXMgZ2FybWVudEFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vZGF0YS1sYXllci9uZ3J4LWRhdGEvYWN0aW9ucy9nYXJtZW50LmFjdGlvbnMnO1xuaW1wb3J0ICogYXMgcG9ydGFsQWN0aW9ucyBmcm9tICcuLi8uLi8uLi9kYXRhLWxheWVyL25ncngtZGF0YS9hY3Rpb25zL3BvcnRhbC5hY3Rpb25zJztcbmltcG9ydCAqIGFzIEdhcm1lbnRBY3Rpb25UeXBlcyBmcm9tICcuLi8uLi9zaGFyZWQtdHlwZXMvYWN0aW9ucy9nYXJtZW50LmFjdGlvbi50eXBlcyc7XG5pbXBvcnQgKiBhcyBQb3J0YWxBY3Rpb25UeXBlcyBmcm9tICcuLi8uLi9zaGFyZWQtdHlwZXMvYWN0aW9ucy9wb3J0YWwuYWN0aW9uLnR5cGVzJztcblxuaW1wb3J0IHsgQnJva2VyTGlzdCB9IGZyb20gJy4vYnJva2VybGlzdCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJyb2tlclBhZ2luYXRvclN0b3JlIHtcbiAgICBicm9rZXJMYWJlbDpzdHJpbmcgPSBCcm9rZXJMaXN0LkJST0tFUl9QQUdJTkFUT1JfU1RPUkU7XG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgc3RvcmU6IFN0b3JlPGZyb21Sb290LlN0YXRlPixcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBicmtyQWN0bkJ1aWxkZXI6QnJva2VyQWN0aW9uQnVpbGRlciApIHsgfVxuXG4gICAgZ2V0Q29tcG9uZW50U3VwcGxpZXMoKTphbnl7XG4gICAgICAgcmV0dXJuICBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICBicm9rZXJMYWJlbDp0aGlzLmJyb2tlckxhYmVsLFxuICAgICAgICAgICAgICAgICAgIHN0b3JlT2JzOntcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyb2tlclBvcnRhbFN0YXRlOiB0aGlzLnN0b3JlLnNlbGVjdChmcm9tUm9vdC5nZXRQb3J0YWxTdGF0ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBicm9rZXJDdXJyZW50R2FybWVudENvbGxlY3Rpb246IHRoaXMuc3RvcmUuc2VsZWN0KGZyb21Sb290LmdldEN1cnJlbnRHYXJtZW50Q29sbGVjdGlvbilcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICBzdG9yZURzcDp7XG4gICAgICAgICAgICAgICAgICAgICAgIFNFVF9DVVJSRU5UX1BBR0VfTlVNQkVSOnRoaXMuYnJrckFjdG5CdWlsZGVyLmNyZWF0ZSggIFBvcnRhbEFjdGlvblR5cGVzLlNFVF9DVVJSRU5UX1BBR0VfTlVNQkVSLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJyb2tlckxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwpLFxuICAgICAgICAgICAgICAgICAgICAgICBVUERBVEVfVklFV0FCTEVfUEVSX1BBR0VfQ09VTlQ6dGhpcy5icmtyQWN0bkJ1aWxkZXIuY3JlYXRlKCAgUG9ydGFsQWN0aW9uVHlwZXMuVVBEQVRFX1ZJRVdBQkxFX1BFUl9QQUdFX0NPVU5ULFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJyb2tlckxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwpLFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGRpc3BhdGNoQWN0aW9uKGJyb2tlckFjdGlvbjpCcm9rZXJBY3Rpb24pOnZvaWQge1xuICAgICAgICAgc3dpdGNoKGJyb2tlckFjdGlvbi5hY3Rpb25UeXBlKXtcbiAgICAgICAgICAgICBjYXNlIFBvcnRhbEFjdGlvblR5cGVzLlNFVF9DVVJSRU5UX1BBR0VfTlVNQkVSOlxuICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBwb3J0YWxBY3Rpb25zLlNldEN1cnJlbnRQYWdlTnVtYmVyKGJyb2tlckFjdGlvbi5wYXlMb2FkKSk7XG4gICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgY2FzZSBQb3J0YWxBY3Rpb25UeXBlcy5VUERBVEVfVklFV0FCTEVfUEVSX1BBR0VfQ09VTlQ6XG4gICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IHBvcnRhbEFjdGlvbnMuVXBkYXRlVmlld2FibGVQZXJQYWdlQ291bnQoYnJva2VyQWN0aW9uLnBheUxvYWQpKTtcbiAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgIH1cbiAgICB9XG59XG5cblxuIl19
