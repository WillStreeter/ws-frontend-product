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
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NGRxBrokerConsumer } from './consumers/ngrx.broker.consumer';
import { NGRxDataModule } from "../../data-layer/ngrx-data/ngrx.data.module";
import { BROKER_PROVIDERS } from './ngrx-stubs/index';
let BrokerageModule = BrokerageModule_1 = class BrokerageModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('PubSubBrokerageModule already loaded; Import in root module only.');
        }
    }
    static forRoot() {
        return {
            ngModule: BrokerageModule_1,
            providers: [...BROKER_PROVIDERS,
                NGRxBrokerConsumer]
        };
    }
};
BrokerageModule = BrokerageModule_1 = __decorate([
    NgModule({
        imports: [CommonModule,
            NGRxDataModule],
        providers: [...BROKER_PROVIDERS,
            NGRxBrokerConsumer]
    }),
    __param(0, Optional()), __param(0, SkipSelf()),
    __metadata("design:paramtypes", [BrokerageModule])
], BrokerageModule);
export { BrokerageModule };
var BrokerageModule_1;
