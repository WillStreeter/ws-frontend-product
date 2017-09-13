"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var router_1 = require("@angular/router");
var notfound_page_routing_module_1 = require("./notfound.page.routing.module");
var notfound_page_component_1 = require("./notfound.page.component");
var NotfoundPageModule = (function () {
    function NotfoundPageModule() {
    }
    return NotfoundPageModule;
}());
NotfoundPageModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [material_1.MaterialModule,
                    notfound_page_routing_module_1.NotfoundPageRoutingModule,
                    router_1.RouterModule],
                declarations: [notfound_page_component_1.NotfoundPageComponent],
                exports: [notfound_page_component_1.NotfoundPageComponent]
            },] },
];
NotfoundPageModule.ctorParameters = function () { return []; };
exports.NotfoundPageModule = NotfoundPageModule;
//# sourceMappingURL=notfound.page.module.js.map