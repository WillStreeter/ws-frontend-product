"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var router_1 = require("@angular/router");
var notfound_page_routing_module_1 = require("./notfound.page.routing.module");
var notfound_page_component_1 = require("./notfound.page.component");
var NotfoundPageModule = (function () {
    function NotfoundPageModule() {
    }
    return NotfoundPageModule;
}());
NotfoundPageModule = __decorate([
    core_1.NgModule({
        imports: [material_1.MaterialModule,
            notfound_page_routing_module_1.NotfoundPageRoutingModule,
            router_1.RouterModule],
        declarations: [notfound_page_component_1.NotfoundPageComponent],
        exports: [notfound_page_component_1.NotfoundPageComponent]
    })
], NotfoundPageModule);
exports.NotfoundPageModule = NotfoundPageModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL21vZHVsZXMtYnktcm91dGUvbm90Zm91bmQvbm90Zm91bmQucGFnZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsOENBQW1EO0FBQ25ELDBDQUErQztBQUMvQywrRUFBMkU7QUFDM0UscUVBQWtFO0FBV2xFLElBQWEsa0JBQWtCO0lBQS9CO0lBQWtDLENBQUM7SUFBRCx5QkFBQztBQUFELENBQWxDLEFBQW1DLElBQUE7QUFBdEIsa0JBQWtCO0lBUjlCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRSxDQUFFLHlCQUFjO1lBQ2Qsd0RBQXlCO1lBQ3pCLHFCQUFZLENBQUM7UUFDeEIsWUFBWSxFQUFFLENBQUMsK0NBQXFCLENBQUM7UUFDckMsT0FBTyxFQUFFLENBQUMsK0NBQXFCLENBQUM7S0FDbkMsQ0FBQztHQUVXLGtCQUFrQixDQUFJO0FBQXRCLGdEQUFrQiIsImZpbGUiOiJhcHAvdmlldy1sYXllci9tb2R1bGVzLWJ5LXJvdXRlL25vdGZvdW5kL25vdGZvdW5kLnBhZ2UubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5vdGZvdW5kUGFnZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL25vdGZvdW5kLnBhZ2Uucm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgTm90Zm91bmRQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9ub3Rmb3VuZC5wYWdlLmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbIE1hdGVyaWFsTW9kdWxlLFxuICAgICAgICAgICAgICAgTm90Zm91bmRQYWdlUm91dGluZ01vZHVsZSxcbiAgICAgICAgICAgICAgIFJvdXRlck1vZHVsZV0sXG4gICAgZGVjbGFyYXRpb25zOiBbTm90Zm91bmRQYWdlQ29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbTm90Zm91bmRQYWdlQ29tcG9uZW50XVxufSlcblxuZXhwb3J0IGNsYXNzIE5vdGZvdW5kUGFnZU1vZHVsZSB7IH1cbiJdfQ==
