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
var fromRoot = require("../reducers/index");
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
            .map(function (payload) {
            localStorage.setItem('products', JSON.stringify(payload.products));
            return new garmentActions.UpdateSortedCollection(payload);
        });
        this.upddateGarementInCollection = this.actions$
            .ofType(garmentActions.GarmentTypes.UPDATE_GARMENT_IN_COLLECTION_ATTEMPT)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.garmentServices.updateProduct(payload, errorActions.ErrorTypes.REPORT_ERROR, garmentActions.GarmentTypes.UPDATE_GARMENT_IN_COLLECTION_FAILURE, garmentActions.GarmentTypes.UPDATE_GARMENT_IN_COLLECTION_SUCCESS); });
        this.garmentUpdatedInCollection = this.actions$
            .ofType(garmentActions.GarmentTypes.UPDATE_GARMENT_IN_COLLECTION_SUCCESS)
            .withLatestFrom(this.store.select(fromRoot.getCurrentGarmentCollection))
            .map(function (_a) {
            var action = _a[0], garmentCollection = _a[1];
            return [action.payload, garmentCollection];
        })
            .switchMap(function (garmentCollection) { return _this.sortingServices.sortGarmentCollection(garmentCollection[1].products); })
            .map(function (payload) { return new garmentActions.UpdateSortedCollection(payload); });
        this.addGarmentToCollection = this.actions$
            .ofType(garmentActions.GarmentTypes.ADD_GARMENT_TO_COLLECTION_ATTEMPT)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.garmentServices.addNewProduct(payload, errorActions.ErrorTypes.REPORT_ERROR, garmentActions.GarmentTypes.ADD_GARMENT_TO_COLLECTION_FAILURE, garmentActions.GarmentTypes.ADD_GARMENT_TO_COLLECTION_SUCCESS); });
        this.garmentAddedToCollection = this.actions$
            .ofType(garmentActions.GarmentTypes.ADD_GARMENT_TO_COLLECTION_SUCCESS)
            .withLatestFrom(this.store.select(fromRoot.getCurrentGarmentCollection))
            .map(function (_a) {
            var action = _a[0], garmentCollection = _a[1];
            return [action.payload, garmentCollection];
        })
            .switchMap(function (garmentCollection) { return _this.sortingServices.sortGarmentCollection(garmentCollection[1].products); })
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhLWxheWVyL25ncngtZGF0YS9lZmZlY3RzL2dhcm1lbnQuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQUM3QyxpQ0FBK0I7QUFDL0Isb0NBQWtDO0FBQ2xDLDRDQUEwQztBQUMxQyx1Q0FBcUM7QUFDckMsa0NBQWdDO0FBQ2hDLHNDQUFzRDtBQUV0RCxxQ0FBNEM7QUFDNUMseUNBQWlEO0FBQ2pELHVEQUF5RDtBQUV6RCwyREFBNkQ7QUFDN0Qsc0VBQW9FO0FBQ3BFLDRDQUE4QztBQUU5QywwRUFBdUU7QUFLdkUsSUFBYSxjQUFjO0lBc0UxQix3QkFBcUIsS0FBMkIsRUFDM0IsZUFBK0IsRUFDL0IsZUFBZ0MsRUFDaEMsUUFBaUI7UUFIdEMsaUJBSWtCO1FBSkcsVUFBSyxHQUFMLEtBQUssQ0FBc0I7UUFDM0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQy9CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBckV4QixlQUFVLEdBQUksdUJBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxjQUFjLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO1FBR3hFLDJCQUFzQixHQUFHLElBQUksQ0FBQyxRQUFRO2FBQzNDLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLGdDQUFnQyxDQUFDO2FBQ3BFLEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDO2FBQzdCLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQzdDLFlBQVksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUNwQyxjQUFjLENBQUMsWUFBWSxDQUFDLGdDQUFnQyxFQUM1RCxjQUFjLENBQUMsWUFBWSxDQUFDLGdDQUFnQyxDQUFDLEVBSGhELENBR2dELENBQUMsQ0FBQztRQUc1RCw2QkFBd0IsR0FB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QjtZQUFNLE9BQUEsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDO1FBQW5DLENBQW1DLENBQUU7YUFDM0UsU0FBUyxDQUFFLFVBQUMsaUJBQWlCLElBQUcsT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUF6RSxDQUF5RSxDQUFDO2FBQzFHLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSyxPQUFBLElBQUksY0FBYyxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxFQUFsRCxDQUFrRCxDQUFDLENBQUM7SUFXM0QsQ0FBQztJQUNuQixxQkFBQztBQUFELENBM0VBLEFBMkVDLElBQUE7QUF2RWM7SUFBVixnQkFBTSxFQUFFOztrREFBeUU7QUFHeEU7SUFBVCxnQkFBTSxFQUFFOzs4REFNOEQ7QUFHNUQ7SUFBVixnQkFBTSxFQUFFOztnRUFPSjtBQUtLO0lBQVQsZ0JBQU0sRUFBRTs7bUVBTWtFO0FBSWpFO0lBQVQsZ0JBQU0sRUFBRTs7a0VBS2dFO0FBSy9EO0lBQVQsZ0JBQU0sRUFBRTs7OERBTStEO0FBSTlEO0lBQVQsZ0JBQU0sRUFBRTs7Z0VBS2dFO0FBL0RoRSxjQUFjO0lBRDFCLGlCQUFVLEVBQUU7cUNBdUVlLGFBQUs7UUFDTSxnQ0FBYztRQUNkLGlDQUFlO1FBQ3RCLGlCQUFPO0dBekUxQixjQUFjLENBMkUxQjtBQTNFWSx3Q0FBYyIsImZpbGUiOiJhcHAvZGF0YS1sYXllci9uZ3J4LWRhdGEvZWZmZWN0cy9nYXJtZW50LmVmZmVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivd2l0aExhdGVzdEZyb20nO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcbmltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN0b3JlLCBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgKiBhcyBlcnJvckFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9lcnJvci5hY3Rpb25zJztcbmltcG9ydCAqIGFzIHBvcnRhbEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9wb3J0YWwuYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBnYXJtZW50QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2dhcm1lbnQuYWN0aW9ucyc7XG5pbXBvcnQgeyBHYXJtZW50U2VydmljZSB9IGZyb20gJy4uLy4uL2FwaS1zZXJ2aWNlcy9nYXJtZW50LnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgZnJvbVJvb3QgZnJvbSAnLi4vcmVkdWNlcnMvaW5kZXgnO1xuaW1wb3J0IHtHYXJtZW50U29ydE1vZGVsLCBHYXJtZW50TW9kZWx9IGZyb20gXCIuLi8uLi8uLi9idXNpbmVzcy1sYXllci9tb2RlbHNcIjtcbmltcG9ydCB7U29ydGluZ1NlcnZpY2VzfSBmcm9tIFwiLi4vLi4vc29ydGluZy1zZXJ2aWNlcy9zb3J0aW5nLnNlcnZpY2VcIjtcblxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHYXJtZW50RWZmZWN0cyB7XG5cblxuXG4gICAgQEVmZmVjdCgpICBzdGFydFVwQXBwICA9IE9ic2VydmFibGUub2YobmV3IGdhcm1lbnRBY3Rpb25zLkdldEdhcm1lbnRDb2xsZWN0aW9uKCkpO1xuXG5cbiAgICBARWZmZWN0KCkgZmV0Y2hHYXJtZW50Q29sbGVjdGlvbiA9IHRoaXMuYWN0aW9ucyRcbiAgICAgICAgLm9mVHlwZShnYXJtZW50QWN0aW9ucy5HYXJtZW50VHlwZXMuRkVUQ0hfR0FSTUVOVF9DT0xMRUNUSU9OX0FUVEVNUFQpXG4gICAgICAgIC5tYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKVxuICAgICAgICAuc3dpdGNoTWFwKCgpID0+IHRoaXMuZ2FybWVudFNlcnZpY2VzLmdldFByb2R1Y3RzKFxuICAgICAgICAgICAgZXJyb3JBY3Rpb25zLkVycm9yVHlwZXMuUkVQT1JUX0VSUk9SLFxuICAgICAgICAgICAgZ2FybWVudEFjdGlvbnMuR2FybWVudFR5cGVzLkZFVENIX0dBUk1FTlRfQ09MTEVDVElPTl9GQUlMVVJFLFxuICAgICAgICAgICAgZ2FybWVudEFjdGlvbnMuR2FybWVudFR5cGVzLkZFVENIX0dBUk1FTlRfQ09MTEVDVElPTl9TVUNDRVNTKSk7XG5cblxuICAgIEBFZmZlY3QoKSAgZ2FybWVudENvbGxlY3Rpb25GZXRjaGVkID0gdGhpcy5hY3Rpb25zJFxuICAgICAgLm9mVHlwZShnYXJtZW50QWN0aW9ucy5HYXJtZW50VHlwZXMuRkVUQ0hfR0FSTUVOVF9DT0xMRUNUSU9OX1NVQ0NFU1MpXG4gICAgICAubWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZClcbiAgICAgIC5zd2l0Y2hNYXAoIChwYXlsb2FkKT0+KCB0aGlzLnNvcnRpbmdTZXJ2aWNlcy5zb3J0R2FybWVudENvbGxlY3Rpb24ocGF5bG9hZCkpKVxuICAgICAgLm1hcCgocGF5bG9hZCkgPT4gIHtcbiAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2R1Y3RzJywgSlNPTi5zdHJpbmdpZnkocGF5bG9hZC5wcm9kdWN0cykpO1xuICAgICAgICAgIHJldHVybiBuZXcgZ2FybWVudEFjdGlvbnMuVXBkYXRlU29ydGVkQ29sbGVjdGlvbihwYXlsb2FkKVxuICAgICAgfSk7XG5cblxuXG5cbiAgICBARWZmZWN0KCkgdXBkZGF0ZUdhcmVtZW50SW5Db2xsZWN0aW9uID0gdGhpcy5hY3Rpb25zJFxuICAgICAgICAub2ZUeXBlKGdhcm1lbnRBY3Rpb25zLkdhcm1lbnRUeXBlcy5VUERBVEVfR0FSTUVOVF9JTl9DT0xMRUNUSU9OX0FUVEVNUFQpXG4gICAgICAgIC5tYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKVxuICAgICAgICAuc3dpdGNoTWFwKHBheWxvYWQgPT4gdGhpcy5nYXJtZW50U2VydmljZXMudXBkYXRlUHJvZHVjdCggcGF5bG9hZCxcbiAgICAgICAgICAgIGVycm9yQWN0aW9ucy5FcnJvclR5cGVzLlJFUE9SVF9FUlJPUixcbiAgICAgICAgICAgIGdhcm1lbnRBY3Rpb25zLkdhcm1lbnRUeXBlcy5VUERBVEVfR0FSTUVOVF9JTl9DT0xMRUNUSU9OX0ZBSUxVUkUsXG4gICAgICAgICAgICBnYXJtZW50QWN0aW9ucy5HYXJtZW50VHlwZXMuVVBEQVRFX0dBUk1FTlRfSU5fQ09MTEVDVElPTl9TVUNDRVNTKSk7XG5cblxuXG4gICAgQEVmZmVjdCgpIGdhcm1lbnRVcGRhdGVkSW5Db2xsZWN0aW9uID0gdGhpcy5hY3Rpb25zJFxuICAgICAgICAub2ZUeXBlKGdhcm1lbnRBY3Rpb25zLkdhcm1lbnRUeXBlcy5VUERBVEVfR0FSTUVOVF9JTl9DT0xMRUNUSU9OX1NVQ0NFU1MpXG4gICAgICAgIC53aXRoTGF0ZXN0RnJvbSggdGhpcy5zdG9yZS5zZWxlY3QoZnJvbVJvb3QuZ2V0Q3VycmVudEdhcm1lbnRDb2xsZWN0aW9uKSApXG4gICAgICAgIC5tYXAoIChbYWN0aW9uLCBnYXJtZW50Q29sbGVjdGlvbl0pID0+IFthY3Rpb24ucGF5bG9hZCwgZ2FybWVudENvbGxlY3Rpb25dIClcbiAgICAgICAgLnN3aXRjaE1hcCggKGdhcm1lbnRDb2xsZWN0aW9uKT0+dGhpcy5zb3J0aW5nU2VydmljZXMuc29ydEdhcm1lbnRDb2xsZWN0aW9uKGdhcm1lbnRDb2xsZWN0aW9uWzFdLnByb2R1Y3RzKSlcbiAgICAgICAgLm1hcChwYXlsb2FkID0+ICBuZXcgZ2FybWVudEFjdGlvbnMuVXBkYXRlU29ydGVkQ29sbGVjdGlvbihwYXlsb2FkKSk7XG5cblxuXG5cbiAgICBARWZmZWN0KCkgYWRkR2FybWVudFRvQ29sbGVjdGlvbiA9IHRoaXMuYWN0aW9ucyRcbiAgICAgICAgLm9mVHlwZShnYXJtZW50QWN0aW9ucy5HYXJtZW50VHlwZXMuQUREX0dBUk1FTlRfVE9fQ09MTEVDVElPTl9BVFRFTVBUKVxuICAgICAgICAubWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgLnN3aXRjaE1hcChwYXlsb2FkID0+IHRoaXMuZ2FybWVudFNlcnZpY2VzLmFkZE5ld1Byb2R1Y3QoIHBheWxvYWQsXG4gICAgICAgICAgICBlcnJvckFjdGlvbnMuRXJyb3JUeXBlcy5SRVBPUlRfRVJST1IsXG4gICAgICAgICAgICBnYXJtZW50QWN0aW9ucy5HYXJtZW50VHlwZXMuQUREX0dBUk1FTlRfVE9fQ09MTEVDVElPTl9GQUlMVVJFLFxuICAgICAgICAgICAgZ2FybWVudEFjdGlvbnMuR2FybWVudFR5cGVzLkFERF9HQVJNRU5UX1RPX0NPTExFQ1RJT05fU1VDQ0VTUykpO1xuXG5cblxuICAgIEBFZmZlY3QoKSBnYXJtZW50QWRkZWRUb0NvbGxlY3Rpb24gPSB0aGlzLmFjdGlvbnMkXG4gICAgICAgIC5vZlR5cGUoZ2FybWVudEFjdGlvbnMuR2FybWVudFR5cGVzLkFERF9HQVJNRU5UX1RPX0NPTExFQ1RJT05fU1VDQ0VTUylcbiAgICAgICAgLndpdGhMYXRlc3RGcm9tKCB0aGlzLnN0b3JlLnNlbGVjdChmcm9tUm9vdC5nZXRDdXJyZW50R2FybWVudENvbGxlY3Rpb24pIClcbiAgICAgICAgLm1hcCggKFthY3Rpb24sIGdhcm1lbnRDb2xsZWN0aW9uXSkgPT4gW2FjdGlvbi5wYXlsb2FkLCBnYXJtZW50Q29sbGVjdGlvbl0gKVxuICAgICAgICAuc3dpdGNoTWFwKCAoZ2FybWVudENvbGxlY3Rpb24pPT50aGlzLnNvcnRpbmdTZXJ2aWNlcy5zb3J0R2FybWVudENvbGxlY3Rpb24oZ2FybWVudENvbGxlY3Rpb25bMV0ucHJvZHVjdHMpKVxuICAgICAgICAubWFwKHBheWxvYWQgPT4gIG5ldyBnYXJtZW50QWN0aW9ucy5VcGRhdGVTb3J0ZWRDb2xsZWN0aW9uKHBheWxvYWQpKTtcblxuXG5cblxuXG5cbiBjb25zdHJ1Y3RvciggcHJpdmF0ZSBzdG9yZTpTdG9yZTxmcm9tUm9vdC5TdGF0ZT4sXG4gICAgICAgICAgICAgIHByaXZhdGUgZ2FybWVudFNlcnZpY2VzOiBHYXJtZW50U2VydmljZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBzb3J0aW5nU2VydmljZXM6IFNvcnRpbmdTZXJ2aWNlcyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uc1xuICAgICAgICAgICAgICkgeyAgfVxufVxuIl19
