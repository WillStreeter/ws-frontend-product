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
GarmentEffects = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store,
        garment_service_1.GarmentService,
        sorting_service_1.SortingServices,
        effects_1.Actions])
], GarmentEffects);
exports.GarmentEffects = GarmentEffects;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhLWxheWVyL25ncngtZGF0YS9lZmZlY3RzL2dhcm1lbnQuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQUM3QyxpQ0FBK0I7QUFDL0Isb0NBQWtDO0FBQ2xDLDRDQUEwQztBQUMxQyx1Q0FBcUM7QUFDckMsa0NBQWdDO0FBQ2hDLHNDQUFzRDtBQUV0RCxxQ0FBNEM7QUFDNUMseUNBQWlEO0FBQ2pELHVEQUF5RDtBQUV6RCwyREFBNkQ7QUFDN0Qsc0VBQW9FO0FBR3BFLDBFQUF1RTtBQUt2RSxJQUFhLGNBQWM7SUF3RTFCLHdCQUFxQixLQUEyQixFQUMzQixlQUErQixFQUMvQixlQUFnQyxFQUNoQyxRQUFpQjtRQUh0QyxpQkFJa0I7UUFKRyxVQUFLLEdBQUwsS0FBSyxDQUFzQjtRQUMzQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0Isb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGFBQVEsR0FBUixRQUFRLENBQVM7UUF2RXhCLGVBQVUsR0FBSSx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7UUFHeEUsMkJBQXNCLEdBQUcsSUFBSSxDQUFDLFFBQVE7YUFDM0MsTUFBTSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsZ0NBQWdDLENBQUM7YUFDcEUsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUM7YUFDN0IsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FDN0MsWUFBWSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQ3BDLGNBQWMsQ0FBQyxZQUFZLENBQUMsZ0NBQWdDLEVBQzVELGNBQWMsQ0FBQyxZQUFZLENBQUMsZ0NBQWdDLENBQUMsRUFIaEQsQ0FHZ0QsQ0FBQyxDQUFDO1FBRzVELDZCQUF3QixHQUFHLElBQUksQ0FBQyxR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N0MsTUFBTSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsaUNBQWlDLENBQUM7YUFDckUsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUM7YUFDN0IsU0FBUyxDQUFFLFVBQUMsaUJBQWlCLElBQUcsT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixFQUFFLEVBQTVDLENBQTRDLENBQUM7YUFDN0UsR0FBRyxDQUFDLFVBQUEsT0FBTyxJQUFLLE9BQUEsSUFBSSxjQUFjLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLEVBQWxELENBQWtELENBQUMsQ0FBQztJQVczRCxDQUFDO0lBQ25CLHFCQUFDO0FBQUQsQ0E3RUEsQUE2RUMsSUFBQTtBQXpFYztJQUFWLGdCQUFNLEVBQUU7O2tEQUF5RTtBQUd4RTtJQUFULGdCQUFNLEVBQUU7OzhEQU04RDtBQUc1RDtJQUFWLGdCQUFNLEVBQUU7O2dFQU9KO0FBRU07SUFBVixnQkFBTSxFQUFFOztrRUFJZ0U7QUFHL0Q7SUFBVCxnQkFBTSxFQUFFOzttRUFNa0U7QUFJakU7SUFBVCxnQkFBTSxFQUFFOztrRUFJZ0U7QUFLL0Q7SUFBVCxnQkFBTSxFQUFFOzs4REFNK0Q7QUFJOUQ7SUFBVCxnQkFBTSxFQUFFOztnRUFJZ0U7QUFqRWhFLGNBQWM7SUFEMUIsaUJBQVUsRUFBRTtxQ0F5RWUsYUFBSztRQUNNLGdDQUFjO1FBQ2QsaUNBQWU7UUFDdEIsaUJBQU87R0EzRTFCLGNBQWMsQ0E2RTFCO0FBN0VZLHdDQUFjIiwiZmlsZSI6ImFwcC9kYXRhLWxheWVyL25ncngtZGF0YS9lZmZlY3RzL2dhcm1lbnQuZWZmZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci93aXRoTGF0ZXN0RnJvbSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvb2YnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3RvcmUsIEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCAgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCAqIGFzIGVycm9yQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2Vycm9yLmFjdGlvbnMnO1xuaW1wb3J0ICogYXMgcG9ydGFsQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3BvcnRhbC5hY3Rpb25zJztcbmltcG9ydCAqIGFzIGdhcm1lbnRBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvZ2FybWVudC5hY3Rpb25zJztcbmltcG9ydCB7IEdhcm1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXBpLXNlcnZpY2VzL2dhcm1lbnQuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBmcm9tUm9vdCBmcm9tICcuLi9yZWR1Y2Vycy9pbmRleCc7XG5pbXBvcnQge0dhcm1lbnRTb3J0TW9kZWwsIEdhcm1lbnRNb2RlbH0gZnJvbSAnLi4vLi4vLi4vYnVzaW5lc3MtbGF5ZXIvbW9kZWxzJztcbmltcG9ydCB7U29ydGluZ1NlcnZpY2VzfSBmcm9tICcuLi8uLi9zb3J0aW5nLXNlcnZpY2VzL3NvcnRpbmcuc2VydmljZSc7XG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2FybWVudEVmZmVjdHMge1xuXG5cblxuICAgIEBFZmZlY3QoKSAgc3RhcnRVcEFwcCAgPSBPYnNlcnZhYmxlLm9mKG5ldyBnYXJtZW50QWN0aW9ucy5HZXRHYXJtZW50Q29sbGVjdGlvbigpKTtcblxuXG4gICAgQEVmZmVjdCgpIGZldGNoR2FybWVudENvbGxlY3Rpb24gPSB0aGlzLmFjdGlvbnMkXG4gICAgICAgIC5vZlR5cGUoZ2FybWVudEFjdGlvbnMuR2FybWVudFR5cGVzLkZFVENIX0dBUk1FTlRfQ09MTEVDVElPTl9BVFRFTVBUKVxuICAgICAgICAubWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgLnN3aXRjaE1hcCgoKSA9PiB0aGlzLmdhcm1lbnRTZXJ2aWNlcy5nZXRQcm9kdWN0cyhcbiAgICAgICAgICAgIGVycm9yQWN0aW9ucy5FcnJvclR5cGVzLlJFUE9SVF9FUlJPUixcbiAgICAgICAgICAgIGdhcm1lbnRBY3Rpb25zLkdhcm1lbnRUeXBlcy5GRVRDSF9HQVJNRU5UX0NPTExFQ1RJT05fRkFJTFVSRSxcbiAgICAgICAgICAgIGdhcm1lbnRBY3Rpb25zLkdhcm1lbnRUeXBlcy5GRVRDSF9HQVJNRU5UX0NPTExFQ1RJT05fU1VDQ0VTUykpO1xuXG5cbiAgICBARWZmZWN0KCkgIGdhcm1lbnRDb2xsZWN0aW9uRmV0Y2hlZCA9IHRoaXMuYWN0aW9ucyRcbiAgICAgIC5vZlR5cGUoZ2FybWVudEFjdGlvbnMuR2FybWVudFR5cGVzLkZFVENIX0dBUk1FTlRfQ09MTEVDVElPTl9TVUNDRVNTKVxuICAgICAgLm1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpXG4gICAgICAuc3dpdGNoTWFwKCAocGF5bG9hZCk9PiggdGhpcy5zb3J0aW5nU2VydmljZXMuc29ydEdhcm1lbnRDb2xsZWN0aW9uKCkpKVxuICAgICAgLm1hcCgocGF5bG9hZCkgPT4gIHtcbiAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2R1Y3RzJywgSlNPTi5zdHJpbmdpZnkocGF5bG9hZC5wcm9kdWN0cykpO1xuICAgICAgICAgIHJldHVybiBuZXcgZ2FybWVudEFjdGlvbnMuVXBkYXRlU29ydGVkQ29sbGVjdGlvbihwYXlsb2FkKVxuICAgICAgfSk7XG5cbiAgICBARWZmZWN0KCkgIHNvcnRDb2xsZWN0aW9uQnlTZWFyY2hUZXJtID0gdGhpcy5hY3Rpb25zJFxuICAgICAgICAub2ZUeXBlKGdhcm1lbnRBY3Rpb25zLkdhcm1lbnRUeXBlcy5TRUFSQ0hfQ09MTEVDVElPTl9CWV9URVJNKVxuICAgICAgICAubWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgLnN3aXRjaE1hcCgoYWN0aW9uLCBnYXJtZW50Q29sbGVjdGlvbik9PnRoaXMuc29ydGluZ1NlcnZpY2VzLnNlYXJjaEdhcm1lbnRDb2xsZWN0aW9uKGFjdGlvbikpXG4gICAgICAgIC5tYXAocGF5bG9hZCA9PiAgbmV3IGdhcm1lbnRBY3Rpb25zLlVwZGF0ZVNvcnRlZENvbGxlY3Rpb24ocGF5bG9hZCkpO1xuXG5cbiAgICBARWZmZWN0KCkgdXBkZGF0ZUdhcmVtZW50SW5Db2xsZWN0aW9uID0gdGhpcy5hY3Rpb25zJFxuICAgICAgICAub2ZUeXBlKGdhcm1lbnRBY3Rpb25zLkdhcm1lbnRUeXBlcy5VUERBVEVfR0FSTUVOVF9JTl9DT0xMRUNUSU9OX0FUVEVNUFQpXG4gICAgICAgIC5tYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKVxuICAgICAgICAuc3dpdGNoTWFwKHBheWxvYWQgPT4gdGhpcy5nYXJtZW50U2VydmljZXMudXBkYXRlUHJvZHVjdCggcGF5bG9hZCxcbiAgICAgICAgICAgIGVycm9yQWN0aW9ucy5FcnJvclR5cGVzLlJFUE9SVF9FUlJPUixcbiAgICAgICAgICAgIGdhcm1lbnRBY3Rpb25zLkdhcm1lbnRUeXBlcy5VUERBVEVfR0FSTUVOVF9JTl9DT0xMRUNUSU9OX0ZBSUxVUkUsXG4gICAgICAgICAgICBnYXJtZW50QWN0aW9ucy5HYXJtZW50VHlwZXMuVVBEQVRFX0dBUk1FTlRfSU5fQ09MTEVDVElPTl9TVUNDRVNTKSk7XG5cblxuXG4gICAgQEVmZmVjdCgpIGdhcm1lbnRVcGRhdGVkSW5Db2xsZWN0aW9uID0gdGhpcy5hY3Rpb25zJFxuICAgICAgICAub2ZUeXBlKGdhcm1lbnRBY3Rpb25zLkdhcm1lbnRUeXBlcy5VUERBVEVfR0FSTUVOVF9JTl9DT0xMRUNUSU9OX1NVQ0NFU1MpXG4gICAgICAgIC5tYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKVxuICAgICAgICAuc3dpdGNoTWFwKCAoZ2FybWVudENvbGxlY3Rpb24pPT50aGlzLnNvcnRpbmdTZXJ2aWNlcy5zb3J0R2FybWVudENvbGxlY3Rpb24oKSlcbiAgICAgICAgLm1hcChwYXlsb2FkID0+ICBuZXcgZ2FybWVudEFjdGlvbnMuVXBkYXRlU29ydGVkQ29sbGVjdGlvbihwYXlsb2FkKSk7XG5cblxuXG5cbiAgICBARWZmZWN0KCkgYWRkR2FybWVudFRvQ29sbGVjdGlvbiA9IHRoaXMuYWN0aW9ucyRcbiAgICAgICAgLm9mVHlwZShnYXJtZW50QWN0aW9ucy5HYXJtZW50VHlwZXMuQUREX0dBUk1FTlRfVE9fQ09MTEVDVElPTl9BVFRFTVBUKVxuICAgICAgICAubWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgLnN3aXRjaE1hcChwYXlsb2FkID0+IHRoaXMuZ2FybWVudFNlcnZpY2VzLmFkZE5ld1Byb2R1Y3QoIHBheWxvYWQsXG4gICAgICAgICAgICBlcnJvckFjdGlvbnMuRXJyb3JUeXBlcy5SRVBPUlRfRVJST1IsXG4gICAgICAgICAgICBnYXJtZW50QWN0aW9ucy5HYXJtZW50VHlwZXMuQUREX0dBUk1FTlRfVE9fQ09MTEVDVElPTl9GQUlMVVJFLFxuICAgICAgICAgICAgZ2FybWVudEFjdGlvbnMuR2FybWVudFR5cGVzLkFERF9HQVJNRU5UX1RPX0NPTExFQ1RJT05fU1VDQ0VTUykpO1xuXG5cblxuICAgIEBFZmZlY3QoKSBnYXJtZW50QWRkZWRUb0NvbGxlY3Rpb24gPSB0aGlzLmFjdGlvbnMkXG4gICAgICAgIC5vZlR5cGUoZ2FybWVudEFjdGlvbnMuR2FybWVudFR5cGVzLkFERF9HQVJNRU5UX1RPX0NPTExFQ1RJT05fU1VDQ0VTUylcbiAgICAgICAgLm1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpXG4gICAgICAgIC5zd2l0Y2hNYXAoIChnYXJtZW50Q29sbGVjdGlvbik9PnRoaXMuc29ydGluZ1NlcnZpY2VzLnNvcnRHYXJtZW50Q29sbGVjdGlvbigpKVxuICAgICAgICAubWFwKHBheWxvYWQgPT4gIG5ldyBnYXJtZW50QWN0aW9ucy5VcGRhdGVTb3J0ZWRDb2xsZWN0aW9uKHBheWxvYWQpKTtcblxuXG5cblxuXG5cbiBjb25zdHJ1Y3RvciggcHJpdmF0ZSBzdG9yZTpTdG9yZTxmcm9tUm9vdC5TdGF0ZT4sXG4gICAgICAgICAgICAgIHByaXZhdGUgZ2FybWVudFNlcnZpY2VzOiBHYXJtZW50U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzb3J0aW5nU2VydmljZXM6IFNvcnRpbmdTZXJ2aWNlcyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uc1xuICAgICAgICAgICAgICkgeyAgfVxufVxuIl19
