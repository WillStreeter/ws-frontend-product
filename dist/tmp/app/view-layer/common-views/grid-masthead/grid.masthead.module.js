"use strict";
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
GridMastheadModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [forms_1.FormsModule,
                    forms_1.ReactiveFormsModule,
                    common_1.CommonModule,
                    material_1.MaterialModule,
                    flex_layout_1.FlexLayoutModule],
                declarations: [grid_masthead_component_1.GridMastheadComponent],
                exports: [grid_masthead_component_1.GridMastheadComponent]
            },] },
];
GridMastheadModule.ctorParameters = function () { return []; };
exports.GridMastheadModule = GridMastheadModule;
//# sourceMappingURL=grid.masthead.module.js.map