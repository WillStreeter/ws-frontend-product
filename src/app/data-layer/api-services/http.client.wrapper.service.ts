/**
 * Created by willstreeter on 9/19/17.
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { HttpParams } from './interfaces/httpParams.model';


type Data = { data: any }

@Injectable()
export class HttpClientWrapperService {
  /*
    These are the methods that are used in the additional api-services,
    where otherwise they would require importing angular 2 http module.
    This keeps the api-services DRY, easier to test, and scalable.
  */

  constructor(private http: HttpClient) { }

  public get(params: HttpParams){
    let {apiUrl, options} = this.configRequest(params.uri);
    console.log('HttpWrapperService  get   params =', params)
    return this.http<Data>get(apiUrl, options)
      .map(
      data =>({
        type: params.successActionType,
        payload: data.data as options.responseType
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
    return this.http<Data>post(apiUrl, params.payload, options)
      .map(
      data =>({
        type: params.successActionType,
        payload: data.data as options.responseType
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

    return this.http<Data>put(apiUrl, params.payload, options)
      .map(
      data =>({
        type: params.successActionType,
        payload: data.data as options.responseType
      }),
      err => (data => Observable.of({
        type: params.errorActionType,
        payload: {
          action_type: params.specificErrorType,
          message: data.error
        }
      })));
  }



  public delete(params: HttpParams) {
    let {apiUrl, options} = this.configRequest(params.uri);

    return this.http<Data>delete(apiUrl, options)
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
    let apiUrl = `${environment.HOST}/${environment.API}/${uri}`;

    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let options = { headers: headers };

    return {apiUrl, options};
  }

}