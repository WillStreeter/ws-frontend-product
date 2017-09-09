"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var flex_layout_1 = require("@angular/flex-layout");
var router_1 = require("@angular/router");
var masthead_component_1 = require("./masthead.component");
var material_1 = require("@angular/material");
var dialog_module_1 = require("../dialog-container/dialog.module");
var dialog_service_1 = require("../dialog-container/dialog.service");
var MastheadModule = (function () {
    function MastheadModule() {
    }
    return MastheadModule;
}());
MastheadModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule,
            router_1.RouterModule,
            common_1.CommonModule,
            material_1.MaterialModule,
            dialog_module_1.DialogsModule,
            flex_layout_1.FlexLayoutModule],
        declarations: [masthead_component_1.MastheadComponent],
        exports: [masthead_component_1.MastheadComponent],
        providers: [dialog_service_1.DialogsService]
    })
], MastheadModule);
exports.MastheadModule = MastheadModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9tYXN0aGVhZC9tYXN0aGVhZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBQy9DLG9EQUF3RDtBQUN4RCwwQ0FBK0M7QUFDL0MsMkRBQXlEO0FBQ3pELDhDQUFtRDtBQUNuRCxtRUFBa0U7QUFDbEUscUVBQW9FO0FBZXBFLElBQWEsY0FBYztJQUEzQjtJQUE4QixDQUFDO0lBQUQscUJBQUM7QUFBRCxDQUE5QixBQUErQixJQUFBO0FBQWxCLGNBQWM7SUFaMUIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUUscUJBQVk7WUFDWixxQkFBWTtZQUNaLHFCQUFZO1lBQ1oseUJBQWM7WUFDZCw2QkFBYTtZQUNiLDhCQUFnQixDQUFFO1FBQzdCLFlBQVksRUFBRSxDQUFFLHNDQUFpQixDQUFFO1FBQ25DLE9BQU8sRUFBRSxDQUFDLHNDQUFpQixDQUFDO1FBQzVCLFNBQVMsRUFBRSxDQUFFLCtCQUFjLENBQUU7S0FDaEMsQ0FBQztHQUVXLGNBQWMsQ0FBSTtBQUFsQix3Q0FBYyIsImZpbGUiOiJhcHAvdmlldy1sYXllci9jb21tb24tdmlld3MvbWFzdGhlYWQvbWFzdGhlYWQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTWFzdGhlYWRDb21wb25lbnQgfSBmcm9tICcuL21hc3RoZWFkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IERpYWxvZ3NNb2R1bGUgfSBmcm9tICcuLi9kaWFsb2ctY29udGFpbmVyL2RpYWxvZy5tb2R1bGUnO1xuaW1wb3J0IHsgRGlhbG9nc1NlcnZpY2UgfSBmcm9tICcuLi9kaWFsb2ctY29udGFpbmVyL2RpYWxvZy5zZXJ2aWNlJztcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFsgUm91dGVyTW9kdWxlLFxuICAgICAgICAgICAgICAgUm91dGVyTW9kdWxlLFxuICAgICAgICAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICAgICAgICAgTWF0ZXJpYWxNb2R1bGUsXG4gICAgICAgICAgICAgICBEaWFsb2dzTW9kdWxlLFxuICAgICAgICAgICAgICAgRmxleExheW91dE1vZHVsZSBdLFxuICAgIGRlY2xhcmF0aW9uczogWyBNYXN0aGVhZENvbXBvbmVudCBdLFxuICAgIGV4cG9ydHM6IFtNYXN0aGVhZENvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOiBbIERpYWxvZ3NTZXJ2aWNlIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBNYXN0aGVhZE1vZHVsZSB7IH1cbiJdfQ==
