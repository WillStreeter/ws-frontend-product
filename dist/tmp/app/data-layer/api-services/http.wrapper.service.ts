import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
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

  constructor(private http: Http) { }


  public delete(params: HttpParams) {
    let {apiUrl, options} = this.configRequest(params.uri);

    return this.http.delete(apiUrl, options)
      .map(res => ({
        type: params.successActionType,
        payload: res.json()[params.responseObject]
      }))
      .catch(res => Observable.of({
        type: params.errorActionType,
        payload: {
          action_type: params.specificErrorType,
          message: res.json().error
        }
      }));
  }

  public get(params: HttpParams) {
    let {apiUrl, options} = this.configRequest(params.uri);
    return this.http.get('http://private-anon-85f7209c9f-weeblyfrontendtrialapi.apiary-mock.com/products', options)
      .map(res =>({
        type: params.successActionType,
        payload: res.json()
      }))
      .catch(res => Observable.of({
        type: params.errorActionType,
        payload: {
          action_type: params.specificErrorType,
          message: res.json()
        }
      }));
  }

  public post(params: HttpParams) {

    let {apiUrl, options} = this.configRequest(params.uri);
    return this.http.post(apiUrl, params.payload, options)
      .map(res => ({
        type: params.successActionType,
        payload: res.json()[params.responseObject]
      }))
      .catch(res => Observable.of({
        type: params.errorActionType,
        payload: {
          action_type: params.specificErrorType,
          message: res.json().error
        }
      }));
  }

  public put(params: HttpParams) {
    let {apiUrl, options} = this.configRequest(params.uri);

    return this.http.put(apiUrl, params.payload, options)
      .map(res => ({
        type: params.successActionType,
        payload: res.json()[params.responseObject]
      }))
      .catch(res => Observable.of({
        type: params.errorActionType,
        payload: {
          action_type: params.specificErrorType,
          message: res.json().error
        }
      }));
  }



  private configRequest(uri: string): {apiUrl: string, options: RequestOptions} {
    let apiUrl = `${Config.HOST}/${Config.API}/${uri}`;

    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    return {apiUrl, options};
  }

}
