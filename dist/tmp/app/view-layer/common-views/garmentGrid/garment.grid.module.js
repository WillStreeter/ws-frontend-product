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
var control_messaging_component_1 = require("../../common-views/custom-validators/control.messaging.component");
var validation_service_1 = require("../../../business-layer/validators/services/validation.service");
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
        providers: [validation_service_1.ValidationService],
        declarations: [garment_grid_component_1.GarmentGridComponent,
            control_messaging_component_1.ControlMessagesComponent,
            grid_create_row_component_1.GridCreateRowComponent,
            grid_toolbar_component_1.GridToolbarComponent,
            grid_row_component_1.GridRowComponent],
        exports: [garment_grid_component_1.GarmentGridComponent,
            control_messaging_component_1.ControlMessagesComponent,
            grid_create_row_component_1.GridCreateRowComponent,
            grid_toolbar_component_1.GridToolbarComponent,
            grid_row_component_1.GridRowComponent]
    })
], GarmentGridModule);
exports.GarmentGridModule = GarmentGridModule;
