"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var abstract_broker_trader_1 = require("./abstract.broker.trader");
var BrokerPublisher = (function (_super) {
    __extends(BrokerPublisher, _super);
    function BrokerPublisher() {
        return _super.call(this) || this;
    }
    BrokerPublisher.prototype.NotifyBrokerActionConsumers = function (brokerAction) {
        this._consumers[0].ReceiveBrokerAction(brokerAction);
    };
    BrokerPublisher.prototype.NotifyBrokerSelectorConsumer = function (brokerRequest) {
        return this._consumers[0].ReceivedBrokerSelectorRequest(brokerRequest);
    };
    return BrokerPublisher;
}(abstract_broker_trader_1.AbstractBrokerTrader));
BrokerPublisher.decorators = [
    { type: core_1.Injectable },
];
BrokerPublisher.ctorParameters = function () { return []; };
exports.BrokerPublisher = BrokerPublisher;
//# sourceMappingURL=broker.publisher.js.map