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
var broker_response_model_1 = require("../../pubsub-broker/models/broker.response.model");
var index_1 = require("../ngrx-stubs/index");
var NGRxBrokerConsumer = (function () {
    function NGRxBrokerConsumer(brokerDialogStore, brokerLoginStore, brokerNavStore, brokerRegistrationStore, brokerProfileStore) {
        this.brokerDialogStore = brokerDialogStore;
        this.brokerLoginStore = brokerLoginStore;
        this.brokerNavStore = brokerNavStore;
        this.brokerRegistrationStore = brokerRegistrationStore;
        this.brokerProfileStore = brokerProfileStore;
    }
    NGRxBrokerConsumer.prototype.ReceiveBrokerAction = function (brokerAction) {
        switch (brokerAction.brokerType) {
            case this.brokerDialogStore.brokerLabel:
                this.brokerDialogStore.dispatchAction(brokerAction);
                break;
            case this.brokerLoginStore.brokerLabel:
                this.brokerLoginStore.dispatchAction(brokerAction);
                break;
            case this.brokerNavStore.brokerLabel:
                this.brokerNavStore.dispatchAction(brokerAction);
                break;
            case this.brokerRegistrationStore.brokerLabel:
                this.brokerRegistrationStore.dispatchAction(brokerAction);
                break;
            case this.brokerProfileStore.brokerLabel:
                this.brokerProfileStore.dispatchAction(brokerAction);
                break;
        }
    };
    NGRxBrokerConsumer.prototype.ReceivedBrokerSelectorRequest = function (brokerType) {
        var brokerResponse = new broker_response_model_1.BrokerResponse();
        switch (brokerType) {
            case this.brokerDialogStore.brokerLabel:
                brokerResponse.brokerRequested = this.brokerDialogStore.getComponentSupplies();
                break;
            case this.brokerLoginStore.brokerLabel:
                brokerResponse.brokerRequested = this.brokerLoginStore.getComponentSupplies();
                break;
            case this.brokerNavStore.brokerLabel:
                brokerResponse.brokerRequested = this.brokerNavStore.getComponentSupplies();
                break;
            case this.brokerRegistrationStore.brokerLabel:
                brokerResponse.brokerRequested = this.brokerRegistrationStore.getComponentSupplies();
                break;
            case this.brokerProfileStore.brokerLabel:
                brokerResponse.brokerRequested = this.brokerProfileStore.getComponentSupplies();
                break;
        }
        return brokerResponse;
    };
    return NGRxBrokerConsumer;
}());
NGRxBrokerConsumer = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.BrokerDialogStore,
        index_1.BrokerLoginStore,
        index_1.BrokerNavStore,
        index_1.BrokerRegistrationStore,
        index_1.BrokerProfileStore])
], NGRxBrokerConsumer);
exports.NGRxBrokerConsumer = NGRxBrokerConsumer;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9idXNpbmVzcy1sYXllci9icm9rZXJhZ2UvY29uc3VtZXJzL25ncnguYnJva2VyLmNvbnN1bWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBSzNDLDBGQUFtRjtBQUNuRiw2Q0FJMkQ7QUFJM0QsSUFBYSxrQkFBa0I7SUFFM0IsNEJBQXNCLGlCQUFtQyxFQUNuQyxnQkFBaUMsRUFDakMsY0FBNkIsRUFDN0IsdUJBQStDLEVBQy9DLGtCQUFxQztRQUpyQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDakMsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF3QjtRQUMvQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO0lBQU0sQ0FBQztJQUUzRCxnREFBbUIsR0FBMUIsVUFBNEIsWUFBeUI7UUFDakQsTUFBTSxDQUFBLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFBLENBQUM7WUFDNUIsS0FBSyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVztnQkFDakMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDMUQsS0FBSyxDQUFDO1lBQ04sS0FBSyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVztnQkFDaEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDekQsS0FBSyxDQUFDO1lBRU4sS0FBSyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVc7Z0JBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUN2RCxLQUFLLENBQUM7WUFFTixLQUFLLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXO2dCQUN2QyxJQUFJLENBQUMsdUJBQXVCLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNoRSxLQUFLLENBQUM7WUFFTixLQUFLLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXO2dCQUNsQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUMzRCxLQUFLLENBQUM7UUFDVixDQUFDO0lBQ0wsQ0FBQztJQUlNLDBEQUE2QixHQUFwQyxVQUFzQyxVQUFpQjtRQUNuRCxJQUFJLGNBQWMsR0FBRyxJQUFJLHNDQUFjLEVBQUUsQ0FBQztRQUMxQyxNQUFNLENBQUEsQ0FBQyxVQUFVLENBQUMsQ0FBQSxDQUFDO1lBQ2YsS0FBSyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVztnQkFDakMsY0FBYyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztnQkFDckYsS0FBSyxDQUFDO1lBRU4sS0FBSyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVztnQkFDaEMsY0FBYyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztnQkFDcEYsS0FBSyxDQUFDO1lBRU4sS0FBSyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVc7Z0JBQzlCLGNBQWMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2dCQUNsRixLQUFLLENBQUM7WUFFTixLQUFLLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXO2dCQUN2QyxjQUFjLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2dCQUMzRixLQUFLLENBQUM7WUFFTixLQUFLLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXO2dCQUNsQyxjQUFjLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2dCQUN0RixLQUFLLENBQUM7UUFDVixDQUFDO1FBQ0QsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUMxQixDQUFDO0lBRUwseUJBQUM7QUFBRCxDQTNEQSxBQTJEQyxJQUFBO0FBM0RZLGtCQUFrQjtJQUQ5QixpQkFBVSxFQUFFO3FDQUcrQix5QkFBaUI7UUFDbEIsd0JBQWdCO1FBQ2xCLHNCQUFjO1FBQ0wsK0JBQXVCO1FBQzVCLDBCQUFrQjtHQU5sRCxrQkFBa0IsQ0EyRDlCO0FBM0RZLGdEQUFrQiIsImZpbGUiOiJhcHAvYnVzaW5lc3MtbGF5ZXIvYnJva2VyYWdlL2NvbnN1bWVycy9uZ3J4LmJyb2tlci5jb25zdW1lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb2tlckFjdGlvbiAgfSBmcm9tICcuLi8uLi9wdWJzdWItYnJva2VyL21vZGVscy9icm9rZXIuYWN0aW9uLm1vZGVsJztcblxuaW1wb3J0IHsgSUNvbnN1bWVyIH0gZnJvbSAnLi4vLi4vcHVic3ViLWJyb2tlci9pbnRlcmZhY2VzL0lDb25zdW1lcidcblxuaW1wb3J0IHsgIEJyb2tlclJlc3BvbnNlIH0gZnJvbSBcIi4uLy4uL3B1YnN1Yi1icm9rZXIvbW9kZWxzL2Jyb2tlci5yZXNwb25zZS5tb2RlbFwiO1xuaW1wb3J0IHsgIEJyb2tlckRpYWxvZ1N0b3JlLFxuICAgICAgICAgIEJyb2tlckxvZ2luU3RvcmUsXG4gICAgICAgICAgQnJva2VyTmF2U3RvcmUsXG4gICAgICAgICAgQnJva2VyUmVnaXN0cmF0aW9uU3RvcmUsXG4gICAgICAgICAgQnJva2VyUHJvZmlsZVN0b3JlIH0gIGZyb20gXCIuLi9uZ3J4LXN0dWJzL2luZGV4XCI7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5HUnhCcm9rZXJDb25zdW1lciBpbXBsZW1lbnRzIElDb25zdW1lcntcblxuICAgIGNvbnN0cnVjdG9yKCAgcHJpdmF0ZSBicm9rZXJEaWFsb2dTdG9yZTpCcm9rZXJEaWFsb2dTdG9yZSxcbiAgICAgICAgICAgICAgICAgIHByaXZhdGUgYnJva2VyTG9naW5TdG9yZTpCcm9rZXJMb2dpblN0b3JlLFxuICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBicm9rZXJOYXZTdG9yZTpCcm9rZXJOYXZTdG9yZSxcbiAgICAgICAgICAgICAgICAgIHByaXZhdGUgYnJva2VyUmVnaXN0cmF0aW9uU3RvcmU6QnJva2VyUmVnaXN0cmF0aW9uU3RvcmUsXG4gICAgICAgICAgICAgICAgICBwcml2YXRlIGJyb2tlclByb2ZpbGVTdG9yZTpCcm9rZXJQcm9maWxlU3RvcmUgICApeyB9XG5cbiAgICBwdWJsaWMgUmVjZWl2ZUJyb2tlckFjdGlvbiggYnJva2VyQWN0aW9uOkJyb2tlckFjdGlvbil7XG4gICAgICAgIHN3aXRjaChicm9rZXJBY3Rpb24uYnJva2VyVHlwZSl7XG4gICAgICAgICAgICBjYXNlIHRoaXMuYnJva2VyRGlhbG9nU3RvcmUuYnJva2VyTGFiZWw6XG4gICAgICAgICAgICAgICAgICB0aGlzLmJyb2tlckRpYWxvZ1N0b3JlLmRpc3BhdGNoQWN0aW9uKGJyb2tlckFjdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5icm9rZXJMb2dpblN0b3JlLmJyb2tlckxhYmVsOlxuICAgICAgICAgICAgICAgICAgdGhpcy5icm9rZXJMb2dpblN0b3JlLmRpc3BhdGNoQWN0aW9uKGJyb2tlckFjdGlvbik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSB0aGlzLmJyb2tlck5hdlN0b3JlLmJyb2tlckxhYmVsOlxuICAgICAgICAgICAgICAgICAgdGhpcy5icm9rZXJOYXZTdG9yZS5kaXNwYXRjaEFjdGlvbihicm9rZXJBY3Rpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgdGhpcy5icm9rZXJSZWdpc3RyYXRpb25TdG9yZS5icm9rZXJMYWJlbDpcbiAgICAgICAgICAgICAgICAgIHRoaXMuYnJva2VyUmVnaXN0cmF0aW9uU3RvcmUuZGlzcGF0Y2hBY3Rpb24oYnJva2VyQWN0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIHRoaXMuYnJva2VyUHJvZmlsZVN0b3JlLmJyb2tlckxhYmVsOlxuICAgICAgICAgICAgICAgICAgdGhpcy5icm9rZXJQcm9maWxlU3RvcmUuZGlzcGF0Y2hBY3Rpb24oYnJva2VyQWN0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIHB1YmxpYyBSZWNlaXZlZEJyb2tlclNlbGVjdG9yUmVxdWVzdCggYnJva2VyVHlwZTpzdHJpbmcpOkJyb2tlclJlc3BvbnNle1xuICAgICAgICB2YXIgYnJva2VyUmVzcG9uc2UgPSBuZXcgQnJva2VyUmVzcG9uc2UoKTtcbiAgICAgICAgc3dpdGNoKGJyb2tlclR5cGUpe1xuICAgICAgICAgICAgY2FzZSB0aGlzLmJyb2tlckRpYWxvZ1N0b3JlLmJyb2tlckxhYmVsOlxuICAgICAgICAgICAgICAgICAgYnJva2VyUmVzcG9uc2UuYnJva2VyUmVxdWVzdGVkID0gdGhpcy5icm9rZXJEaWFsb2dTdG9yZS5nZXRDb21wb25lbnRTdXBwbGllcygpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgdGhpcy5icm9rZXJMb2dpblN0b3JlLmJyb2tlckxhYmVsOlxuICAgICAgICAgICAgICAgICAgYnJva2VyUmVzcG9uc2UuYnJva2VyUmVxdWVzdGVkID0gdGhpcy5icm9rZXJMb2dpblN0b3JlLmdldENvbXBvbmVudFN1cHBsaWVzKCk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSB0aGlzLmJyb2tlck5hdlN0b3JlLmJyb2tlckxhYmVsOlxuICAgICAgICAgICAgICAgICAgYnJva2VyUmVzcG9uc2UuYnJva2VyUmVxdWVzdGVkID0gdGhpcy5icm9rZXJOYXZTdG9yZS5nZXRDb21wb25lbnRTdXBwbGllcygpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgdGhpcy5icm9rZXJSZWdpc3RyYXRpb25TdG9yZS5icm9rZXJMYWJlbDpcbiAgICAgICAgICAgICAgICAgIGJyb2tlclJlc3BvbnNlLmJyb2tlclJlcXVlc3RlZCA9IHRoaXMuYnJva2VyUmVnaXN0cmF0aW9uU3RvcmUuZ2V0Q29tcG9uZW50U3VwcGxpZXMoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIHRoaXMuYnJva2VyUHJvZmlsZVN0b3JlLmJyb2tlckxhYmVsOlxuICAgICAgICAgICAgICAgICAgYnJva2VyUmVzcG9uc2UuYnJva2VyUmVxdWVzdGVkID0gdGhpcy5icm9rZXJQcm9maWxlU3RvcmUuZ2V0Q29tcG9uZW50U3VwcGxpZXMoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBicm9rZXJSZXNwb25zZTtcbiAgICB9XG5cbn0iXX0=
