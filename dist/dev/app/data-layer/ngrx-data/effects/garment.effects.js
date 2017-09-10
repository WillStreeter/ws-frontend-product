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
            .switchMap(function (payload) { return (_this.sortingServices.sortGarmentCollection(payload)); })
            .map(function (payload) { return new garmentActions.UpdateSortedCollection(payload); });
        this.upddateGarementInCollection = this.actions$
            .ofType(garmentActions.GarmentTypes.UPDATE_GARMENT_IN_COLLECTION_ATTEMPT)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.garmentServices.updateProduct(payload, errorActions.ErrorTypes.REPORT_ERROR, garmentActions.GarmentTypes.UPDATE_GARMENT_IN_COLLECTION_FAILURE, garmentActions.GarmentTypes.UPDATE_GARMENT_IN_COLLECTION_SUCCESS); });
        this.garmentUpdatedInCollection = this.actions$
            .ofType(garmentActions.GarmentTypes.UPDATE_GARMENT_IN_COLLECTION_SUCCESS)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return (_this.sortingServices.sortGarmentCollection(payload)); })
            .map(function (payload) { return new garmentActions.UpdateSortedCollection(payload); });
        this.addGarmentToCollection = this.actions$
            .ofType(garmentActions.GarmentTypes.ADD_GARMENT_TO_COLLECTION_ATTEMPT)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.garmentServices.addNewProduct(payload, errorActions.ErrorTypes.REPORT_ERROR, garmentActions.GarmentTypes.ADD_GARMENT_TO_COLLECTION_FAILURE, garmentActions.GarmentTypes.ADD_GARMENT_TO_COLLECTION_SUCCESS); });
        this.garmentAddedToCollection = this.actions$
            .ofType(garmentActions.GarmentTypes.ADD_GARMENT_TO_COLLECTION_SUCCESS)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return (_this.sortingServices.sortGarmentCollection(payload)); })
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhLWxheWVyL25ncngtZGF0YS9lZmZlY3RzL2dhcm1lbnQuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQUM3QyxpQ0FBK0I7QUFDL0Isb0NBQWtDO0FBQ2xDLDRDQUEwQztBQUMxQyx1Q0FBcUM7QUFDckMsa0NBQWdDO0FBQ2hDLHNDQUFzRDtBQUV0RCxxQ0FBNEM7QUFDNUMseUNBQWlEO0FBQ2pELHVEQUF5RDtBQUV6RCwyREFBNkQ7QUFDN0Qsc0VBQW9FO0FBR3BFLDBFQUF1RTtBQUt2RSxJQUFhLGNBQWM7SUFpRTFCLHdCQUFxQixLQUEyQixFQUMzQixlQUErQixFQUMvQixlQUFnQyxFQUNoQyxRQUFpQjtRQUh0QyxpQkFJa0I7UUFKRyxVQUFLLEdBQUwsS0FBSyxDQUFzQjtRQUMzQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0Isb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGFBQVEsR0FBUixRQUFRLENBQVM7UUFoRXhCLGVBQVUsR0FBSSx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7UUFHeEUsMkJBQXNCLEdBQUcsSUFBSSxDQUFDLFFBQVE7YUFDM0MsTUFBTSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsZ0NBQWdDLENBQUM7YUFDcEUsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUM7YUFDN0IsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FDN0MsWUFBWSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQ3BDLGNBQWMsQ0FBQyxZQUFZLENBQUMsZ0NBQWdDLEVBQzVELGNBQWMsQ0FBQyxZQUFZLENBQUMsZ0NBQWdDLENBQUMsRUFIaEQsQ0FHZ0QsQ0FBQyxDQUFDO1FBRzVELDZCQUF3QixHQUFHLElBQUksQ0FBQyxR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O0FBRzVEO0lBQVYsZ0JBQU0sRUFBRTs7Z0VBSWdFO0FBSy9EO0lBQVQsZ0JBQU0sRUFBRTs7bUVBTWtFO0FBSWpFO0lBQVQsZ0JBQU0sRUFBRTs7a0VBSWdFO0FBSy9EO0lBQVQsZ0JBQU0sRUFBRTs7OERBTStEO0FBSTlEO0lBQVQsZ0JBQU0sRUFBRTs7Z0VBSWdFO0FBMURoRSxjQUFjO0lBRDFCLGlCQUFVLEVBQUU7cUNBa0VlLGFBQUs7UUFDTSxnQ0FBYztRQUNkLGlDQUFlO1FBQ3RCLGlCQUFPO0dBcEUxQixjQUFjLENBc0UxQjtBQXRFWSx3Q0FBYyIsImZpbGUiOiJhcHAvZGF0YS1sYXllci9uZ3J4LWRhdGEvZWZmZWN0cy9nYXJtZW50LmVmZmVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivd2l0aExhdGVzdEZyb20nO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcbmltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN0b3JlLCBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgKiBhcyBlcnJvckFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9lcnJvci5hY3Rpb25zJztcbmltcG9ydCAqIGFzIHBvcnRhbEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9wb3J0YWwuYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBnYXJtZW50QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2dhcm1lbnQuYWN0aW9ucyc7XG5pbXBvcnQgeyBHYXJtZW50U2VydmljZSB9IGZyb20gJy4uLy4uL2FwaS1zZXJ2aWNlcy9nYXJtZW50LnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgZnJvbVJvb3QgZnJvbSAnLi4vcmVkdWNlcnMvaW5kZXgnO1xuaW1wb3J0IHtHYXJtZW50U29ydE1vZGVsLCBHYXJtZW50TW9kZWx9IGZyb20gXCIuLi8uLi8uLi9idXNpbmVzcy1sYXllci9tb2RlbHNcIjtcbmltcG9ydCB7U29ydGluZ1NlcnZpY2VzfSBmcm9tIFwiLi4vLi4vc29ydGluZy1zZXJ2aWNlcy9zb3J0aW5nLnNlcnZpY2VcIjtcblxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHYXJtZW50RWZmZWN0cyB7XG5cblxuXG4gICAgQEVmZmVjdCgpICBzdGFydFVwQXBwICA9IE9ic2VydmFibGUub2YobmV3IGdhcm1lbnRBY3Rpb25zLkdldEdhcm1lbnRDb2xsZWN0aW9uKCkpO1xuXG5cbiAgICBARWZmZWN0KCkgZmV0Y2hHYXJtZW50Q29sbGVjdGlvbiA9IHRoaXMuYWN0aW9ucyRcbiAgICAgICAgLm9mVHlwZShnYXJtZW50QWN0aW9ucy5HYXJtZW50VHlwZXMuRkVUQ0hfR0FSTUVOVF9DT0xMRUNUSU9OX0FUVEVNUFQpXG4gICAgICAgIC5tYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKVxuICAgICAgICAuc3dpdGNoTWFwKCgpID0+IHRoaXMuZ2FybWVudFNlcnZpY2VzLmdldFByb2R1Y3RzKFxuICAgICAgICAgICAgZXJyb3JBY3Rpb25zLkVycm9yVHlwZXMuUkVQT1JUX0VSUk9SLFxuICAgICAgICAgICAgZ2FybWVudEFjdGlvbnMuR2FybWVudFR5cGVzLkZFVENIX0dBUk1FTlRfQ09MTEVDVElPTl9GQUlMVVJFLFxuICAgICAgICAgICAgZ2FybWVudEFjdGlvbnMuR2FybWVudFR5cGVzLkZFVENIX0dBUk1FTlRfQ09MTEVDVElPTl9TVUNDRVNTKSk7XG5cblxuICAgIEBFZmZlY3QoKSAgZ2FybWVudENvbGxlY3Rpb25GZXRjaGVkID0gdGhpcy5hY3Rpb25zJFxuICAgICAgLm9mVHlwZShnYXJtZW50QWN0aW9ucy5HYXJtZW50VHlwZXMuRkVUQ0hfR0FSTUVOVF9DT0xMRUNUSU9OX1NVQ0NFU1MpXG4gICAgICAubWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZClcbiAgICAgIC5zd2l0Y2hNYXAoIChwYXlsb2FkKT0+KCB0aGlzLnNvcnRpbmdTZXJ2aWNlcy5zb3J0R2FybWVudENvbGxlY3Rpb24ocGF5bG9hZCkpKVxuICAgICAgLm1hcCgocGF5bG9hZCkgPT4gIG5ldyBnYXJtZW50QWN0aW9ucy5VcGRhdGVTb3J0ZWRDb2xsZWN0aW9uKHBheWxvYWQpKTtcblxuXG5cblxuICAgIEBFZmZlY3QoKSB1cGRkYXRlR2FyZW1lbnRJbkNvbGxlY3Rpb24gPSB0aGlzLmFjdGlvbnMkXG4gICAgICAgIC5vZlR5cGUoZ2FybWVudEFjdGlvbnMuR2FybWVudFR5cGVzLlVQREFURV9HQVJNRU5UX0lOX0NPTExFQ1RJT05fQVRURU1QVClcbiAgICAgICAgLm1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpXG4gICAgICAgIC5zd2l0Y2hNYXAocGF5bG9hZCA9PiB0aGlzLmdhcm1lbnRTZXJ2aWNlcy51cGRhdGVQcm9kdWN0KCBwYXlsb2FkLFxuICAgICAgICAgICAgZXJyb3JBY3Rpb25zLkVycm9yVHlwZXMuUkVQT1JUX0VSUk9SLFxuICAgICAgICAgICAgZ2FybWVudEFjdGlvbnMuR2FybWVudFR5cGVzLlVQREFURV9HQVJNRU5UX0lOX0NPTExFQ1RJT05fRkFJTFVSRSxcbiAgICAgICAgICAgIGdhcm1lbnRBY3Rpb25zLkdhcm1lbnRUeXBlcy5VUERBVEVfR0FSTUVOVF9JTl9DT0xMRUNUSU9OX1NVQ0NFU1MpKTtcblxuXG5cbiAgICBARWZmZWN0KCkgZ2FybWVudFVwZGF0ZWRJbkNvbGxlY3Rpb24gPSB0aGlzLmFjdGlvbnMkXG4gICAgICAgIC5vZlR5cGUoZ2FybWVudEFjdGlvbnMuR2FybWVudFR5cGVzLlVQREFURV9HQVJNRU5UX0lOX0NPTExFQ1RJT05fU1VDQ0VTUylcbiAgICAgICAgLm1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpXG4gICAgICAgIC5zd2l0Y2hNYXAoIChwYXlsb2FkKT0+KCB0aGlzLnNvcnRpbmdTZXJ2aWNlcy5zb3J0R2FybWVudENvbGxlY3Rpb24ocGF5bG9hZCkpKVxuICAgICAgICAubWFwKHBheWxvYWQgPT4gIG5ldyBnYXJtZW50QWN0aW9ucy5VcGRhdGVTb3J0ZWRDb2xsZWN0aW9uKHBheWxvYWQpKTtcblxuXG5cblxuICAgIEBFZmZlY3QoKSBhZGRHYXJtZW50VG9Db2xsZWN0aW9uID0gdGhpcy5hY3Rpb25zJFxuICAgICAgICAub2ZUeXBlKGdhcm1lbnRBY3Rpb25zLkdhcm1lbnRUeXBlcy5BRERfR0FSTUVOVF9UT19DT0xMRUNUSU9OX0FUVEVNUFQpXG4gICAgICAgIC5tYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKVxuICAgICAgICAuc3dpdGNoTWFwKHBheWxvYWQgPT4gdGhpcy5nYXJtZW50U2VydmljZXMuYWRkTmV3UHJvZHVjdCggcGF5bG9hZCxcbiAgICAgICAgICAgIGVycm9yQWN0aW9ucy5FcnJvclR5cGVzLlJFUE9SVF9FUlJPUixcbiAgICAgICAgICAgIGdhcm1lbnRBY3Rpb25zLkdhcm1lbnRUeXBlcy5BRERfR0FSTUVOVF9UT19DT0xMRUNUSU9OX0ZBSUxVUkUsXG4gICAgICAgICAgICBnYXJtZW50QWN0aW9ucy5HYXJtZW50VHlwZXMuQUREX0dBUk1FTlRfVE9fQ09MTEVDVElPTl9TVUNDRVNTKSk7XG5cblxuXG4gICAgQEVmZmVjdCgpIGdhcm1lbnRBZGRlZFRvQ29sbGVjdGlvbiA9IHRoaXMuYWN0aW9ucyRcbiAgICAgICAgLm9mVHlwZShnYXJtZW50QWN0aW9ucy5HYXJtZW50VHlwZXMuQUREX0dBUk1FTlRfVE9fQ09MTEVDVElPTl9TVUNDRVNTKVxuICAgICAgICAubWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgLnN3aXRjaE1hcCggKHBheWxvYWQpPT4oIHRoaXMuc29ydGluZ1NlcnZpY2VzLnNvcnRHYXJtZW50Q29sbGVjdGlvbihwYXlsb2FkKSkpXG4gICAgICAgIC5tYXAocGF5bG9hZCA9PiAgbmV3IGdhcm1lbnRBY3Rpb25zLlVwZGF0ZVNvcnRlZENvbGxlY3Rpb24ocGF5bG9hZCkpO1xuXG5cblxuXG5cblxuIGNvbnN0cnVjdG9yKCBwcml2YXRlIHN0b3JlOlN0b3JlPGZyb21Sb290LlN0YXRlPixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBnYXJtZW50U2VydmljZXM6IEdhcm1lbnRTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHNvcnRpbmdTZXJ2aWNlczogU29ydGluZ1NlcnZpY2VzLFxuICAgICAgICAgICAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zXG4gICAgICAgICAgICAgKSB7ICB9XG59XG4iXX0=
