import { ModuleWithProviders,  NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { HttpWrapperService } from '../api-services/http.wrapper.service';
import { GarmentService } from '../api-services/garment.service';
import { SortingServices }   from '../sorting-services/sorting.service';

/*
     ngrx base library
 */
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from  './reducers/index';


/*
     effects
 */


import { ErrorEffects } from './effects/error.effects';
import { GarmentEffects } from './effects/garment.effects';


/*
   Routes and Guards
 */

@NgModule({
    imports: [ CommonModule,
               HttpModule,
               RouterModule,
               StoreModule.provideStore(reducer),
               RouterStoreModule.connectRouter(),
               EffectsModule.run(ErrorEffects),
               EffectsModule.run(GarmentEffects) ],
    exports: [],
    providers: [
                 HttpWrapperService,
                 SortingServices,
                 GarmentService  ]
})
export class NGRxDataModule {

  constructor(@Optional() @SkipSelf() parentModule: NGRxDataModule) {
    if (parentModule) {
      throw new Error('NGRxDataModule already loaded; Import in root module only.');
    }
  }
  static forRoot(): ModuleWithProviders  {
    return {
      ngModule: NGRxDataModule,
      providers: [ HttpWrapperService,
                   SortingServices,
                   GarmentService]
    }
  }
}