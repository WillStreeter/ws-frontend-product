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
var registration_component_1 = require("./registration.component");
var index_1 = require("../../../data-layer/ngrx-data/guards/index");
var regRoutes = [
    { path: '',
        component: registration_component_1.RegistrationComponent,
        canActivate: [index_1.DialogStateGuard, index_1.UsersessionGuard]
    }
];
var RegistrationRoutingModule = (function () {
    function RegistrationRoutingModule() {
    }
    return RegistrationRoutingModule;
}());
RegistrationRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(regRoutes)],
        exports: [router_1.RouterModule]
    })
], RegistrationRoutingModule);
exports.RegistrationRoutingModule = RegistrationRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL21vZHVsZXMtYnktcm91dGUvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QywwQ0FBdUQ7QUFDdkQsbUVBQWlFO0FBQ2pFLG9FQUFnRztBQUdoRyxJQUFNLFNBQVMsR0FBVztJQUN4QixFQUFJLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLDhDQUFxQjtRQUNoQyxXQUFXLEVBQUUsQ0FBRSx3QkFBZ0IsRUFBRSx3QkFBZ0IsQ0FBRTtLQUN0RDtDQUNGLENBQUM7QUFLRixJQUFhLHlCQUF5QjtJQUF0QztJQUF5QyxDQUFDO0lBQUQsZ0NBQUM7QUFBRCxDQUF6QyxBQUEwQyxJQUFBO0FBQTdCLHlCQUF5QjtJQUpyQyxlQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBSSxxQkFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBRTtRQUMvQyxPQUFPLEVBQUUsQ0FBRSxxQkFBWSxDQUFFO0tBQzFCLENBQUM7R0FDVyx5QkFBeUIsQ0FBSTtBQUE3Qiw4REFBeUIiLCJmaWxlIjoiYXBwL3ZpZXctbGF5ZXIvbW9kdWxlcy1ieS1yb3V0ZS9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLnJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJlZ2lzdHJhdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcmVnaXN0cmF0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaWFsb2dTdGF0ZUd1YXJkLCBVc2Vyc2Vzc2lvbkd1YXJkIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1sYXllci9uZ3J4LWRhdGEvZ3VhcmRzL2luZGV4JztcblxuXG5jb25zdCByZWdSb3V0ZXM6IFJvdXRlcyA9IFtcbiAgeyAgIHBhdGg6ICcnLFxuICAgICAgY29tcG9uZW50OiBSZWdpc3RyYXRpb25Db21wb25lbnQsXG4gICAgICBjYW5BY3RpdmF0ZTogWyBEaWFsb2dTdGF0ZUd1YXJkLCBVc2Vyc2Vzc2lvbkd1YXJkIF1cbiAgfVxuXTtcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFsgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocmVnUm91dGVzKSBdLFxuICBleHBvcnRzOiBbIFJvdXRlck1vZHVsZSBdXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdHJhdGlvblJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=
