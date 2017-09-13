var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { GridMastheadModule } from '../../common-views/grid-masthead/grid.masthead.module';
import { SearchAheadModule } from '../../common-views/search-ahead/search.ahead.module';
import { GarmentGridModule } from '../../common-views/garmentGrid/garment.grid.module';
import { PaginatorToolbarModule } from '../../common-views/paginator-toolbar/paginator.toolbar.module';
import { HomeRoutingModule } from './home.routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
let HomeModule = class HomeModule {
};
HomeModule = __decorate([
    NgModule({
        imports: [HomeRoutingModule,
            GridMastheadModule,
            SearchAheadModule,
            GarmentGridModule,
            PaginatorToolbarModule,
            FlexLayoutModule],
        declarations: [HomeComponent],
        exports: [HomeComponent, FlexLayoutModule]
    })
], HomeModule);
export { HomeModule };
