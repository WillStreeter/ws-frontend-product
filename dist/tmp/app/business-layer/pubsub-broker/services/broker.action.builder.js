"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var broker_action_model_1 = require("../models/broker.action.model");
var BrokerActionBuilder = (function () {
    function BrokerActionBuilder() {
    }
    BrokerActionBuilder.prototype.create = function (actionType, brokerType, payLoad) {
        var brokerAction = new broker_action_model_1.BrokerAction();
        brokerAction.actionType = actionType;
        brokerAction.brokerType = brokerType;
        brokerAction.payLoad = payLoad;
        return brokerAction;
    };
    return BrokerActionBuilder;
}());
BrokerActionBuilder.decorators = [
    { type: core_1.Injectable },
];
BrokerActionBuilder.ctorParameters = function () { return []; };
exports.BrokerActionBuilder = BrokerActionBuilder;
//# sourceMappingURL=broker.action.builder.js.map