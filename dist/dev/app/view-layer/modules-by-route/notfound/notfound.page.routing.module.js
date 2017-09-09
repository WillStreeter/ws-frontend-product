"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var notfound_page_component_1 = require("./notfound.page.component");
var dialogstate_guard_1 = require("../../../data-layer/ngrx-data/guards/dialogstate.guard");
var routes = [
    { path: '**',
        component: notfound_page_component_1.NotfoundPageComponent,
        canActivate: [dialogstate_guard_1.DialogStateGuard]
    }
];
var NotfoundPageRoutingModule = (function () {
    function NotfoundPageRoutingModule() {
    }
    return NotfoundPageRoutingModule;
}());
NotfoundPageRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], NotfoundPageRoutingModule);
exports.NotfoundPageRoutingModule = NotfoundPageRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL21vZHVsZXMtYnktcm91dGUvbm90Zm91bmQvbm90Zm91bmQucGFnZS5yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QywwQ0FBdUQ7QUFDdkQscUVBQWtFO0FBQ2xFLDRGQUEwRjtBQUUxRixJQUFNLE1BQU0sR0FBVztJQUNyQixFQUFHLElBQUksRUFBRSxJQUFJO1FBQ1YsU0FBUyxFQUFFLCtDQUFxQjtRQUNoQyxXQUFXLEVBQUUsQ0FBRSxvQ0FBZ0IsQ0FBRTtLQUNuQztDQUNGLENBQUM7QUFLRixJQUFhLHlCQUF5QjtJQUF0QztJQUF5QyxDQUFDO0lBQUQsZ0NBQUM7QUFBRCxDQUF6QyxBQUEwQyxJQUFBO0FBQTdCLHlCQUF5QjtJQUpyQyxlQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBSSxxQkFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBRTtRQUM1QyxPQUFPLEVBQUUsQ0FBQyxxQkFBWSxDQUFDO0tBQ3hCLENBQUM7R0FDVyx5QkFBeUIsQ0FBSTtBQUE3Qiw4REFBeUIiLCJmaWxlIjoiYXBwL3ZpZXctbGF5ZXIvbW9kdWxlcy1ieS1yb3V0ZS9ub3Rmb3VuZC9ub3Rmb3VuZC5wYWdlLnJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5vdGZvdW5kUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vbm90Zm91bmQucGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlhbG9nU3RhdGVHdWFyZCB9IGZyb20gJy4uLy4uLy4uL2RhdGEtbGF5ZXIvbmdyeC1kYXRhL2d1YXJkcy9kaWFsb2dzdGF0ZS5ndWFyZCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7ICBwYXRoOiAnKionLFxuICAgICBjb21wb25lbnQ6IE5vdGZvdW5kUGFnZUNvbXBvbmVudCxcbiAgICAgY2FuQWN0aXZhdGU6IFsgRGlhbG9nU3RhdGVHdWFyZCBdXG4gIH1cbl07XG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcykgXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTm90Zm91bmRQYWdlUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==
