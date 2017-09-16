import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Config } from '../../shared-utils/app-env/env.config';
import { HttpParams } from './interfaces/httpParams.model';

@Injectable()
export class HttpWrapperService {
  /*
    These are the methods that are used in the additional api-services,
    where otherwise they would require importing angular 2 http module.
    This keeps the api-services DRY, easier to test, and scalable.
  */

  constructor(private http: HttpClient) { }


  public delete(params: HttpParams) {
    let {apiUrl, options} = this.configRequest(params.uri);

    return this.http.delete<Object>(apiUrl, options)
      .map(
      data =>({
        type: params.successActionType,
        payload: data[params.responseObject]
      }),
      err => (data => Observable.of({
        type: params.errorActionType,
        payload: {
          action_type: params.specificErrorType,
          message: data.error
        }
      })));
  }

  public get(params: HttpParams){
    let {apiUrl, options} = this.configRequest(params.uri);
    return this.http.get<Object>('http://private-anon-85f7209c9f-weeblyfrontendtrialapi.apiary-mock.com/products', options)
      .map(
      data =>({
        type: params.successActionType,
        payload: data
      }),
      err => (data => Observable.of({
        type: params.errorActionType,
        payload: {
          action_type: params.specificErrorType,
          message: data.error
        }
      })));
  }

  public post(params: HttpParams){

    let {apiUrl, options} = this.configRequest(params.uri);
    return this.http.post<Object>(apiUrl, params.payload, options)
      .map(
      data =>({
        type: params.successActionType,
        payload: data[params.responseObject]
      }),
      err => (data => Observable.of({
        type: params.errorActionType,
        payload: {
          action_type: params.specificErrorType,
          message: data.error
        }
      })));
  }

  public put(params: HttpParams){
    let {apiUrl, options} = this.configRequest(params.uri);

    return this.http.put<Object>(apiUrl, params.payload, options)
      .map(
      data =>({
        type: params.successActionType,
        payload: data[params.responseObject]
      }),
      err => (data => Observable.of({
        type: params.errorActionType,
        payload: {
          action_type: params.specificErrorType,
          message: data.error
        }
      })));
  }



  private configRequest(uri: string): {apiUrl: string, options:any} {
    let apiUrl = `${Config.HOST}/${Config.API}/${uri}`;

    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let options = { headers: headers };

    return {apiUrl, options};
  }

}
