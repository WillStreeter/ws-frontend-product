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
    function NGRxBrokerConsumer(brokerGridStore, brokerMastheadStore, brokerPaginatorStore) {
        this.brokerGridStore = brokerGridStore;
        this.brokerMastheadStore = brokerMastheadStore;
        this.brokerPaginatorStore = brokerPaginatorStore;
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
        }
        return brokerResponse;
    };
    return NGRxBrokerConsumer;
}());
NGRxBrokerConsumer = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.BrokerGridStore,
        index_1.BrokerMastheadStore,
        index_1.BrokerPaginatorStore])
], NGRxBrokerConsumer);
exports.NGRxBrokerConsumer = NGRxBrokerConsumer;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9idXNpbmVzcy1sYXllci9icm9rZXJhZ2UvY29uc3VtZXJzL25ncnguYnJva2VyLmNvbnN1bWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBSzNDLDBGQUFtRjtBQUNuRiw2Q0FBbUc7QUFJbkcsSUFBYSxrQkFBa0I7SUFFM0IsNEJBQXNCLGVBQStCLEVBQy9CLG1CQUF1QyxFQUN2QyxvQkFBeUM7UUFGekMsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQy9CLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7UUFDdkMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtJQUFHLENBQUM7SUFFNUQsZ0RBQW1CLEdBQTFCLFVBQTRCLFlBQXlCO1FBQ2pELE1BQU0sQ0FBQSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQSxDQUFDO1lBQzVCLEtBQUssSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXO2dCQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDeEQsS0FBSyxDQUFDO1lBQ04sS0FBSyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVztnQkFDbkMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDNUQsS0FBSyxDQUFDO1lBQ04sS0FBSyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVztnQkFDcEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDN0QsS0FBSyxDQUFDO1FBQ1YsQ0FBQztJQUNMLENBQUM7SUFFTSwwREFBNkIsR0FBcEMsVUFBc0MsVUFBaUI7UUFDbkQsSUFBSSxjQUFjLEdBQUcsSUFBSSxzQ0FBYyxFQUFFLENBQUM7UUFDMUMsTUFBTSxDQUFBLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQztZQUNmLEtBQUssSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXO2dCQUMvQixjQUFjLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztnQkFDbkYsS0FBSyxDQUFDO1lBQ04sS0FBSyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVztnQkFDbkMsY0FBYyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztnQkFDdkYsS0FBSyxDQUFDO1lBQ04sS0FBSyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVztnQkFDcEMsY0FBYyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztnQkFDeEYsS0FBSyxDQUFDO1FBQ1YsQ0FBQztRQUNELE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDMUIsQ0FBQztJQUVMLHlCQUFDO0FBQUQsQ0FwQ0EsQUFvQ0MsSUFBQTtBQXBDWSxrQkFBa0I7SUFEOUIsaUJBQVUsRUFBRTtxQ0FHNkIsdUJBQWU7UUFDWCwyQkFBbUI7UUFDbEIsNEJBQW9CO0dBSnRELGtCQUFrQixDQW9DOUI7QUFwQ1ksZ0RBQWtCIiwiZmlsZSI6ImFwcC9idXNpbmVzcy1sYXllci9icm9rZXJhZ2UvY29uc3VtZXJzL25ncnguYnJva2VyLmNvbnN1bWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJva2VyQWN0aW9uICB9IGZyb20gJy4uLy4uL3B1YnN1Yi1icm9rZXIvbW9kZWxzL2Jyb2tlci5hY3Rpb24ubW9kZWwnO1xuXG5pbXBvcnQgeyBJQ29uc3VtZXIgfSBmcm9tICcuLi8uLi9wdWJzdWItYnJva2VyL2ludGVyZmFjZXMvSUNvbnN1bWVyJ1xuXG5pbXBvcnQgeyAgQnJva2VyUmVzcG9uc2UgfSBmcm9tIFwiLi4vLi4vcHVic3ViLWJyb2tlci9tb2RlbHMvYnJva2VyLnJlc3BvbnNlLm1vZGVsXCI7XG5pbXBvcnQgeyAgQnJva2VyR3JpZFN0b3JlLCBCcm9rZXJNYXN0aGVhZFN0b3JlLCBCcm9rZXJQYWdpbmF0b3JTdG9yZSB9ICBmcm9tIFwiLi4vbmdyeC1zdHVicy9pbmRleFwiO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOR1J4QnJva2VyQ29uc3VtZXIgaW1wbGVtZW50cyBJQ29uc3VtZXJ7XG5cbiAgICBjb25zdHJ1Y3RvciggIHByaXZhdGUgYnJva2VyR3JpZFN0b3JlOkJyb2tlckdyaWRTdG9yZSxcbiAgICAgICAgICAgICAgICAgIHByaXZhdGUgYnJva2VyTWFzdGhlYWRTdG9yZTpCcm9rZXJNYXN0aGVhZFN0b3JlLFxuICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBicm9rZXJQYWdpbmF0b3JTdG9yZTpCcm9rZXJQYWdpbmF0b3JTdG9yZSl7IH1cblxuICAgIHB1YmxpYyBSZWNlaXZlQnJva2VyQWN0aW9uKCBicm9rZXJBY3Rpb246QnJva2VyQWN0aW9uKXtcbiAgICAgICAgc3dpdGNoKGJyb2tlckFjdGlvbi5icm9rZXJUeXBlKXtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5icm9rZXJHcmlkU3RvcmUuYnJva2VyTGFiZWw6XG4gICAgICAgICAgICAgICAgICB0aGlzLmJyb2tlckdyaWRTdG9yZS5kaXNwYXRjaEFjdGlvbihicm9rZXJBY3Rpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHRoaXMuYnJva2VyTWFzdGhlYWRTdG9yZS5icm9rZXJMYWJlbDpcbiAgICAgICAgICAgICAgICAgIHRoaXMuYnJva2VyTWFzdGhlYWRTdG9yZS5kaXNwYXRjaEFjdGlvbihicm9rZXJBY3Rpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHRoaXMuYnJva2VyUGFnaW5hdG9yU3RvcmUuYnJva2VyTGFiZWw6XG4gICAgICAgICAgICAgICAgICB0aGlzLmJyb2tlclBhZ2luYXRvclN0b3JlLmRpc3BhdGNoQWN0aW9uKGJyb2tlckFjdGlvbik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBSZWNlaXZlZEJyb2tlclNlbGVjdG9yUmVxdWVzdCggYnJva2VyVHlwZTpzdHJpbmcpOkJyb2tlclJlc3BvbnNle1xuICAgICAgICB2YXIgYnJva2VyUmVzcG9uc2UgPSBuZXcgQnJva2VyUmVzcG9uc2UoKTtcbiAgICAgICAgc3dpdGNoKGJyb2tlclR5cGUpe1xuICAgICAgICAgICAgY2FzZSB0aGlzLmJyb2tlckdyaWRTdG9yZS5icm9rZXJMYWJlbDpcbiAgICAgICAgICAgICAgICAgIGJyb2tlclJlc3BvbnNlLmJyb2tlclJlcXVlc3RlZCA9IHRoaXMuYnJva2VyR3JpZFN0b3JlLmdldENvbXBvbmVudFN1cHBsaWVzKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5icm9rZXJNYXN0aGVhZFN0b3JlLmJyb2tlckxhYmVsOlxuICAgICAgICAgICAgICAgICAgYnJva2VyUmVzcG9uc2UuYnJva2VyUmVxdWVzdGVkID0gdGhpcy5icm9rZXJNYXN0aGVhZFN0b3JlLmdldENvbXBvbmVudFN1cHBsaWVzKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgdGhpcy5icm9rZXJQYWdpbmF0b3JTdG9yZS5icm9rZXJMYWJlbDpcbiAgICAgICAgICAgICAgICAgIGJyb2tlclJlc3BvbnNlLmJyb2tlclJlcXVlc3RlZCA9IHRoaXMuYnJva2VyUGFnaW5hdG9yU3RvcmUuZ2V0Q29tcG9uZW50U3VwcGxpZXMoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBicm9rZXJSZXNwb25zZTtcbiAgICB9XG5cbn0iXX0=
