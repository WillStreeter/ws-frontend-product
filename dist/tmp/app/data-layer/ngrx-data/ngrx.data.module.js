"use strict";
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
var NGRxDataModule = (function () {
    function NGRxDataModule(parentModule) {
        if (parentModule) {
            throw new Error('NGRxDataModule already loaded; Import in root module only.');
        }
    }
    NGRxDataModule.forRoot = function () {
        return {
            ngModule: NGRxDataModule,
            providers: [http_wrapper_service_1.HttpWrapperService,
                sorting_service_1.SortingServices,
                garment_service_1.GarmentService]
        };
    };
    return NGRxDataModule;
}());
NGRxDataModule.decorators = [
    { type: core_1.NgModule, args: [{
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
            },] },
];
NGRxDataModule.ctorParameters = function () { return [
    { type: NGRxDataModule, decorators: [{ type: core_1.Optional }, { type: core_1.SkipSelf },] },
]; };
exports.NGRxDataModule = NGRxDataModule;
//# sourceMappingURL=ngrx.data.module.js.map