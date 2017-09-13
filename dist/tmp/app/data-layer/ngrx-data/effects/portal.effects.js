var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import * as portalActions from '../actions/portal.actions';
import * as garmentActions from '../actions/garment.actions';
import { SortingServices } from "../../sorting-services/sorting.service";
let PortalEffects = class PortalEffects {
    constructor(store, actions$, sortingServices) {
        this.store = store;
        this.actions$ = actions$;
        this.sortingServices = sortingServices;
        this.portalActionUpdate = this.actions$
            .ofType(portalActions.PortalTypes.UPDATE_SORT_STATE)
            .map((action) => action.payload)
            .switchMap(() => this.sortingServices.sortGarmentCollection())
            .map((payload) => new garmentActions.UpdateSortedCollection(payload));
        this.updateAddRowRevealState = this.actions$
            .ofType(garmentActions.GarmentTypes.ADD_GARMENT_TO_COLLECTION_SUCCESS)
            .map(action => action.payload)
            .switchMap(payload => {
            return Observable.of(new portalActions.UpdateAddRowGarment(false));
        });
        this.updateAfterPageChange = this.actions$
            .ofType(portalActions.PortalTypes.SET_CURRENT_PAGE_NUMBER)
            .map((action) => action.payload)
            .switchMap(() => this.sortingServices.getCollectionSubset())
            .map((payload) => new garmentActions.UpdateSortedCollection(payload));
        this.updateAfterViewableUpdate = this.actions$
            .ofType(portalActions.PortalTypes.UPDATE_VIEWABLE_PER_PAGE_COUNT)
            .map((action) => action.payload)
            .switchMap(() => this.sortingServices.getCollectionSubset())
            .map((payload) => new garmentActions.UpdateSortedCollection(payload));
    }
};
__decorate([
    Effect(),
    __metadata("design:type", Object)
], PortalEffects.prototype, "portalActionUpdate", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], PortalEffects.prototype, "updateAddRowRevealState", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], PortalEffects.prototype, "updateAfterPageChange", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], PortalEffects.prototype, "updateAfterViewableUpdate", void 0);
PortalEffects = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Store,
        Actions,
        SortingServices])
], PortalEffects);
export { PortalEffects };
