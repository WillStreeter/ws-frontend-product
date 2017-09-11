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
var grid_masthead_component_1 = require("./grid.masthead.component");
var material_1 = require("@angular/material");
var GridMastheadModule = (function () {
    function GridMastheadModule() {
    }
    return GridMastheadModule;
}());
GridMastheadModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            common_1.CommonModule,
            material_1.MaterialModule,
            flex_layout_1.FlexLayoutModule],
        declarations: [grid_masthead_component_1.GridMastheadComponent],
        exports: [grid_masthead_component_1.GridMastheadComponent]
    })
], GridMastheadModule);
exports.GridMastheadModule = GridMastheadModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9ncmlkLW1hc3RoZWFkL2dyaWQubWFzdGhlYWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0Esc0NBQXlDO0FBQ3pDLHdDQUFrRTtBQUNsRSwwQ0FBK0M7QUFDL0Msb0RBQXdEO0FBQ3hELHFFQUFrRTtBQUNsRSw4Q0FBbUQ7QUFhbkQsSUFBYSxrQkFBa0I7SUFBL0I7SUFBa0MsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FBbEMsQUFBbUMsSUFBQTtBQUF0QixrQkFBa0I7SUFWOUIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUcsbUJBQVc7WUFDbkIsMkJBQW1CO1lBQ1oscUJBQVk7WUFDWix5QkFBYztZQUNkLDhCQUFnQixDQUFFO1FBQzdCLFlBQVksRUFBRSxDQUFDLCtDQUFxQixDQUFFO1FBQ3RDLE9BQU8sRUFBRSxDQUFDLCtDQUFxQixDQUFDO0tBQ25DLENBQUM7R0FFVyxrQkFBa0IsQ0FBSTtBQUF0QixnREFBa0IiLCJmaWxlIjoiYXBwL3ZpZXctbGF5ZXIvY29tbW9uLXZpZXdzL2dyaWQtbWFzdGhlYWQvZ3JpZC5tYXN0aGVhZC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgd2lsbHN0cmVldGVyIG9uIDkvMTAvMTcuXG4gKi9cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xuaW1wb3J0IHsgR3JpZE1hc3RoZWFkQ29tcG9uZW50IH0gZnJvbSAnLi9ncmlkLm1hc3RoZWFkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFsgIEZvcm1zTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICAgICAgICAgTWF0ZXJpYWxNb2R1bGUsXG4gICAgICAgICAgICAgICBGbGV4TGF5b3V0TW9kdWxlIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbR3JpZE1hc3RoZWFkQ29tcG9uZW50IF0sXG4gICAgZXhwb3J0czogW0dyaWRNYXN0aGVhZENvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBHcmlkTWFzdGhlYWRNb2R1bGUgeyB9Il19
