"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var flex_layout_1 = require("@angular/flex-layout");
var paginator_toolbar_component_1 = require("./paginator.toolbar.component");
var material_1 = require("@angular/material");
var PaginatorToolbarModule = (function () {
    function PaginatorToolbarModule() {
    }
    return PaginatorToolbarModule;
}());
PaginatorToolbarModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [forms_1.FormsModule,
                    forms_1.ReactiveFormsModule,
                    common_1.CommonModule,
                    material_1.MaterialModule,
                    flex_layout_1.FlexLayoutModule],
                declarations: [paginator_toolbar_component_1.PaginatorToolbarComponent],
                exports: [paginator_toolbar_component_1.PaginatorToolbarComponent]
            },] },
];
PaginatorToolbarModule.ctorParameters = function () { return []; };
exports.PaginatorToolbarModule = PaginatorToolbarModule;
//# sourceMappingURL=paginator.toolbar.module.js.map