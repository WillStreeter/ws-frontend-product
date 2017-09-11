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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL21vZHVsZXMtYnktcm91dGUvaG9tZS9ob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QyxtREFBaUQ7QUFDakQsOEZBQTJGO0FBQzNGLDJGQUF3RjtBQUN4RiwwRkFBdUY7QUFDdkYsMEdBQXNHO0FBQ3RHLDZEQUEwRDtBQUMxRCxvREFBd0Q7QUFZeEQsSUFBYSxVQUFVO0lBQXZCO0lBQTBCLENBQUM7SUFBRCxpQkFBQztBQUFELENBQTFCLEFBQTJCLElBQUE7QUFBZCxVQUFVO0lBVnRCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLHVDQUFpQjtZQUNqQix5Q0FBa0I7WUFDbEIsdUNBQWlCO1lBQ2pCLHVDQUFpQjtZQUNqQixpREFBc0I7WUFDdEIsOEJBQWdCLENBQUM7UUFDM0IsWUFBWSxFQUFFLENBQUMsOEJBQWEsQ0FBQztRQUM3QixPQUFPLEVBQUUsQ0FBQyw4QkFBYSxFQUFFLDhCQUFnQixDQUFDO0tBQzNDLENBQUM7R0FDVyxVQUFVLENBQUk7QUFBZCxnQ0FBVSIsImZpbGUiOiJhcHAvdmlldy1sYXllci9tb2R1bGVzLWJ5LXJvdXRlL2hvbWUvaG9tZS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3JpZE1hc3RoZWFkTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29tbW9uLXZpZXdzL2dyaWQtbWFzdGhlYWQvZ3JpZC5tYXN0aGVhZC5tb2R1bGUnO1xuaW1wb3J0IHsgU2VhcmNoQWhlYWRNb2R1bGUgfSBmcm9tICcuLi8uLi9jb21tb24tdmlld3Mvc2VhcmNoLWFoZWFkL3NlYXJjaC5haGVhZC5tb2R1bGUnO1xuaW1wb3J0IHsgR2FybWVudEdyaWRNb2R1bGUgfSBmcm9tICcuLi8uLi9jb21tb24tdmlld3MvZ2FybWVudEdyaWQvZ2FybWVudC5ncmlkLm1vZHVsZSc7XG5pbXBvcnQgeyBQYWdpbmF0b3JUb29sYmFyTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29tbW9uLXZpZXdzL3BhZ2luYXRvci10b29sYmFyL3BhZ2luYXRvci50b29sYmFyLm1vZHVsZSdcbmltcG9ydCB7IEhvbWVSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9ob21lLnJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtIb21lUm91dGluZ01vZHVsZSxcbiAgICAgICAgICAgIEdyaWRNYXN0aGVhZE1vZHVsZSxcbiAgICAgICAgICAgIFNlYXJjaEFoZWFkTW9kdWxlLFxuICAgICAgICAgICAgR2FybWVudEdyaWRNb2R1bGUsXG4gICAgICAgICAgICBQYWdpbmF0b3JUb29sYmFyTW9kdWxlLFxuICAgICAgICAgICAgRmxleExheW91dE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0hvbWVDb21wb25lbnRdLFxuICBleHBvcnRzOiBbSG9tZUNvbXBvbmVudCwgRmxleExheW91dE1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZU1vZHVsZSB7IH1cbiJdfQ==
