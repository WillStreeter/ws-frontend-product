import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { GarmentGridModule } from '../../common-views/garmentGrid/garment.grid.module';
import { HomeRoutingModule } from './home.routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [HomeRoutingModule,
            GarmentGridModule,
            FlexLayoutModule],
  declarations: [HomeComponent],
  exports: [HomeComponent, FlexLayoutModule]
})
export class HomeModule { }
