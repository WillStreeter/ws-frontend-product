import { NgModule, } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';



import { MaterialModule } from '../view-layer/material.module';
//data layer
import { MockNGRxDataModule } from '../data-layer/ngrx-data/mock.ngrx.data.module';

import { NGRxBrokerRegistrationService } from '../business-layer/brokerage/registries/ngrx.broker.registration.service';

//business layer ngrx pubsub-broker brokerage
import { BrokerageModule }   from '../business-layer/brokerage/brokerage.module';
// handle request from viewlayer to the store by way of a brokerage
import { PubSubBrokerModule }   from '../business-layer/pubsub-broker/pubsub.broker.module';


/*
  Page views
 */
import { HomeModule }  from '../view-layer/modules-by-route/home/home.module';
import { NotfoundPageModule }  from '../view-layer/modules-by-route/notfound/notfound.page.module';



/*
     Smart Container (components that reference ngrx Store)
 */
import { AppStageComponent } from './app.stage.component';
import { AppStageRoutingModule } from './app.stage.routing.module';

/*
   Just for development and demonstration purposes I have including the following in this branch
   so as to create a static git hub page for blog/demo presentations... In general, I believe this is not
   a good practice
 */

import { BaseRequestOptions, Http } from '@angular/http';


@NgModule({
  declarations: [ AppStageComponent ],
  imports: [
             CommonModule,
             BrowserModule,
             BrowserAnimationsModule,
             FormsModule,
             ReactiveFormsModule,
             MaterialModule,
             HttpClientModule,
             MockNGRxDataModule.forRoot(),
             PubSubBrokerModule.forRoot(),
             BrokerageModule.forRoot(),
             AppStageRoutingModule,
             HomeModule,
             NotfoundPageModule,
             FlexLayoutModule
           ],
  providers: [
    NGRxBrokerRegistrationService,
     BaseRequestOptions,
    {
      provide: APP_BASE_HREF,
       useValue: '/'
    }
   ],
  bootstrap: [ AppStageComponent ]

})

export class AppStageModule {
    constructor(private ngrxBRS:NGRxBrokerRegistrationService) { }
}
