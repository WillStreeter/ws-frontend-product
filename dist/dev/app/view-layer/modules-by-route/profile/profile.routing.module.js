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
var profile_component_1 = require("./profile.component");
var profileRoutes = [
    {
        path: '',
        component: profile_component_1.ProfileComponent
    }
];
var ProfileRoutingModule = (function () {
    function ProfileRoutingModule() {
    }
    return ProfileRoutingModule;
}());
ProfileRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(profileRoutes)],
        exports: [router_1.RouterModule]
    })
], ProfileRoutingModule);
exports.ProfileRoutingModule = ProfileRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL21vZHVsZXMtYnktcm91dGUvcHJvZmlsZS9wcm9maWxlLnJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUF1RDtBQUN2RCx5REFBdUQ7QUFHdkQsSUFBTSxhQUFhLEdBQVc7SUFDM0I7UUFDRyxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxvQ0FBZ0I7S0FDN0I7Q0FDSCxDQUFDO0FBT0YsSUFBYSxvQkFBb0I7SUFBakM7SUFBb0MsQ0FBQztJQUFELDJCQUFDO0FBQUQsQ0FBcEMsQUFBcUMsSUFBQTtBQUF4QixvQkFBb0I7SUFMaEMsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUUscUJBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDaEQsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztLQUV4QixDQUFDO0dBQ1csb0JBQW9CLENBQUk7QUFBeEIsb0RBQW9CIiwiZmlsZSI6ImFwcC92aWV3LWxheWVyL21vZHVsZXMtYnktcm91dGUvcHJvZmlsZS9wcm9maWxlLnJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL3Byb2ZpbGUuY29tcG9uZW50JztcblxuXG5jb25zdCBwcm9maWxlUm91dGVzOiBSb3V0ZXMgPSBbXG4gICB7XG4gICAgICBwYXRoOiAnJyxcbiAgICAgIGNvbXBvbmVudDogUHJvZmlsZUNvbXBvbmVudFxuICAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogWyBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocHJvZmlsZVJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxuXG59KVxuZXhwb3J0IGNsYXNzIFByb2ZpbGVSb3V0aW5nTW9kdWxlIHsgfVxuIl19
