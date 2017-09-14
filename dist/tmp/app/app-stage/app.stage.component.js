"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppStageComponent = (function () {
    function AppStageComponent() {
    }
    return AppStageComponent;
}());
AppStageComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-app-stage',
        styles: [":host{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-grow:3;-ms-flex-positive:3;flex-grow:3}.mast-head-nav{position:fixed;top:0;right:0;left:0;height:64px;z-index:90} /*# sourceMappingURL=/app/app-stage/app.stage.component.css.map */"],
        template: "<router-outlet></router-outlet>",
    }),
    __metadata("design:paramtypes", [])
], AppStageComponent);
exports.AppStageComponent = AppStageComponent;
