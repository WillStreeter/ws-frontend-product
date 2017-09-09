"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
exports.routes = [
    {
        path: '',
        loadChildren: 'app/view-layer/modules-by-route/home/home.module#HomeModule'
    },
    {
        path: 'error',
        loadChildren: 'app/view-layer/modules-by-route/notfound/notfound.page.module#NotfoundPageModule'
    },
    {
        path: 'register',
        loadChildren: 'app/view-layer/modules-by-route/registration/registration.module#RegistrationModule'
    },
    {
        path: 'profile/username/:username',
        loadChildren: 'app/view-layer/modules-by-route/profile/profile.module#ProfileModule'
    },
    {
        path: 'surprise',
        loadChildren: 'app/view-layer/modules-by-route/surprise/surprise.module#SurpriseModule'
    },
];
var AppStageRoutingModule = (function () {
    function AppStageRoutingModule() {
    }
    return AppStageRoutingModule;
}());
AppStageRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(exports.routes, { useHash: true })],
        exports: [router_1.RouterModule]
    })
], AppStageRoutingModule);
exports.AppStageRoutingModule = AppStageRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAtc3RhZ2UvYXBwLnN0YWdlLnJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUF1RDtBQUd4QyxRQUFBLE1BQU0sR0FBVTtJQUNiO1FBQ0ksSUFBSSxFQUFFLEVBQUU7UUFDUixZQUFZLEVBQUUsNkRBQTZEO0tBQzlFO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLFlBQVksRUFBRSxrRkFBa0Y7S0FDbkc7SUFDRDtRQUNJLElBQUksRUFBRSxVQUFVO1FBQ2hCLFlBQVksRUFBRSxxRkFBcUY7S0FDdEc7SUFDRDtRQUNJLElBQUksRUFBRSw0QkFBNEI7UUFDbEMsWUFBWSxFQUFHLHNFQUFzRTtLQUN4RjtJQUNEO1FBQ0ksSUFBSSxFQUFFLFVBQVU7UUFDaEIsWUFBWSxFQUFFLHlFQUF5RTtLQUMxRjtDQUNKLENBQUM7QUFPaEIsSUFBYSxxQkFBcUI7SUFBbEM7SUFBcUMsQ0FBQztJQUFELDRCQUFDO0FBQUQsQ0FBckMsQUFBc0MsSUFBQTtBQUF6QixxQkFBcUI7SUFKakMsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQyxPQUFPLENBQUMsY0FBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDMUQsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztLQUN4QixDQUFDO0dBQ1cscUJBQXFCLENBQUk7QUFBekIsc0RBQXFCIiwiZmlsZSI6ImFwcC9hcHAtc3RhZ2UvYXBwLnN0YWdlLnJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuXG4gIGV4cG9ydCBjb25zdCByb3V0ZXM6Um91dGVzID0gW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgIGxvYWRDaGlsZHJlbjogJ2FwcC92aWV3LWxheWVyL21vZHVsZXMtYnktcm91dGUvaG9tZS9ob21lLm1vZHVsZSNIb21lTW9kdWxlJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBwYXRoOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgIGxvYWRDaGlsZHJlbjogJ2FwcC92aWV3LWxheWVyL21vZHVsZXMtYnktcm91dGUvbm90Zm91bmQvbm90Zm91bmQucGFnZS5tb2R1bGUjTm90Zm91bmRQYWdlTW9kdWxlJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBwYXRoOiAncmVnaXN0ZXInLFxuICAgICAgICAgICAgICAgICAgICAgIGxvYWRDaGlsZHJlbjogJ2FwcC92aWV3LWxheWVyL21vZHVsZXMtYnktcm91dGUvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5tb2R1bGUjUmVnaXN0cmF0aW9uTW9kdWxlJ1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBwYXRoOiAncHJvZmlsZS91c2VybmFtZS86dXNlcm5hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgIGxvYWRDaGlsZHJlbjogICdhcHAvdmlldy1sYXllci9tb2R1bGVzLWJ5LXJvdXRlL3Byb2ZpbGUvcHJvZmlsZS5tb2R1bGUjUHJvZmlsZU1vZHVsZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgcGF0aDogJ3N1cnByaXNlJyxcbiAgICAgICAgICAgICAgICAgICAgICBsb2FkQ2hpbGRyZW46ICdhcHAvdmlldy1sYXllci9tb2R1bGVzLWJ5LXJvdXRlL3N1cnByaXNlL3N1cnByaXNlLm1vZHVsZSNTdXJwcmlzZU1vZHVsZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF07XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcywgeyB1c2VIYXNoOiB0cnVlIH0pXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwU3RhZ2VSb3V0aW5nTW9kdWxlIHsgfVxuXG4iXX0=
