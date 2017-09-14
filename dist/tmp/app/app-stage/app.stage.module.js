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
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var flex_layout_1 = require("@angular/flex-layout");
var ngrx_data_module_1 = require("../data-layer/ngrx-data/ngrx.data.module");
var ngrx_broker_registration_service_1 = require("../business-layer/brokerage/registries/ngrx.broker.registration.service");
var brokerage_module_1 = require("../business-layer/brokerage/brokerage.module");
var pubsub_broker_module_1 = require("../business-layer/pubsub-broker/pubsub.broker.module");
var home_module_1 = require("../view-layer/modules-by-route/home/home.module");
var notfound_page_module_1 = require("../view-layer/modules-by-route/notfound/notfound.page.module");
var app_stage_component_1 = require("./app.stage.component");
var app_stage_routing_module_1 = require("./app.stage.routing.module");
var http_2 = require("@angular/http");
var AppStageModule = (function () {
    function AppStageModule(ngrxBRS) {
        this.ngrxBRS = ngrxBRS;
    }
    return AppStageModule;
}());
AppStageModule = __decorate([
    core_1.NgModule({
        declarations: [app_stage_component_1.AppStageComponent],
        imports: [
            common_1.CommonModule,
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            ngrx_data_module_1.NGRxDataModule.forRoot(),
            pubsub_broker_module_1.PubSubBrokerModule.forRoot(),
            brokerage_module_1.BrokerageModule.forRoot(),
            app_stage_routing_module_1.AppStageRoutingModule,
            home_module_1.HomeModule,
            notfound_page_module_1.NotfoundPageModule,
            flex_layout_1.FlexLayoutModule
        ],
        providers: [
            ngrx_broker_registration_service_1.NGRxBrokerRegistrationService,
            http_2.BaseRequestOptions,
            {
                provide: common_1.APP_BASE_HREF,
                useValue: '/'
            }
        ],
        bootstrap: [app_stage_component_1.AppStageComponent]
    }),
    __metadata("design:paramtypes", [ngrx_broker_registration_service_1.NGRxBrokerRegistrationService])
], AppStageModule);
exports.AppStageModule = AppStageModule;
