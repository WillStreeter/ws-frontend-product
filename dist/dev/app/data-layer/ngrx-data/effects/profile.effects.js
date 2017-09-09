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
var profileActions = require("../actions/profile.actions");
var user_service_1 = require("../../api-services/user.service");
var fromRoot = require("../reducers/index");
var ProfileEffects = (function () {
    function ProfileEffects(store, userServices, actions$) {
        var _this = this;
        this.store = store;
        this.userServices = userServices;
        this.actions$ = actions$;
        this.registerUser$ = this.actions$
            .ofType(profileActions.ProfileTypes.REGISTER_USER_ATTEMPT)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.userServices.registerUser(payload, errorActions.ErrorTypes.REPORT_ERROR, profileActions.ProfileTypes.REGISTER_USER_FAILURE, profileActions.ProfileTypes.REGISTER_USER_SUCCESS); });
        this.getUserByName$ = this.actions$
            .ofType(profileActions.ProfileTypes.CHECK_USER_PROFILE_NAME_ATTEMPT)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.userServices.getUserByName(payload, errorActions.ErrorTypes.REPORT_ERROR, profileActions.ProfileTypes.CHECK_USER_PROFILE_NAME_FAILURE, profileActions.ProfileTypes.CHECK_USER_PROFILE_NAME_SUCCESS); });
        this.getUserProfile$ = this.actions$
            .ofType(profileActions.ProfileTypes.GET_USER_PROFILE_ATTEMPT)
            .withLatestFrom(this.store.select(fromRoot.getProfileEntities))
            .map(function (_a) {
            var action = _a[0], profileEntities = _a[1];
            return [action.payload, profileEntities];
        })
            .switchMap(function (_a) {
            var username = _a[0], profileEntities = _a[1];
            var existsInStore = Object.keys(profileEntities).filter(function (entity) {
                if (profileEntities[entity].username === username) {
                    return profileEntities[entity];
                }
            });
            var obs;
            if (existsInStore && existsInStore.length > 0) {
                obs = Observable_1.Observable.of(new profileActions.SetProfileSelectedId(existsInStore[0]));
            }
            else {
                obs = _this.userServices.getUserByName(username, errorActions.ErrorTypes.REPORT_ERROR, profileActions.ProfileTypes.CHECK_USER_PROFILE_NAME_FAILURE, profileActions.ProfileTypes.GET_USER_PROFILE_SUCCESS);
            }
            return obs;
        });
    }
    return ProfileEffects;
}());
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Object)
], ProfileEffects.prototype, "registerUser$", void 0);
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Object)
], ProfileEffects.prototype, "getUserByName$", void 0);
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Object)
], ProfileEffects.prototype, "getUserProfile$", void 0);
ProfileEffects = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store,
        user_service_1.UserServices,
        effects_1.Actions])
], ProfileEffects);
exports.ProfileEffects = ProfileEffects;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhLWxheWVyL25ncngtZGF0YS9lZmZlY3RzL3Byb2ZpbGUuZWZmZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQUM3QyxpQ0FBK0I7QUFDL0Isb0NBQWtDO0FBQ2xDLDRDQUEwQztBQUMxQyx1Q0FBcUM7QUFDckMsa0NBQWdDO0FBQ2hDLHNDQUFzRDtBQUV0RCxxQ0FBNEM7QUFDNUMseUNBQWlEO0FBQ2pELHVEQUF5RDtBQUN6RCwyREFBNkQ7QUFDN0QsZ0VBQStEO0FBQy9ELDRDQUE4QztBQUs5QyxJQUFhLGNBQWM7SUEwQzFCLHdCQUFxQixLQUEyQixFQUMzQixZQUEwQixFQUMxQixRQUFpQjtRQUZ0QyxpQkFHa0I7UUFIRyxVQUFLLEdBQUwsS0FBSyxDQUFzQjtRQUMzQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBMUM1QixrQkFBYSxHQUFHLElBQUksQ0FBQyxRQUFRO2FBQ3JDLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDO2FBQ3pELEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDO2FBQzdCLFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFFLE9BQU8sRUFDUCxZQUFZLENBQUMsVUFBVSxDQUFDLFlBQVksRUFDcEMsY0FBYyxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsRUFDakQsY0FBYyxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxFQUhsRixDQUdrRixDQUFDLENBQUM7UUFFakcsbUJBQWMsR0FBRyxJQUFJLENBQUMsUUFBUTthQUN0QyxNQUFNLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQywrQkFBK0IsQ0FBQzthQUNuRSxHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQzthQUM3QixTQUFTLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBRSxPQUFPLEVBQ1AsWUFBWSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQ3BDLGNBQWMsQ0FBQyxZQUFZLENBQUMsK0JBQStCLEVBQzNELGNBQWMsQ0FBQyxZQUFZLENBQUMsK0JBQStCLENBQUMsRUFIN0YsQ0FHNkYsQ0FBQyxDQUFDO1FBRTNHLG9CQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVE7YUFDeEMsTUFBTSxDQUFFLGNBQWMsQ0FBQyxZQUFZLENBQUMsd0JBQXdCLENBQUU7YUFDOUQsY0FBYyxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFFO2FBQ2hFLEdBQUcsQ0FBRSxVQUFDLEVBQXlCO2dCQUF4QixjQUFNLEVBQUUsdUJBQWU7WUFBTSxPQUFBLENBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUU7UUFBbkMsQ0FBbUMsQ0FBRTthQUN6RSxTQUFTLENBQUMsVUFBQyxFQUEyQjtnQkFBMUIsZ0JBQVEsRUFBRSx1QkFBZTtZQUNwQyxJQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE1BQU0sQ0FDOUIsVUFBQSxNQUFNO2dCQUNPLEVBQUUsQ0FBQSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDakQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDakMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksR0FBRyxDQUFDO1lBQ1IsRUFBRSxDQUFBLENBQUMsYUFBYSxJQUFJLGFBQWEsQ0FBQyxNQUFNLEdBQUMsQ0FBRSxDQUFDLENBQUMsQ0FBQztnQkFDNUMsR0FBRyxHQUFJLHVCQUFVLENBQUMsRUFBRSxDQUFFLElBQUksY0FBYyxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkYsQ0FBQztZQUFBLElBQUksQ0FBQyxDQUFDO2dCQUNMLEdBQUcsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBRSxRQUFRLEVBQ1IsWUFBWSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQ3BDLGNBQWMsQ0FBQyxZQUFZLENBQUMsK0JBQStCLEVBQzNELGNBQWMsQ0FBQyxZQUFZLENBQUMsd0JBQXdCLENBQUUsQ0FBQztZQUNoRyxDQUFDO1lBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDO0lBTWEsQ0FBQztJQUNuQixxQkFBQztBQUFELENBOUNBLEFBOENDLElBQUE7QUE1Q1U7SUFBVCxnQkFBTSxFQUFFOztxREFNa0c7QUFFakc7SUFBVCxnQkFBTSxFQUFFOztzREFNNkc7QUFFM0c7SUFBVixnQkFBTSxFQUFFOzt1REFxQkw7QUF2Q1EsY0FBYztJQUQxQixpQkFBVSxFQUFFO3FDQTJDZSxhQUFLO1FBQ0csMkJBQVk7UUFDaEIsaUJBQU87R0E1QzFCLGNBQWMsQ0E4QzFCO0FBOUNZLHdDQUFjIiwiZmlsZSI6ImFwcC9kYXRhLWxheWVyL25ncngtZGF0YS9lZmZlY3RzL3Byb2ZpbGUuZWZmZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci93aXRoTGF0ZXN0RnJvbSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvb2YnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3RvcmUsIEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCAgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCAqIGFzIGVycm9yQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2Vycm9yLmFjdGlvbnMnO1xuaW1wb3J0ICogYXMgcHJvZmlsZUFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9wcm9maWxlLmFjdGlvbnMnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2VzIH0gZnJvbSAnLi4vLi4vYXBpLXNlcnZpY2VzL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBmcm9tUm9vdCBmcm9tICcuLi9yZWR1Y2Vycy9pbmRleCc7XG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZmlsZUVmZmVjdHMge1xuXG4gQEVmZmVjdCgpIHJlZ2lzdGVyVXNlciQgPSB0aGlzLmFjdGlvbnMkXG4gIC5vZlR5cGUocHJvZmlsZUFjdGlvbnMuUHJvZmlsZVR5cGVzLlJFR0lTVEVSX1VTRVJfQVRURU1QVClcbiAgLm1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpXG4gIC5zd2l0Y2hNYXAocGF5bG9hZCA9PiB0aGlzLnVzZXJTZXJ2aWNlcy5yZWdpc3RlclVzZXIoIHBheWxvYWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yQWN0aW9ucy5FcnJvclR5cGVzLlJFUE9SVF9FUlJPUixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZUFjdGlvbnMuUHJvZmlsZVR5cGVzLlJFR0lTVEVSX1VTRVJfRkFJTFVSRSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZUFjdGlvbnMuUHJvZmlsZVR5cGVzLlJFR0lTVEVSX1VTRVJfU1VDQ0VTUykpO1xuXG4gQEVmZmVjdCgpIGdldFVzZXJCeU5hbWUkID0gdGhpcy5hY3Rpb25zJFxuICAub2ZUeXBlKHByb2ZpbGVBY3Rpb25zLlByb2ZpbGVUeXBlcy5DSEVDS19VU0VSX1BST0ZJTEVfTkFNRV9BVFRFTVBUKVxuICAubWFwKGFjdGlvbiA9PiBhY3Rpb24ucGF5bG9hZClcbiAgLnN3aXRjaE1hcChwYXlsb2FkID0+IHRoaXMudXNlclNlcnZpY2VzLmdldFVzZXJCeU5hbWUoIHBheWxvYWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckFjdGlvbnMuRXJyb3JUeXBlcy5SRVBPUlRfRVJST1IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlQWN0aW9ucy5Qcm9maWxlVHlwZXMuQ0hFQ0tfVVNFUl9QUk9GSUxFX05BTUVfRkFJTFVSRSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVBY3Rpb25zLlByb2ZpbGVUeXBlcy5DSEVDS19VU0VSX1BST0ZJTEVfTkFNRV9TVUNDRVNTKSk7XG5cbiBARWZmZWN0KCkgIGdldFVzZXJQcm9maWxlJCA9IHRoaXMuYWN0aW9ucyRcbiAgLm9mVHlwZSggcHJvZmlsZUFjdGlvbnMuUHJvZmlsZVR5cGVzLkdFVF9VU0VSX1BST0ZJTEVfQVRURU1QVCApXG4gIC53aXRoTGF0ZXN0RnJvbSggdGhpcy5zdG9yZS5zZWxlY3QoZnJvbVJvb3QuZ2V0UHJvZmlsZUVudGl0aWVzKSApXG4gIC5tYXAoIChbYWN0aW9uLCBwcm9maWxlRW50aXRpZXNdKSA9PiBbIGFjdGlvbi5wYXlsb2FkLCBwcm9maWxlRW50aXRpZXMgXSApXG4gIC5zd2l0Y2hNYXAoKFt1c2VybmFtZSwgcHJvZmlsZUVudGl0aWVzXSkgPT4ge1xuICAgIGNvbnN0IGV4aXN0c0luU3RvcmUgPSBPYmplY3Qua2V5cyhwcm9maWxlRW50aXRpZXMpLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHk9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHByb2ZpbGVFbnRpdGllc1tlbnRpdHldLnVzZXJuYW1lID09PSB1c2VybmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9maWxlRW50aXRpZXNbZW50aXR5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIGxldCBvYnM7XG4gICAgaWYoZXhpc3RzSW5TdG9yZSAmJiBleGlzdHNJblN0b3JlLmxlbmd0aD4wICkge1xuICAgICAgb2JzID0gIE9ic2VydmFibGUub2YoIG5ldyBwcm9maWxlQWN0aW9ucy5TZXRQcm9maWxlU2VsZWN0ZWRJZChleGlzdHNJblN0b3JlWzBdKSk7XG4gICAgfWVsc2Uge1xuICAgICAgb2JzID0gdGhpcy51c2VyU2VydmljZXMuZ2V0VXNlckJ5TmFtZSggdXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckFjdGlvbnMuRXJyb3JUeXBlcy5SRVBPUlRfRVJST1IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlQWN0aW9ucy5Qcm9maWxlVHlwZXMuQ0hFQ0tfVVNFUl9QUk9GSUxFX05BTUVfRkFJTFVSRSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVBY3Rpb25zLlByb2ZpbGVUeXBlcy5HRVRfVVNFUl9QUk9GSUxFX1NVQ0NFU1MgKTtcbiAgICB9XG4gICAgcmV0dXJuIG9icztcbiAgfSk7XG5cblxuIGNvbnN0cnVjdG9yKCBwcml2YXRlIHN0b3JlOlN0b3JlPGZyb21Sb290LlN0YXRlPixcbiAgICAgICAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZXM6IFVzZXJTZXJ2aWNlcyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9uc1xuICAgICAgICAgICAgICkgeyAgfVxufVxuIl19
