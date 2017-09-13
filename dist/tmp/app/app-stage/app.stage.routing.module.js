"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
exports.routes = [
    {
        path: '',
        loadChildren: 'app/view-layer/modules-by-route/home/home.module#HomeModule'
    },
    {
        path: 'error',
        loadChildren: 'app/view-layer/modules-by-route/notfound/notfound.page.module#NotfoundPageModule'
    }
];
var AppStageRoutingModule = (function () {
    function AppStageRoutingModule() {
    }
    return AppStageRoutingModule;
}());
AppStageRoutingModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [router_1.RouterModule.forRoot(exports.routes, { useHash: true })],
                exports: [router_1.RouterModule]
            },] },
];
AppStageRoutingModule.ctorParameters = function () { return []; };
exports.AppStageRoutingModule = AppStageRoutingModule;
//# sourceMappingURL=app.stage.routing.module.js.map