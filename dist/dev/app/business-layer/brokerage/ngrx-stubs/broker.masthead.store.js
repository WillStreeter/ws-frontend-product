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
var BrokerMastheadStore = (function () {
    function BrokerMastheadStore(store, brkrActnBuilder) {
        this.store = store;
        this.brkrActnBuilder = brkrActnBuilder;
        this.brokerLabel = brokerlist_1.BrokerList.BROKER_MASTHEAD_STORE;
    }
    BrokerMastheadStore.prototype.getComponentSupplies = function () {
        return Object.assign({
            brokerLabel: this.brokerLabel,
            storeObs: {
                brokerGarmentAddLock$: this.store.select(fromRoot.getGarmentAddLock),
            },
            storeDsp: {
                UPDATE_REVEAL_GARMENT_ADD_ROW: this.brkrActnBuilder.create(PortalActionTypes.UPDATE_REVEAL_GARMENT_ADD_ROW, this.brokerLabel, null),
            }
        });
    };
    BrokerMastheadStore.prototype.dispatchAction = function (brokerAction) {
        switch (brokerAction.actionType) {
            case PortalActionTypes.UPDATE_REVEAL_GARMENT_ADD_ROW:
                this.store.dispatch(new portalActions.UpdateAddRowGarment(brokerAction.payLoad));
                break;
        }
    };
    return BrokerMastheadStore;
}());
BrokerMastheadStore = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store,
        broker_action_builder_1.BrokerActionBuilder])
], BrokerMastheadStore);
exports.BrokerMastheadStore = BrokerMastheadStore;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9idXNpbmVzcy1sYXllci9icm9rZXJhZ2UvbmdyeC1zdHVicy9icm9rZXIubWFzdGhlYWQuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MscUNBQW9DO0FBRXBDLDRGQUEwRjtBQUUxRix1RUFBeUU7QUFFekUsb0ZBQXNGO0FBRXRGLGtGQUFvRjtBQUVwRiwyQ0FBMEM7QUFJMUMsSUFBYSxtQkFBbUI7SUFFNUIsNkJBQXFCLEtBQTRCLEVBQzVCLGVBQW1DO1FBRG5DLFVBQUssR0FBTCxLQUFLLENBQXVCO1FBQzVCLG9CQUFlLEdBQWYsZUFBZSxDQUFvQjtRQUZ4RCxnQkFBVyxHQUFVLHVCQUFVLENBQUMscUJBQXFCLENBQUM7SUFFTyxDQUFDO0lBRTlELGtEQUFvQixHQUFwQjtRQUNHLE1BQU0sQ0FBRSxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ1YsV0FBVyxFQUFDLElBQUksQ0FBQyxXQUFXO1lBQzVCLFFBQVEsRUFBQztnQkFDSixxQkFBcUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUM7YUFDdkU7WUFDRixRQUFRLEVBQUM7Z0JBQ0wsNkJBQTZCLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUcsaUJBQWlCLENBQUMsNkJBQTZCLEVBQ3ZFLElBQUksQ0FBQyxXQUFXLEVBQ2QsSUFBSSxDQUFDO2FBQzNDO1NBQ04sQ0FBQyxDQUFDO0lBRWYsQ0FBQztJQUVELDRDQUFjLEdBQWQsVUFBZSxZQUF5QjtRQUNuQyxNQUFNLENBQUEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQztZQUM1QixLQUFLLGlCQUFpQixDQUFDLDZCQUE2QjtnQkFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxhQUFhLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3JGLEtBQUssQ0FBQztRQUNWLENBQUM7SUFDTixDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQTNCQSxBQTJCQyxJQUFBO0FBM0JZLG1CQUFtQjtJQUQvQixpQkFBVSxFQUFFO3FDQUdtQixhQUFLO1FBQ0ksMkNBQW1CO0dBSC9DLG1CQUFtQixDQTJCL0I7QUEzQlksa0RBQW1CIiwiZmlsZSI6ImFwcC9idXNpbmVzcy1sYXllci9icm9rZXJhZ2UvbmdyeC1zdHVicy9icm9rZXIubWFzdGhlYWQuc3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgQnJva2VyQWN0aW9uQnVpbGRlciB9ICBmcm9tICcuLi8uLi9wdWJzdWItYnJva2VyL3NlcnZpY2VzL2Jyb2tlci5hY3Rpb24uYnVpbGRlcic7XG5pbXBvcnQgeyBCcm9rZXJBY3Rpb24gIH0gZnJvbSAnLi4vLi4vcHVic3ViLWJyb2tlci9tb2RlbHMvYnJva2VyLmFjdGlvbi5tb2RlbCdcbmltcG9ydCAqIGFzIGZyb21Sb290IGZyb20gJy4uLy4uLy4uL2RhdGEtbGF5ZXIvbmdyeC1kYXRhL3JlZHVjZXJzL2luZGV4JztcbmltcG9ydCAqIGFzIGdhcm1lbnRBY3Rpb25zIGZyb20gJy4uLy4uLy4uL2RhdGEtbGF5ZXIvbmdyeC1kYXRhL2FjdGlvbnMvZ2FybWVudC5hY3Rpb25zJztcbmltcG9ydCAqIGFzIHBvcnRhbEFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vZGF0YS1sYXllci9uZ3J4LWRhdGEvYWN0aW9ucy9wb3J0YWwuYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBHYXJtZW50QWN0aW9uVHlwZXMgZnJvbSAnLi4vLi4vc2hhcmVkLXR5cGVzL2FjdGlvbnMvZ2FybWVudC5hY3Rpb24udHlwZXMnO1xuaW1wb3J0ICogYXMgUG9ydGFsQWN0aW9uVHlwZXMgZnJvbSAnLi4vLi4vc2hhcmVkLXR5cGVzL2FjdGlvbnMvcG9ydGFsLmFjdGlvbi50eXBlcyc7XG5cbmltcG9ydCB7IEJyb2tlckxpc3QgfSBmcm9tICcuL2Jyb2tlcmxpc3QnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCcm9rZXJNYXN0aGVhZFN0b3JlIHtcbiAgICBicm9rZXJMYWJlbDpzdHJpbmcgPSBCcm9rZXJMaXN0LkJST0tFUl9NQVNUSEVBRF9TVE9SRTtcbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBzdG9yZTogU3RvcmU8ZnJvbVJvb3QuU3RhdGU+LFxuICAgICAgICAgICAgICAgICBwcml2YXRlIGJya3JBY3RuQnVpbGRlcjpCcm9rZXJBY3Rpb25CdWlsZGVyICkgeyB9XG5cbiAgICBnZXRDb21wb25lbnRTdXBwbGllcygpOmFueXtcbiAgICAgICByZXR1cm4gIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgIGJyb2tlckxhYmVsOnRoaXMuYnJva2VyTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgc3RvcmVPYnM6e1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJva2VyR2FybWVudEFkZExvY2skOiB0aGlzLnN0b3JlLnNlbGVjdChmcm9tUm9vdC5nZXRHYXJtZW50QWRkTG9jayksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgc3RvcmVEc3A6e1xuICAgICAgICAgICAgICAgICAgICAgICBVUERBVEVfUkVWRUFMX0dBUk1FTlRfQUREX1JPVzp0aGlzLmJya3JBY3RuQnVpbGRlci5jcmVhdGUoICBQb3J0YWxBY3Rpb25UeXBlcy5VUERBVEVfUkVWRUFMX0dBUk1FTlRfQUREX1JPVyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5icm9rZXJMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBkaXNwYXRjaEFjdGlvbihicm9rZXJBY3Rpb246QnJva2VyQWN0aW9uKTp2b2lkIHtcbiAgICAgICAgIHN3aXRjaChicm9rZXJBY3Rpb24uYWN0aW9uVHlwZSl7XG4gICAgICAgICAgICAgY2FzZSBQb3J0YWxBY3Rpb25UeXBlcy5VUERBVEVfUkVWRUFMX0dBUk1FTlRfQUREX1JPVzpcbiAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgcG9ydGFsQWN0aW9ucy5VcGRhdGVBZGRSb3dHYXJtZW50KGJyb2tlckFjdGlvbi5wYXlMb2FkKSk7XG4gICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICB9XG4gICAgfVxufVxuXG5cbiJdfQ==
