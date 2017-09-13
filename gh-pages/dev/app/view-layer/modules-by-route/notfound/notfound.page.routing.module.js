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
var notfound_page_component_1 = require("./notfound.page.component");
var routes = [
    { path: '**',
        component: notfound_page_component_1.NotfoundPageComponent
    }
];
var NotfoundPageRoutingModule = (function () {
    function NotfoundPageRoutingModule() {
    }
    return NotfoundPageRoutingModule;
}());
NotfoundPageRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], NotfoundPageRoutingModule);
exports.NotfoundPageRoutingModule = NotfoundPageRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL21vZHVsZXMtYnktcm91dGUvbm90Zm91bmQvbm90Zm91bmQucGFnZS5yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QywwQ0FBdUQ7QUFDdkQscUVBQWtFO0FBRWxFLElBQU0sTUFBTSxHQUFXO0lBQ3JCLEVBQUcsSUFBSSxFQUFFLElBQUk7UUFDVixTQUFTLEVBQUUsK0NBQXFCO0tBQ2xDO0NBQ0YsQ0FBQztBQUtGLElBQWEseUJBQXlCO0lBQXRDO0lBQXlDLENBQUM7SUFBRCxnQ0FBQztBQUFELENBQXpDLEFBQTBDLElBQUE7QUFBN0IseUJBQXlCO0lBSnJDLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFFLHFCQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFFO1FBQzFDLE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUM7S0FDeEIsQ0FBQztHQUNXLHlCQUF5QixDQUFJO0FBQTdCLDhEQUF5QiIsImZpbGUiOiJhcHAvdmlldy1sYXllci9tb2R1bGVzLWJ5LXJvdXRlL25vdGZvdW5kL25vdGZvdW5kLnBhZ2Uucm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTm90Zm91bmRQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9ub3Rmb3VuZC5wYWdlLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7ICBwYXRoOiAnKionLFxuICAgICBjb21wb25lbnQ6IE5vdGZvdW5kUGFnZUNvbXBvbmVudFxuICB9XG5dO1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogWyBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKSBdLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBOb3Rmb3VuZFBhZ2VSb3V0aW5nTW9kdWxlIHsgfVxuIl19
