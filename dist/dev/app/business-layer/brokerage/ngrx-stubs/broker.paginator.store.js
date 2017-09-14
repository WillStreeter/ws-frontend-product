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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9idXNpbmVzcy1sYXllci9icm9rZXJhZ2UvbmdyeC1zdHVicy9icm9rZXIucGFnaW5hdG9yLnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBS0Msc0NBQTJDO0FBQzVDLHFDQUFvQztBQUVwQyw0RkFBMEY7QUFFMUYsdUVBQXlFO0FBRXpFLG9GQUFzRjtBQUV0RixrRkFBb0Y7QUFFcEYsMkNBQTBDO0FBSTFDLElBQWEsb0JBQW9CO0lBRTdCLDhCQUFxQixLQUE0QixFQUM1QixlQUFtQztRQURuQyxVQUFLLEdBQUwsS0FBSyxDQUF1QjtRQUM1QixvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUFGeEQsZ0JBQVcsR0FBVSx1QkFBVSxDQUFDLHNCQUFzQixDQUFDO0lBRU0sQ0FBQztJQUU5RCxtREFBb0IsR0FBcEI7UUFDRyxNQUFNLENBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNWLFdBQVcsRUFBQyxJQUFJLENBQUMsV0FBVztZQUM1QixRQUFRLEVBQUM7Z0JBQ0osaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQztnQkFDN0QsOEJBQThCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLDJCQUEyQixDQUFDO2FBQzFGO1lBQ0YsUUFBUSxFQUFDO2dCQUNMLHVCQUF1QixFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFHLGlCQUFpQixDQUFDLHVCQUF1QixFQUMzRCxJQUFJLENBQUMsV0FBVyxFQUNkLElBQUksQ0FBQztnQkFDM0MsOEJBQThCLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUcsaUJBQWlCLENBQUMsOEJBQThCLEVBQ3pFLElBQUksQ0FBQyxXQUFXLEVBQ2QsSUFBSSxDQUFDO2FBQzNDO1NBQ04sQ0FBQyxDQUFDO0lBRWYsQ0FBQztJQUVELDZDQUFjLEdBQWQsVUFBZSxZQUF5QjtRQUNuQyxNQUFNLENBQUEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQztZQUM1QixLQUFLLGlCQUFpQixDQUFDLHVCQUF1QjtnQkFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxhQUFhLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3RGLEtBQUssQ0FBQztZQUNOLEtBQUssaUJBQWlCLENBQUMsOEJBQThCO2dCQUNqRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDNUYsS0FBSyxDQUFDO1FBQ1YsQ0FBQztJQUNOLENBQUM7SUFDTCwyQkFBQztBQUFELENBbENBLEFBa0NDLElBQUE7QUFsQ1ksb0JBQW9CO0lBRGhDLGlCQUFVLEVBQUU7cUNBR21CLGFBQUs7UUFDSSwyQ0FBbUI7R0FIL0Msb0JBQW9CLENBa0NoQztBQWxDWSxvREFBb0IiLCJmaWxlIjoiYXBwL2J1c2luZXNzLWxheWVyL2Jyb2tlcmFnZS9uZ3J4LXN0dWJzL2Jyb2tlci5wYWdpbmF0b3Iuc3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgd2lsbHN0cmVldGVyIG9uIDkvMTEvMTcuXG4gKi9cblxuXG4gaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IEJyb2tlckFjdGlvbkJ1aWxkZXIgfSAgZnJvbSAnLi4vLi4vcHVic3ViLWJyb2tlci9zZXJ2aWNlcy9icm9rZXIuYWN0aW9uLmJ1aWxkZXInO1xuaW1wb3J0IHsgQnJva2VyQWN0aW9uICB9IGZyb20gJy4uLy4uL3B1YnN1Yi1icm9rZXIvbW9kZWxzL2Jyb2tlci5hY3Rpb24ubW9kZWwnXG5pbXBvcnQgKiBhcyBmcm9tUm9vdCBmcm9tICcuLi8uLi8uLi9kYXRhLWxheWVyL25ncngtZGF0YS9yZWR1Y2Vycy9pbmRleCc7XG5pbXBvcnQgKiBhcyBnYXJtZW50QWN0aW9ucyBmcm9tICcuLi8uLi8uLi9kYXRhLWxheWVyL25ncngtZGF0YS9hY3Rpb25zL2dhcm1lbnQuYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBwb3J0YWxBY3Rpb25zIGZyb20gJy4uLy4uLy4uL2RhdGEtbGF5ZXIvbmdyeC1kYXRhL2FjdGlvbnMvcG9ydGFsLmFjdGlvbnMnO1xuaW1wb3J0ICogYXMgR2FybWVudEFjdGlvblR5cGVzIGZyb20gJy4uLy4uL3NoYXJlZC10eXBlcy9hY3Rpb25zL2dhcm1lbnQuYWN0aW9uLnR5cGVzJztcbmltcG9ydCAqIGFzIFBvcnRhbEFjdGlvblR5cGVzIGZyb20gJy4uLy4uL3NoYXJlZC10eXBlcy9hY3Rpb25zL3BvcnRhbC5hY3Rpb24udHlwZXMnO1xuXG5pbXBvcnQgeyBCcm9rZXJMaXN0IH0gZnJvbSAnLi9icm9rZXJsaXN0JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnJva2VyUGFnaW5hdG9yU3RvcmUge1xuICAgIGJyb2tlckxhYmVsOnN0cmluZyA9IEJyb2tlckxpc3QuQlJPS0VSX1BBR0lOQVRPUl9TVE9SRTtcbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBzdG9yZTogU3RvcmU8ZnJvbVJvb3QuU3RhdGU+LFxuICAgICAgICAgICAgICAgICBwcml2YXRlIGJya3JBY3RuQnVpbGRlcjpCcm9rZXJBY3Rpb25CdWlsZGVyICkgeyB9XG5cbiAgICBnZXRDb21wb25lbnRTdXBwbGllcygpOmFueXtcbiAgICAgICByZXR1cm4gIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgIGJyb2tlckxhYmVsOnRoaXMuYnJva2VyTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgc3RvcmVPYnM6e1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJva2VyUG9ydGFsU3RhdGU6IHRoaXMuc3RvcmUuc2VsZWN0KGZyb21Sb290LmdldFBvcnRhbFN0YXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyb2tlckN1cnJlbnRHYXJtZW50Q29sbGVjdGlvbjogdGhpcy5zdG9yZS5zZWxlY3QoZnJvbVJvb3QuZ2V0Q3VycmVudEdhcm1lbnRDb2xsZWN0aW9uKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgIHN0b3JlRHNwOntcbiAgICAgICAgICAgICAgICAgICAgICAgU0VUX0NVUlJFTlRfUEFHRV9OVU1CRVI6dGhpcy5icmtyQWN0bkJ1aWxkZXIuY3JlYXRlKCAgUG9ydGFsQWN0aW9uVHlwZXMuU0VUX0NVUlJFTlRfUEFHRV9OVU1CRVIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnJva2VyTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCksXG4gICAgICAgICAgICAgICAgICAgICAgIFVQREFURV9WSUVXQUJMRV9QRVJfUEFHRV9DT1VOVDp0aGlzLmJya3JBY3RuQnVpbGRlci5jcmVhdGUoICBQb3J0YWxBY3Rpb25UeXBlcy5VUERBVEVfVklFV0FCTEVfUEVSX1BBR0VfQ09VTlQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnJva2VyTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCksXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZGlzcGF0Y2hBY3Rpb24oYnJva2VyQWN0aW9uOkJyb2tlckFjdGlvbik6dm9pZCB7XG4gICAgICAgICBzd2l0Y2goYnJva2VyQWN0aW9uLmFjdGlvblR5cGUpe1xuICAgICAgICAgICAgIGNhc2UgUG9ydGFsQWN0aW9uVHlwZXMuU0VUX0NVUlJFTlRfUEFHRV9OVU1CRVI6XG4gICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IHBvcnRhbEFjdGlvbnMuU2V0Q3VycmVudFBhZ2VOdW1iZXIoYnJva2VyQWN0aW9uLnBheUxvYWQpKTtcbiAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICBjYXNlIFBvcnRhbEFjdGlvblR5cGVzLlVQREFURV9WSUVXQUJMRV9QRVJfUEFHRV9DT1VOVDpcbiAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgcG9ydGFsQWN0aW9ucy5VcGRhdGVWaWV3YWJsZVBlclBhZ2VDb3VudChicm9rZXJBY3Rpb24ucGF5TG9hZCkpO1xuICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgfVxuICAgIH1cbn1cblxuXG4iXX0=
