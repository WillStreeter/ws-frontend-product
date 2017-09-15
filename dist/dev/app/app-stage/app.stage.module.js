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
var http_1 = require("@angular/common/http");
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
            http_1.HttpClientModule,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAtc3RhZ2UvYXBwLnN0YWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQUMxQyw2Q0FBd0Q7QUFDeEQsMENBQThEO0FBQzlELDhEQUEwRDtBQUMxRCxtRUFBK0U7QUFDL0Usd0NBQWtFO0FBRWxFLG9EQUF3RDtBQUd4RCw2RUFBMEU7QUFFMUUsNEhBQXdIO0FBR3hILGlGQUFpRjtBQUVqRiw2RkFBNEY7QUFNNUYsK0VBQThFO0FBQzlFLHFHQUFtRztBQU9uRyw2REFBMEQ7QUFDMUQsdUVBQW1FO0FBVW5FLHNDQUFtRDtBQWlDbkQsSUFBYSxjQUFjO0lBQ3ZCLHdCQUFvQixPQUFxQztRQUFyQyxZQUFPLEdBQVAsT0FBTyxDQUE4QjtJQUFJLENBQUM7SUFDbEUscUJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLGNBQWM7SUEvQjFCLGVBQVEsQ0FBQztRQUNSLFlBQVksRUFBRSxDQUFFLHVDQUFpQixDQUFFO1FBQ25DLE9BQU8sRUFBRTtZQUNFLHFCQUFZO1lBQ1osZ0NBQWE7WUFDYixvQ0FBdUI7WUFDdkIsbUJBQVc7WUFDWCwyQkFBbUI7WUFDbkIsdUJBQWdCO1lBQ2hCLGlDQUFjLENBQUMsT0FBTyxFQUFFO1lBQ3hCLHlDQUFrQixDQUFDLE9BQU8sRUFBRTtZQUM1QixrQ0FBZSxDQUFDLE9BQU8sRUFBRTtZQUN6QixnREFBcUI7WUFDckIsd0JBQVU7WUFDVix5Q0FBa0I7WUFDbEIsOEJBQWdCO1NBQ2pCO1FBQ1YsU0FBUyxFQUFFO1lBQ1QsZ0VBQTZCO1lBSTdCLHlCQUFrQjtZQUNuQjtnQkFDQyxPQUFPLEVBQUUsc0JBQWE7Z0JBQ3RCLFFBQVEsRUFBRSxpQkFBaUI7YUFDM0I7U0FBQztRQUNILFNBQVMsRUFBRSxDQUFFLHVDQUFpQixDQUFFO0tBRWpDLENBQUM7cUNBRzhCLGdFQUE2QjtHQURoRCxjQUFjLENBRTFCO0FBRlksd0NBQWMiLCJmaWxlIjoiYXBwL2FwcC1zdGFnZS9hcHAuc3RhZ2UubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQVBQX0JBU0VfSFJFRiwgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xuXG4vL2RhdGEgbGF5ZXJcbmltcG9ydCB7IE5HUnhEYXRhTW9kdWxlIH0gZnJvbSAnLi4vZGF0YS1sYXllci9uZ3J4LWRhdGEvbmdyeC5kYXRhLm1vZHVsZSc7XG5cbmltcG9ydCB7IE5HUnhCcm9rZXJSZWdpc3RyYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYnVzaW5lc3MtbGF5ZXIvYnJva2VyYWdlL3JlZ2lzdHJpZXMvbmdyeC5icm9rZXIucmVnaXN0cmF0aW9uLnNlcnZpY2UnO1xuXG4vL2J1c2luZXNzIGxheWVyIG5ncnggcHVic3ViLWJyb2tlciBicm9rZXJhZ2VcbmltcG9ydCB7IEJyb2tlcmFnZU1vZHVsZSB9ICAgZnJvbSAnLi4vYnVzaW5lc3MtbGF5ZXIvYnJva2VyYWdlL2Jyb2tlcmFnZS5tb2R1bGUnO1xuLy8gaGFuZGxlIHJlcXVlc3QgZnJvbSB2aWV3bGF5ZXIgdG8gdGhlIHN0b3JlIGJ5IHdheSBvZiBhIGJyb2tlcmFnZVxuaW1wb3J0IHsgUHViU3ViQnJva2VyTW9kdWxlIH0gICBmcm9tICcuLi9idXNpbmVzcy1sYXllci9wdWJzdWItYnJva2VyL3B1YnN1Yi5icm9rZXIubW9kdWxlJztcblxuXG4vKlxuICBQYWdlIHZpZXdzXG4gKi9cbmltcG9ydCB7IEhvbWVNb2R1bGUgfSAgZnJvbSAnLi4vdmlldy1sYXllci9tb2R1bGVzLWJ5LXJvdXRlL2hvbWUvaG9tZS5tb2R1bGUnO1xuaW1wb3J0IHsgTm90Zm91bmRQYWdlTW9kdWxlIH0gIGZyb20gJy4uL3ZpZXctbGF5ZXIvbW9kdWxlcy1ieS1yb3V0ZS9ub3Rmb3VuZC9ub3Rmb3VuZC5wYWdlLm1vZHVsZSc7XG5cblxuXG4vKlxuICAgICBTbWFydCBDb250YWluZXIgKGNvbXBvbmVudHMgdGhhdCByZWZlcmVuY2UgbmdyeCBTdG9yZSlcbiAqL1xuaW1wb3J0IHsgQXBwU3RhZ2VDb21wb25lbnQgfSBmcm9tICcuL2FwcC5zdGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwU3RhZ2VSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAuc3RhZ2Uucm91dGluZy5tb2R1bGUnO1xuXG4vKlxuICAgSnVzdCBmb3IgZGV2ZWxvcG1lbnQgYW5kIGRlbW9uc3RyYXRpb24gcHVycG9zZXMgSSBoYXZlIGluY2x1ZGluZyB0aGUgZm9sbG93aW5nIGluIHRoaXMgYnJhbmNoXG4gICBzbyBhcyB0byBjcmVhdGUgYSBzdGF0aWMgZ2l0IGh1YiBwYWdlIGZvciBibG9nL2RlbW8gcHJlc2VudGF0aW9ucy4uLiBJbiBnZW5lcmFsLCBJIGJlbGlldmUgdGhpcyBpcyBub3RcbiAgIGEgZ29vZCBwcmFjdGljZVxuICovXG5cbi8vaW1wb3J0IHsgZmFrZUJhY2tlbmRQcm92aWRlciB9IGZyb20gJy4uL3NoYXJlZC11dGlscy9kZXYtbW9ja2VkLWJhY2tlbmQvaW5kZXgnO1xuLy9pbXBvcnQgeyBNb2NrQmFja2VuZCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAvdGVzdGluZyc7XG5pbXBvcnQgeyBCYXNlUmVxdWVzdE9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbIEFwcFN0YWdlQ29tcG9uZW50IF0sXG4gIGltcG9ydHM6IFtcbiAgICAgICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgICAgICAgQnJvd3Nlck1vZHVsZSxcbiAgICAgICAgICAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICAgICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICAgICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgICAgICAgICAgTkdSeERhdGFNb2R1bGUuZm9yUm9vdCgpLFxuICAgICAgICAgICAgIFB1YlN1YkJyb2tlck1vZHVsZS5mb3JSb290KCksXG4gICAgICAgICAgICAgQnJva2VyYWdlTW9kdWxlLmZvclJvb3QoKSxcbiAgICAgICAgICAgICBBcHBTdGFnZVJvdXRpbmdNb2R1bGUsXG4gICAgICAgICAgICAgSG9tZU1vZHVsZSxcbiAgICAgICAgICAgICBOb3Rmb3VuZFBhZ2VNb2R1bGUsXG4gICAgICAgICAgICAgRmxleExheW91dE1vZHVsZVxuICAgICAgICAgICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBOR1J4QnJva2VyUmVnaXN0cmF0aW9uU2VydmljZSxcbiAgICAvLyBwcm92aWRlcnMgdXNlZCB0byBjcmVhdGUgZmFrZSBiYWNrZW5kXG4gICAvLy8gZmFrZUJhY2tlbmRQcm92aWRlcixcbiAgLy8vICBNb2NrQmFja2VuZCxcbiAgICBCYXNlUmVxdWVzdE9wdGlvbnMsXG4gICB7XG4gICAgcHJvdmlkZTogQVBQX0JBU0VfSFJFRixcbiAgICB1c2VWYWx1ZTogJzwlPSBBUFBfQkFTRSAlPidcbiAgIH1dLFxuICBib290c3RyYXA6IFsgQXBwU3RhZ2VDb21wb25lbnQgXVxuXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwU3RhZ2VNb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdyeEJSUzpOR1J4QnJva2VyUmVnaXN0cmF0aW9uU2VydmljZSkgeyB9XG59XG4iXX0=
