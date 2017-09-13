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
    function NGRxBrokerConsumer(brokerGridStore, brokerMastheadStore, brokerPaginatorStore, brokerSearchStore) {
        this.brokerGridStore = brokerGridStore;
        this.brokerMastheadStore = brokerMastheadStore;
        this.brokerPaginatorStore = brokerPaginatorStore;
        this.brokerSearchStore = brokerSearchStore;
    }
    NGRxBrokerConsumer.prototype.ReceiveBrokerAction = function (brokerAction) {
        switch (brokerAction.brokerType) {
            case this.brokerGridStore.brokerLabel:
                this.brokerGridStore.dispatchAction(brokerAction);
                break;
            case this.brokerMastheadStore.brokerLabel:
                this.brokerMastheadStore.dispatchAction(brokerAction);
                break;
            case this.brokerPaginatorStore.brokerLabel:
                this.brokerPaginatorStore.dispatchAction(brokerAction);
                break;
            case this.brokerSearchStore.brokerLabel:
                this.brokerSearchStore.dispatchAction(brokerAction);
                break;
        }
    };
    NGRxBrokerConsumer.prototype.ReceivedBrokerSelectorRequest = function (brokerType) {
        var brokerResponse = new broker_response_model_1.BrokerResponse();
        switch (brokerType) {
            case this.brokerGridStore.brokerLabel:
                brokerResponse.brokerRequested = this.brokerGridStore.getComponentSupplies();
                break;
            case this.brokerMastheadStore.brokerLabel:
                brokerResponse.brokerRequested = this.brokerMastheadStore.getComponentSupplies();
                break;
            case this.brokerPaginatorStore.brokerLabel:
                brokerResponse.brokerRequested = this.brokerPaginatorStore.getComponentSupplies();
                break;
            case this.brokerSearchStore.brokerLabel:
                brokerResponse.brokerRequested = this.brokerSearchStore.getComponentSupplies();
                break;
        }
        return brokerResponse;
    };
    return NGRxBrokerConsumer;
}());
NGRxBrokerConsumer = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.BrokerGridStore,
        index_1.BrokerMastheadStore,
        index_1.BrokerPaginatorStore,
        index_1.BrokerSearchStore])
], NGRxBrokerConsumer);
exports.NGRxBrokerConsumer = NGRxBrokerConsumer;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9idXNpbmVzcy1sYXllci9icm9rZXJhZ2UvY29uc3VtZXJzL25ncnguYnJva2VyLmNvbnN1bWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBSzNDLDBGQUFtRjtBQUNuRiw2Q0FBc0g7QUFJdEgsSUFBYSxrQkFBa0I7SUFFM0IsNEJBQXNCLGVBQStCLEVBQy9CLG1CQUF1QyxFQUN2QyxvQkFBeUMsRUFDekMsaUJBQW1DO1FBSG5DLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBQ3ZDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7UUFDekMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtJQUFHLENBQUM7SUFFdEQsZ0RBQW1CLEdBQTFCLFVBQTRCLFlBQXlCO1FBQ2pELE1BQU0sQ0FBQSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQSxDQUFDO1lBQzVCLEtBQUssSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXO2dCQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDeEQsS0FBSyxDQUFDO1lBQ04sS0FBSyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVztnQkFDbkMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDNUQsS0FBSyxDQUFDO1lBQ04sS0FBSyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVztnQkFDcEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDN0QsS0FBSyxDQUFDO1lBQ04sS0FBSyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVztnQkFDbkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDeEQsS0FBSyxDQUFDO1FBQ1YsQ0FBQztJQUNMLENBQUM7SUFFTSwwREFBNkIsR0FBcEMsVUFBc0MsVUFBaUI7UUFDbkQsSUFBSSxjQUFjLEdBQUcsSUFBSSxzQ0FBYyxFQUFFLENBQUM7UUFDMUMsTUFBTSxDQUFBLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQztZQUNmLEtBQUssSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXO2dCQUMvQixjQUFjLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztnQkFDbkYsS0FBSyxDQUFDO1lBQ04sS0FBSyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVztnQkFDbkMsY0FBYyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztnQkFDdkYsS0FBSyxDQUFDO1lBQ04sS0FBSyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVztnQkFDcEMsY0FBYyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztnQkFDeEYsS0FBSyxDQUFDO1lBQ04sS0FBSyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVztnQkFDbkMsY0FBYyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztnQkFDL0UsS0FBSyxDQUFDO1FBQ2QsQ0FBQztRQUNELE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDMUIsQ0FBQztJQUVMLHlCQUFDO0FBQUQsQ0EzQ0EsQUEyQ0MsSUFBQTtBQTNDWSxrQkFBa0I7SUFEOUIsaUJBQVUsRUFBRTtxQ0FHNkIsdUJBQWU7UUFDWCwyQkFBbUI7UUFDbEIsNEJBQW9CO1FBQ3ZCLHlCQUFpQjtHQUxoRCxrQkFBa0IsQ0EyQzlCO0FBM0NZLGdEQUFrQiIsImZpbGUiOiJhcHAvYnVzaW5lc3MtbGF5ZXIvYnJva2VyYWdlL2NvbnN1bWVycy9uZ3J4LmJyb2tlci5jb25zdW1lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb2tlckFjdGlvbiAgfSBmcm9tICcuLi8uLi9wdWJzdWItYnJva2VyL21vZGVscy9icm9rZXIuYWN0aW9uLm1vZGVsJztcblxuaW1wb3J0IHsgSUNvbnN1bWVyIH0gZnJvbSAnLi4vLi4vcHVic3ViLWJyb2tlci9pbnRlcmZhY2VzL0lDb25zdW1lcidcblxuaW1wb3J0IHsgIEJyb2tlclJlc3BvbnNlIH0gZnJvbSBcIi4uLy4uL3B1YnN1Yi1icm9rZXIvbW9kZWxzL2Jyb2tlci5yZXNwb25zZS5tb2RlbFwiO1xuaW1wb3J0IHsgIEJyb2tlckdyaWRTdG9yZSwgQnJva2VyTWFzdGhlYWRTdG9yZSwgQnJva2VyUGFnaW5hdG9yU3RvcmUsIEJyb2tlclNlYXJjaFN0b3JlIH0gIGZyb20gXCIuLi9uZ3J4LXN0dWJzL2luZGV4XCI7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5HUnhCcm9rZXJDb25zdW1lciBpbXBsZW1lbnRzIElDb25zdW1lcntcblxuICAgIGNvbnN0cnVjdG9yKCAgcHJpdmF0ZSBicm9rZXJHcmlkU3RvcmU6QnJva2VyR3JpZFN0b3JlLFxuICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBicm9rZXJNYXN0aGVhZFN0b3JlOkJyb2tlck1hc3RoZWFkU3RvcmUsXG4gICAgICAgICAgICAgICAgICBwcml2YXRlIGJyb2tlclBhZ2luYXRvclN0b3JlOkJyb2tlclBhZ2luYXRvclN0b3JlLFxuICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBicm9rZXJTZWFyY2hTdG9yZTpCcm9rZXJTZWFyY2hTdG9yZSl7IH1cblxuICAgIHB1YmxpYyBSZWNlaXZlQnJva2VyQWN0aW9uKCBicm9rZXJBY3Rpb246QnJva2VyQWN0aW9uKXtcbiAgICAgICAgc3dpdGNoKGJyb2tlckFjdGlvbi5icm9rZXJUeXBlKXtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5icm9rZXJHcmlkU3RvcmUuYnJva2VyTGFiZWw6XG4gICAgICAgICAgICAgICAgICB0aGlzLmJyb2tlckdyaWRTdG9yZS5kaXNwYXRjaEFjdGlvbihicm9rZXJBY3Rpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHRoaXMuYnJva2VyTWFzdGhlYWRTdG9yZS5icm9rZXJMYWJlbDpcbiAgICAgICAgICAgICAgICAgIHRoaXMuYnJva2VyTWFzdGhlYWRTdG9yZS5kaXNwYXRjaEFjdGlvbihicm9rZXJBY3Rpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHRoaXMuYnJva2VyUGFnaW5hdG9yU3RvcmUuYnJva2VyTGFiZWw6XG4gICAgICAgICAgICAgICAgICB0aGlzLmJyb2tlclBhZ2luYXRvclN0b3JlLmRpc3BhdGNoQWN0aW9uKGJyb2tlckFjdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5icm9rZXJTZWFyY2hTdG9yZS5icm9rZXJMYWJlbDpcbiAgICAgICAgICAgICAgICB0aGlzLmJyb2tlclNlYXJjaFN0b3JlLmRpc3BhdGNoQWN0aW9uKGJyb2tlckFjdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBSZWNlaXZlZEJyb2tlclNlbGVjdG9yUmVxdWVzdCggYnJva2VyVHlwZTpzdHJpbmcpOkJyb2tlclJlc3BvbnNle1xuICAgICAgICB2YXIgYnJva2VyUmVzcG9uc2UgPSBuZXcgQnJva2VyUmVzcG9uc2UoKTtcbiAgICAgICAgc3dpdGNoKGJyb2tlclR5cGUpe1xuICAgICAgICAgICAgY2FzZSB0aGlzLmJyb2tlckdyaWRTdG9yZS5icm9rZXJMYWJlbDpcbiAgICAgICAgICAgICAgICAgIGJyb2tlclJlc3BvbnNlLmJyb2tlclJlcXVlc3RlZCA9IHRoaXMuYnJva2VyR3JpZFN0b3JlLmdldENvbXBvbmVudFN1cHBsaWVzKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5icm9rZXJNYXN0aGVhZFN0b3JlLmJyb2tlckxhYmVsOlxuICAgICAgICAgICAgICAgICAgYnJva2VyUmVzcG9uc2UuYnJva2VyUmVxdWVzdGVkID0gdGhpcy5icm9rZXJNYXN0aGVhZFN0b3JlLmdldENvbXBvbmVudFN1cHBsaWVzKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5icm9rZXJQYWdpbmF0b3JTdG9yZS5icm9rZXJMYWJlbDpcbiAgICAgICAgICAgICAgICAgIGJyb2tlclJlc3BvbnNlLmJyb2tlclJlcXVlc3RlZCA9IHRoaXMuYnJva2VyUGFnaW5hdG9yU3RvcmUuZ2V0Q29tcG9uZW50U3VwcGxpZXMoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSB0aGlzLmJyb2tlclNlYXJjaFN0b3JlLmJyb2tlckxhYmVsOlxuICAgICAgICAgICAgICAgIGJyb2tlclJlc3BvbnNlLmJyb2tlclJlcXVlc3RlZCA9IHRoaXMuYnJva2VyU2VhcmNoU3RvcmUuZ2V0Q29tcG9uZW50U3VwcGxpZXMoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnJva2VyUmVzcG9uc2U7XG4gICAgfVxuXG59Il19
