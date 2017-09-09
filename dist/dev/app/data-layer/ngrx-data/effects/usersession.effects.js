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
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/switchMapTo");
require("rxjs/add/operator/toArray");
require("rxjs/add/observable/of");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var Observable_1 = require("rxjs/Observable");
var usersessionActions = require("../actions/usersession.actions");
var errorActions = require("../actions/error.actions");
var user_service_1 = require("../../api-services/user.service");
var UserSessionEffects = (function () {
    function UserSessionEffects(userServices, actions$, router) {
        var _this = this;
        this.userServices = userServices;
        this.actions$ = actions$;
        this.router = router;
        this.startAppClearUser$ = Observable_1.Observable.of(new usersessionActions.AppStartLoginClear());
        this.loginUser$ = this.actions$
            .ofType(usersessionActions.UserSessionTypes.LOGIN_USER_ATTEMPT)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.userServices.loginUser(payload, errorActions.ErrorTypes.REPORT_ERROR, usersessionActions.UserSessionTypes.LOGIN_USER_FAILURE, usersessionActions.UserSessionTypes.LOGIN_USER_SUCCESS); });
        this.logoutUser$ = this.actions$
            .ofType(usersessionActions.UserSessionTypes.LOGOUT_USER_ATTEMPT)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return _this.userServices.logoutUser(errorActions.ErrorTypes.REPORT_ERROR, usersessionActions.UserSessionTypes.LOGOUT_USER_FAILURE, usersessionActions.UserSessionTypes.LOGOUT_USER_SUCCESS); });
        this.logoutUserSuccess$ = this.actions$
            .ofType(usersessionActions.UserSessionTypes.LOGOUT_USER_SUCCESS)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return Observable_1.Observable.of(_this.router.navigateByUrl('/')); });
        this.removeErrorModleCheckUserFailure$ = this.actions$
            .ofType(usersessionActions.UserSessionTypes.LOGIN_USER_FAILURE)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) { return Observable_1.Observable.of(new errorActions.RemoveError(payload)); });
    }
    return UserSessionEffects;
}());
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Object)
], UserSessionEffects.prototype, "startAppClearUser$", void 0);
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Object)
], UserSessionEffects.prototype, "loginUser$", void 0);
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Object)
], UserSessionEffects.prototype, "logoutUser$", void 0);
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Object)
], UserSessionEffects.prototype, "logoutUserSuccess$", void 0);
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Object)
], UserSessionEffects.prototype, "removeErrorModleCheckUserFailure$", void 0);
UserSessionEffects = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UserServices,
        effects_1.Actions,
        router_1.Router])
], UserSessionEffects);
exports.UserSessionEffects = UserSessionEffects;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhLWxheWVyL25ncngtZGF0YS9lZmZlY3RzL3VzZXJzZXNzaW9uLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBaUM7QUFDakMsaUNBQStCO0FBQy9CLG1DQUFpQztBQUNqQyxvQ0FBa0M7QUFDbEMsc0NBQW9DO0FBQ3BDLHVDQUFxQztBQUNyQyx5Q0FBdUM7QUFDdkMscUNBQW1DO0FBQ25DLGtDQUFnQztBQUNoQywwQ0FBeUM7QUFDekMsc0NBQTJDO0FBRTNDLHlDQUFpRDtBQUNqRCw4Q0FBNkM7QUFDN0MsbUVBQXFFO0FBQ3JFLHVEQUF5RDtBQUN6RCxnRUFBK0Q7QUFLL0QsSUFBYSxrQkFBa0I7SUFnQzdCLDRCQUNvQixZQUEwQixFQUMxQixRQUFpQixFQUNqQixNQUFjO1FBSGxDLGlCQUlpQjtRQUhHLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWpDdkIsdUJBQWtCLEdBQUksdUJBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUM7UUFHbEYsZUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRO2FBQ2xDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQzthQUM5RCxHQUFHLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQzthQUM3QixTQUFTLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBRSxPQUFPLEVBQ1AsWUFBWSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQ3BDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUN0RCxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxFQUhwRixDQUdvRixDQUFDLENBQUM7UUFFbkcsZ0JBQVcsR0FBSSxJQUFJLENBQUMsUUFBUTthQUNwQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUM7YUFDL0QsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUM7YUFDN0IsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQ3BDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixFQUN2RCxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxFQUZ0RixDQUVzRixDQUFDLENBQUM7UUFHckcsdUJBQWtCLEdBQUksSUFBSSxDQUFDLFFBQVE7YUFDM0MsTUFBTSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDO2FBQy9ELEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDO2FBQzdCLFNBQVMsQ0FBQyxVQUFDLE9BQU8sSUFBSSxPQUFBLHVCQUFVLENBQUMsRUFBRSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQTdDLENBQTZDLENBQUMsQ0FBQztRQUc5RCxzQ0FBaUMsR0FBRyxJQUFJLENBQUMsUUFBUTthQUN4RCxNQUFNLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUM7YUFDOUQsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUM7YUFDN0IsU0FBUyxDQUFDLFVBQUEsT0FBTyxJQUFLLE9BQUEsdUJBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxZQUFZLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQXBELENBQW9ELENBQUMsQ0FBQztJQU05RCxDQUFDO0lBR25CLHlCQUFDO0FBQUQsQ0F2Q0EsQUF1Q0MsSUFBQTtBQXJDWTtJQUFWLGdCQUFNLEVBQUU7OzhEQUFtRjtBQUdsRjtJQUFULGdCQUFNLEVBQUU7O3NEQU1vRztBQUVuRztJQUFULGdCQUFNLEVBQUU7O3VEQUtzRztBQUdyRztJQUFULGdCQUFNLEVBQUU7OzhEQUc4RDtBQUc5RDtJQUFULGdCQUFNLEVBQUU7OzZFQUdzRTtBQTlCbkUsa0JBQWtCO0lBRDlCLGlCQUFVLEVBQUU7cUNBa0N1QiwyQkFBWTtRQUNoQixpQkFBTztRQUNULGVBQU07R0FuQ3ZCLGtCQUFrQixDQXVDOUI7QUF2Q1ksZ0RBQWtCIiwiZmlsZSI6ImFwcC9kYXRhLWxheWVyL25ncngtZGF0YS9lZmZlY3RzL3VzZXJzZXNzaW9uLmVmZmVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwVG8nO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tZXJnZU1hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFRvJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdG9BcnJheSc7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvb2YnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlLCBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QgIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAqIGFzIHVzZXJzZXNzaW9uQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3VzZXJzZXNzaW9uLmFjdGlvbnMnO1xuaW1wb3J0ICogYXMgZXJyb3JBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvZXJyb3IuYWN0aW9ucyc7XG5pbXBvcnQgeyBVc2VyU2VydmljZXMgfSBmcm9tICcuLi8uLi9hcGktc2VydmljZXMvdXNlci5zZXJ2aWNlJztcblxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2Vzc2lvbkVmZmVjdHMge1xuXG4gIEBFZmZlY3QoKSAgc3RhcnRBcHBDbGVhclVzZXIkICA9IE9ic2VydmFibGUub2YobmV3IHVzZXJzZXNzaW9uQWN0aW9ucy5BcHBTdGFydExvZ2luQ2xlYXIoKSk7XG5cblxuICBARWZmZWN0KCkgbG9naW5Vc2VyJCA9IHRoaXMuYWN0aW9ucyRcbiAgIC5vZlR5cGUodXNlcnNlc3Npb25BY3Rpb25zLlVzZXJTZXNzaW9uVHlwZXMuTE9HSU5fVVNFUl9BVFRFTVBUKVxuICAgLm1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpXG4gICAuc3dpdGNoTWFwKHBheWxvYWQgPT4gdGhpcy51c2VyU2VydmljZXMubG9naW5Vc2VyKCBwYXlsb2FkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JBY3Rpb25zLkVycm9yVHlwZXMuUkVQT1JUX0VSUk9SLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnNlc3Npb25BY3Rpb25zLlVzZXJTZXNzaW9uVHlwZXMuTE9HSU5fVVNFUl9GQUlMVVJFLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcnNlc3Npb25BY3Rpb25zLlVzZXJTZXNzaW9uVHlwZXMuTE9HSU5fVVNFUl9TVUNDRVNTKSk7XG5cbiAgQEVmZmVjdCgpIGxvZ291dFVzZXIkICA9IHRoaXMuYWN0aW9ucyRcbiAgIC5vZlR5cGUodXNlcnNlc3Npb25BY3Rpb25zLlVzZXJTZXNzaW9uVHlwZXMuTE9HT1VUX1VTRVJfQVRURU1QVClcbiAgIC5tYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKVxuICAgLnN3aXRjaE1hcChwYXlsb2FkID0+IHRoaXMudXNlclNlcnZpY2VzLmxvZ291dFVzZXIoIGVycm9yQWN0aW9ucy5FcnJvclR5cGVzLlJFUE9SVF9FUlJPUixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2Vyc2Vzc2lvbkFjdGlvbnMuVXNlclNlc3Npb25UeXBlcy5MT0dPVVRfVVNFUl9GQUlMVVJFLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzZXNzaW9uQWN0aW9ucy5Vc2VyU2Vzc2lvblR5cGVzLkxPR09VVF9VU0VSX1NVQ0NFU1MpKTtcblxuXG4gIEBFZmZlY3QoKSBsb2dvdXRVc2VyU3VjY2VzcyQgID0gdGhpcy5hY3Rpb25zJFxuICAgLm9mVHlwZSh1c2Vyc2Vzc2lvbkFjdGlvbnMuVXNlclNlc3Npb25UeXBlcy5MT0dPVVRfVVNFUl9TVUNDRVNTKVxuICAgLm1hcChhY3Rpb24gPT4gYWN0aW9uLnBheWxvYWQpXG4gICAuc3dpdGNoTWFwKChwYXlsb2FkKT0+IE9ic2VydmFibGUub2YodGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycpKSk7XG5cblxuIEBFZmZlY3QoKSByZW1vdmVFcnJvck1vZGxlQ2hlY2tVc2VyRmFpbHVyZSQgPSB0aGlzLmFjdGlvbnMkXG4gICAub2ZUeXBlKHVzZXJzZXNzaW9uQWN0aW9ucy5Vc2VyU2Vzc2lvblR5cGVzLkxPR0lOX1VTRVJfRkFJTFVSRSlcbiAgIC5tYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKVxuICAgLnN3aXRjaE1hcChwYXlsb2FkID0+ICBPYnNlcnZhYmxlLm9mKG5ldyBlcnJvckFjdGlvbnMuUmVtb3ZlRXJyb3IocGF5bG9hZCkpKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgICAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZXM6IFVzZXJTZXJ2aWNlcyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICAgICAgICAgICAgICkgeyAgfVxuXG5cbn1cbiJdfQ==
