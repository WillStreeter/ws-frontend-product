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
var grid_row_component_1 = require("grid.row.component");
var material_1 = require("@angular/material");
var GridRowModule = (function () {
    function GridRowModule() {
    }
    return GridRowModule;
}());
GridRowModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule,
            material_1.MaterialModule,
            forms_1.FormsModule,
            flex_layout_1.FlexLayoutModule],
        declarations: [grid_row_component_1.GridRowComponent],
        exports: [grid_row_component_1.GridRowComponent]
    })
], GridRowModule);
exports.GridRowModule = GridRowModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9ncmlkLXJvdy9ncmlkLnJvdy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQSxzQ0FBeUM7QUFFekMsd0NBQTZDO0FBQzdDLDBDQUErQztBQUMvQyxvREFBd0Q7QUFDeEQseURBQXVEO0FBQ3ZELDhDQUFtRDtBQVluRCxJQUFhLGFBQWE7SUFBMUI7SUFBNkIsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBN0IsQUFBOEIsSUFBQTtBQUFqQixhQUFhO0lBVHpCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRSxDQUFFLHFCQUFZO1lBQ1oseUJBQWM7WUFDZCxtQkFBVztZQUNYLDhCQUFnQixDQUFFO1FBQzdCLFlBQVksRUFBRSxDQUFFLHFDQUFnQixDQUFFO1FBQ2xDLE9BQU8sRUFBRSxDQUFDLHFDQUFnQixDQUFDO0tBQzlCLENBQUM7R0FFVyxhQUFhLENBQUk7QUFBakIsc0NBQWEiLCJmaWxlIjoiYXBwL3ZpZXctbGF5ZXIvY29tbW9uLXZpZXdzL2dyaWQtcm93L2dyaWQucm93Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcbmltcG9ydCB7IEdyaWRSb3dDb21wb25lbnQgIH0gZnJvbSAnZ3JpZC5yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogWyBDb21tb25Nb2R1bGUsXG4gICAgICAgICAgICAgICBNYXRlcmlhbE1vZHVsZSxcbiAgICAgICAgICAgICAgIEZvcm1zTW9kdWxlLFxuICAgICAgICAgICAgICAgRmxleExheW91dE1vZHVsZSBdLFxuICAgIGRlY2xhcmF0aW9uczogWyBHcmlkUm93Q29tcG9uZW50IF0sXG4gICAgZXhwb3J0czogW0dyaWRSb3dDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgR3JpZFJvd01vZHVsZSB7IH1cbiJdfQ==
