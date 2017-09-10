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
    function NGRxBrokerConsumer(brokerGridStore) {
        this.brokerGridStore = brokerGridStore;
    }
    NGRxBrokerConsumer.prototype.ReceiveBrokerAction = function (brokerAction) {
        switch (brokerAction.brokerType) {
            case this.brokerGridStore.brokerLabel:
                this.brokerGridStore.dispatchAction(brokerAction);
                break;
        }
    };
    NGRxBrokerConsumer.prototype.ReceivedBrokerSelectorRequest = function (brokerType) {
        var brokerResponse = new broker_response_model_1.BrokerResponse();
        switch (brokerType) {
            case this.brokerGridStore.brokerLabel:
                brokerResponse.brokerRequested = this.brokerGridStore.getComponentSupplies();
                break;
        }
        return brokerResponse;
    };
    return NGRxBrokerConsumer;
}());
NGRxBrokerConsumer = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [index_1.BrokerGridStore])
], NGRxBrokerConsumer);
exports.NGRxBrokerConsumer = NGRxBrokerConsumer;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9idXNpbmVzcy1sYXllci9icm9rZXJhZ2UvY29uc3VtZXJzL25ncnguYnJva2VyLmNvbnN1bWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBSzNDLDBGQUFtRjtBQUNuRiw2Q0FBd0Q7QUFJeEQsSUFBYSxrQkFBa0I7SUFFM0IsNEJBQXNCLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtJQUFLLENBQUM7SUFFcEQsZ0RBQW1CLEdBQTFCLFVBQTRCLFlBQXlCO1FBQ2pELE1BQU0sQ0FBQSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQSxDQUFDO1lBQzVCLEtBQUssSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXO2dCQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDeEQsS0FBSyxDQUFDO1FBQ1YsQ0FBQztJQUNMLENBQUM7SUFFTSwwREFBNkIsR0FBcEMsVUFBc0MsVUFBaUI7UUFDbkQsSUFBSSxjQUFjLEdBQUcsSUFBSSxzQ0FBYyxFQUFFLENBQUM7UUFDMUMsTUFBTSxDQUFBLENBQUMsVUFBVSxDQUFDLENBQUEsQ0FBQztZQUNmLEtBQUssSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXO2dCQUMvQixjQUFjLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztnQkFDbkYsS0FBSyxDQUFDO1FBQ1YsQ0FBQztRQUNELE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDMUIsQ0FBQztJQUVMLHlCQUFDO0FBQUQsQ0F0QkEsQUFzQkMsSUFBQTtBQXRCWSxrQkFBa0I7SUFEOUIsaUJBQVUsRUFBRTtxQ0FHNkIsdUJBQWU7R0FGNUMsa0JBQWtCLENBc0I5QjtBQXRCWSxnREFBa0IiLCJmaWxlIjoiYXBwL2J1c2luZXNzLWxheWVyL2Jyb2tlcmFnZS9jb25zdW1lcnMvbmdyeC5icm9rZXIuY29uc3VtZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm9rZXJBY3Rpb24gIH0gZnJvbSAnLi4vLi4vcHVic3ViLWJyb2tlci9tb2RlbHMvYnJva2VyLmFjdGlvbi5tb2RlbCc7XG5cbmltcG9ydCB7IElDb25zdW1lciB9IGZyb20gJy4uLy4uL3B1YnN1Yi1icm9rZXIvaW50ZXJmYWNlcy9JQ29uc3VtZXInXG5cbmltcG9ydCB7ICBCcm9rZXJSZXNwb25zZSB9IGZyb20gXCIuLi8uLi9wdWJzdWItYnJva2VyL21vZGVscy9icm9rZXIucmVzcG9uc2UubW9kZWxcIjtcbmltcG9ydCB7ICBCcm9rZXJHcmlkU3RvcmUgfSAgZnJvbSBcIi4uL25ncngtc3R1YnMvaW5kZXhcIjtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTkdSeEJyb2tlckNvbnN1bWVyIGltcGxlbWVudHMgSUNvbnN1bWVye1xuXG4gICAgY29uc3RydWN0b3IoICBwcml2YXRlIGJyb2tlckdyaWRTdG9yZTpCcm9rZXJHcmlkU3RvcmUgICl7IH1cblxuICAgIHB1YmxpYyBSZWNlaXZlQnJva2VyQWN0aW9uKCBicm9rZXJBY3Rpb246QnJva2VyQWN0aW9uKXtcbiAgICAgICAgc3dpdGNoKGJyb2tlckFjdGlvbi5icm9rZXJUeXBlKXtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5icm9rZXJHcmlkU3RvcmUuYnJva2VyTGFiZWw6XG4gICAgICAgICAgICAgICAgICB0aGlzLmJyb2tlckdyaWRTdG9yZS5kaXNwYXRjaEFjdGlvbihicm9rZXJBY3Rpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgUmVjZWl2ZWRCcm9rZXJTZWxlY3RvclJlcXVlc3QoIGJyb2tlclR5cGU6c3RyaW5nKTpCcm9rZXJSZXNwb25zZXtcbiAgICAgICAgdmFyIGJyb2tlclJlc3BvbnNlID0gbmV3IEJyb2tlclJlc3BvbnNlKCk7XG4gICAgICAgIHN3aXRjaChicm9rZXJUeXBlKXtcbiAgICAgICAgICAgIGNhc2UgdGhpcy5icm9rZXJHcmlkU3RvcmUuYnJva2VyTGFiZWw6XG4gICAgICAgICAgICAgICAgICBicm9rZXJSZXNwb25zZS5icm9rZXJSZXF1ZXN0ZWQgPSB0aGlzLmJyb2tlckdyaWRTdG9yZS5nZXRDb21wb25lbnRTdXBwbGllcygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJyb2tlclJlc3BvbnNlO1xuICAgIH1cblxufSJdfQ==
