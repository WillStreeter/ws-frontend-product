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
require("rxjs/add/operator/switchMap");
require("rxjs/add/observable/of");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var effects_1 = require("@ngrx/effects");
var errorActions = require("../actions/error.actions");
var profileActions = require("../actions/profile.actions");
var usersessionActions = require("../actions/usersession.actions");
var ErrorEffects = (function () {
    function ErrorEffects(actions$, router) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.catchAllRemoteError$ = this.actions$
            .ofType(errorActions.ErrorTypes.REPORT_ERROR)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) {
            var obs;
            switch (payload.action_type) {
                case profileActions.ProfileTypes.CHECK_USER_PROFILE_NAME_FAILURE:
                    if (_this.router.url.indexOf('register') > 0) {
                        obs = Observable_1.Observable.of(new profileActions.CheckUserProfileNameFailure(payload));
                    }
                    else {
                        obs = Observable_1.Observable.of(_this.router.navigateByUrl('/error'));
                    }
                    break;
                case usersessionActions.UserSessionTypes.LOGIN_USER_FAILURE:
                    obs = Observable_1.Observable.of(new usersessionActions.UserLoginFailure(payload));
                    break;
                default: {
                    obs = Observable_1.Observable.of(_this.router.navigateByUrl('/error'));
                }
            }
            return obs;
        });
    }
    return ErrorEffects;
}());
__decorate([
    effects_1.Effect(),
    __metadata("design:type", Object)
], ErrorEffects.prototype, "catchAllRemoteError$", void 0);
ErrorEffects = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [effects_1.Actions,
        router_1.Router])
], ErrorEffects);
exports.ErrorEffects = ErrorEffects;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhLWxheWVyL25ncngtZGF0YS9lZmZlY3RzL2Vycm9yLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBNkM7QUFDN0MsaUNBQStCO0FBQy9CLHVDQUFxQztBQUNyQyxrQ0FBZ0M7QUFFaEMsc0NBQTJDO0FBQzNDLDBDQUF5QztBQUV6Qyx5Q0FBaUQ7QUFHakQsdURBQXlEO0FBQ3pELDJEQUE2RDtBQUM3RCxtRUFBcUU7QUFLckUsSUFBYSxZQUFZO0lBa0NyQixzQkFDWSxRQUFpQixFQUNqQixNQUFjO1FBRjFCLGlCQUlNO1FBSE0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBakNuQix5QkFBb0IsR0FBRyxJQUFJLENBQUMsUUFBUTthQUM1QyxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7YUFDNUMsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUM7YUFDN0IsU0FBUyxDQUFDLFVBQUEsT0FBTztZQUNoQixJQUFJLEdBQUcsQ0FBQztZQUVSLE1BQU0sQ0FBQSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUU1QixLQUFLLGNBQWMsQ0FBQyxZQUFZLENBQUMsK0JBQStCO29CQUMvRCxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDekMsR0FBRyxHQUFHLHVCQUFVLENBQUMsRUFBRSxDQUFFLElBQUksY0FBYyxDQUFDLDJCQUEyQixDQUFjLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQzdGLENBQUM7b0JBQUEsSUFBSSxDQUFDLENBQUM7d0JBQ0wsR0FBRyxHQUFHLHVCQUFVLENBQUMsRUFBRSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQzNELENBQUM7b0JBQ0YsS0FBSyxDQUFDO2dCQUVOLEtBQUssa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCO29CQUN6RCxHQUFHLEdBQUcsdUJBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBYyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNyRixLQUFLLENBQUM7Z0JBRU4sU0FBUSxDQUFDO29CQUNQLEdBQUcsR0FBRyx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUMzRCxDQUFDO1lBR0YsQ0FBQztZQUNELE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztJQVFJLENBQUM7SUFHVixtQkFBQztBQUFELENBekNBLEFBeUNDLElBQUE7QUF0Q1U7SUFBVCxnQkFBTSxFQUFFOzswREEyQkw7QUE5QlEsWUFBWTtJQUR4QixpQkFBVSxFQUFFO3FDQW9DYSxpQkFBTztRQUNULGVBQU07R0FwQ2pCLFlBQVksQ0F5Q3hCO0FBekNZLG9DQUFZIiwiZmlsZSI6ImFwcC9kYXRhLWxheWVyL25ncngtZGF0YS9lZmZlY3RzL2Vycm9yLmVmZmVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwJztcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9vZic7XG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCAgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEVycm9yTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9idXNpbmVzcy1sYXllci9tb2RlbHMvZXJyb3IubW9kZWwnO1xuXG5pbXBvcnQgKiBhcyBlcnJvckFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9lcnJvci5hY3Rpb25zJztcbmltcG9ydCAqIGFzIHByb2ZpbGVBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvcHJvZmlsZS5hY3Rpb25zJztcbmltcG9ydCAqIGFzIHVzZXJzZXNzaW9uQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3VzZXJzZXNzaW9uLmFjdGlvbnMnO1xuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVycm9yRWZmZWN0cyB7XG5cblxuIEBFZmZlY3QoKSBjYXRjaEFsbFJlbW90ZUVycm9yJCA9IHRoaXMuYWN0aW9ucyRcbiAgLm9mVHlwZShlcnJvckFjdGlvbnMuRXJyb3JUeXBlcy5SRVBPUlRfRVJST1IpXG4gIC5tYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKVxuICAuc3dpdGNoTWFwKHBheWxvYWQgPT4ge1xuICAgIGxldCBvYnM7XG5cbiAgICBzd2l0Y2gocGF5bG9hZC5hY3Rpb25fdHlwZSkge1xuXG4gICAgIGNhc2UgcHJvZmlsZUFjdGlvbnMuUHJvZmlsZVR5cGVzLkNIRUNLX1VTRVJfUFJPRklMRV9OQU1FX0ZBSUxVUkU6XG4gICAgICBpZih0aGlzLnJvdXRlci51cmwuaW5kZXhPZigncmVnaXN0ZXInKT4wKSB7XG4gICAgICAgIG9icyA9IE9ic2VydmFibGUub2YoIG5ldyBwcm9maWxlQWN0aW9ucy5DaGVja1VzZXJQcm9maWxlTmFtZUZhaWx1cmUoPEVycm9yTW9kZWw+IHBheWxvYWQpKTtcbiAgICAgIH1lbHNlIHtcbiAgICAgICAgb2JzID0gT2JzZXJ2YWJsZS5vZih0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvZXJyb3InKSk7XG4gICAgICB9XG4gICAgIGJyZWFrO1xuXG4gICAgIGNhc2UgdXNlcnNlc3Npb25BY3Rpb25zLlVzZXJTZXNzaW9uVHlwZXMuTE9HSU5fVVNFUl9GQUlMVVJFOlxuICAgICAgIG9icyA9IE9ic2VydmFibGUub2YobmV3IHVzZXJzZXNzaW9uQWN0aW9ucy5Vc2VyTG9naW5GYWlsdXJlKDxFcnJvck1vZGVsPiBwYXlsb2FkKSk7XG4gICAgIGJyZWFrO1xuXG4gICAgIGRlZmF1bHQ6e1xuICAgICAgIG9icyA9IE9ic2VydmFibGUub2YodGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2Vycm9yJykpO1xuICAgICB9XG5cblxuICAgIH1cbiAgICByZXR1cm4gb2JzO1xuICB9KTtcblxuXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuXG4gICAgKSB7ICB9XG5cblxufVxuIl19
