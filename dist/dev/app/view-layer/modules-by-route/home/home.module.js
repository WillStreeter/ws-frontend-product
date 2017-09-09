"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var home_component_1 = require("./home.component");
var home_routing_module_1 = require("./home.routing.module");
var flex_layout_1 = require("@angular/flex-layout");
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        imports: [home_routing_module_1.HomeRoutingModule, flex_layout_1.FlexLayoutModule],
        declarations: [home_component_1.HomeComponent],
        exports: [home_component_1.HomeComponent, flex_layout_1.FlexLayoutModule]
    })
], HomeModule);
exports.HomeModule = HomeModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL21vZHVsZXMtYnktcm91dGUvaG9tZS9ob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QyxtREFBaUQ7QUFDakQsNkRBQTBEO0FBQzFELG9EQUF3RDtBQU94RCxJQUFhLFVBQVU7SUFBdkI7SUFBMEIsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBMUIsQUFBMkIsSUFBQTtBQUFkLFVBQVU7SUFMdEIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsdUNBQWlCLEVBQUUsOEJBQWdCLENBQUM7UUFDOUMsWUFBWSxFQUFFLENBQUMsOEJBQWEsQ0FBQztRQUM3QixPQUFPLEVBQUUsQ0FBQyw4QkFBYSxFQUFFLDhCQUFnQixDQUFDO0tBQzNDLENBQUM7R0FDVyxVQUFVLENBQUk7QUFBZCxnQ0FBVSIsImZpbGUiOiJhcHAvdmlldy1sYXllci9tb2R1bGVzLWJ5LXJvdXRlL2hvbWUvaG9tZS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2hvbWUucm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0hvbWVSb3V0aW5nTW9kdWxlLCBGbGV4TGF5b3V0TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbSG9tZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtIb21lQ29tcG9uZW50LCBGbGV4TGF5b3V0TW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHsgfVxuIl19
