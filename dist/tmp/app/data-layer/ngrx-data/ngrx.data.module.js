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
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpWrapperService } from '../api-services/http.wrapper.service';
import { GarmentService } from '../api-services/garment.service';
import { SortingServices } from '../sorting-services/sorting.service';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './reducers/index';
import { ErrorEffects } from './effects/error.effects';
import { GarmentEffects } from './effects/garment.effects';
import { PortalEffects } from './effects/portal.effects';
let NGRxDataModule = NGRxDataModule_1 = class NGRxDataModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('NGRxDataModule already loaded; Import in root module only.');
        }
    }
    static forRoot() {
        return {
            ngModule: NGRxDataModule_1,
            providers: [HttpWrapperService,
                SortingServices,
                GarmentService]
        };
    }
};
NGRxDataModule = NGRxDataModule_1 = __decorate([
    NgModule({
        imports: [CommonModule,
            HttpModule,
            RouterModule,
            StoreModule.provideStore(reducer),
            RouterStoreModule.connectRouter(),
            EffectsModule.run(ErrorEffects),
            EffectsModule.run(PortalEffects),
            EffectsModule.run(GarmentEffects)],
        exports: [],
        providers: [
            HttpWrapperService,
            SortingServices,
            GarmentService
        ]
    }),
    __param(0, Optional()), __param(0, SkipSelf()),
    __metadata("design:paramtypes", [NGRxDataModule])
], NGRxDataModule);
export { NGRxDataModule };
var NGRxDataModule_1;
