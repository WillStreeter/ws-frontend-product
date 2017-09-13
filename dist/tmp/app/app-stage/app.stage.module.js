var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, } from '@angular/core';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NGRxDataModule } from '../data-layer/ngrx-data/ngrx.data.module';
import { NGRxBrokerRegistrationService } from '../business-layer/brokerage/registries/ngrx.broker.registration.service';
import { BrokerageModule } from '../business-layer/brokerage/brokerage.module';
import { PubSubBrokerModule } from '../business-layer/pubsub-broker/pubsub.broker.module';
import { HomeModule } from '../view-layer/modules-by-route/home/home.module';
import { NotfoundPageModule } from '../view-layer/modules-by-route/notfound/notfound.page.module';
import { AppStageComponent } from './app.stage.component';
import { AppStageRoutingModule } from './app.stage.routing.module';
import { fakeBackendProvider } from '../shared-utils/dev-mocked-backend/index';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
let AppStageModule = class AppStageModule {
    constructor(ngrxBRS) {
        this.ngrxBRS = ngrxBRS;
    }
};
AppStageModule = __decorate([
    NgModule({
        declarations: [AppStageComponent],
        imports: [
            CommonModule,
            BrowserModule,
            BrowserAnimationsModule,
            FormsModule,
            ReactiveFormsModule,
            HttpModule,
            NGRxDataModule.forRoot(),
            PubSubBrokerModule.forRoot(),
            BrokerageModule.forRoot(),
            AppStageRoutingModule,
            HomeModule,
            NotfoundPageModule,
            FlexLayoutModule
        ],
        providers: [
            NGRxBrokerRegistrationService,
            fakeBackendProvider,
            MockBackend,
            BaseRequestOptions,
            {
                provide: APP_BASE_HREF,
                useValue: '/'
            }
        ],
        bootstrap: [AppStageComponent]
    }),
    __metadata("design:paramtypes", [NGRxBrokerRegistrationService])
], AppStageModule);
export { AppStageModule };
