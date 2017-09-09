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
var surprise_component_1 = require("./surprise.component");
var usersession_guard_1 = require("../../../data-layer/ngrx-data/guards/usersession.guard");
var surpriseRoutes = [
    {
        path: '',
        component: surprise_component_1.SurpriseComponent,
        canActivate: [usersession_guard_1.UsersessionGuard]
    }
];
var SurpriseRoutingModule = (function () {
    function SurpriseRoutingModule() {
    }
    return SurpriseRoutingModule;
}());
SurpriseRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(surpriseRoutes)],
        exports: [router_1.RouterModule]
    })
], SurpriseRoutingModule);
exports.SurpriseRoutingModule = SurpriseRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL21vZHVsZXMtYnktcm91dGUvc3VycHJpc2Uvc3VycHJpc2Uucm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsMENBQXVEO0FBQ3ZELDJEQUF5RDtBQUN6RCw0RkFBMEY7QUFJMUYsSUFBTSxjQUFjLEdBQVc7SUFDN0I7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxzQ0FBaUI7UUFDNUIsV0FBVyxFQUFFLENBQUUsb0NBQWdCLENBQUU7S0FDbEM7Q0FDRixDQUFDO0FBTUYsSUFBYSxxQkFBcUI7SUFBbEM7SUFBcUMsQ0FBQztJQUFELDRCQUFDO0FBQUQsQ0FBckMsQUFBc0MsSUFBQTtBQUF6QixxQkFBcUI7SUFKakMsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUkscUJBQVksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUU7UUFDcEQsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztLQUN4QixDQUFDO0dBQ1cscUJBQXFCLENBQUk7QUFBekIsc0RBQXFCIiwiZmlsZSI6ImFwcC92aWV3LWxheWVyL21vZHVsZXMtYnktcm91dGUvc3VycHJpc2Uvc3VycHJpc2Uucm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3VycHJpc2VDb21wb25lbnQgfSBmcm9tICcuL3N1cnByaXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVc2Vyc2Vzc2lvbkd1YXJkIH0gZnJvbSAnLi4vLi4vLi4vZGF0YS1sYXllci9uZ3J4LWRhdGEvZ3VhcmRzL3VzZXJzZXNzaW9uLmd1YXJkJztcblxuXG5cbmNvbnN0IHN1cnByaXNlUm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IFN1cnByaXNlQ29tcG9uZW50LFxuICAgIGNhbkFjdGl2YXRlOiBbIFVzZXJzZXNzaW9uR3VhcmQgXVxuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKHN1cnByaXNlUm91dGVzKSBdLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBTdXJwcmlzZVJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=
