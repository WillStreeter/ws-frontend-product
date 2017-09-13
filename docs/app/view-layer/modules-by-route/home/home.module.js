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
var grid_masthead_module_1 = require("../../common-views/grid-masthead/grid.masthead.module");
var search_ahead_module_1 = require("../../common-views/search-ahead/search.ahead.module");
var garment_grid_module_1 = require("../../common-views/garmentGrid/garment.grid.module");
var paginator_toolbar_module_1 = require("../../common-views/paginator-toolbar/paginator.toolbar.module");
var home_routing_module_1 = require("./home.routing.module");
var flex_layout_1 = require("@angular/flex-layout");
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        imports: [home_routing_module_1.HomeRoutingModule,
            grid_masthead_module_1.GridMastheadModule,
            search_ahead_module_1.SearchAheadModule,
            garment_grid_module_1.GarmentGridModule,
            paginator_toolbar_module_1.PaginatorToolbarModule,
            flex_layout_1.FlexLayoutModule],
        declarations: [home_component_1.HomeComponent],
        exports: [home_component_1.HomeComponent, flex_layout_1.FlexLayoutModule]
    })
], HomeModule);
exports.HomeModule = HomeModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL21vZHVsZXMtYnktcm91dGUvaG9tZS9ob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QyxtREFBaUQ7QUFDakQsOEZBQTJGO0FBQzNGLDJGQUF3RjtBQUN4RiwwRkFBdUY7QUFDdkYsMEdBQXNHO0FBQ3RHLDZEQUEwRDtBQUMxRCxvREFBd0Q7QUFZeEQsSUFBYSxVQUFVO0lBQXZCO0lBRUEsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxVQUFVO0lBVnRCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLHVDQUFpQjtZQUNqQix5Q0FBa0I7WUFDbEIsdUNBQWlCO1lBQ2pCLHVDQUFpQjtZQUNqQixpREFBc0I7WUFDdEIsOEJBQWdCLENBQUM7UUFDM0IsWUFBWSxFQUFFLENBQUMsOEJBQWEsQ0FBQztRQUM3QixPQUFPLEVBQUUsQ0FBQyw4QkFBYSxFQUFFLDhCQUFnQixDQUFDO0tBQzNDLENBQUM7R0FDVyxVQUFVLENBRXRCO0FBRlksZ0NBQVUiLCJmaWxlIjoiYXBwL3ZpZXctbGF5ZXIvbW9kdWxlcy1ieS1yb3V0ZS9ob21lL2hvbWUubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUuY29tcG9uZW50JztcbmltcG9ydCB7IEdyaWRNYXN0aGVhZE1vZHVsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi12aWV3cy9ncmlkLW1hc3RoZWFkL2dyaWQubWFzdGhlYWQubW9kdWxlJztcbmltcG9ydCB7IFNlYXJjaEFoZWFkTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29tbW9uLXZpZXdzL3NlYXJjaC1haGVhZC9zZWFyY2guYWhlYWQubW9kdWxlJztcbmltcG9ydCB7IEdhcm1lbnRHcmlkTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29tbW9uLXZpZXdzL2dhcm1lbnRHcmlkL2dhcm1lbnQuZ3JpZC5tb2R1bGUnO1xuaW1wb3J0IHsgUGFnaW5hdG9yVG9vbGJhck1vZHVsZSB9IGZyb20gJy4uLy4uL2NvbW1vbi12aWV3cy9wYWdpbmF0b3ItdG9vbGJhci9wYWdpbmF0b3IudG9vbGJhci5tb2R1bGUnXG5pbXBvcnQgeyBIb21lUm91dGluZ01vZHVsZSB9IGZyb20gJy4vaG9tZS5yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbSG9tZVJvdXRpbmdNb2R1bGUsXG4gICAgICAgICAgICBHcmlkTWFzdGhlYWRNb2R1bGUsXG4gICAgICAgICAgICBTZWFyY2hBaGVhZE1vZHVsZSxcbiAgICAgICAgICAgIEdhcm1lbnRHcmlkTW9kdWxlLFxuICAgICAgICAgICAgUGFnaW5hdG9yVG9vbGJhck1vZHVsZSxcbiAgICAgICAgICAgIEZsZXhMYXlvdXRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtIb21lQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0hvbWVDb21wb25lbnQsIEZsZXhMYXlvdXRNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVNb2R1bGUge1xuXG59XG4iXX0=
