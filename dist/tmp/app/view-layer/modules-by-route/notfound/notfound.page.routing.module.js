"use strict";
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
NotfoundPageRoutingModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [router_1.RouterModule.forChild(routes)],
                exports: [router_1.RouterModule]
            },] },
];
NotfoundPageRoutingModule.ctorParameters = function () { return []; };
exports.NotfoundPageRoutingModule = NotfoundPageRoutingModule;
//# sourceMappingURL=notfound.page.routing.module.js.map