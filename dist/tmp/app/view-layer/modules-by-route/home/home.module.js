"use strict";
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
HomeModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [home_routing_module_1.HomeRoutingModule,
                    grid_masthead_module_1.GridMastheadModule,
                    search_ahead_module_1.SearchAheadModule,
                    garment_grid_module_1.GarmentGridModule,
                    paginator_toolbar_module_1.PaginatorToolbarModule,
                    flex_layout_1.FlexLayoutModule],
                declarations: [home_component_1.HomeComponent],
                exports: [home_component_1.HomeComponent, flex_layout_1.FlexLayoutModule]
            },] },
];
HomeModule.ctorParameters = function () { return []; };
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map