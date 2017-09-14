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
var portal_effects_1 = require("./effects/portal.effects");
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
            effects_1.EffectsModule.run(portal_effects_1.PortalEffects),
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
