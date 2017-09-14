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
