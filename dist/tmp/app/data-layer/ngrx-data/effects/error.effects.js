var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import * as errorActions from '../actions/error.actions';
let ErrorEffects = class ErrorEffects {
    constructor(actions$, router) {
        this.actions$ = actions$;
        this.router = router;
        this.catchAllRemoteError$ = this.actions$
            .ofType(errorActions.ErrorTypes.REPORT_ERROR)
            .map(action => action.payload)
            .switchMap(payload => {
            return Observable.of(this.router.navigateByUrl('/error'));
        });
    }
};
__decorate([
    Effect(),
    __metadata("design:type", Object)
], ErrorEffects.prototype, "catchAllRemoteError$", void 0);
ErrorEffects = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Actions,
        Router])
], ErrorEffects);
export { ErrorEffects };
