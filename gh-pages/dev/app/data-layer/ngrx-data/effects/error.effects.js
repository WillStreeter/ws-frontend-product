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
var ErrorEffects = (function () {
    function ErrorEffects(actions$, router) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.catchAllRemoteError$ = this.actions$
            .ofType(errorActions.ErrorTypes.REPORT_ERROR)
            .map(function (action) { return action.payload; })
            .switchMap(function (payload) {
            return Observable_1.Observable.of(_this.router.navigateByUrl('/error'));
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhLWxheWVyL25ncngtZGF0YS9lZmZlY3RzL2Vycm9yLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBNkM7QUFDN0MsaUNBQStCO0FBQy9CLHVDQUFxQztBQUNyQyxrQ0FBZ0M7QUFFaEMsc0NBQTJDO0FBQzNDLDBDQUF5QztBQUV6Qyx5Q0FBaUQ7QUFHakQsdURBQXlEO0FBS3pELElBQWEsWUFBWTtJQWtDckIsc0JBQ1ksUUFBaUIsRUFDakIsTUFBYztRQUYxQixpQkFJTTtRQUhNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWpDbkIseUJBQW9CLEdBQUcsSUFBSSxDQUFDLFFBQVE7YUFDNUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO2FBQzVDLEdBQUcsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxDQUFDO2FBQzdCLFNBQVMsQ0FBQyxVQUFBLE9BQU87WUF1QmhCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEVBQUUsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzVELENBQUMsQ0FBQyxDQUFDO0lBUUksQ0FBQztJQUdWLG1CQUFDO0FBQUQsQ0F6Q0EsQUF5Q0MsSUFBQTtBQXRDVTtJQUFULGdCQUFNLEVBQUU7OzBEQTJCTDtBQTlCUSxZQUFZO0lBRHhCLGlCQUFVLEVBQUU7cUNBb0NhLGlCQUFPO1FBQ1QsZUFBTTtHQXBDakIsWUFBWSxDQXlDeEI7QUF6Q1ksb0NBQVkiLCJmaWxlIjoiYXBwL2RhdGEtbGF5ZXIvbmdyeC1kYXRhL2VmZmVjdHMvZXJyb3IuZWZmZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0ICB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgRXJyb3JNb2RlbCB9IGZyb20gJy4uLy4uLy4uL2J1c2luZXNzLWxheWVyL21vZGVscy9lcnJvci5tb2RlbCc7XG5cbmltcG9ydCAqIGFzIGVycm9yQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2Vycm9yLmFjdGlvbnMnO1xuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVycm9yRWZmZWN0cyB7XG5cblxuIEBFZmZlY3QoKSBjYXRjaEFsbFJlbW90ZUVycm9yJCA9IHRoaXMuYWN0aW9ucyRcbiAgLm9mVHlwZShlcnJvckFjdGlvbnMuRXJyb3JUeXBlcy5SRVBPUlRfRVJST1IpXG4gIC5tYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKVxuICAuc3dpdGNoTWFwKHBheWxvYWQgPT4ge1xuICAgIC8vIGxldCBvYnM7XG5cbiAgICAvLyBzd2l0Y2gocGF5bG9hZC5hY3Rpb25fdHlwZSkge1xuICAgIC8vXG4gICAgLy8gIGNhc2UgcHJvZmlsZUFjdGlvbnMuUHJvZmlsZVR5cGVzLkNIRUNLX1VTRVJfUFJPRklMRV9OQU1FX0ZBSUxVUkU6XG4gICAgLy8gICBpZih0aGlzLnJvdXRlci51cmwuaW5kZXhPZigncmVnaXN0ZXInKT4wKSB7XG4gICAgLy8gICAgIG9icyA9IE9ic2VydmFibGUub2YoIG5ldyBwcm9maWxlQWN0aW9ucy5DaGVja1VzZXJQcm9maWxlTmFtZUZhaWx1cmUoPEVycm9yTW9kZWw+IHBheWxvYWQpKTtcbiAgICAvLyAgIH1lbHNlIHtcbiAgICAvLyAgICAgb2JzID0gT2JzZXJ2YWJsZS5vZih0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvZXJyb3InKSk7XG4gICAgLy8gICB9XG4gICAgLy8gIGJyZWFrO1xuICAgIC8vXG4gICAgLy8gIGNhc2UgdXNlcnNlc3Npb25BY3Rpb25zLlVzZXJTZXNzaW9uVHlwZXMuTE9HSU5fVVNFUl9GQUlMVVJFOlxuICAgIC8vICAgIG9icyA9IE9ic2VydmFibGUub2YobmV3IHVzZXJzZXNzaW9uQWN0aW9ucy5Vc2VyTG9naW5GYWlsdXJlKDxFcnJvck1vZGVsPiBwYXlsb2FkKSk7XG4gICAgLy8gIGJyZWFrO1xuICAgIC8vXG4gICAgLy8gIGRlZmF1bHQ6e1xuICAgIC8vICAgb2JzID0gT2JzZXJ2YWJsZS5vZih0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvZXJyb3InKSk7XG4gICAgLy8gIH1cblxuXG4gICAvLyB9XG4gICAgcmV0dXJuIE9ic2VydmFibGUub2YodGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2Vycm9yJykpO1xuICB9KTtcblxuXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuXG4gICAgKSB7ICB9XG5cblxufVxuIl19
