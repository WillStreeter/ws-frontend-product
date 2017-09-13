"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ngrx_broker_consumer_1 = require("./consumers/ngrx.broker.consumer");
var ngrx_data_module_1 = require("../../data-layer/ngrx-data/ngrx.data.module");
var index_1 = require("./ngrx-stubs/index");
var BrokerageModule = (function () {
    function BrokerageModule(parentModule) {
        if (parentModule) {
            throw new Error('PubSubBrokerageModule already loaded; Import in root module only.');
        }
    }
    BrokerageModule.forRoot = function () {
        return {
            ngModule: BrokerageModule,
            providers: index_1.BROKER_PROVIDERS.concat([ngrx_broker_consumer_1.NGRxBrokerConsumer])
        };
    };
    return BrokerageModule;
}());
BrokerageModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [common_1.CommonModule,
                    ngrx_data_module_1.NGRxDataModule],
                providers: index_1.BROKER_PROVIDERS.concat([ngrx_broker_consumer_1.NGRxBrokerConsumer])
            },] },
];
BrokerageModule.ctorParameters = function () { return [
    { type: BrokerageModule, decorators: [{ type: core_1.Optional }, { type: core_1.SkipSelf },] },
]; };
exports.BrokerageModule = BrokerageModule;
//# sourceMappingURL=brokerage.module.js.map