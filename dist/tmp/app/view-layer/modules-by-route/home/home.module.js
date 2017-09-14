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
