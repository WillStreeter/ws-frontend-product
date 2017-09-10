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
var garment_grid_component_1 = require("./garment.grid.component");
var grid_row_component_1 = require("../grid-row/grid.row.component");
var material_1 = require("@angular/material");
var GarmentGridModule = (function () {
    function GarmentGridModule() {
    }
    return GarmentGridModule;
}());
GarmentGridModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule,
            router_1.RouterModule,
            common_1.CommonModule,
            material_1.MaterialModule,
            flex_layout_1.FlexLayoutModule],
        declarations: [garment_grid_component_1.GarmentGridComponent, grid_row_component_1.GridRowComponent],
        exports: [garment_grid_component_1.GarmentGridComponent, grid_row_component_1.GridRowComponent]
    })
], GarmentGridModule);
exports.GarmentGridModule = GarmentGridModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9nYXJtZW50R3JpZC9nYXJtZW50LmdyaWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0Esc0NBQXlDO0FBQ3pDLDBDQUErQztBQUMvQyxvREFBd0Q7QUFDeEQsMENBQStDO0FBQy9DLG1FQUFnRTtBQUNoRSxxRUFBa0U7QUFDbEUsOENBQW1EO0FBYW5ELElBQWEsaUJBQWlCO0lBQTlCO0lBQWlDLENBQUM7SUFBRCx3QkFBQztBQUFELENBQWpDLEFBQWtDLElBQUE7QUFBckIsaUJBQWlCO0lBVjdCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRSxDQUFFLHFCQUFZO1lBQ1oscUJBQVk7WUFDWixxQkFBWTtZQUNaLHlCQUFjO1lBQ2QsOEJBQWdCLENBQUU7UUFDN0IsWUFBWSxFQUFFLENBQUUsNkNBQW9CLEVBQUMscUNBQWdCLENBQUU7UUFDdkQsT0FBTyxFQUFFLENBQUMsNkNBQW9CLEVBQUUscUNBQWdCLENBQUM7S0FDcEQsQ0FBQztHQUVXLGlCQUFpQixDQUFJO0FBQXJCLDhDQUFpQiIsImZpbGUiOiJhcHAvdmlldy1sYXllci9jb21tb24tdmlld3MvZ2FybWVudEdyaWQvZ2FybWVudC5ncmlkLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEdhcm1lbnRHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi9nYXJtZW50LmdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IEdyaWRSb3dDb21wb25lbnQgfSBmcm9tICcuLi9ncmlkLXJvdy9ncmlkLnJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbIFJvdXRlck1vZHVsZSxcbiAgICAgICAgICAgICAgIFJvdXRlck1vZHVsZSxcbiAgICAgICAgICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgICAgICAgIE1hdGVyaWFsTW9kdWxlLFxuICAgICAgICAgICAgICAgRmxleExheW91dE1vZHVsZSBdLFxuICAgIGRlY2xhcmF0aW9uczogWyBHYXJtZW50R3JpZENvbXBvbmVudCxHcmlkUm93Q29tcG9uZW50IF0sXG4gICAgZXhwb3J0czogW0dhcm1lbnRHcmlkQ29tcG9uZW50LCBHcmlkUm93Q29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIEdhcm1lbnRHcmlkTW9kdWxlIHsgfVxuIl19
