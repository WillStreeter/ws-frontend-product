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
var garment_service_1 = require("../api-services/garment.service");
var sorting_service_1 = require("../sorting-services/sorting.service");
var router_store_1 = require("@ngrx/router-store");
var store_1 = require("@ngrx/store");
var effects_1 = require("@ngrx/effects");
var index_1 = require("./reducers/index");
var error_effects_1 = require("./effects/error.effects");
var garment_effects_1 = require("./effects/garment.effects");
var NGRxDataModule = NGRxDataModule_1 = (function () {
    function NGRxDataModule(parentModule) {
        if (parentModule) {
            throw new Error('NGRxDataModule already loaded; Import in root module only.');
        }
    }
    NGRxDataModule.forRoot = function () {
        return {
            ngModule: NGRxDataModule_1,
            providers: [http_wrapper_service_1.HttpWrapperService,
                sorting_service_1.SortingServices,
                garment_service_1.GarmentService]
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
            effects_1.EffectsModule.run(garment_effects_1.GarmentEffects)],
        exports: [],
        providers: [
            http_wrapper_service_1.HttpWrapperService,
            sorting_service_1.SortingServices,
            garment_service_1.GarmentService
        ]
    }),
    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
    __metadata("design:paramtypes", [NGRxDataModule])
], NGRxDataModule);
exports.NGRxDataModule = NGRxDataModule;
var NGRxDataModule_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhLWxheWVyL25ncngtZGF0YS9uZ3J4LmRhdGEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWtGO0FBQ2xGLDBDQUErQztBQUMvQyxzQ0FBMkM7QUFDM0MsMENBQStDO0FBRS9DLDZFQUEwRTtBQUMxRSxtRUFBaUU7QUFDakUsdUVBQXdFO0FBS3hFLG1EQUF1RDtBQUN2RCxxQ0FBMEM7QUFDMUMseUNBQThDO0FBQzlDLDBDQUE0QztBQVE1Qyx5REFBdUQ7QUFDdkQsNkRBQTJEO0FBcUIzRCxJQUFhLGNBQWM7SUFFekIsd0JBQW9DLFlBQTRCO1FBQzlELEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyw0REFBNEQsQ0FBQyxDQUFDO1FBQ2hGLENBQUM7SUFDSCxDQUFDO0lBQ00sc0JBQU8sR0FBZDtRQUNFLE1BQU0sQ0FBQztZQUNMLFFBQVEsRUFBRSxnQkFBYztZQUN4QixTQUFTLEVBQUUsQ0FBRSx5Q0FBa0I7Z0JBQ2xCLGlDQUFlO2dCQUNmLGdDQUFjLENBQUM7U0FDN0IsQ0FBQTtJQUNILENBQUM7SUFDSCxxQkFBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBZlksY0FBYztJQWQxQixlQUFRLENBQUM7UUFDTixPQUFPLEVBQUUsQ0FBRSxxQkFBWTtZQUNaLGlCQUFVO1lBQ1YscUJBQVk7WUFDWixtQkFBVyxDQUFDLFlBQVksQ0FBQyxlQUFPLENBQUM7WUFDakMsZ0NBQWlCLENBQUMsYUFBYSxFQUFFO1lBQ2pDLHVCQUFhLENBQUMsR0FBRyxDQUFDLDRCQUFZLENBQUM7WUFDL0IsdUJBQWEsQ0FBQyxHQUFHLENBQUMsZ0NBQWMsQ0FBQyxDQUFFO1FBQzlDLE9BQU8sRUFBRSxFQUFFO1FBQ1gsU0FBUyxFQUFFO1lBQ0UseUNBQWtCO1lBQ2xCLGlDQUFlO1lBQ2YsZ0NBQWM7U0FBRztLQUNqQyxDQUFDO0lBR2EsV0FBQSxlQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsZUFBUSxFQUFFLENBQUE7cUNBQWUsY0FBYztHQUZyRCxjQUFjLENBZTFCO0FBZlksd0NBQWMiLCJmaWxlIjoiYXBwL2RhdGEtbGF5ZXIvbmdyeC1kYXRhL25ncnguZGF0YS5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCAgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSHR0cFdyYXBwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpLXNlcnZpY2VzL2h0dHAud3JhcHBlci5zZXJ2aWNlJztcbmltcG9ydCB7IEdhcm1lbnRTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpLXNlcnZpY2VzL2dhcm1lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBTb3J0aW5nU2VydmljZXMgfSAgIGZyb20gJy4uL3NvcnRpbmctc2VydmljZXMvc29ydGluZy5zZXJ2aWNlJztcblxuLypcbiAgICAgbmdyeCBiYXNlIGxpYnJhcnlcbiAqL1xuaW1wb3J0IHsgUm91dGVyU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9yb3V0ZXItc3RvcmUnO1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBFZmZlY3RzTW9kdWxlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyByZWR1Y2VyIH0gZnJvbSAgJy4vcmVkdWNlcnMvaW5kZXgnO1xuXG5cbi8qXG4gICAgIGVmZmVjdHNcbiAqL1xuXG5cbmltcG9ydCB7IEVycm9yRWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9lcnJvci5lZmZlY3RzJztcbmltcG9ydCB7IEdhcm1lbnRFZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL2dhcm1lbnQuZWZmZWN0cyc7XG5cblxuLypcbiAgIFJvdXRlcyBhbmQgR3VhcmRzXG4gKi9cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbIENvbW1vbk1vZHVsZSxcbiAgICAgICAgICAgICAgIEh0dHBNb2R1bGUsXG4gICAgICAgICAgICAgICBSb3V0ZXJNb2R1bGUsXG4gICAgICAgICAgICAgICBTdG9yZU1vZHVsZS5wcm92aWRlU3RvcmUocmVkdWNlciksXG4gICAgICAgICAgICAgICBSb3V0ZXJTdG9yZU1vZHVsZS5jb25uZWN0Um91dGVyKCksXG4gICAgICAgICAgICAgICBFZmZlY3RzTW9kdWxlLnJ1bihFcnJvckVmZmVjdHMpLFxuICAgICAgICAgICAgICAgRWZmZWN0c01vZHVsZS5ydW4oR2FybWVudEVmZmVjdHMpIF0sXG4gICAgZXhwb3J0czogW10sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgIEh0dHBXcmFwcGVyU2VydmljZSxcbiAgICAgICAgICAgICAgICAgU29ydGluZ1NlcnZpY2VzLFxuICAgICAgICAgICAgICAgICBHYXJtZW50U2VydmljZSAgXVxufSlcbmV4cG9ydCBjbGFzcyBOR1J4RGF0YU1vZHVsZSB7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBOR1J4RGF0YU1vZHVsZSkge1xuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTkdSeERhdGFNb2R1bGUgYWxyZWFkeSBsb2FkZWQ7IEltcG9ydCBpbiByb290IG1vZHVsZSBvbmx5LicpO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOR1J4RGF0YU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogWyBIdHRwV3JhcHBlclNlcnZpY2UsXG4gICAgICAgICAgICAgICAgICAgU29ydGluZ1NlcnZpY2VzLFxuICAgICAgICAgICAgICAgICAgIEdhcm1lbnRTZXJ2aWNlXVxuICAgIH1cbiAgfVxufSJdfQ==
