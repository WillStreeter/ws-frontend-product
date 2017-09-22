/**
 * Created by williestreeter on 9/19/17.
 */
import { ModuleWithProviders,  NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HttpGarmentService } from '../api-services/garments/http.garment.service';
import { HttpWrapperService } from '../api-services/http.wrapper.service';
import { SortingServices }   from '../sorting-services/sorting.service';
import { GarmentInMemDataService } from '../api-services/garments/garment-mock/garment.in.mem.data.service';
import { InMemoryWebApiModule  } from 'angular-in-memory-web-api';

/*
     ngrx base library
 */
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from  './reducers/index';


/*
     effects
 */


import { ErrorEffects } from './effects/error.effects';
import { GarmentEffects } from './effects/garment.effects';
import { PortalEffects } from './effects/portal.effects';


/*
   Routes and Guards
 */

@NgModule({
    imports: [ CommonModule,
               HttpClientModule,
               StoreModule.forRoot(reducers, { metaReducers }),
               InMemoryWebApiModule.forRoot(GarmentInMemDataService),
               EffectsModule.forRoot([]),
               EffectsModule.forFeature([ErrorEffects,
                                      GarmentEffects,
                                      PortalEffects]) ],
    exports: [],
    providers: [
                 HttpWrapperService,
                 SortingServices,
                 HttpGarmentService  ]
})
export class MockNGRxDataModule {

  constructor(@Optional() @SkipSelf() parentModule: MockNGRxDataModule) {
    if (parentModule) {
      throw new Error('MockNGRxDataModule already loaded; Import in root module only.');
    }
  }

  static forRoot(): ModuleWithProviders  {
    return {
      ngModule: MockNGRxDataModule,
      providers: [ HttpWrapperService,
                   SortingServices,
                   HttpGarmentService]
    }
  }
}