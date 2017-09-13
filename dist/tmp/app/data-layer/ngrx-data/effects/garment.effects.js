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
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import * as errorActions from '../actions/error.actions';
import * as garmentActions from '../actions/garment.actions';
import { GarmentService } from '../../api-services/garment.service';
import { SortingServices } from "../../sorting-services/sorting.service";
let GarmentEffects = class GarmentEffects {
    constructor(store, garmentServices, sortingServices, actions$) {
        this.store = store;
        this.garmentServices = garmentServices;
        this.sortingServices = sortingServices;
        this.actions$ = actions$;
        this.startUpApp = Observable.of(new garmentActions.GetGarmentCollection());
        this.fetchGarmentCollection = this.actions$
            .ofType(garmentActions.GarmentTypes.FETCH_GARMENT_COLLECTION_ATTEMPT)
            .map(action => action.payload)
            .switchMap(() => this.garmentServices.getProducts(errorActions.ErrorTypes.REPORT_ERROR, garmentActions.GarmentTypes.FETCH_GARMENT_COLLECTION_FAILURE, garmentActions.GarmentTypes.FETCH_GARMENT_COLLECTION_SUCCESS));
        this.garmentCollectionFetched = this.actions$
            .ofType(garmentActions.GarmentTypes.FETCH_GARMENT_COLLECTION_SUCCESS)
            .map(action => action.payload)
            .switchMap((payload) => (this.sortingServices.sortGarmentCollection()))
            .map((payload) => {
            localStorage.setItem('products', JSON.stringify(payload.products));
            return new garmentActions.UpdateSortedCollection(payload);
        });
        this.sortCollectionBySearchTerm = this.actions$
            .ofType(garmentActions.GarmentTypes.SEARCH_COLLECTION_BY_TERM)
            .map(action => action.payload)
            .switchMap((action, garmentCollection) => this.sortingServices.searchGarmentCollection(action))
            .map(payload => new garmentActions.UpdateSortedCollection(payload));
        this.upddateGarementInCollection = this.actions$
            .ofType(garmentActions.GarmentTypes.UPDATE_GARMENT_IN_COLLECTION_ATTEMPT)
            .map(action => action.payload)
            .switchMap(payload => this.garmentServices.updateProduct(payload, errorActions.ErrorTypes.REPORT_ERROR, garmentActions.GarmentTypes.UPDATE_GARMENT_IN_COLLECTION_FAILURE, garmentActions.GarmentTypes.UPDATE_GARMENT_IN_COLLECTION_SUCCESS));
        this.garmentUpdatedInCollection = this.actions$
            .ofType(garmentActions.GarmentTypes.UPDATE_GARMENT_IN_COLLECTION_SUCCESS)
            .map(action => action.payload)
            .switchMap((garmentCollection) => this.sortingServices.sortGarmentCollection())
            .map(payload => new garmentActions.UpdateSortedCollection(payload));
        this.addGarmentToCollection = this.actions$
            .ofType(garmentActions.GarmentTypes.ADD_GARMENT_TO_COLLECTION_ATTEMPT)
            .map(action => action.payload)
            .switchMap(payload => this.garmentServices.addNewProduct(payload, errorActions.ErrorTypes.REPORT_ERROR, garmentActions.GarmentTypes.ADD_GARMENT_TO_COLLECTION_FAILURE, garmentActions.GarmentTypes.ADD_GARMENT_TO_COLLECTION_SUCCESS));
        this.garmentAddedToCollection = this.actions$
            .ofType(garmentActions.GarmentTypes.ADD_GARMENT_TO_COLLECTION_SUCCESS)
            .map(action => action.payload)
            .switchMap((garmentCollection) => this.sortingServices.sortGarmentCollection())
            .map(payload => new garmentActions.UpdateSortedCollection(payload));
    }
};
__decorate([
    Effect(),
    __metadata("design:type", Object)
], GarmentEffects.prototype, "startUpApp", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], GarmentEffects.prototype, "fetchGarmentCollection", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], GarmentEffects.prototype, "garmentCollectionFetched", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], GarmentEffects.prototype, "sortCollectionBySearchTerm", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], GarmentEffects.prototype, "upddateGarementInCollection", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], GarmentEffects.prototype, "garmentUpdatedInCollection", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], GarmentEffects.prototype, "addGarmentToCollection", void 0);
__decorate([
    Effect(),
    __metadata("design:type", Object)
], GarmentEffects.prototype, "garmentAddedToCollection", void 0);
GarmentEffects = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Store,
        GarmentService,
        SortingServices,
        Actions])
], GarmentEffects);
export { GarmentEffects };
