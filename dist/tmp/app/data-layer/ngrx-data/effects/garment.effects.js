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
require("rxjs/add/operator/filter");
require("rxjs/add/operator/withLatestFrom");
require("rxjs/add/operator/switchMap");
require("rxjs/add/observable/of");
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var errorActions = require("../actions/error.actions");
var garmentActions = require("../actions/garment.actions");
var garment_service_1 = require("../../api-services/garment.service");
var sorting_service_1 = require("../../sorting-services/sorting.service");
var GarmentEffects = (function () {
    function GarmentEffects(store, garmentServices, sortingServices, actions$) {
        var _this = this;
        this.store = store;
        this.garmentServices = garmentServices;
        this.sortingServices = sortingServices;
        this.actions$ = actions$;
        this.startUpApp = Observable_1.Observable.of(new garmentActions.GetGarmentCollection());
        this.fetchGarmentCollection = this.actions$
            .ofType(garmentActions.GarmentTypes.FETCH_GARMENT_COLLECTION_ATTEMPT)
            .map(function (action) { return action.payload; })
            .switchMap(function () { return _this.garmentServices.getProducts(errorActions.ErrorTypes.REPORT_ERROR, garmentActions.GarmentTypes.FETCH_GARMENT_COLLECTION_FAILURE, garmentActions.GarmentTypes.FETCH_GARMENT_COLLECTION_SUCCESS); });
        this.garmentCollectionFetched = this.actions$
            .ofType(garmentActions.GarmentTypes.FETCH_GARMENT_COLLECTION_SUCCESS)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return (_this.sortingServices.sortGarmentCollection()); })
            .map(function (payload) {
            localStorage.setItem('products', JSON.stringify(payload.products));
            return new garmentActions.UpdateSortedCollection(payload);
        });
        this.sortCollectionBySearchTerm = this.actions$
            .ofType(garmentActions.GarmentTypes.SEARCH_COLLECTION_BY_TERM)
            .map(function (action) { return action.payload; })
            .switchMap(function (action, garmentCollection) { return _this.sortingServices.searchGarmentCollection(action); })
            .map(function (payload) { return new garmentActions.UpdateSortedCollection(payload); });
        this.upddateGarementInCollection = this.actions$
            .ofType(garmentActions.GarmentTypes.UPDATE_GARMENT_IN_COLLECTION_ATTEMPT)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.garmentServices.updateProduct(payload, errorActions.ErrorTypes.REPORT_ERROR, garmentActions.GarmentTypes.UPDATE_GARMENT_IN_COLLECTION_FAILURE, garmentActions.GarmentTypes.UPDATE_GARMENT_IN_COLLECTION_SUCCESS); });
        this.garmentUpdatedInCollection = this.actions$
            .ofType(garmentActions.GarmentTypes.UPDATE_GARMENT_IN_COLLECTION_SUCCESS)
            .map(function (action) { return action.payload; })
            .switchMap(function (garmentCollection) { return _this.sortingServices.sortGarmentCollection(); })
            .map(function (payload) { return new garmentActions.UpdateSortedCollection(payload); });
        this.addGarmentToCollection = this.actions$
            .ofType(garmentActions.GarmentTypes.ADD_GARMENT_TO_COLLECTION_ATTEMPT)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.garmentServices.addNewProduct(payload, errorActions.ErrorTypes.REPORT_ERROR, garmentActions.GarmentTypes.ADD_GARMENT_TO_COLLECTION_FAILURE, garmentActions.GarmentTypes.ADD_GARMENT_TO_COLLECTION_SUCCESS); });
        this.garmentAddedToCollection = this.actions$
            .ofType(garmentActions.GarmentTypes.ADD_GARMENT_TO_COLLECTION_SUCCESS)
            .map(function (action) { return action.payload; })
            .switchMap(function (garmentCollection) { return _this.sortingServices.sortGarmentCollection(); })
            .map(function (payload) { return new garmentActions.UpdateSortedCollection(payload); });
    }
    return GarmentEffects;
}());
GarmentEffects.decorators = [
    { type: core_1.Injectable },
];
GarmentEffects.ctorParameters = function () { return [
    { type: store_1.Store, },
    { type: garment_service_1.GarmentService, },
    { type: sorting_service_1.SortingServices, },
    { type: effects_1.Actions, },
]; };
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Object)
], GarmentEffects.prototype, "startUpApp", void 0);
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Object)
], GarmentEffects.prototype, "fetchGarmentCollection", void 0);
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Object)
], GarmentEffects.prototype, "garmentCollectionFetched", void 0);
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Object)
], GarmentEffects.prototype, "sortCollectionBySearchTerm", void 0);
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Object)
], GarmentEffects.prototype, "upddateGarementInCollection", void 0);
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Object)
], GarmentEffects.prototype, "garmentUpdatedInCollection", void 0);
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Object)
], GarmentEffects.prototype, "addGarmentToCollection", void 0);
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Object)
], GarmentEffects.prototype, "garmentAddedToCollection", void 0);
exports.GarmentEffects = GarmentEffects;
//# sourceMappingURL=garment.effects.js.map