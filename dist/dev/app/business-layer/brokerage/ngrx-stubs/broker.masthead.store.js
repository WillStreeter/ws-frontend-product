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
                brokerRevealAddRowState$: this.store.select(fromRoot.getRevealAddGarmentRow),
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9idXNpbmVzcy1sYXllci9icm9rZXJhZ2UvbmdyeC1zdHVicy9icm9rZXIubWFzdGhlYWQuc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MscUNBQW9DO0FBRXBDLDRGQUEwRjtBQUUxRix1RUFBeUU7QUFFekUsb0ZBQXNGO0FBRXRGLGtGQUFvRjtBQUVwRiwyQ0FBMEM7QUFJMUMsSUFBYSxtQkFBbUI7SUFFNUIsNkJBQXFCLEtBQTRCLEVBQzVCLGVBQW1DO1FBRG5DLFVBQUssR0FBTCxLQUFLLENBQXVCO1FBQzVCLG9CQUFlLEdBQWYsZUFBZSxDQUFvQjtRQUZ4RCxnQkFBVyxHQUFVLHVCQUFVLENBQUMscUJBQXFCLENBQUM7SUFFTyxDQUFDO0lBRTlELGtEQUFvQixHQUFwQjtRQUNHLE1BQU0sQ0FBRSxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ1YsV0FBVyxFQUFDLElBQUksQ0FBQyxXQUFXO1lBQzVCLFFBQVEsRUFBQztnQkFDSix3QkFBd0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUM7YUFDL0U7WUFDRixRQUFRLEVBQUM7Z0JBQ0wsNkJBQTZCLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUcsaUJBQWlCLENBQUMsNkJBQTZCLEVBQ3ZFLElBQUksQ0FBQyxXQUFXLEVBQ2QsSUFBSSxDQUFDO2FBQzNDO1NBQ04sQ0FBQyxDQUFDO0lBRWYsQ0FBQztJQUVELDRDQUFjLEdBQWQsVUFBZSxZQUF5QjtRQUNuQyxNQUFNLENBQUEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQztZQUM1QixLQUFLLGlCQUFpQixDQUFDLDZCQUE2QjtnQkFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxhQUFhLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3JGLEtBQUssQ0FBQztRQUNWLENBQUM7SUFDTixDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQTNCQSxBQTJCQyxJQUFBO0FBM0JZLG1CQUFtQjtJQUQvQixpQkFBVSxFQUFFO3FDQUdtQixhQUFLO1FBQ0ksMkNBQW1CO0dBSC9DLG1CQUFtQixDQTJCL0I7QUEzQlksa0RBQW1CIiwiZmlsZSI6ImFwcC9idXNpbmVzcy1sYXllci9icm9rZXJhZ2UvbmdyeC1zdHVicy9icm9rZXIubWFzdGhlYWQuc3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIkBuZ3J4L3N0b3JlXCI7XG5cbmltcG9ydCB7IEJyb2tlckFjdGlvbkJ1aWxkZXIgfSAgZnJvbSAnLi4vLi4vcHVic3ViLWJyb2tlci9zZXJ2aWNlcy9icm9rZXIuYWN0aW9uLmJ1aWxkZXInO1xuaW1wb3J0IHsgQnJva2VyQWN0aW9uICB9IGZyb20gJy4uLy4uL3B1YnN1Yi1icm9rZXIvbW9kZWxzL2Jyb2tlci5hY3Rpb24ubW9kZWwnXG5pbXBvcnQgKiBhcyBmcm9tUm9vdCBmcm9tICcuLi8uLi8uLi9kYXRhLWxheWVyL25ncngtZGF0YS9yZWR1Y2Vycy9pbmRleCc7XG5pbXBvcnQgKiBhcyBnYXJtZW50QWN0aW9ucyBmcm9tICcuLi8uLi8uLi9kYXRhLWxheWVyL25ncngtZGF0YS9hY3Rpb25zL2dhcm1lbnQuYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBwb3J0YWxBY3Rpb25zIGZyb20gJy4uLy4uLy4uL2RhdGEtbGF5ZXIvbmdyeC1kYXRhL2FjdGlvbnMvcG9ydGFsLmFjdGlvbnMnO1xuaW1wb3J0ICogYXMgR2FybWVudEFjdGlvblR5cGVzIGZyb20gJy4uLy4uL3NoYXJlZC10eXBlcy9hY3Rpb25zL2dhcm1lbnQuYWN0aW9uLnR5cGVzJztcbmltcG9ydCAqIGFzIFBvcnRhbEFjdGlvblR5cGVzIGZyb20gJy4uLy4uL3NoYXJlZC10eXBlcy9hY3Rpb25zL3BvcnRhbC5hY3Rpb24udHlwZXMnO1xuXG5pbXBvcnQgeyBCcm9rZXJMaXN0IH0gZnJvbSAnLi9icm9rZXJsaXN0JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnJva2VyTWFzdGhlYWRTdG9yZSB7XG4gICAgYnJva2VyTGFiZWw6c3RyaW5nID0gQnJva2VyTGlzdC5CUk9LRVJfTUFTVEhFQURfU1RPUkU7XG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgc3RvcmU6IFN0b3JlPGZyb21Sb290LlN0YXRlPixcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBicmtyQWN0bkJ1aWxkZXI6QnJva2VyQWN0aW9uQnVpbGRlciApIHsgfVxuXG4gICAgZ2V0Q29tcG9uZW50U3VwcGxpZXMoKTphbnl7XG4gICAgICAgcmV0dXJuICBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICBicm9rZXJMYWJlbDp0aGlzLmJyb2tlckxhYmVsLFxuICAgICAgICAgICAgICAgICAgIHN0b3JlT2JzOntcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyb2tlclJldmVhbEFkZFJvd1N0YXRlJDogdGhpcy5zdG9yZS5zZWxlY3QoZnJvbVJvb3QuZ2V0UmV2ZWFsQWRkR2FybWVudFJvdyksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgc3RvcmVEc3A6e1xuICAgICAgICAgICAgICAgICAgICAgICBVUERBVEVfUkVWRUFMX0dBUk1FTlRfQUREX1JPVzp0aGlzLmJya3JBY3RuQnVpbGRlci5jcmVhdGUoICBQb3J0YWxBY3Rpb25UeXBlcy5VUERBVEVfUkVWRUFMX0dBUk1FTlRfQUREX1JPVyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5icm9rZXJMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBkaXNwYXRjaEFjdGlvbihicm9rZXJBY3Rpb246QnJva2VyQWN0aW9uKTp2b2lkIHtcbiAgICAgICAgIHN3aXRjaChicm9rZXJBY3Rpb24uYWN0aW9uVHlwZSl7XG4gICAgICAgICAgICAgY2FzZSBQb3J0YWxBY3Rpb25UeXBlcy5VUERBVEVfUkVWRUFMX0dBUk1FTlRfQUREX1JPVzpcbiAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgcG9ydGFsQWN0aW9ucy5VcGRhdGVBZGRSb3dHYXJtZW50KGJyb2tlckFjdGlvbi5wYXlMb2FkKSk7XG4gICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICB9XG4gICAgfVxufVxuXG5cbiJdfQ==
