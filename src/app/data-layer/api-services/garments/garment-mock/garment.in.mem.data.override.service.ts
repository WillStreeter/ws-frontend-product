/**
 * Created by willstreeter on 9/19/17.
 */
import { Injectable } from '@angular/core';

import { URLSearchParams } from '@angular/http';

// tslint:disable-next-line:no-unused-variable
import { Observable } from 'rxjs/Observable';

import { ParsedRequestUrl,
         RequestInfo,
         RequestInfoUtilities,
         ResponseOptions } from 'angular-in-memory-web-api/interfaces';

import { getStatusText, STATUS } from 'angular-in-memory-web-api/http-status-codes';

import { GarmentInMemDataService } from './garment.in.mem.data.service';


import * as garmentData from './mock-data/garments.json';

const extras = JSON.parse(garmentData.trist);

// Pseudo guid generator
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

@Injectable()
export class GarmentInMemDataOverrideService extends GarmentInMemDataService {

  // Overrides id generator and delivers next available `id`, starting with 1001.
  genId<T extends { id: any }>(collection: T[], collectionName: string): any {
    if (collectionName === 'unproductive') {
      console.log('genId override for \'unproductive\'');
      return guid();
    } else if (collection) {
      console.log(`genId override for '${collectionName}'`);
      return 1 + collection.reduce((prev, curr) => Math.max(prev, curr.id || 0), 1000);
    }
  }

  // HTTP GET interceptor
  get(reqInfo: RequestInfo) {
    const collectionName = reqInfo.collectionName;
    if (collectionName === 'products') {
      return this.getExtras(reqInfo);
    }
    return undefined; // let the default GET handle all others
  }

  // HTTP GET interceptor handles requests for extras
  private getExtras(reqInfo: RequestInfo) {
    return reqInfo.utils.createResponse$(() => {
      console.log('HTTP GET override');

      const collection = extras.slice();
      const id = reqInfo.id;

      // tslint:disable-next-line:triple-equals
      const data = id == undefined ? collection : reqInfo.utils.findById(collection, id);

      const options: ResponseOptions = data ?
        {
          body: { data },
          status: STATUS.OK
        } :
        {
          body: { error: `'Extras' with id='${id}' not found` },
          status: STATUS.NOT_FOUND
        };
      return this.finishOptions(options, reqInfo);
    });
  }

  // parseRequestUrl override
  // Do this to manipulate the request URL or the parsed result
  // into something your data store can handle.
  // This example turns a request for `/foo/heroes` into just `/heroes`.
  // It leaves other URLs untouched and forwards to the default parser.
  // It also logs the result of the default parser.
  parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {
    const newUrl = url.replace(/\/foo\/garments/, '/garments');
    // console.log('newUrl', newUrl);
    const parsed = utils.parseRequestUrl(newUrl);
    console.log(`parseRequestUrl override of '${url}':`, parsed);
    return parsed;
  }

  // intercept ResponseOptions from default HTTP method handlers
  // add a response header and report interception to console.log
  responseInterceptor(resOptions: ResponseOptions, reqInfo: RequestInfo) {

    resOptions.headers.set('x-test', 'test-header');
    const method = reqInfo.method.toUpperCase();
    const body = JSON.stringify(resOptions);
    console.log(`responseInterceptor: ${method} ${reqInfo.req.url}: \n${body}`);

    return resOptions;
  }

  /////////// helpers ///////////////

  private finishOptions(options: ResponseOptions, {headers, url}: RequestInfo) {
    options.statusText = getStatusText(options.status);
    options.headers = headers;
    options.url = url;
    return options;
  }
}