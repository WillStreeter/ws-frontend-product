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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var http_wrapper_service_1 = require("../api-services/http.wrapper.service");
var user_service_1 = require("../api-services/user.service");
var router_store_1 = require("@ngrx/router-store");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var index_1 = require("./reducers/index");
var error_effects_1 = require("./effects/error.effects");
var usersession_effects_1 = require("./effects/usersession.effects");
var profile_effects_1 = require("./effects/profile.effects");
var index_2 = require("./guards/index");
var NGRxDataModule = NGRxDataModule_1 = (function () {
    function NGRxDataModule(parentModule) {
        if (parentModule) {
            throw new Error('NGRxDataModule already loaded; Import in root module only.');
        }
    }
    NGRxDataModule.forRoot = function () {
        return {
            ngModule: NGRxDataModule_1,
            providers: [index_2.UsersessionGuard,
                index_2.DialogStateGuard,
                http_wrapper_service_1.HttpWrapperService,
                user_service_1.UserServices]
        };
    };
    return NGRxDataModule;
}());
NGRxDataModule = NGRxDataModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule,
            http_1.HttpModule,
            router_1.RouterModule,
            store_1.StoreModule.provideStore(index_1.reducer),
            router_store_1.RouterStoreModule.connectRouter(),
            effects_1.EffectsModule.run(error_effects_1.ErrorEffects),
            effects_1.EffectsModule.run(profile_effects_1.ProfileEffects),
            effects_1.EffectsModule.run(usersession_effects_1.UserSessionEffects)],
        exports: [],
        providers: [index_2.UsersessionGuard,
            index_2.DialogStateGuard,
            http_wrapper_service_1.HttpWrapperService,
            user_service_1.UserServices]
    }),
    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
    __metadata("design:paramtypes", [NGRxDataModule])
], NGRxDataModule);
exports.NGRxDataModule = NGRxDataModule;
var NGRxDataModule_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhLWxheWVyL25ncngtZGF0YS9uZ3J4LmRhdGEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWtGO0FBQ2xGLDBDQUErQztBQUMvQyxzQ0FBMkM7QUFDM0MsMENBQStDO0FBRS9DLDZFQUEwRTtBQUMxRSw2REFBNEQ7QUFLNUQsbURBQXVEO0FBQ3ZELHFDQUEwQztBQUMxQyx5Q0FBOEM7QUFDOUMsMENBQTRDO0FBUTVDLHlEQUF1RDtBQUN2RCxxRUFBbUU7QUFDbkUsNkRBQTJEO0FBSzNELHdDQUFvRTtBQWlCcEUsSUFBYSxjQUFjO0lBRXpCLHdCQUFvQyxZQUE0QjtRQUM5RCxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsNERBQTRELENBQUMsQ0FBQztRQUNoRixDQUFDO0lBQ0gsQ0FBQztJQUNNLHNCQUFPLEdBQWQ7UUFDRSxNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsZ0JBQWM7WUFDeEIsU0FBUyxFQUFFLENBQUUsd0JBQWdCO2dCQUNoQix3QkFBZ0I7Z0JBQ2hCLHlDQUFrQjtnQkFDbEIsMkJBQVksQ0FBQztTQUMzQixDQUFBO0lBQ0gsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FoQkEsQUFnQkMsSUFBQTtBQWhCWSxjQUFjO0lBZjFCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRSxDQUFFLHFCQUFZO1lBQ1osaUJBQVU7WUFDVixxQkFBWTtZQUNaLG1CQUFXLENBQUMsWUFBWSxDQUFDLGVBQU8sQ0FBQztZQUNqQyxnQ0FBaUIsQ0FBQyxhQUFhLEVBQUU7WUFDakMsdUJBQWEsQ0FBQyxHQUFHLENBQUMsNEJBQVksQ0FBQztZQUMvQix1QkFBYSxDQUFDLEdBQUcsQ0FBQyxnQ0FBYyxDQUFDO1lBQ2pDLHVCQUFhLENBQUMsR0FBRyxDQUFDLHdDQUFrQixDQUFDLENBQUU7UUFDbEQsT0FBTyxFQUFFLEVBQUU7UUFDWCxTQUFTLEVBQUUsQ0FBRSx3QkFBZ0I7WUFDaEIsd0JBQWdCO1lBQ2hCLHlDQUFrQjtZQUNsQiwyQkFBWSxDQUFHO0tBQy9CLENBQUM7SUFHYSxXQUFBLGVBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxlQUFRLEVBQUUsQ0FBQTtxQ0FBZSxjQUFjO0dBRnJELGNBQWMsQ0FnQjFCO0FBaEJZLHdDQUFjIiwiZmlsZSI6ImFwcC9kYXRhLWxheWVyL25ncngtZGF0YS9uZ3J4LmRhdGEubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEh0dHBXcmFwcGVyU2VydmljZSB9IGZyb20gJy4uL2FwaS1zZXJ2aWNlcy9odHRwLndyYXBwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyU2VydmljZXMgfSBmcm9tICcuLi9hcGktc2VydmljZXMvdXNlci5zZXJ2aWNlJztcblxuLypcbiAgICAgbmdyeCBiYXNlIGxpYnJhcnlcbiAqL1xuaW1wb3J0IHsgUm91dGVyU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9yb3V0ZXItc3RvcmUnO1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyByZWR1Y2VyIH0gZnJvbSAgJy4vcmVkdWNlcnMvaW5kZXgnO1xuXG5cbi8qXG4gICAgIGVmZmVjdHNcbiAqL1xuXG5cbmltcG9ydCB7IEVycm9yRWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9lcnJvci5lZmZlY3RzJztcbmltcG9ydCB7IFVzZXJTZXNzaW9uRWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy91c2Vyc2Vzc2lvbi5lZmZlY3RzJztcbmltcG9ydCB7IFByb2ZpbGVFZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL3Byb2ZpbGUuZWZmZWN0cyc7XG5cbi8qXG4gICBSb3V0ZXMgYW5kIEd1YXJkc1xuICovXG5pbXBvcnQgeyBVc2Vyc2Vzc2lvbkd1YXJkLCBEaWFsb2dTdGF0ZUd1YXJkIH0gZnJvbSAnLi9ndWFyZHMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFsgQ29tbW9uTW9kdWxlLFxuICAgICAgICAgICAgICAgSHR0cE1vZHVsZSxcbiAgICAgICAgICAgICAgIFJvdXRlck1vZHVsZSxcbiAgICAgICAgICAgICAgIFN0b3JlTW9kdWxlLnByb3ZpZGVTdG9yZShyZWR1Y2VyKSxcbiAgICAgICAgICAgICAgIFJvdXRlclN0b3JlTW9kdWxlLmNvbm5lY3RSb3V0ZXIoKSxcbiAgICAgICAgICAgICAgIEVmZmVjdHNNb2R1bGUucnVuKEVycm9yRWZmZWN0cyksXG4gICAgICAgICAgICAgICBFZmZlY3RzTW9kdWxlLnJ1bihQcm9maWxlRWZmZWN0cyksXG4gICAgICAgICAgICAgICBFZmZlY3RzTW9kdWxlLnJ1bihVc2VyU2Vzc2lvbkVmZmVjdHMpIF0sXG4gICAgZXhwb3J0czogW10sXG4gICAgcHJvdmlkZXJzOiBbIFVzZXJzZXNzaW9uR3VhcmQsXG4gICAgICAgICAgICAgICAgIERpYWxvZ1N0YXRlR3VhcmQsXG4gICAgICAgICAgICAgICAgIEh0dHBXcmFwcGVyU2VydmljZSxcbiAgICAgICAgICAgICAgICAgVXNlclNlcnZpY2VzICBdXG59KVxuZXhwb3J0IGNsYXNzIE5HUnhEYXRhTW9kdWxlIHtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IE5HUnhEYXRhTW9kdWxlKSB7XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOR1J4RGF0YU1vZHVsZSBhbHJlYWR5IGxvYWRlZDsgSW1wb3J0IGluIHJvb3QgbW9kdWxlIG9ubHkuJyk7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMgIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5HUnhEYXRhTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbIFVzZXJzZXNzaW9uR3VhcmQsXG4gICAgICAgICAgICAgICAgICAgRGlhbG9nU3RhdGVHdWFyZCxcbiAgICAgICAgICAgICAgICAgICBIdHRwV3JhcHBlclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgICAgVXNlclNlcnZpY2VzXVxuICAgIH1cbiAgfVxufSJdfQ==
