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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhLWxheWVyL25ncngtZGF0YS9lZmZlY3RzL3BvcnRhbC5lZmZlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsbUNBQWlDO0FBQ2pDLGlDQUErQjtBQUMvQixtQ0FBaUM7QUFDakMsb0NBQWtDO0FBQ2xDLDRDQUEwQztBQUMxQyx1Q0FBcUM7QUFDckMseUNBQXVDO0FBQ3ZDLHFDQUFtQztBQUNuQyxrQ0FBZ0M7QUFFaEMsc0NBQTJDO0FBQzNDLHFDQUE0QztBQUM1Qyx5Q0FBaUQ7QUFDakQsOENBQTZDO0FBQzdDLHlEQUEyRDtBQUMzRCwyREFBNkQ7QUFDN0QsMEVBQXlFO0FBTXpFLElBQWEsYUFBYTtJQTBCeEIsdUJBQW9CLEtBQTJCLEVBQzNCLFFBQWlCLEVBQ2pCLGVBQStCO1FBRm5ELGlCQUdpQjtRQUhHLFVBQUssR0FBTCxLQUFLLENBQXNCO1FBQzNCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBM0J0Qyx1QkFBa0IsR0FBRyxJQUFJLENBQUMsUUFBUTthQUMxQyxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQzthQUNuRCxHQUFHLENBQUUsVUFBQyxNQUFNLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBRTthQUNqQyxTQUFTLENBQUMsY0FBSyxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLEVBQUUsRUFBNUMsQ0FBNEMsQ0FBQzthQUM1RCxHQUFHLENBQUMsVUFBQyxPQUFPLElBQU0sT0FBQSxJQUFJLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsRUFBbEQsQ0FBa0QsQ0FBQyxDQUFDO1FBRTlELDRCQUF1QixHQUFHLElBQUksQ0FBQyxRQUFRO2FBQzlDLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLGlDQUFpQyxDQUFDO2FBQ3BFLEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDO2FBQzdCLFNBQVMsQ0FBQyxVQUFBLE9BQU87WUFDZCxNQUFNLENBQUMsdUJBQVUsQ0FBQyxFQUFFLENBQUUsSUFBSSxhQUFhLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN4RSxDQUFDLENBQUMsQ0FBQztRQUVLLDBCQUFxQixHQUFFLElBQUksQ0FBQyxRQUFRO2FBQzdDLE1BQU0sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLHVCQUF1QixDQUFDO2FBQ3RELEdBQUcsQ0FBRSxVQUFDLE1BQU0sSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFFO2FBQ2pDLFNBQVMsQ0FBQyxjQUFLLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsRUFBRSxFQUExQyxDQUEwQyxDQUFDO2FBQzFELEdBQUcsQ0FBQyxVQUFDLE9BQU8sSUFBTSxPQUFBLElBQUksY0FBYyxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxFQUFsRCxDQUFrRCxDQUFDLENBQUM7UUFFaEUsOEJBQXlCLEdBQUUsSUFBSSxDQUFDLFFBQVE7YUFDakQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsOEJBQThCLENBQUM7YUFDN0QsR0FBRyxDQUFFLFVBQUMsTUFBTSxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUU7YUFDakMsU0FBUyxDQUFDLGNBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLG1CQUFtQixFQUFFLEVBQTFDLENBQTBDLENBQUM7YUFDMUQsR0FBRyxDQUFDLFVBQUMsT0FBTyxJQUFNLE9BQUEsSUFBSSxjQUFjLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLEVBQWxELENBQWtELENBQUMsQ0FBQztJQUs5RCxDQUFDO0lBQ25CLG9CQUFDO0FBQUQsQ0E5QkEsQUE4QkMsSUFBQTtBQTdCYztJQUFWLGdCQUFNLEVBQUU7O3lEQUlnRTtBQUU5RDtJQUFWLGdCQUFNLEVBQUU7OzhEQUtGO0FBRUs7SUFBVixnQkFBTSxFQUFFOzs0REFJa0U7QUFFaEU7SUFBVixnQkFBTSxFQUFFOztnRUFJa0U7QUF4Qm5FLGFBQWE7SUFEekIsaUJBQVUsRUFBRTtxQ0EyQmUsYUFBSztRQUNELGlCQUFPO1FBQ0QsaUNBQWU7R0E1QnhDLGFBQWEsQ0E4QnpCO0FBOUJZLHNDQUFhIiwiZmlsZSI6ImFwcC9kYXRhLWxheWVyL25ncngtZGF0YS9lZmZlY3RzL3BvcnRhbC5lZmZlY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcFRvJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivd2l0aExhdGVzdEZyb20nO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBUbyc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3RvQXJyYXknO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSwgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0ICB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgKiBhcyBwb3J0YWxBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvcG9ydGFsLmFjdGlvbnMnO1xuaW1wb3J0ICogYXMgZ2FybWVudEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9nYXJtZW50LmFjdGlvbnMnO1xuaW1wb3J0IHsgU29ydGluZ1NlcnZpY2VzIH0gZnJvbSAnLi4vLi4vc29ydGluZy1zZXJ2aWNlcy9zb3J0aW5nLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgZnJvbVJvb3QgZnJvbSAnLi4vcmVkdWNlcnMvaW5kZXgnO1xuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBvcnRhbEVmZmVjdHMge1xuICAgIEBFZmZlY3QoKSAgcG9ydGFsQWN0aW9uVXBkYXRlID0gdGhpcy5hY3Rpb25zJFxuICAgICAgLm9mVHlwZShwb3J0YWxBY3Rpb25zLlBvcnRhbFR5cGVzLlVQREFURV9TT1JUX1NUQVRFKVxuICAgICAgLm1hcCggKGFjdGlvbikgPT4gYWN0aW9uLnBheWxvYWQgKVxuICAgICAgLnN3aXRjaE1hcCgoKT0+IHRoaXMuc29ydGluZ1NlcnZpY2VzLnNvcnRHYXJtZW50Q29sbGVjdGlvbigpKVxuICAgICAgLm1hcCgocGF5bG9hZCkgPT4gIG5ldyBnYXJtZW50QWN0aW9ucy5VcGRhdGVTb3J0ZWRDb2xsZWN0aW9uKHBheWxvYWQpKTtcblxuICAgIEBFZmZlY3QoKSAgdXBkYXRlQWRkUm93UmV2ZWFsU3RhdGUgPSB0aGlzLmFjdGlvbnMkXG4gICAgICAgLm9mVHlwZShnYXJtZW50QWN0aW9ucy5HYXJtZW50VHlwZXMuQUREX0dBUk1FTlRfVE9fQ09MTEVDVElPTl9TVUNDRVNTKVxuICAgICAgICAubWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgLnN3aXRjaE1hcChwYXlsb2FkID0+e1xuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YoIG5ldyBwb3J0YWxBY3Rpb25zLlVwZGF0ZUFkZFJvd0dhcm1lbnQoZmFsc2UpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgQEVmZmVjdCgpICB1cGRhdGVBZnRlclBhZ2VDaGFuZ2U9IHRoaXMuYWN0aW9ucyRcbiAgICAgIC5vZlR5cGUocG9ydGFsQWN0aW9ucy5Qb3J0YWxUeXBlcy5TRVRfQ1VSUkVOVF9QQUdFX05VTUJFUilcbiAgICAgICAgIC5tYXAoIChhY3Rpb24pID0+IGFjdGlvbi5wYXlsb2FkIClcbiAgICAgICAgIC5zd2l0Y2hNYXAoKCk9PiB0aGlzLnNvcnRpbmdTZXJ2aWNlcy5nZXRDb2xsZWN0aW9uU3Vic2V0KCkpXG4gICAgICAgICAubWFwKChwYXlsb2FkKSA9PiAgbmV3IGdhcm1lbnRBY3Rpb25zLlVwZGF0ZVNvcnRlZENvbGxlY3Rpb24ocGF5bG9hZCkpO1xuXG4gICAgIEBFZmZlY3QoKSAgdXBkYXRlQWZ0ZXJWaWV3YWJsZVVwZGF0ZT0gdGhpcy5hY3Rpb25zJFxuICAgICAgLm9mVHlwZShwb3J0YWxBY3Rpb25zLlBvcnRhbFR5cGVzLlVQREFURV9WSUVXQUJMRV9QRVJfUEFHRV9DT1VOVClcbiAgICAgICAgIC5tYXAoIChhY3Rpb24pID0+IGFjdGlvbi5wYXlsb2FkIClcbiAgICAgICAgIC5zd2l0Y2hNYXAoKCk9PiB0aGlzLnNvcnRpbmdTZXJ2aWNlcy5nZXRDb2xsZWN0aW9uU3Vic2V0KCkpXG4gICAgICAgICAubWFwKChwYXlsb2FkKSA9PiAgbmV3IGdhcm1lbnRBY3Rpb25zLlVwZGF0ZVNvcnRlZENvbGxlY3Rpb24ocGF5bG9hZCkpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6U3RvcmU8ZnJvbVJvb3QuU3RhdGU+LFxuICAgICAgICAgICAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgICAgICAgICAgICBwcml2YXRlIHNvcnRpbmdTZXJ2aWNlczpTb3J0aW5nU2VydmljZXNcbiAgICAgICAgICAgICApIHsgIH1cbn1cbiJdfQ==
