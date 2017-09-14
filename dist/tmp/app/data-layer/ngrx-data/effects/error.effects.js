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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
require("rxjs/add/observable/of");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var effects_1 = require("@ngrx/effects");
var errorActions = require("../actions/error.actions");
var ErrorEffects = (function () {
    function ErrorEffects(actions$, router) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.catchAllRemoteError$ = this.actions$
            .ofType(errorActions.ErrorTypes.REPORT_ERROR)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) {
            return Observable_1.Observable.of(_this.router.navigateByUrl('/error'));
        });
    }
    return ErrorEffects;
}());
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Object)
], ErrorEffects.prototype, "catchAllRemoteError$", void 0);
ErrorEffects = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [effects_1.Actions,
        router_1.Router])
], ErrorEffects);
exports.ErrorEffects = ErrorEffects;
