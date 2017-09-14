"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-home',
        template: " <div fxFlexlayout=\"row\" fxFlexFill  fxLayoutAlign=\"center center\">   <div class=\"grid-layout\" fxLayout=\"column\">       <grid-masthead></grid-masthead>       <search-ahead></search-ahead>        <garment-grid></garment-grid>       <paginator-toolbar></paginator-toolbar>    </div> </div>",
        styles: [":host{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.grid-layout{width:850px;min-height:900px;border:1px solid #dbdbdb;padding:20px 40px;color:#b0b0b0} /*# sourceMappingURL=/app/view-layer/modules-by-route/home/home.component.css.map */"],
    })
], HomeComponent);
exports.HomeComponent = HomeComponent;
