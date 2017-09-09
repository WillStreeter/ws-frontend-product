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
var layoutActions = require("../actions/layout.actions");
var fromRoot = require("../reducers/index");
var DialogStateGuard = (function () {
    function DialogStateGuard(store) {
        this.store = store;
    }
    DialogStateGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        this.store.select(fromRoot.getShowLoginDialog).take(1).subscribe(function (dialogOpen) {
            if (dialogOpen) {
                _this.store.dispatch(new layoutActions.HideLoginDialog());
            }
        });
        return true;
    };
    return DialogStateGuard;
}());
DialogStateGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store])
], DialogStateGuard);
exports.DialogStateGuard = DialogStateGuard;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhLWxheWVyL25ncngtZGF0YS9ndWFyZHMvZGlhbG9nc3RhdGUuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxrQ0FBZ0M7QUFDaEMsb0NBQWtDO0FBQ2xDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFDL0IsdUNBQXFDO0FBQ3JDLG1DQUFpQztBQUNqQyxpQ0FBK0I7QUFDL0Isc0NBQTJDO0FBQzNDLHFDQUFvQztBQUlwQyx5REFBMkQ7QUFDM0QsNENBQThDO0FBRzlDLElBQWEsZ0JBQWdCO0lBRXpCLDBCQUFxQixLQUE0QjtRQUE1QixVQUFLLEdBQUwsS0FBSyxDQUF1QjtJQUFJLENBQUM7SUFFdEQsc0NBQVcsR0FBWCxVQUFZLEtBQTZCLEVBQUUsS0FBMEI7UUFBckUsaUJBU0M7UUFQRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFFLFVBQUMsVUFBVTtZQUNyRSxFQUFFLENBQUEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNaLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksYUFBYSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7WUFDN0QsQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQWRBLEFBY0MsSUFBQTtBQWRZLGdCQUFnQjtJQUQ1QixpQkFBVSxFQUFFO3FDQUdtQixhQUFLO0dBRnhCLGdCQUFnQixDQWM1QjtBQWRZLDRDQUFnQiIsImZpbGUiOiJhcHAvZGF0YS1sYXllci9uZ3J4LWRhdGEvZ3VhcmRzL2RpYWxvZ3N0YXRlLmd1YXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90YWtlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2xldCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7ICBDYW5BY3RpdmF0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5pbXBvcnQgKiBhcyBsYXlvdXRBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvbGF5b3V0LmFjdGlvbnMnO1xuaW1wb3J0ICogYXMgZnJvbVJvb3QgZnJvbSAnLi4vcmVkdWNlcnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGlhbG9nU3RhdGVHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIHN0b3JlOiBTdG9yZTxmcm9tUm9vdC5TdGF0ZT4pIHsgfVxuXG4gICAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogYm9vbGVhbiB7XG5cbiAgICAgICAgdGhpcy5zdG9yZS5zZWxlY3QoZnJvbVJvb3QuZ2V0U2hvd0xvZ2luRGlhbG9nKS50YWtlKDEpLnN1YnNjcmliZSggKGRpYWxvZ09wZW4pID0+IHtcbiAgICAgICAgICAgICAgICBpZihkaWFsb2dPcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGxheW91dEFjdGlvbnMuSGlkZUxvZ2luRGlhbG9nKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuIl19
