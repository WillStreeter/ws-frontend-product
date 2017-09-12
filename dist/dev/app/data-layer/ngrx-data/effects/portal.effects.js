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
var fromRoot = require("../reducers/index");
var PortalEffects = (function () {
    function PortalEffects(store, actions$, sortingServices) {
        var _this = this;
        this.store = store;
        this.actions$ = actions$;
        this.sortingServices = sortingServices;
        this.portalActionUpdate = this.actions$
            .ofType(portalActions.PortalTypes.UPDATE_SORT_STATE)
            .withLatestFrom(this.store.select(fromRoot.getCurrentGarmentCollection))
            .map(function (_a) {
            var action = _a[0], garmentCollection = _a[1];
            return [action.payload, garmentCollection];
        })
            .switchMap(function (garmentCollection) { return (_this.sortingServices.sortGarmentCollection(garmentCollection[1].products)); })
            .map(function (payload) { return new garmentActions.UpdateSortedCollection(payload); });
        this.updateAddRowRevealState = this.actions$
            .ofType(garmentActions.GarmentTypes.ADD_GARMENT_TO_COLLECTION_SUCCESS)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) {
            return Observable_1.Observable.of(new portalActions.UpdateAddRowGarment(false));
        });
        this.updateAfterPageChange = this.actions$
            .ofType(portalActions.PortalTypes.SET_CURRENT_PAGE_NUMBER)
            .withLatestFrom(this.store.select(fromRoot.getCurrentGarmentCollection))
            .map(function (_a) {
            var action = _a[0], garmentCollection = _a[1];
            return [action.payload, garmentCollection];
        })
            .switchMap(function (garmentCollection) { return (_this.sortingServices.sortGarmentCollection(garmentCollection[1].products)); })
            .map(function (payload) { return new garmentActions.UpdateSortedCollection(payload); });
        this.updateAfterViewableUpdate = this.actions$
            .ofType(portalActions.PortalTypes.UPDATE_VIEWABLE_PER_PAGE_COUNT)
            .withLatestFrom(this.store.select(fromRoot.getCurrentGarmentCollection))
            .map(function (_a) {
            var action = _a[0], garmentCollection = _a[1];
            return [action.payload, garmentCollection];
        })
            .switchMap(function (garmentCollection) { return (_this.sortingServices.sortGarmentCollection(garmentCollection[1].products)); })
            .map(function (payload) { return new garmentActions.UpdateSortedCollection(payload); });
    }
    return PortalEffects;
}());
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
PortalEffects = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store,
        effects_1.Actions,
        sorting_service_1.SortingServices])
], PortalEffects);
exports.PortalEffects = PortalEffects;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhLWxheWVyL25ncngtZGF0YS9lZmZlY3RzL3BvcnRhbC5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsbUNBQWlDO0FBQ2pDLGlDQUErQjtBQUMvQixtQ0FBaUM7QUFDakMsb0NBQWtDO0FBQ2xDLDRDQUEwQztBQUMxQyx1Q0FBcUM7QUFDckMseUNBQXVDO0FBQ3ZDLHFDQUFtQztBQUNuQyxrQ0FBZ0M7QUFFaEMsc0NBQTJDO0FBQzNDLHFDQUE0QztBQUM1Qyx5Q0FBaUQ7QUFDakQsOENBQTZDO0FBQzdDLHlEQUEyRDtBQUMzRCwyREFBNkQ7QUFDN0QsMEVBQXlFO0FBQ3pFLDRDQUE4QztBQUs5QyxJQUFhLGFBQWE7SUE2QnhCLHVCQUFvQixLQUEyQixFQUMzQixRQUFpQixFQUNqQixlQUErQjtRQUZuRCxpQkFHaUI7UUFIRyxVQUFLLEdBQUwsS0FBSyxDQUFzQjtRQUMzQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQTlCdEMsdUJBQWtCLEdBQUcsSUFBSSxDQUFDLFFBQVE7YUFDMUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUM7YUFDbkQsY0FBYyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFFO2FBQ3pFLEdBQUcsQ0FBRSxVQUFDLEVBQTJCO2dCQUExQixjQUFNLEVBQUUseUJBQWlCO1lBQU0sT0FBQSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUM7UUFBbkMsQ0FBbUMsQ0FBRTthQUMzRSxTQUFTLENBQUMsVUFBQyxpQkFBaUIsSUFBRyxPQUFBLENBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUE1RSxDQUE0RSxDQUFDO2FBQzVHLEdBQUcsQ0FBQyxVQUFDLE9BQU8sSUFBTSxPQUFBLElBQUksY0FBYyxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxFQUFsRCxDQUFrRCxDQUFDLENBQUM7UUFFOUQsNEJBQXVCLEdBQUcsSUFBSSxDQUFDLFFBQVE7YUFDL0MsTUFBTSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsaUNBQWlDLENBQUM7YUFDbkUsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUM7YUFDN0IsU0FBUyxDQUFDLFVBQUEsT0FBTztZQUNkLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEVBQUUsQ0FBRSxJQUFJLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLENBQUMsQ0FBQyxDQUFDO1FBRUssMEJBQXFCLEdBQUUsSUFBSSxDQUFDLFFBQVE7YUFDN0MsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsdUJBQXVCLENBQUM7YUFDekQsY0FBYyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFFO2FBQ3pFLEdBQUcsQ0FBRSxVQUFDLEVBQTJCO2dCQUExQixjQUFNLEVBQUUseUJBQWlCO1lBQU0sT0FBQSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUM7UUFBbkMsQ0FBbUMsQ0FBRTthQUMzRSxTQUFTLENBQUMsVUFBQyxpQkFBaUIsSUFBRyxPQUFBLENBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUE1RSxDQUE0RSxDQUFDO2FBQzVHLEdBQUcsQ0FBQyxVQUFDLE9BQU8sSUFBTSxPQUFBLElBQUksY0FBYyxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxFQUFsRCxDQUFrRCxDQUFDLENBQUM7UUFFN0QsOEJBQXlCLEdBQUUsSUFBSSxDQUFDLFFBQVE7YUFDakQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsOEJBQThCLENBQUM7YUFDaEUsY0FBYyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFFO2FBQ3pFLEdBQUcsQ0FBRSxVQUFDLEVBQTJCO2dCQUExQixjQUFNLEVBQUUseUJBQWlCO1lBQU0sT0FBQSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUM7UUFBbkMsQ0FBbUMsQ0FBRTthQUMzRSxTQUFTLENBQUMsVUFBQyxpQkFBaUIsSUFBRyxPQUFBLENBQUUsS0FBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUE1RSxDQUE0RSxDQUFDO2FBQzVHLEdBQUcsQ0FBQyxVQUFDLE9BQU8sSUFBTSxPQUFBLElBQUksY0FBYyxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxFQUFsRCxDQUFrRCxDQUFDLENBQUM7SUFLM0QsQ0FBQztJQUNuQixvQkFBQztBQUFELENBakNBLEFBaUNDLElBQUE7QUFoQ2M7SUFBVixnQkFBTSxFQUFFOzt5REFLZ0U7QUFFOUQ7SUFBVixnQkFBTSxFQUFFOzs4REFLRjtBQUVLO0lBQVYsZ0JBQU0sRUFBRTs7NERBSytEO0FBRTdEO0lBQVYsZ0JBQU0sRUFBRTs7Z0VBSytEO0FBM0JoRSxhQUFhO0lBRHpCLGlCQUFVLEVBQUU7cUNBOEJlLGFBQUs7UUFDRCxpQkFBTztRQUNELGlDQUFlO0dBL0J4QyxhQUFhLENBaUN6QjtBQWpDWSxzQ0FBYSIsImZpbGUiOiJhcHAvZGF0YS1sYXllci9uZ3J4LWRhdGEvZWZmZWN0cy9wb3J0YWwuZWZmZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXBUbyc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpbHRlcic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3dpdGhMYXRlc3RGcm9tJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwVG8nO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90b0FycmF5JztcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9vZic7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUsIEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCAgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICogYXMgcG9ydGFsQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3BvcnRhbC5hY3Rpb25zJztcbmltcG9ydCAqIGFzIGdhcm1lbnRBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvZ2FybWVudC5hY3Rpb25zJztcbmltcG9ydCB7IFNvcnRpbmdTZXJ2aWNlcyB9IGZyb20gXCIuLi8uLi9zb3J0aW5nLXNlcnZpY2VzL3NvcnRpbmcuc2VydmljZVwiO1xuaW1wb3J0ICogYXMgZnJvbVJvb3QgZnJvbSAnLi4vcmVkdWNlcnMvaW5kZXgnO1xuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBvcnRhbEVmZmVjdHMge1xuICAgIEBFZmZlY3QoKSAgcG9ydGFsQWN0aW9uVXBkYXRlID0gdGhpcy5hY3Rpb25zJFxuICAgICAgLm9mVHlwZShwb3J0YWxBY3Rpb25zLlBvcnRhbFR5cGVzLlVQREFURV9TT1JUX1NUQVRFKVxuICAgICAgLndpdGhMYXRlc3RGcm9tKCB0aGlzLnN0b3JlLnNlbGVjdChmcm9tUm9vdC5nZXRDdXJyZW50R2FybWVudENvbGxlY3Rpb24pIClcbiAgICAgIC5tYXAoIChbYWN0aW9uLCBnYXJtZW50Q29sbGVjdGlvbl0pID0+IFthY3Rpb24ucGF5bG9hZCwgZ2FybWVudENvbGxlY3Rpb25dIClcbiAgICAgIC5zd2l0Y2hNYXAoKGdhcm1lbnRDb2xsZWN0aW9uKT0+KCB0aGlzLnNvcnRpbmdTZXJ2aWNlcy5zb3J0R2FybWVudENvbGxlY3Rpb24oZ2FybWVudENvbGxlY3Rpb25bMV0ucHJvZHVjdHMpKSlcbiAgICAgIC5tYXAoKHBheWxvYWQpID0+ICBuZXcgZ2FybWVudEFjdGlvbnMuVXBkYXRlU29ydGVkQ29sbGVjdGlvbihwYXlsb2FkKSk7XG5cbiAgICBARWZmZWN0KCkgIHVwZGF0ZUFkZFJvd1JldmVhbFN0YXRlID0gdGhpcy5hY3Rpb25zJFxuICAgICAgLm9mVHlwZShnYXJtZW50QWN0aW9ucy5HYXJtZW50VHlwZXMuQUREX0dBUk1FTlRfVE9fQ09MTEVDVElPTl9TVUNDRVNTKVxuICAgICAgICAubWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgLnN3aXRjaE1hcChwYXlsb2FkID0+e1xuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YoIG5ldyBwb3J0YWxBY3Rpb25zLlVwZGF0ZUFkZFJvd0dhcm1lbnQoZmFsc2UpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgQEVmZmVjdCgpICB1cGRhdGVBZnRlclBhZ2VDaGFuZ2U9IHRoaXMuYWN0aW9ucyRcbiAgICAgIC5vZlR5cGUocG9ydGFsQWN0aW9ucy5Qb3J0YWxUeXBlcy5TRVRfQ1VSUkVOVF9QQUdFX05VTUJFUilcbiAgICAgIC53aXRoTGF0ZXN0RnJvbSggdGhpcy5zdG9yZS5zZWxlY3QoZnJvbVJvb3QuZ2V0Q3VycmVudEdhcm1lbnRDb2xsZWN0aW9uKSApXG4gICAgICAubWFwKCAoW2FjdGlvbiwgZ2FybWVudENvbGxlY3Rpb25dKSA9PiBbYWN0aW9uLnBheWxvYWQsIGdhcm1lbnRDb2xsZWN0aW9uXSApXG4gICAgICAuc3dpdGNoTWFwKChnYXJtZW50Q29sbGVjdGlvbik9PiggdGhpcy5zb3J0aW5nU2VydmljZXMuc29ydEdhcm1lbnRDb2xsZWN0aW9uKGdhcm1lbnRDb2xsZWN0aW9uWzFdLnByb2R1Y3RzKSkpXG4gICAgICAubWFwKChwYXlsb2FkKSA9PiAgbmV3IGdhcm1lbnRBY3Rpb25zLlVwZGF0ZVNvcnRlZENvbGxlY3Rpb24ocGF5bG9hZCkpO1xuXG4gICAgIEBFZmZlY3QoKSAgdXBkYXRlQWZ0ZXJWaWV3YWJsZVVwZGF0ZT0gdGhpcy5hY3Rpb25zJFxuICAgICAgLm9mVHlwZShwb3J0YWxBY3Rpb25zLlBvcnRhbFR5cGVzLlVQREFURV9WSUVXQUJMRV9QRVJfUEFHRV9DT1VOVClcbiAgICAgIC53aXRoTGF0ZXN0RnJvbSggdGhpcy5zdG9yZS5zZWxlY3QoZnJvbVJvb3QuZ2V0Q3VycmVudEdhcm1lbnRDb2xsZWN0aW9uKSApXG4gICAgICAubWFwKCAoW2FjdGlvbiwgZ2FybWVudENvbGxlY3Rpb25dKSA9PiBbYWN0aW9uLnBheWxvYWQsIGdhcm1lbnRDb2xsZWN0aW9uXSApXG4gICAgICAuc3dpdGNoTWFwKChnYXJtZW50Q29sbGVjdGlvbik9PiggdGhpcy5zb3J0aW5nU2VydmljZXMuc29ydEdhcm1lbnRDb2xsZWN0aW9uKGdhcm1lbnRDb2xsZWN0aW9uWzFdLnByb2R1Y3RzKSkpXG4gICAgICAubWFwKChwYXlsb2FkKSA9PiAgbmV3IGdhcm1lbnRBY3Rpb25zLlVwZGF0ZVNvcnRlZENvbGxlY3Rpb24ocGF5bG9hZCkpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6U3RvcmU8ZnJvbVJvb3QuU3RhdGU+LFxuICAgICAgICAgICAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgICAgICAgICAgICBwcml2YXRlIHNvcnRpbmdTZXJ2aWNlczpTb3J0aW5nU2VydmljZXNcbiAgICAgICAgICAgICApIHsgIH1cbn1cbiJdfQ==
