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
var masthead_module_1 = require("../view-layer/common-views/masthead/masthead.module");
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
            masthead_module_1.MastheadModule,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAtc3RhZ2UvYXBwLnN0YWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUMxQyxzQ0FBMkM7QUFDM0MsMENBQThEO0FBQzlELDhEQUEwRDtBQUMxRCxtRUFBK0U7QUFFL0Usb0RBQXdEO0FBR3hELDZFQUEwRTtBQUUxRSw0SEFBd0g7QUFHeEgsaUZBQWlGO0FBRWpGLDZGQUE0RjtBQU01RiwrRUFBOEU7QUFDOUUscUdBQW1HO0FBQ25HLHVGQUFxRjtBQU1yRiw2REFBMEQ7QUFDMUQsdUVBQW1FO0FBUW5FLGtFQUErRTtBQUMvRSxpREFBb0Q7QUFDcEQsc0NBQW1EO0FBa0NuRCxJQUFhLGNBQWM7SUFDdkIsd0JBQW9CLE9BQXFDO1FBQXJDLFlBQU8sR0FBUCxPQUFPLENBQThCO0lBQUUsQ0FBQztJQUNoRSxxQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksY0FBYztJQWhDMUIsZUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFLENBQUUsdUNBQWlCLENBQUU7UUFDbkMsT0FBTyxFQUFFO1lBQ0UscUJBQVk7WUFDWixnQ0FBYTtZQUNiLG9DQUF1QjtZQUN2QixpQkFBVTtZQUNWLGlDQUFjLENBQUMsT0FBTyxFQUFFO1lBQ3hCLHlDQUFrQixDQUFDLE9BQU8sRUFBRTtZQUM1QixrQ0FBZSxDQUFDLE9BQU8sRUFBRTtZQUN6QixnREFBcUI7WUFDckIsZ0NBQWM7WUFDZCx3QkFBVTtZQUNWLHlDQUFrQjtZQUNsQiw4QkFBZ0I7U0FDakI7UUFDVixTQUFTLEVBQUU7WUFDVCxnRUFBNkI7WUFJN0IsMkJBQW1CO1lBQ25CLHFCQUFXO1lBQ1gseUJBQWtCO1lBQ25CO2dCQUNDLE9BQU8sRUFBRSxzQkFBYTtnQkFDdEIsUUFBUSxFQUFFLGlCQUFpQjthQUMzQjtTQUFDO1FBQ0gsU0FBUyxFQUFFLENBQUUsdUNBQWlCLENBQUU7S0FFakMsQ0FBQztxQ0FHOEIsZ0VBQTZCO0dBRGhELGNBQWMsQ0FFMUI7QUFGWSx3Q0FBYyIsImZpbGUiOiJhcHAvYXBwLXN0YWdlL2FwcC5zdGFnZS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEFQUF9CQVNFX0hSRUYsIENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5cbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7XG5cbi8vZGF0YSBsYXllclxuaW1wb3J0IHsgTkdSeERhdGFNb2R1bGUgfSBmcm9tICcuLi9kYXRhLWxheWVyL25ncngtZGF0YS9uZ3J4LmRhdGEubW9kdWxlJztcblxuaW1wb3J0IHsgTkdSeEJyb2tlclJlZ2lzdHJhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9idXNpbmVzcy1sYXllci9icm9rZXJhZ2UvcmVnaXN0cmllcy9uZ3J4LmJyb2tlci5yZWdpc3RyYXRpb24uc2VydmljZSc7XG5cbi8vYnVzaW5lc3MgbGF5ZXIgbmdyeCBwdWJzdWItYnJva2VyIGJyb2tlcmFnZVxuaW1wb3J0IHsgQnJva2VyYWdlTW9kdWxlIH0gICBmcm9tICcuLi9idXNpbmVzcy1sYXllci9icm9rZXJhZ2UvYnJva2VyYWdlLm1vZHVsZSc7XG4vLyBoYW5kbGUgcmVxdWVzdCBmcm9tIHZpZXdsYXllciB0byB0aGUgc3RvcmUgYnkgd2F5IG9mIGEgYnJva2VyYWdlXG5pbXBvcnQgeyBQdWJTdWJCcm9rZXJNb2R1bGUgfSAgIGZyb20gJy4uL2J1c2luZXNzLWxheWVyL3B1YnN1Yi1icm9rZXIvcHVic3ViLmJyb2tlci5tb2R1bGUnO1xuXG5cbi8qXG4gIFBhZ2Ugdmlld3NcbiAqL1xuaW1wb3J0IHsgSG9tZU1vZHVsZSB9ICBmcm9tICcuLi92aWV3LWxheWVyL21vZHVsZXMtYnktcm91dGUvaG9tZS9ob21lLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3Rmb3VuZFBhZ2VNb2R1bGUgfSAgZnJvbSAnLi4vdmlldy1sYXllci9tb2R1bGVzLWJ5LXJvdXRlL25vdGZvdW5kL25vdGZvdW5kLnBhZ2UubW9kdWxlJztcbmltcG9ydCB7IE1hc3RoZWFkTW9kdWxlIH0gZnJvbSAnLi4vdmlldy1sYXllci9jb21tb24tdmlld3MvbWFzdGhlYWQvbWFzdGhlYWQubW9kdWxlJztcblxuXG4vKlxuICAgICBTbWFydCBDb250YWluZXIgKGNvbXBvbmVudHMgdGhhdCByZWZlcmVuY2UgbmdyeCBTdG9yZSlcbiAqL1xuaW1wb3J0IHsgQXBwU3RhZ2VDb21wb25lbnQgfSBmcm9tICcuL2FwcC5zdGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwU3RhZ2VSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAuc3RhZ2Uucm91dGluZy5tb2R1bGUnO1xuXG4vKlxuICAgSnVzdCBmb3IgZGV2ZWxvcG1lbnQgYW5kIGRlbW9uc3RyYXRpb24gcHVycG9zZXMgSSBoYXZlIGluY2x1ZGluZyB0aGUgZm9sbG93aW5nIGluIHRoaXMgYnJhbmNoXG4gICBzbyBhcyB0byBjcmVhdGUgYSBzdGF0aWMgZ2l0IGh1YiBwYWdlIGZvciBibG9nL2RlbW8gcHJlc2VudGF0aW9ucy4uLiBJbiBnZW5lcmFsLCBJIGJlbGlldmUgdGhpcyBpcyBub3RcbiAgIGEgZ29vZCBwcmFjdGljZVxuICovXG5cbmltcG9ydCB7IGZha2VCYWNrZW5kUHJvdmlkZXIgfSBmcm9tICcuLi9zaGFyZWQtdXRpbHMvZGV2LW1vY2tlZC1iYWNrZW5kL2luZGV4JztcbmltcG9ydCB7IE1vY2tCYWNrZW5kIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cC90ZXN0aW5nJztcbmltcG9ydCB7IEJhc2VSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFsgQXBwU3RhZ2VDb21wb25lbnQgXSxcbiAgaW1wb3J0czogW1xuICAgICAgICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgICAgICBCcm93c2VyTW9kdWxlLFxuICAgICAgICAgICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgICAgICAgICAgIEh0dHBNb2R1bGUsXG4gICAgICAgICAgICAgTkdSeERhdGFNb2R1bGUuZm9yUm9vdCgpLFxuICAgICAgICAgICAgIFB1YlN1YkJyb2tlck1vZHVsZS5mb3JSb290KCksXG4gICAgICAgICAgICAgQnJva2VyYWdlTW9kdWxlLmZvclJvb3QoKSxcbiAgICAgICAgICAgICBBcHBTdGFnZVJvdXRpbmdNb2R1bGUsXG4gICAgICAgICAgICAgTWFzdGhlYWRNb2R1bGUsXG4gICAgICAgICAgICAgSG9tZU1vZHVsZSxcbiAgICAgICAgICAgICBOb3Rmb3VuZFBhZ2VNb2R1bGUsXG4gICAgICAgICAgICAgRmxleExheW91dE1vZHVsZVxuICAgICAgICAgICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBOR1J4QnJva2VyUmVnaXN0cmF0aW9uU2VydmljZSxcblxuXG4gICAgLy8gcHJvdmlkZXJzIHVzZWQgdG8gY3JlYXRlIGZha2UgYmFja2VuZFxuICAgIGZha2VCYWNrZW5kUHJvdmlkZXIsXG4gICAgTW9ja0JhY2tlbmQsXG4gICAgQmFzZVJlcXVlc3RPcHRpb25zLFxuICAge1xuICAgIHByb3ZpZGU6IEFQUF9CQVNFX0hSRUYsXG4gICAgdXNlVmFsdWU6ICc8JT0gQVBQX0JBU0UgJT4nXG4gICB9XSxcbiAgYm9vdHN0cmFwOiBbIEFwcFN0YWdlQ29tcG9uZW50IF1cblxufSlcblxuZXhwb3J0IGNsYXNzIEFwcFN0YWdlTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5ncnhCUlM6TkdSeEJyb2tlclJlZ2lzdHJhdGlvblNlcnZpY2Upe31cbn1cbiJdfQ==
