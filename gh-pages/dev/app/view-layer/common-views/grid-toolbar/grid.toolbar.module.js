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
var grid_toolbar_component_1 = require("./grid.toolbar.component");
var material_1 = require("@angular/material");
var GridToolbarModule = (function () {
    function GridToolbarModule() {
    }
    return GridToolbarModule;
}());
GridToolbarModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            common_1.CommonModule,
            material_1.MaterialModule,
            flex_layout_1.FlexLayoutModule],
        declarations: [grid_toolbar_component_1.GridToolbarComponent],
        exports: [grid_toolbar_component_1.GridToolbarComponent]
    })
], GridToolbarModule);
exports.GridToolbarModule = GridToolbarModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9ncmlkLXRvb2xiYXIvZ3JpZC50b29sYmFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUdBLHNDQUF5QztBQUN6Qyx3Q0FBa0U7QUFDbEUsMENBQStDO0FBQy9DLG9EQUF3RDtBQUN4RCxtRUFBZ0U7QUFDaEUsOENBQW1EO0FBYW5ELElBQWEsaUJBQWlCO0lBQTlCO0lBQWlDLENBQUM7SUFBRCx3QkFBQztBQUFELENBQWpDLEFBQWtDLElBQUE7QUFBckIsaUJBQWlCO0lBVjdCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRSxDQUFHLG1CQUFXO1lBQ25CLDJCQUFtQjtZQUNaLHFCQUFZO1lBQ1oseUJBQWM7WUFDZCw4QkFBZ0IsQ0FBRTtRQUM3QixZQUFZLEVBQUUsQ0FBQyw2Q0FBb0IsQ0FBRTtRQUNyQyxPQUFPLEVBQUUsQ0FBQyw2Q0FBb0IsQ0FBQztLQUNsQyxDQUFDO0dBRVcsaUJBQWlCLENBQUk7QUFBckIsOENBQWlCIiwiZmlsZSI6ImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9ncmlkLXRvb2xiYXIvZ3JpZC50b29sYmFyLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB3aWxsc3RyZWV0ZXIgb24gOS8xMC8xNy5cbiAqL1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7XG5pbXBvcnQgeyBHcmlkVG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vZ3JpZC50b29sYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFsgIEZvcm1zTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICAgICAgICAgTWF0ZXJpYWxNb2R1bGUsXG4gICAgICAgICAgICAgICBGbGV4TGF5b3V0TW9kdWxlIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbR3JpZFRvb2xiYXJDb21wb25lbnQgXSxcbiAgICBleHBvcnRzOiBbR3JpZFRvb2xiYXJDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgR3JpZFRvb2xiYXJNb2R1bGUgeyB9Il19
