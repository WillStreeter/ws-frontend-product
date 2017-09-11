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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9wYWdpbmF0b3ItdG9vbGJhci9wYWdpbmF0b3IudG9vbGJhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQSxzQ0FBeUM7QUFDekMsd0NBQWtFO0FBQ2xFLDBDQUErQztBQUMvQyxvREFBd0Q7QUFDeEQsNkVBQTBFO0FBQzFFLDhDQUFtRDtBQWFuRCxJQUFhLHNCQUFzQjtJQUFuQztJQUFzQyxDQUFDO0lBQUQsNkJBQUM7QUFBRCxDQUF0QyxBQUF1QyxJQUFBO0FBQTFCLHNCQUFzQjtJQVZsQyxlQUFRLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBRyxtQkFBVztZQUNuQiwyQkFBbUI7WUFDWixxQkFBWTtZQUNaLHlCQUFjO1lBQ2QsOEJBQWdCLENBQUU7UUFDN0IsWUFBWSxFQUFFLENBQUUsdURBQXlCLENBQUU7UUFDM0MsT0FBTyxFQUFFLENBQUMsdURBQXlCLENBQUM7S0FDdkMsQ0FBQztHQUVXLHNCQUFzQixDQUFJO0FBQTFCLHdEQUFzQiIsImZpbGUiOiJhcHAvdmlldy1sYXllci9jb21tb24tdmlld3MvcGFnaW5hdG9yLXRvb2xiYXIvcGFnaW5hdG9yLnRvb2xiYXIubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHdpbGxzdHJlZXRlciBvbiA5LzEwLzE3LlxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGbGV4TGF5b3V0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZmxleC1sYXlvdXQnO1xuaW1wb3J0IHsgUGFnaW5hdG9yVG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vcGFnaW5hdG9yLnRvb2xiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogWyAgRm9ybXNNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICAgICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgICAgICAgICBNYXRlcmlhbE1vZHVsZSxcbiAgICAgICAgICAgICAgIEZsZXhMYXlvdXRNb2R1bGUgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFsgUGFnaW5hdG9yVG9vbGJhckNvbXBvbmVudCBdLFxuICAgIGV4cG9ydHM6IFtQYWdpbmF0b3JUb29sYmFyQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIFBhZ2luYXRvclRvb2xiYXJNb2R1bGUgeyB9XG4iXX0=
