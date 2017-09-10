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
var grid_row_component_1 = require("./grid-row.component");
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
            flex_layout_1.FlexLayoutModule],
        declarations: [grid_row_component_1.GridRowComponent],
        exports: [grid_row_component_1.GridRowComponent]
    })
], GridRowModule);
exports.GridRowModule = GridRowModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9ncmlkLXJvdy9ncmlkLnJvdy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBQy9DLG9EQUF3RDtBQUN4RCwyREFBeUQ7QUFDekQsOENBQW1EO0FBV25ELElBQWEsYUFBYTtJQUExQjtJQUE2QixDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQUE3QixBQUE4QixJQUFBO0FBQWpCLGFBQWE7SUFSekIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUUscUJBQVk7WUFDWix5QkFBYztZQUNkLDhCQUFnQixDQUFFO1FBQzdCLFlBQVksRUFBRSxDQUFFLHFDQUFnQixDQUFFO1FBQ2xDLE9BQU8sRUFBRSxDQUFDLHFDQUFnQixDQUFDO0tBQzlCLENBQUM7R0FFVyxhQUFhLENBQUk7QUFBakIsc0NBQWEiLCJmaWxlIjoiYXBwL3ZpZXctbGF5ZXIvY29tbW9uLXZpZXdzL2dyaWQtcm93L2dyaWQucm93Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xuaW1wb3J0IHsgR3JpZFJvd0NvbXBvbmVudCAgfSBmcm9tICcuL2dyaWQtcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXRlcmlhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFsgQ29tbW9uTW9kdWxlLFxuICAgICAgICAgICAgICAgTWF0ZXJpYWxNb2R1bGUsXG4gICAgICAgICAgICAgICBGbGV4TGF5b3V0TW9kdWxlIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbIEdyaWRSb3dDb21wb25lbnQgXSxcbiAgICBleHBvcnRzOiBbR3JpZFJvd0NvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBHcmlkUm93TW9kdWxlIHsgfVxuIl19
