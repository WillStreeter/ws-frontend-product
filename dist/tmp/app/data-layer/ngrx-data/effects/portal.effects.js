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
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/operator/mapTo");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/withLatestFrom");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/switchMapTo");
require("rxjs/add/operator/toArray");
require("rxjs/add/observable/of");
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var Observable_1 = require("rxjs/Observable");
var portalActions = require("../actions/portal.actions");
var garmentActions = require("../actions/garment.actions");
var sorting_service_1 = require("../../sorting-services/sorting.service");
var PortalEffects = (function () {
    function PortalEffects(store, actions$, sortingServices) {
        var _this = this;
        this.store = store;
        this.actions$ = actions$;
        this.sortingServices = sortingServices;
        this.portalActionUpdate = this.actions$
            .ofType(portalActions.PortalTypes.UPDATE_SORT_STATE)
            .map(function (action) { return action.payload; })
            .switchMap(function () { return _this.sortingServices.sortGarmentCollection(); })
            .map(function (payload) { return new garmentActions.UpdateSortedCollection(payload); });
        this.updateAddRowRevealState = this.actions$
            .ofType(garmentActions.GarmentTypes.ADD_GARMENT_TO_COLLECTION_SUCCESS)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) {
            return Observable_1.Observable.of(new portalActions.UpdateAddRowGarment(false));
        });
        this.updateAfterPageChange = this.actions$
            .ofType(portalActions.PortalTypes.SET_CURRENT_PAGE_NUMBER)
            .map(function (action) { return action.payload; })
            .switchMap(function () { return _this.sortingServices.getCollectionSubset(); })
            .map(function (payload) { return new garmentActions.UpdateSortedCollection(payload); });
        this.updateAfterViewableUpdate = this.actions$
            .ofType(portalActions.PortalTypes.UPDATE_VIEWABLE_PER_PAGE_COUNT)
            .map(function (action) { return action.payload; })
            .switchMap(function () { return _this.sortingServices.getCollectionSubset(); })
            .map(function (payload) { return new garmentActions.UpdateSortedCollection(payload); });
    }
    return PortalEffects;
}());
PortalEffects.decorators = [
    { type: core_1.Injectable },
];
PortalEffects.ctorParameters = function () { return [
    { type: store_1.Store, },
    { type: effects_1.Actions, },
    { type: sorting_service_1.SortingServices, },
]; };
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Object)
], PortalEffects.prototype, "portalActionUpdate", void 0);
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Object)
], PortalEffects.prototype, "updateAddRowRevealState", void 0);
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Object)
], PortalEffects.prototype, "updateAfterPageChange", void 0);
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Object)
], PortalEffects.prototype, "updateAfterViewableUpdate", void 0);
exports.PortalEffects = PortalEffects;
//# sourceMappingURL=portal.effects.js.map