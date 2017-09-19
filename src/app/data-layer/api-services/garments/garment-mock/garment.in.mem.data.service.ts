/**
 * Created by willstreeter on 9/19/17.
 */
import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api/interfaces';

// tslint:disable:no-unused-variable
import { Observable }  from 'rxjs/Observable';
import { of }          from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import * as garmentData from './mock-data/garments.json';
// tslint:enable:no-unused-variable

@Injectable()
export class GarmentInMemDataService implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo) {

    const products = JSON.parse(garmentData.garments);

    const unproductive: any[] = [ ];

    // entities with string ids that look like numbers
    const stringers = JSON.parse(garmentData.stringers);

    // default returnType
    let returnType  = 'object';
    // let returnType  = 'observable';
    // let returnType  = 'promise';

    // demonstrate POST commands/resetDb
    // this example clears the collections if the request body tells it to do so
    if (reqInfo) {
      const body = reqInfo.utils.getJsonBody(reqInfo.req) || {};
      if (body.clear === true) {
        products.length = 0;
        unproductive.length = 0;
        stringers.length = 0;
      }

      // 'returnType` can be 'object' | 'observable' | 'promise'
      returnType = body.returnType || 'object';
    }
    const db = { products, unproductive, stringers };

    switch (returnType) {
      case ('observable'):
        return of(db).delay(10);
      case ('promise'):
        return new Promise(resolve => {
          setTimeout(() => resolve(db), 10);
        });
      default:
        return db;
    }
  }
}