"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var profile_routing_module_1 = require("./profile.routing.module");
var profile_component_1 = require("./profile.component");
var material_1 = require("@angular/material");
var flex_layout_1 = require("@angular/flex-layout");
var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule,
            material_1.MaterialModule,
            flex_layout_1.FlexLayoutModule,
            profile_routing_module_1.ProfileRoutingModule],
        declarations: [profile_component_1.ProfileComponent],
        exports: [profile_component_1.ProfileComponent, router_1.RouterModule, flex_layout_1.FlexLayoutModule]
    })
], ProfileModule);
exports.ProfileModule = ProfileModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL21vZHVsZXMtYnktcm91dGUvcHJvZmlsZS9wcm9maWxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MsMENBQStDO0FBQy9DLG1FQUFnRTtBQUNoRSx5REFBdUQ7QUFDdkQsOENBQW1EO0FBQ25ELG9EQUF3RDtBQWN4RCxJQUFhLGFBQWE7SUFBMUI7SUFBNkIsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBN0IsQUFBOEIsSUFBQTtBQUFqQixhQUFhO0lBVHpCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLHFCQUFZO1lBQ1oseUJBQWM7WUFDZCw4QkFBZ0I7WUFDaEIsNkNBQW9CLENBQUM7UUFDL0IsWUFBWSxFQUFFLENBQUMsb0NBQWdCLENBQUM7UUFDaEMsT0FBTyxFQUFFLENBQUMsb0NBQWdCLEVBQUUscUJBQVksRUFBRSw4QkFBZ0IsQ0FBQztLQUM1RCxDQUFDO0dBRVcsYUFBYSxDQUFJO0FBQWpCLHNDQUFhIiwiZmlsZSI6ImFwcC92aWV3LWxheWVyL21vZHVsZXMtYnktcm91dGUvcHJvZmlsZS9wcm9maWxlLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFByb2ZpbGVSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9wcm9maWxlLnJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IFByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL3Byb2ZpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0Jztcbi8qKlxuICogTW9kdWxlIGZvciBhIHVzZXIncyBkZXRhaWxzLlxuICogU2hhcmVkTW9kdWxlIGlzIGltcG9ydGVkIHdoaWNoIHdpbGwgYnJpbmcgaW4gTWF0ZXJpYWxNb2R1bGVcbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSxcbiAgICAgICAgICAgIE1hdGVyaWFsTW9kdWxlLFxuICAgICAgICAgICAgRmxleExheW91dE1vZHVsZSxcbiAgICAgICAgICAgIFByb2ZpbGVSb3V0aW5nTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbUHJvZmlsZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtQcm9maWxlQ29tcG9uZW50LCBSb3V0ZXJNb2R1bGUsIEZsZXhMYXlvdXRNb2R1bGVdXG59KVxuXG5leHBvcnQgY2xhc3MgUHJvZmlsZU1vZHVsZSB7IH1cblxuIl19
