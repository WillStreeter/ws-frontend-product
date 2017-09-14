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
var paginator_toolbar_component_1 = require("./paginator.toolbar.component");
var material_1 = require("@angular/material");
var PaginatorToolbarModule = (function () {
    function PaginatorToolbarModule() {
    }
    return PaginatorToolbarModule;
}());
PaginatorToolbarModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            common_1.CommonModule,
            material_1.MaterialModule,
            flex_layout_1.FlexLayoutModule],
        declarations: [paginator_toolbar_component_1.PaginatorToolbarComponent],
        exports: [paginator_toolbar_component_1.PaginatorToolbarComponent]
    })
], PaginatorToolbarModule);
exports.PaginatorToolbarModule = PaginatorToolbarModule;
