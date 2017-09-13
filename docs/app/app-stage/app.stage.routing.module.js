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
AppStageRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(exports.routes, { useHash: true })],
        exports: [router_1.RouterModule]
    })
], AppStageRoutingModule);
exports.AppStageRoutingModule = AppStageRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAtc3RhZ2UvYXBwLnN0YWdlLnJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUF1RDtBQUd4QyxRQUFBLE1BQU0sR0FBVTtJQUNiO1FBQ0ksSUFBSSxFQUFFLEVBQUU7UUFDUixZQUFZLEVBQUUsNkRBQTZEO0tBQzlFO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLFlBQVksRUFBRSxrRkFBa0Y7S0FDbkc7Q0FDSixDQUFDO0FBT2hCLElBQWEscUJBQXFCO0lBQWxDO0lBQXFDLENBQUM7SUFBRCw0QkFBQztBQUFELENBQXJDLEFBQXNDLElBQUE7QUFBekIscUJBQXFCO0lBSmpDLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUMsT0FBTyxDQUFDLGNBQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzFELE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUM7S0FDeEIsQ0FBQztHQUNXLHFCQUFxQixDQUFJO0FBQXpCLHNEQUFxQiIsImZpbGUiOiJhcHAvYXBwLXN0YWdlL2FwcC5zdGFnZS5yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cblxuICBleHBvcnQgY29uc3Qgcm91dGVzOlJvdXRlcyA9IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICBsb2FkQ2hpbGRyZW46ICdhcHAvdmlldy1sYXllci9tb2R1bGVzLWJ5LXJvdXRlL2hvbWUvaG9tZS5tb2R1bGUjSG9tZU1vZHVsZSdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgcGF0aDogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICBsb2FkQ2hpbGRyZW46ICdhcHAvdmlldy1sYXllci9tb2R1bGVzLWJ5LXJvdXRlL25vdGZvdW5kL25vdGZvdW5kLnBhZ2UubW9kdWxlI05vdGZvdW5kUGFnZU1vZHVsZSdcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXTtcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzLCB7IHVzZUhhc2g6IHRydWUgfSldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBTdGFnZVJvdXRpbmdNb2R1bGUgeyB9XG5cbiJdfQ==
