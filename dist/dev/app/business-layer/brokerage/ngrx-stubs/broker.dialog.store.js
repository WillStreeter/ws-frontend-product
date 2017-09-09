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
var brokerlist_1 = require("./brokerlist");
var BrokerDialogStore = (function () {
    function BrokerDialogStore(store, brkrActnBuilder) {
        this.store = store;
        this.brkrActnBuilder = brkrActnBuilder;
        this.brokerLabel = brokerlist_1.BrokerList.BROKER_DIALOG_STORE;
    }
    BrokerDialogStore.prototype.getComponentSupplies = function () {
        return Object.assign({
            brokerLabel: this.brokerLabel,
            storeObs: {
                layoutState$: this.store.select(fromRoot.getLayoutState),
                usersessionState$: this.store.select(fromRoot.getUsersessionState)
            },
            storeDsp: {
                HIDE_LOGIN_DIALOG: this.brkrActnBuilder.create(LayoutActionTypes.HIDE_LOGIN_DIALOG, this.brokerLabel, null)
            }
        });
    };
    BrokerDialogStore.prototype.dispatchAction = function (brokerAction) {
        switch (brokerAction.actionType) {
            case LayoutActionTypes.HIDE_LOGIN_DIALOG:
                this.store.dispatch(new layoutActions.HideLoginDialog());
                break;
        }
    };
    return BrokerDialogStore;
}());
BrokerDialogStore = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store,
        broker_action_builder_1.BrokerActionBuilder])
], BrokerDialogStore);
exports.BrokerDialogStore = BrokerDialogStore;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9idXNpbmVzcy1sYXllci9icm9rZXJhZ2UvbmdyeC1zdHVicy9icm9rZXIuZGlhbG9nLnN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLHFDQUFvQztBQUVwQyw0RkFBMEY7QUFFMUYsdUVBQXlFO0FBQ3pFLG9GQUFzRjtBQUN0RixrRkFBb0Y7QUFDcEYsMkNBQTBDO0FBSTFDLElBQWEsaUJBQWlCO0lBRTFCLDJCQUFxQixLQUE0QixFQUM1QixlQUFtQztRQURuQyxVQUFLLEdBQUwsS0FBSyxDQUF1QjtRQUM1QixvQkFBZSxHQUFmLGVBQWUsQ0FBb0I7UUFGeEQsZ0JBQVcsR0FBVSx1QkFBVSxDQUFDLG1CQUFtQixDQUFDO0lBRVMsQ0FBQztJQUU5RCxnREFBb0IsR0FBcEI7UUFDRyxNQUFNLENBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNWLFdBQVcsRUFBQyxJQUFJLENBQUMsV0FBVztZQUM1QixRQUFRLEVBQUM7Z0JBQ0osWUFBWSxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7Z0JBQ3ZELGlCQUFpQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQzthQUNuRTtZQUNKLFFBQVEsRUFBQztnQkFDTCxpQkFBaUIsRUFBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBRSxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFDOUMsSUFBSSxDQUFDLFdBQVcsRUFDakIsSUFBSSxDQUFDO2FBQ3hDO1NBQ0YsQ0FBQyxDQUFDO0lBRW5CLENBQUM7SUFFRCwwQ0FBYyxHQUFkLFVBQWUsWUFBeUI7UUFDcEMsTUFBTSxDQUFBLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFBLENBQUM7WUFDNUIsS0FBSyxpQkFBaUIsQ0FBQyxpQkFBaUI7Z0JBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksYUFBYSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7Z0JBQzlELEtBQUssQ0FBQztRQUNWLENBQUM7SUFDTCxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQTVCQSxBQTRCQyxJQUFBO0FBNUJZLGlCQUFpQjtJQUQ3QixpQkFBVSxFQUFFO3FDQUdtQixhQUFLO1FBQ0ksMkNBQW1CO0dBSC9DLGlCQUFpQixDQTRCN0I7QUE1QlksOENBQWlCIiwiZmlsZSI6ImFwcC9idXNpbmVzcy1sYXllci9icm9rZXJhZ2UvbmdyeC1zdHVicy9icm9rZXIuZGlhbG9nLnN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xuXG5pbXBvcnQgeyBCcm9rZXJBY3Rpb25CdWlsZGVyIH0gIGZyb20gJy4uLy4uL3B1YnN1Yi1icm9rZXIvc2VydmljZXMvYnJva2VyLmFjdGlvbi5idWlsZGVyJztcbmltcG9ydCB7IEJyb2tlckFjdGlvbiAgfSBmcm9tICcuLi8uLi9wdWJzdWItYnJva2VyL21vZGVscy9icm9rZXIuYWN0aW9uLm1vZGVsJ1xuaW1wb3J0ICogYXMgZnJvbVJvb3QgZnJvbSAnLi4vLi4vLi4vZGF0YS1sYXllci9uZ3J4LWRhdGEvcmVkdWNlcnMvaW5kZXgnO1xuaW1wb3J0ICogYXMgbGF5b3V0QWN0aW9ucyBmcm9tICcuLi8uLi8uLi9kYXRhLWxheWVyL25ncngtZGF0YS9hY3Rpb25zL2xheW91dC5hY3Rpb25zJztcbmltcG9ydCAqIGFzIExheW91dEFjdGlvblR5cGVzIGZyb20gJy4uLy4uL3NoYXJlZC10eXBlcy9hY3Rpb25zL2xheW91dC5hY3Rpb24udHlwZXMnO1xuaW1wb3J0IHsgQnJva2VyTGlzdCB9IGZyb20gJy4vYnJva2VybGlzdCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJyb2tlckRpYWxvZ1N0b3JlIHtcbiAgICBicm9rZXJMYWJlbDpzdHJpbmcgPSBCcm9rZXJMaXN0LkJST0tFUl9ESUFMT0dfU1RPUkU7XG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgc3RvcmU6IFN0b3JlPGZyb21Sb290LlN0YXRlPixcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBicmtyQWN0bkJ1aWxkZXI6QnJva2VyQWN0aW9uQnVpbGRlciApIHsgfVxuXG4gICAgZ2V0Q29tcG9uZW50U3VwcGxpZXMoKTphbnl7XG4gICAgICAgcmV0dXJuICBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICBicm9rZXJMYWJlbDp0aGlzLmJyb2tlckxhYmVsLFxuICAgICAgICAgICAgICAgICAgIHN0b3JlT2JzOntcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dFN0YXRlJDp0aGlzLnN0b3JlLnNlbGVjdChmcm9tUm9vdC5nZXRMYXlvdXRTdGF0ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2Vyc2Vzc2lvblN0YXRlJDogdGhpcy5zdG9yZS5zZWxlY3QoZnJvbVJvb3QuZ2V0VXNlcnNlc3Npb25TdGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgIHN0b3JlRHNwOntcbiAgICAgICAgICAgICAgICAgICAgICAgSElERV9MT0dJTl9ESUFMT0c6dGhpcy5icmtyQWN0bkJ1aWxkZXIuY3JlYXRlKCBMYXlvdXRBY3Rpb25UeXBlcy5ISURFX0xPR0lOX0RJQUxPRyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5icm9rZXJMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBkaXNwYXRjaEFjdGlvbihicm9rZXJBY3Rpb246QnJva2VyQWN0aW9uKTp2b2lkIHtcbiAgICAgICAgc3dpdGNoKGJyb2tlckFjdGlvbi5hY3Rpb25UeXBlKXtcbiAgICAgICAgICAgIGNhc2UgTGF5b3V0QWN0aW9uVHlwZXMuSElERV9MT0dJTl9ESUFMT0c6XG4gICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGxheW91dEFjdGlvbnMuSGlkZUxvZ2luRGlhbG9nKCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuIl19
