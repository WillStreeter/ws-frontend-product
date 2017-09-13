"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractBrokerTrader = (function () {
    function AbstractBrokerTrader() {
        this._consumers = [];
    }
    AbstractBrokerTrader.prototype.RegisterBrokerConsumer = function (consumer) {
        this._consumers.push(consumer);
    };
    AbstractBrokerTrader.prototype.RemoveBrokerConsumer = function (consumer) {
        var i = this._consumers.length;
        while (i--) {
            if (this._consumers[i] === consumer) {
                this._consumers.splice(i, 1);
            }
        }
    };
    return AbstractBrokerTrader;
}());
exports.AbstractBrokerTrader = AbstractBrokerTrader;
//# sourceMappingURL=abstract.broker.trader.js.map