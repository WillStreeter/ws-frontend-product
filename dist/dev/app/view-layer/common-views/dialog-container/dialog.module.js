"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dialog_service_1 = require("./dialog.service");
var material_1 = require("@angular/material");
var forms_1 = require("@angular/forms");
var flex_layout_1 = require("@angular/flex-layout");
var core_1 = require("@angular/core");
var dialog_container_1 = require("./dialog.container");
var login_container_1 = require("../login-container/login.container");
var DialogsModule = (function () {
    function DialogsModule() {
    }
    return DialogsModule;
}());
DialogsModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            flex_layout_1.FlexLayoutModule,
            material_1.MaterialModule
        ],
        exports: [
            flex_layout_1.FlexLayoutModule,
            login_container_1.LoginContainerComponent,
            dialog_container_1.DialogContainerComponent
        ],
        declarations: [
            login_container_1.LoginContainerComponent,
            dialog_container_1.DialogContainerComponent,
        ],
        providers: [
            dialog_service_1.DialogsService
        ],
        entryComponents: [
            login_container_1.LoginContainerComponent,
            dialog_container_1.DialogContainerComponent
        ]
    })
], DialogsModule);
exports.DialogsModule = DialogsModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9kaWFsb2ctY29udGFpbmVyL2RpYWxvZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxtREFBa0Q7QUFDbEQsOENBQW1EO0FBQ25ELHdDQUE2QztBQUM3QyxvREFBd0Q7QUFDeEQsc0NBQXlDO0FBRXpDLHVEQUErRDtBQUMvRCxzRUFBNkU7QUEyQjdFLElBQWEsYUFBYTtJQUExQjtJQUE2QixDQUFDO0lBQUQsb0JBQUM7QUFBRCxDQUE3QixBQUE4QixJQUFBO0FBQWpCLGFBQWE7SUF4QnpCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLG1CQUFXO1lBQ1gsOEJBQWdCO1lBQ2hCLHlCQUFjO1NBQ2pCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsOEJBQWdCO1lBQ2hCLHlDQUF1QjtZQUN2QiwyQ0FBd0I7U0FDM0I7UUFDRCxZQUFZLEVBQUU7WUFDVix5Q0FBdUI7WUFDdkIsMkNBQXdCO1NBQzNCO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsK0JBQWM7U0FDakI7UUFDRCxlQUFlLEVBQUU7WUFDYix5Q0FBdUI7WUFDdkIsMkNBQXdCO1NBQzNCO0tBRUosQ0FBQztHQUNXLGFBQWEsQ0FBSTtBQUFqQixzQ0FBYSIsImZpbGUiOiJhcHAvdmlldy1sYXllci9jb21tb24tdmlld3MvZGlhbG9nLWNvbnRhaW5lci9kaWFsb2cubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlhbG9nc1NlcnZpY2UgfSBmcm9tICcuL2RpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGlhbG9nQ29udGFpbmVyQ29tcG9uZW50IH0gIGZyb20gJy4vZGlhbG9nLmNvbnRhaW5lcic7XG5pbXBvcnQgeyBMb2dpbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4uL2xvZ2luLWNvbnRhaW5lci9sb2dpbi5jb250YWluZXInO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgRmxleExheW91dE1vZHVsZSxcbiAgICAgICAgTWF0ZXJpYWxNb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgRmxleExheW91dE1vZHVsZSxcbiAgICAgICAgTG9naW5Db250YWluZXJDb21wb25lbnQsXG4gICAgICAgIERpYWxvZ0NvbnRhaW5lckNvbXBvbmVudFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIExvZ2luQ29udGFpbmVyQ29tcG9uZW50LFxuICAgICAgICBEaWFsb2dDb250YWluZXJDb21wb25lbnQsXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgRGlhbG9nc1NlcnZpY2VcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW1xuICAgICAgICBMb2dpbkNvbnRhaW5lckNvbXBvbmVudCxcbiAgICAgICAgRGlhbG9nQ29udGFpbmVyQ29tcG9uZW50XG4gICAgXVxuXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ3NNb2R1bGUgeyB9XG4iXX0=
