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
var surprise_component_1 = require("./surprise.component");
var surprise_routing_module_1 = require("./surprise.routing.module");
var SurpriseModule = (function () {
    function SurpriseModule() {
    }
    return SurpriseModule;
}());
SurpriseModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule,
            surprise_routing_module_1.SurpriseRoutingModule],
        declarations: [surprise_component_1.SurpriseComponent],
        exports: [surprise_component_1.SurpriseComponent]
    })
], SurpriseModule);
exports.SurpriseModule = SurpriseModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL21vZHVsZXMtYnktcm91dGUvc3VycHJpc2Uvc3VycHJpc2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0Esc0NBQXlDO0FBQ3pDLDBDQUErQztBQUMvQywyREFBeUQ7QUFDekQscUVBQWtFO0FBUWxFLElBQWEsY0FBYztJQUEzQjtJQUE4QixDQUFDO0lBQUQscUJBQUM7QUFBRCxDQUE5QixBQUErQixJQUFBO0FBQWxCLGNBQWM7SUFOMUIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFDLENBQUkscUJBQVk7WUFDZCwrQ0FBcUIsQ0FBRTtRQUNqQyxZQUFZLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztRQUNqQyxPQUFPLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztLQUMvQixDQUFDO0dBQ1csY0FBYyxDQUFJO0FBQWxCLHdDQUFjIiwiZmlsZSI6ImFwcC92aWV3LWxheWVyL21vZHVsZXMtYnktcm91dGUvc3VycHJpc2Uvc3VycHJpc2UubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN1cnByaXNlQ29tcG9uZW50IH0gZnJvbSAnLi9zdXJwcmlzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3VycHJpc2VSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9zdXJwcmlzZS5yb3V0aW5nLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czpbICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICAgICAgICBTdXJwcmlzZVJvdXRpbmdNb2R1bGUgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtTdXJwcmlzZUNvbXBvbmVudF0sXG4gICAgZXhwb3J0czogW1N1cnByaXNlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTdXJwcmlzZU1vZHVsZSB7IH1cbiJdfQ==
