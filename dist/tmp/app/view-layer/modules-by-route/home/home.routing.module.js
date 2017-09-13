"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    router_1.RouterModule.forChild([
                        { path: '', component: home_component_1.HomeComponent }
                    ])
                ],
                exports: [router_1.RouterModule]
            },] },
];
HomeRoutingModule.ctorParameters = function () { return []; };
exports.HomeRoutingModule = HomeRoutingModule;
//# sourceMappingURL=home.routing.module.js.map