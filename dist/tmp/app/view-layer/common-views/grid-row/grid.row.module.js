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
var grid_row_component_1 = require("./grid.row.component");
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
