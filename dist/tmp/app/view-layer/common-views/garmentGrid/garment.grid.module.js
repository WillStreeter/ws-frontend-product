"use strict";
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
GarmentGridModule.decorators = [
    { type: core_1.NgModule, args: [{
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
            },] },
];
GarmentGridModule.ctorParameters = function () { return []; };
exports.GarmentGridModule = GarmentGridModule;
//# sourceMappingURL=garment.grid.module.js.map