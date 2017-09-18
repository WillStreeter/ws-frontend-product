import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { GridMastheadModule } from '../../common-views/grid-masthead/grid.masthead.module';
import { SearchAheadModule } from '../../common-views/search-ahead/search.ahead.module';
import { GarmentGridModule } from '../../common-views/garment-grid/garment.grid.module';
import { PaginatorToolbarModule } from '../../common-views/paginator-toolbar/paginator.toolbar.module'
import { HomeRoutingModule } from './home.routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [HomeRoutingModule,
            GridMastheadModule,
            SearchAheadModule,
            GarmentGridModule,
            PaginatorToolbarModule,
            FlexLayoutModule],
  declarations: [HomeComponent],
  exports: [HomeComponent, FlexLayoutModule]
})
export class HomeModule {

}
