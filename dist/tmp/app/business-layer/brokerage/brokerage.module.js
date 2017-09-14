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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ngrx_broker_consumer_1 = require("./consumers/ngrx.broker.consumer");
var ngrx_data_module_1 = require("../../data-layer/ngrx-data/ngrx.data.module");
var index_1 = require("./ngrx-stubs/index");
var BrokerageModule = BrokerageModule_1 = (function () {
    function BrokerageModule(parentModule) {
        if (parentModule) {
            throw new Error('PubSubBrokerageModule already loaded; Import in root module only.');
        }
    }
    BrokerageModule.forRoot = function () {
        return {
            ngModule: BrokerageModule_1,
            providers: index_1.BROKER_PROVIDERS.concat([ngrx_broker_consumer_1.NGRxBrokerConsumer])
        };
    };
    return BrokerageModule;
}());
BrokerageModule = BrokerageModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule,
            ngrx_data_module_1.NGRxDataModule],
        providers: index_1.BROKER_PROVIDERS.concat([ngrx_broker_consumer_1.NGRxBrokerConsumer])
    }),
    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
    __metadata("design:paramtypes", [BrokerageModule])
], BrokerageModule);
exports.BrokerageModule = BrokerageModule;
var BrokerageModule_1;
