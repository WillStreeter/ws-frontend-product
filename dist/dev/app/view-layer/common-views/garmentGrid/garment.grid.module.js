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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9nYXJtZW50R3JpZC9nYXJtZW50LmdyaWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0Esc0NBQXlDO0FBQ3pDLHdDQUFrRTtBQUNsRSxnSEFBNEc7QUFDNUcscUdBQW1HO0FBQ25HLDBDQUErQztBQUMvQyxvREFBd0Q7QUFDeEQsbUVBQWdFO0FBQ2hFLHFFQUFrRTtBQUNsRSwwRkFBc0Y7QUFDdEYsaUZBQThFO0FBQzlFLDhDQUFtRDtBQXNCbkQsSUFBYSxpQkFBaUI7SUFBOUI7SUFBaUMsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBakMsQUFBa0MsSUFBQTtBQUFyQixpQkFBaUI7SUFuQjdCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRSxDQUFHLG1CQUFXO1lBQ25CLDJCQUFtQjtZQUNaLHFCQUFZO1lBQ1oseUJBQWM7WUFDZCw4QkFBZ0IsQ0FBRTtRQUM3QixTQUFTLEVBQUUsQ0FBRSxzQ0FBaUIsQ0FBRTtRQUNoQyxZQUFZLEVBQUUsQ0FBRSw2Q0FBb0I7WUFDcEIsc0RBQXdCO1lBQ3hCLGtEQUFzQjtZQUN0Qiw2Q0FBb0I7WUFDcEIscUNBQWdCLENBQUU7UUFDbEMsT0FBTyxFQUFFLENBQUMsNkNBQW9CO1lBQ3BCLHNEQUF3QjtZQUN4QixrREFBc0I7WUFDdEIsNkNBQW9CO1lBQ3BCLHFDQUFnQixDQUFDO0tBQzlCLENBQUM7R0FFVyxpQkFBaUIsQ0FBSTtBQUFyQiw4Q0FBaUIiLCJmaWxlIjoiYXBwL3ZpZXctbGF5ZXIvY29tbW9uLXZpZXdzL2dhcm1lbnRHcmlkL2dhcm1lbnQuZ3JpZC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbnRyb2xNZXNzYWdlc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbW1vbi12aWV3cy9jdXN0b20tdmFsaWRhdG9ycy9jb250cm9sLm1lc3NhZ2luZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVmFsaWRhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9idXNpbmVzcy1sYXllci92YWxpZGF0b3JzL3NlcnZpY2VzL3ZhbGlkYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcbmltcG9ydCB7IEdhcm1lbnRHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi9nYXJtZW50LmdyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IEdyaWRSb3dDb21wb25lbnQgfSBmcm9tICcuLi9ncmlkLXJvdy9ncmlkLnJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3JpZENyZWF0ZVJvd0NvbXBvbmVudCB9IGZyb20gJy4uL2dyaWQtY3JlYXRlLXJvdy9ncmlkLmNyZWF0ZS5yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IEdyaWRUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi4vZ3JpZC10b29sYmFyL2dyaWQudG9vbGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbICBGb3Jtc01vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICAgICAgICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgICAgICAgIE1hdGVyaWFsTW9kdWxlLFxuICAgICAgICAgICAgICAgRmxleExheW91dE1vZHVsZSBdLFxuICAgIHByb3ZpZGVyczogWyBWYWxpZGF0aW9uU2VydmljZSBdLFxuICAgIGRlY2xhcmF0aW9uczogWyBHYXJtZW50R3JpZENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgQ29udHJvbE1lc3NhZ2VzQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICBHcmlkQ3JlYXRlUm93Q29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICBHcmlkVG9vbGJhckNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgR3JpZFJvd0NvbXBvbmVudCBdLFxuICAgIGV4cG9ydHM6IFtHYXJtZW50R3JpZENvbXBvbmVudCxcbiAgICAgICAgICAgICAgQ29udHJvbE1lc3NhZ2VzQ29tcG9uZW50LFxuICAgICAgICAgICAgICBHcmlkQ3JlYXRlUm93Q29tcG9uZW50LFxuICAgICAgICAgICAgICBHcmlkVG9vbGJhckNvbXBvbmVudCxcbiAgICAgICAgICAgICAgR3JpZFJvd0NvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBHYXJtZW50R3JpZE1vZHVsZSB7IH1cbiJdfQ==
