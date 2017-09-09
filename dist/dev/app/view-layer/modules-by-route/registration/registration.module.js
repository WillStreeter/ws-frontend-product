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
var material_1 = require("@angular/material");
var flex_layout_1 = require("@angular/flex-layout");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var control_messaging_component_1 = require("../../common-views/custom-validators/control.messaging.component");
var validation_service_1 = require("../../../business-layer/validators/services/validation.service");
var registration_component_1 = require("./registration.component");
var registration_routing_module_1 = require("./registration.routing.module");
var RegistrationModule = (function () {
    function RegistrationModule() {
    }
    return RegistrationModule;
}());
RegistrationModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule,
            material_1.MaterialModule,
            router_1.RouterModule,
            forms_1.ReactiveFormsModule,
            registration_routing_module_1.RegistrationRoutingModule,
            flex_layout_1.FlexLayoutModule],
        providers: [validation_service_1.ValidationService],
        declarations: [registration_component_1.RegistrationComponent,
            control_messaging_component_1.ControlMessagesComponent],
        exports: [registration_component_1.RegistrationComponent]
    })
], RegistrationModule);
exports.RegistrationModule = RegistrationModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL21vZHVsZXMtYnktcm91dGUvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBQy9DLDhDQUFtRDtBQUNuRCxvREFBd0Q7QUFDeEQsMENBQStDO0FBQy9DLHdDQUFxRDtBQUNyRCxnSEFBNEc7QUFDNUcscUdBQW1HO0FBQ25HLG1FQUFpRTtBQUNqRSw2RUFBMEU7QUFtQjFFLElBQWEsa0JBQWtCO0lBQS9CO0lBQWtDLENBQUM7SUFBRCx5QkFBQztBQUFELENBQWxDLEFBQW1DLElBQUE7QUFBdEIsa0JBQWtCO0lBYjlCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFFLHFCQUFZO1lBQ1oseUJBQWM7WUFDZCxxQkFBWTtZQUNaLDJCQUFtQjtZQUNuQix1REFBeUI7WUFDekIsOEJBQWdCLENBQUM7UUFDNUIsU0FBUyxFQUFFLENBQUUsc0NBQWlCLENBQUU7UUFDaEMsWUFBWSxFQUFFLENBQUUsOENBQXFCO1lBQ3JCLHNEQUF3QixDQUFDO1FBQ3pDLE9BQU8sRUFBRSxDQUFDLDhDQUFxQixDQUFDO0tBQ2pDLENBQUM7R0FFVyxrQkFBa0IsQ0FBSTtBQUF0QixnREFBa0IiLCJmaWxlIjoiYXBwL3ZpZXctbGF5ZXIvbW9kdWxlcy1ieS1yb3V0ZS9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDb250cm9sTWVzc2FnZXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21tb24tdmlld3MvY3VzdG9tLXZhbGlkYXRvcnMvY29udHJvbC5tZXNzYWdpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IFZhbGlkYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYnVzaW5lc3MtbGF5ZXIvdmFsaWRhdG9ycy9zZXJ2aWNlcy92YWxpZGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVnaXN0cmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9yZWdpc3RyYXRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IFJlZ2lzdHJhdGlvblJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3JlZ2lzdHJhdGlvbi5yb3V0aW5nLm1vZHVsZSc7XG5cbi8qKlxuICogTW9kdWxlIGZvciBhIHVzZXIncyBkZXRhaWxzLlxuICogU2hhcmVkTW9kdWxlIGlzIGltcG9ydGVkIHdoaWNoIHdpbGwgYnJpbmcgaW4gTWF0ZXJpYWxNb2R1bGVcbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogWyBDb21tb25Nb2R1bGUsXG4gICAgICAgICAgICAgTWF0ZXJpYWxNb2R1bGUsXG4gICAgICAgICAgICAgUm91dGVyTW9kdWxlLFxuICAgICAgICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICAgICAgICAgUmVnaXN0cmF0aW9uUm91dGluZ01vZHVsZSxcbiAgICAgICAgICAgICBGbGV4TGF5b3V0TW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbIFZhbGlkYXRpb25TZXJ2aWNlIF0sXG4gIGRlY2xhcmF0aW9uczogWyBSZWdpc3RyYXRpb25Db21wb25lbnQsXG4gICAgICAgICAgICAgICAgICBDb250cm9sTWVzc2FnZXNDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUmVnaXN0cmF0aW9uQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIFJlZ2lzdHJhdGlvbk1vZHVsZSB7IH1cbiJdfQ==
