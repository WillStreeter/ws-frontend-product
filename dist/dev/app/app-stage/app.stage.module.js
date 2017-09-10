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
var flex_layout_1 = require("@angular/flex-layout");
var ngrx_data_module_1 = require("../data-layer/ngrx-data/ngrx.data.module");
var ngrx_broker_registration_service_1 = require("../business-layer/brokerage/registries/ngrx.broker.registration.service");
var brokerage_module_1 = require("../business-layer/brokerage/brokerage.module");
var pubsub_broker_module_1 = require("../business-layer/pubsub-broker/pubsub.broker.module");
var home_module_1 = require("../view-layer/modules-by-route/home/home.module");
var notfound_page_module_1 = require("../view-layer/modules-by-route/notfound/notfound.page.module");
var app_stage_component_1 = require("./app.stage.component");
var app_stage_routing_module_1 = require("./app.stage.routing.module");
var index_1 = require("../shared-utils/dev-mocked-backend/index");
var testing_1 = require("@angular/http/testing");
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
            index_1.fakeBackendProvider,
            testing_1.MockBackend,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAtc3RhZ2UvYXBwLnN0YWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUMxQyxzQ0FBMkM7QUFDM0MsMENBQThEO0FBQzlELDhEQUEwRDtBQUMxRCxtRUFBK0U7QUFFL0Usb0RBQXdEO0FBR3hELDZFQUEwRTtBQUUxRSw0SEFBd0g7QUFHeEgsaUZBQWlGO0FBRWpGLDZGQUE0RjtBQU01RiwrRUFBOEU7QUFDOUUscUdBQW1HO0FBT25HLDZEQUEwRDtBQUMxRCx1RUFBbUU7QUFRbkUsa0VBQStFO0FBQy9FLGlEQUFvRDtBQUNwRCxzQ0FBbUQ7QUFpQ25ELElBQWEsY0FBYztJQUN2Qix3QkFBb0IsT0FBcUM7UUFBckMsWUFBTyxHQUFQLE9BQU8sQ0FBOEI7SUFBRSxDQUFDO0lBQ2hFLHFCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxjQUFjO0lBL0IxQixlQUFRLENBQUM7UUFDUixZQUFZLEVBQUUsQ0FBRSx1Q0FBaUIsQ0FBRTtRQUNuQyxPQUFPLEVBQUU7WUFDRSxxQkFBWTtZQUNaLGdDQUFhO1lBQ2Isb0NBQXVCO1lBQ3ZCLGlCQUFVO1lBQ1YsaUNBQWMsQ0FBQyxPQUFPLEVBQUU7WUFDeEIseUNBQWtCLENBQUMsT0FBTyxFQUFFO1lBQzVCLGtDQUFlLENBQUMsT0FBTyxFQUFFO1lBQ3pCLGdEQUFxQjtZQUNyQix3QkFBVTtZQUNWLHlDQUFrQjtZQUNsQiw4QkFBZ0I7U0FDakI7UUFDVixTQUFTLEVBQUU7WUFDVCxnRUFBNkI7WUFJN0IsMkJBQW1CO1lBQ25CLHFCQUFXO1lBQ1gseUJBQWtCO1lBQ25CO2dCQUNDLE9BQU8sRUFBRSxzQkFBYTtnQkFDdEIsUUFBUSxFQUFFLGlCQUFpQjthQUMzQjtTQUFDO1FBQ0gsU0FBUyxFQUFFLENBQUUsdUNBQWlCLENBQUU7S0FFakMsQ0FBQztxQ0FHOEIsZ0VBQTZCO0dBRGhELGNBQWMsQ0FFMUI7QUFGWSx3Q0FBYyIsImZpbGUiOiJhcHAvYXBwLXN0YWdlL2FwcC5zdGFnZS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEFQUF9CQVNFX0hSRUYsIENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5cbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7XG5cbi8vZGF0YSBsYXllclxuaW1wb3J0IHsgTkdSeERhdGFNb2R1bGUgfSBmcm9tICcuLi9kYXRhLWxheWVyL25ncngtZGF0YS9uZ3J4LmRhdGEubW9kdWxlJztcblxuaW1wb3J0IHsgTkdSeEJyb2tlclJlZ2lzdHJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9idXNpbmVzcy1sYXllci9icm9rZXJhZ2UvcmVnaXN0cmllcy9uZ3J4LmJyb2tlci5yZWdpc3RyYXRpb24uc2VydmljZSc7XG5cbi8vYnVzaW5lc3MgbGF5ZXIgbmdyeCBwdWJzdWItYnJva2VyIGJyb2tlcmFnZVxuaW1wb3J0IHsgQnJva2VyYWdlTW9kdWxlIH0gICBmcm9tICcuLi9idXNpbmVzcy1sYXllci9icm9rZXJhZ2UvYnJva2VyYWdlLm1vZHVsZSc7XG4vLyBoYW5kbGUgcmVxdWVzdCBmcm9tIHZpZXdsYXllciB0byB0aGUgc3RvcmUgYnkgd2F5IG9mIGEgYnJva2VyYWdlXG5pbXBvcnQgeyBQdWJTdWJCcm9rZXJNb2R1bGUgfSAgIGZyb20gJy4uL2J1c2luZXNzLWxheWVyL3B1YnN1Yi1icm9rZXIvcHVic3ViLmJyb2tlci5tb2R1bGUnO1xuXG5cbi8qXG4gIFBhZ2Ugdmlld3NcbiAqL1xuaW1wb3J0IHsgSG9tZU1vZHVsZSB9ICBmcm9tICcuLi92aWV3LWxheWVyL21vZHVsZXMtYnktcm91dGUvaG9tZS9ob21lLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3Rmb3VuZFBhZ2VNb2R1bGUgfSAgZnJvbSAnLi4vdmlldy1sYXllci9tb2R1bGVzLWJ5LXJvdXRlL25vdGZvdW5kL25vdGZvdW5kLnBhZ2UubW9kdWxlJztcblxuXG5cbi8qXG4gICAgIFNtYXJ0IENvbnRhaW5lciAoY29tcG9uZW50cyB0aGF0IHJlZmVyZW5jZSBuZ3J4IFN0b3JlKVxuICovXG5pbXBvcnQgeyBBcHBTdGFnZUNvbXBvbmVudCB9IGZyb20gJy4vYXBwLnN0YWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBcHBTdGFnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC5zdGFnZS5yb3V0aW5nLm1vZHVsZSc7XG5cbi8qXG4gICBKdXN0IGZvciBkZXZlbG9wbWVudCBhbmQgZGVtb25zdHJhdGlvbiBwdXJwb3NlcyBJIGhhdmUgaW5jbHVkaW5nIHRoZSBmb2xsb3dpbmcgaW4gdGhpcyBicmFuY2hcbiAgIHNvIGFzIHRvIGNyZWF0ZSBhIHN0YXRpYyBnaXQgaHViIHBhZ2UgZm9yIGJsb2cvZGVtbyBwcmVzZW50YXRpb25zLi4uIEluIGdlbmVyYWwsIEkgYmVsaWV2ZSB0aGlzIGlzIG5vdFxuICAgYSBnb29kIHByYWN0aWNlXG4gKi9cblxuaW1wb3J0IHsgZmFrZUJhY2tlbmRQcm92aWRlciB9IGZyb20gJy4uL3NoYXJlZC11dGlscy9kZXYtbW9ja2VkLWJhY2tlbmQvaW5kZXgnO1xuaW1wb3J0IHsgTW9ja0JhY2tlbmQgfSBmcm9tICdAYW5ndWxhci9odHRwL3Rlc3RpbmcnO1xuaW1wb3J0IHsgQmFzZVJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogWyBBcHBTdGFnZUNvbXBvbmVudCBdLFxuICBpbXBvcnRzOiBbXG4gICAgICAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICAgICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgICAgICAgICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG4gICAgICAgICAgICAgSHR0cE1vZHVsZSxcbiAgICAgICAgICAgICBOR1J4RGF0YU1vZHVsZS5mb3JSb290KCksXG4gICAgICAgICAgICAgUHViU3ViQnJva2VyTW9kdWxlLmZvclJvb3QoKSxcbiAgICAgICAgICAgICBCcm9rZXJhZ2VNb2R1bGUuZm9yUm9vdCgpLFxuICAgICAgICAgICAgIEFwcFN0YWdlUm91dGluZ01vZHVsZSxcbiAgICAgICAgICAgICBIb21lTW9kdWxlLFxuICAgICAgICAgICAgIE5vdGZvdW5kUGFnZU1vZHVsZSxcbiAgICAgICAgICAgICBGbGV4TGF5b3V0TW9kdWxlXG4gICAgICAgICAgIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIE5HUnhCcm9rZXJSZWdpc3RyYXRpb25TZXJ2aWNlLFxuXG5cbiAgICAvLyBwcm92aWRlcnMgdXNlZCB0byBjcmVhdGUgZmFrZSBiYWNrZW5kXG4gICAgZmFrZUJhY2tlbmRQcm92aWRlcixcbiAgICBNb2NrQmFja2VuZCxcbiAgICBCYXNlUmVxdWVzdE9wdGlvbnMsXG4gICB7XG4gICAgcHJvdmlkZTogQVBQX0JBU0VfSFJFRixcbiAgICB1c2VWYWx1ZTogJzwlPSBBUFBfQkFTRSAlPidcbiAgIH1dLFxuICBib290c3RyYXA6IFsgQXBwU3RhZ2VDb21wb25lbnQgXVxuXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwU3RhZ2VNb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdyeEJSUzpOR1J4QnJva2VyUmVnaXN0cmF0aW9uU2VydmljZSl7fVxufVxuIl19
