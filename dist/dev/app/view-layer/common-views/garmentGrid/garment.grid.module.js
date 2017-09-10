"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
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
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            common_1.CommonModule,
            material_1.MaterialModule,
            flex_layout_1.FlexLayoutModule],
        declarations: [garment_grid_component_1.GarmentGridComponent, grid_row_component_1.GridRowComponent],
        exports: [garment_grid_component_1.GarmentGridComponent, grid_row_component_1.GridRowComponent]
    })
], GarmentGridModule);
exports.GarmentGridModule = GarmentGridModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9nYXJtZW50R3JpZC9nYXJtZW50LmdyaWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0Esc0NBQXlDO0FBQ3pDLHdDQUFrRTtBQUNsRSwwQ0FBK0M7QUFDL0Msb0RBQXdEO0FBQ3hELDBDQUErQztBQUMvQyxtRUFBZ0U7QUFDaEUscUVBQWtFO0FBQ2xFLDhDQUFtRDtBQWVuRCxJQUFhLGlCQUFpQjtJQUE5QjtJQUFpQyxDQUFDO0lBQUQsd0JBQUM7QUFBRCxDQUFqQyxBQUFrQyxJQUFBO0FBQXJCLGlCQUFpQjtJQVo3QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBRSxxQkFBWTtZQUNaLHFCQUFZO1lBQ1osbUJBQVc7WUFDbEIsMkJBQW1CO1lBQ1oscUJBQVk7WUFDWix5QkFBYztZQUNkLDhCQUFnQixDQUFFO1FBQzdCLFlBQVksRUFBRSxDQUFFLDZDQUFvQixFQUFDLHFDQUFnQixDQUFFO1FBQ3ZELE9BQU8sRUFBRSxDQUFDLDZDQUFvQixFQUFFLHFDQUFnQixDQUFDO0tBQ3BELENBQUM7R0FFVyxpQkFBaUIsQ0FBSTtBQUFyQiw4Q0FBaUIiLCJmaWxlIjoiYXBwL3ZpZXctbGF5ZXIvY29tbW9uLXZpZXdzL2dhcm1lbnRHcmlkL2dhcm1lbnQuZ3JpZC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEdhcm1lbnRHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi9nYXJtZW50LmdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IEdyaWRSb3dDb21wb25lbnQgfSBmcm9tICcuLi9ncmlkLXJvdy9ncmlkLnJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbIFJvdXRlck1vZHVsZSxcbiAgICAgICAgICAgICAgIFJvdXRlck1vZHVsZSxcbiAgICAgICAgICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICAgICAgICAgTWF0ZXJpYWxNb2R1bGUsXG4gICAgICAgICAgICAgICBGbGV4TGF5b3V0TW9kdWxlIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbIEdhcm1lbnRHcmlkQ29tcG9uZW50LEdyaWRSb3dDb21wb25lbnQgXSxcbiAgICBleHBvcnRzOiBbR2FybWVudEdyaWRDb21wb25lbnQsIEdyaWRSb3dDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgR2FybWVudEdyaWRNb2R1bGUgeyB9XG4iXX0=
