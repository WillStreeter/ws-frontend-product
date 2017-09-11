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
var garment_grid_component_1 = require("./garment.grid.component");
var grid_row_component_1 = require("../grid-row/grid.row.component");
var grid_create_row_component_1 = require("../grid-create-row/grid.create.row.component");
var grid_toolbar_component_1 = require("../grid-toolbar/grid.toolbar.component");
var material_1 = require("@angular/material");
var GarmentGridModule = (function () {
    function GarmentGridModule() {
    }
    return GarmentGridModule;
}());
GarmentGridModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            common_1.CommonModule,
            material_1.MaterialModule,
            flex_layout_1.FlexLayoutModule],
        declarations: [garment_grid_component_1.GarmentGridComponent,
            grid_create_row_component_1.GridCreateRowComponent,
            grid_toolbar_component_1.GridToolbarComponent,
            grid_row_component_1.GridRowComponent],
        exports: [garment_grid_component_1.GarmentGridComponent,
            grid_create_row_component_1.GridCreateRowComponent,
            grid_toolbar_component_1.GridToolbarComponent,
            grid_row_component_1.GridRowComponent]
    })
], GarmentGridModule);
exports.GarmentGridModule = GarmentGridModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9nYXJtZW50R3JpZC9nYXJtZW50LmdyaWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0Esc0NBQXlDO0FBQ3pDLHdDQUFrRTtBQUNsRSwwQ0FBK0M7QUFDL0Msb0RBQXdEO0FBQ3hELG1FQUFnRTtBQUNoRSxxRUFBa0U7QUFDbEUsMEZBQXNGO0FBQ3RGLGlGQUE4RTtBQUM5RSw4Q0FBbUQ7QUFtQm5ELElBQWEsaUJBQWlCO0lBQTlCO0lBQWlDLENBQUM7SUFBRCx3QkFBQztBQUFELENBQWpDLEFBQWtDLElBQUE7QUFBckIsaUJBQWlCO0lBaEI3QixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBRyxtQkFBVztZQUNuQiwyQkFBbUI7WUFDWixxQkFBWTtZQUNaLHlCQUFjO1lBQ2QsOEJBQWdCLENBQUU7UUFDN0IsWUFBWSxFQUFFLENBQUUsNkNBQW9CO1lBQ3BCLGtEQUFzQjtZQUN0Qiw2Q0FBb0I7WUFDcEIscUNBQWdCLENBQUU7UUFDbEMsT0FBTyxFQUFFLENBQUMsNkNBQW9CO1lBQ3BCLGtEQUFzQjtZQUN0Qiw2Q0FBb0I7WUFDcEIscUNBQWdCLENBQUM7S0FDOUIsQ0FBQztHQUVXLGlCQUFpQixDQUFJO0FBQXJCLDhDQUFpQiIsImZpbGUiOiJhcHAvdmlldy1sYXllci9jb21tb24tdmlld3MvZ2FybWVudEdyaWQvZ2FybWVudC5ncmlkLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZsZXhMYXlvdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mbGV4LWxheW91dCc7XG5pbXBvcnQgeyBHYXJtZW50R3JpZENvbXBvbmVudCB9IGZyb20gJy4vZ2FybWVudC5ncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHcmlkUm93Q29tcG9uZW50IH0gZnJvbSAnLi4vZ3JpZC1yb3cvZ3JpZC5yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IEdyaWRDcmVhdGVSb3dDb21wb25lbnQgfSBmcm9tICcuLi9ncmlkLWNyZWF0ZS1yb3cvZ3JpZC5jcmVhdGUucm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHcmlkVG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4uL2dyaWQtdG9vbGJhci9ncmlkLnRvb2xiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogWyAgRm9ybXNNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICAgICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgICAgICAgICBNYXRlcmlhbE1vZHVsZSxcbiAgICAgICAgICAgICAgIEZsZXhMYXlvdXRNb2R1bGUgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFsgR2FybWVudEdyaWRDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgIEdyaWRDcmVhdGVSb3dDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgIEdyaWRUb29sYmFyQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICBHcmlkUm93Q29tcG9uZW50IF0sXG4gICAgZXhwb3J0czogW0dhcm1lbnRHcmlkQ29tcG9uZW50LFxuICAgICAgICAgICAgICBHcmlkQ3JlYXRlUm93Q29tcG9uZW50LFxuICAgICAgICAgICAgICBHcmlkVG9vbGJhckNvbXBvbmVudCxcbiAgICAgICAgICAgICAgR3JpZFJvd0NvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBHYXJtZW50R3JpZE1vZHVsZSB7IH1cbiJdfQ==
