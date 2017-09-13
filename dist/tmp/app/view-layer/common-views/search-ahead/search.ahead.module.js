"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var flex_layout_1 = require("@angular/flex-layout");
var search_ahead_component_1 = require("./search.ahead.component");
var material_1 = require("@angular/material");
var SearchAheadModule = (function () {
    function SearchAheadModule() {
    }
    return SearchAheadModule;
}());
SearchAheadModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [forms_1.FormsModule,
                    forms_1.ReactiveFormsModule,
                    common_1.CommonModule,
                    material_1.MaterialModule,
                    flex_layout_1.FlexLayoutModule],
                declarations: [search_ahead_component_1.SearchAheadComponent],
                exports: [search_ahead_component_1.SearchAheadComponent]
            },] },
];
SearchAheadModule.ctorParameters = function () { return []; };
exports.SearchAheadModule = SearchAheadModule;
//# sourceMappingURL=search.ahead.module.js.map