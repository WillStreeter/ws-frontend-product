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
require("rxjs/add/operator/take");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/let");
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var router_1 = require("@angular/router");
var layoutActions = require("../actions/layout.actions");
var UsersessionGuard = (function () {
    function UsersessionGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    UsersessionGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('Authorized')) {
            if (state.url.indexOf('register') > 0) {
                this.router.navigateByUrl('/');
                return false;
            }
            else {
                return true;
            }
        }
        else if (state.url.indexOf('surprise') < 0) {
            return true;
        }
        else {
            this.store.dispatch(new layoutActions.ShowLoginDialogAndSetRequestedURL(state.url));
            return false;
        }
    };
    return UsersessionGuard;
}());
UsersessionGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store, router_1.Router])
], UsersessionGuard);
exports.UsersessionGuard = UsersessionGuard;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhLWxheWVyL25ncngtZGF0YS9ndWFyZHMvdXNlcnNlc3Npb24uZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxrQ0FBZ0M7QUFDaEMsb0NBQWtDO0FBQ2xDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFDL0IsdUNBQXFDO0FBQ3JDLG1DQUFpQztBQUNqQyxpQ0FBK0I7QUFDL0Isc0NBQTJDO0FBQzNDLHFDQUFvQztBQUNwQywwQ0FBa0c7QUFHbEcseURBQTJEO0FBSTNELElBQWEsZ0JBQWdCO0lBRXpCLDBCQUFxQixLQUE0QixFQUFVLE1BQWM7UUFBcEQsVUFBSyxHQUFMLEtBQUssQ0FBdUI7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUksQ0FBQztJQUU5RSxzQ0FBVyxHQUFYLFVBQVksS0FBNkIsRUFBRSxLQUEwQjtRQUNqRSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUdyQyxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUdqQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDL0IsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUVqQixDQUFDO1lBQUEsSUFBSSxDQUFDLENBQUM7Z0JBRUgsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixDQUFDO1FBQ0wsQ0FBQztRQUFBLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRW5DLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDcEIsQ0FBQztRQUFBLElBQUksQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxhQUFhLENBQUMsaUNBQWlDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDcEYsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO0lBQ0wsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0EzQkEsQUEyQkMsSUFBQTtBQTNCWSxnQkFBZ0I7SUFENUIsaUJBQVUsRUFBRTtxQ0FHbUIsYUFBSyxFQUFrQyxlQUFNO0dBRmhFLGdCQUFnQixDQTJCNUI7QUEzQlksNENBQWdCIiwiZmlsZSI6ImFwcC9kYXRhLWxheWVyL25ncngtZGF0YS9ndWFyZHMvdXNlcnNlc3Npb24uZ3VhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3Rha2UnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbyc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbGV0JztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBDYW5BY3RpdmF0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5pbXBvcnQgKiBhcyBsYXlvdXRBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvbGF5b3V0LmFjdGlvbnMnO1xuaW1wb3J0ICogYXMgZnJvbVJvb3QgZnJvbSAnLi4vcmVkdWNlcnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlcnNlc3Npb25HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIHN0b3JlOiBTdG9yZTxmcm9tUm9vdC5TdGF0ZT4sIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG4gICAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQXV0aG9yaXplZCcpKSB7XG4gICAgICAgICAgICAvLyBsb2dnZWQgaW4gc28gcmV0dXJuIHRydWVcblxuICAgICAgICAgICAgaWYoc3RhdGUudXJsLmluZGV4T2YoJ3JlZ2lzdGVyJyk+MCkge1xuICAgICAgICAgICAgICAgLy9JIG9ubHkgd2FudCBzb21lIG9uZSByZWdpc3RlciBvbmNlIHNvIEkgd2lsbCBwcmV2ZW50IHRoZW0gZnJvbSBnb2luZyB0byByZWdpc3RlclxuICAgICAgICAgICAgICAgLy92aWV3IGlmIHRoZXkgYXJlIGxvZ2dlZCBpblxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAvL2l0IGlzIGFzc3VtZWQgdGhleSB3YW50IHRvIGFjY2Nlc3Mgc3VycGlzZSB2aWV3XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIGlmKHN0YXRlLnVybC5pbmRleE9mKCdzdXJwcmlzZScpPDApIHtcbiAgICAgICAgICAgICAgICAvL2l0IGlzIGFzc3VtZWQgdGhhdCB5b3UgYXJlIHRyeWluZyB0byBnZXQgdG8gcmVnaXN0ZXIgcGFnZVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAvLyBub3QgbG9nZ2VkIGluIHNvIHJlZGlyZWN0IHRvIGxvZ2luIHBhZ2Ugd2l0aCB0aGUgcmV0dXJuIHVybFxuICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgbGF5b3V0QWN0aW9ucy5TaG93TG9naW5EaWFsb2dBbmRTZXRSZXF1ZXN0ZWRVUkwoc3RhdGUudXJsKSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
