import {NgModule} from '@angular/core';
import {CommonModule,
        HttpClientTestingModule,
        HttpBackend,} from '@angular/common';
import {BaseRequestOptions, Http} from '@angular/http';
import {HttpClientTestingBackend, HttpTestingController } from '@angular/common/http/testing';
import {mockBackendFactory} from './mock-backend-factory';

@NgModule({
  imports: [
    CommonModule,
    HttpClientTestingModule
  ],
  declarations: [],
  providers: [
    MockBackend,
    BaseRequestOptions,
    {
      provide: Http,
      deps: [MockBackend, BaseRequestOptions],
      useFactory: mockBackendFactory
    }
  ]
})

export class MockBackendModule {
}
