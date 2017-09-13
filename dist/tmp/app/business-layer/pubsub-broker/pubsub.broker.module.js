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
import { BrokerActionBuilder } from './services/broker.action.builder';
import { BrokerDispatcherService } from './services/broker.dispatcher.service';
import { BrokerPublisher } from './outlet/broker.publisher';
let PubSubBrokerModule = PubSubBrokerModule_1 = class PubSubBrokerModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('PubSubBroker already loaded; Import in root module only.');
        }
    }
    static forRoot() {
        return {
            ngModule: PubSubBrokerModule_1,
            providers: [BrokerActionBuilder,
                BrokerDispatcherService,
                BrokerPublisher]
        };
    }
};
PubSubBrokerModule = PubSubBrokerModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        providers: [BrokerActionBuilder,
            BrokerDispatcherService,
            BrokerPublisher]
    }),
    __param(0, Optional()), __param(0, SkipSelf()),
    __metadata("design:paramtypes", [PubSubBrokerModule])
], PubSubBrokerModule);
export { PubSubBrokerModule };
var PubSubBrokerModule_1;
