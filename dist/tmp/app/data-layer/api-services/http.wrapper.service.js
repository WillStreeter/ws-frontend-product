var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Config } from '../../shared-utils/app-env/env.config';
let HttpWrapperService = class HttpWrapperService {
    constructor(http) {
        this.http = http;
    }
    delete(params) {
        let { apiUrl, options } = this.configRequest(params.uri);
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
    get(params) {
        let { apiUrl, options } = this.configRequest(params.uri);
        return this.http.get('http://private-anon-85f7209c9f-weeblyfrontendtrialapi.apiary-mock.com/products', options)
            .map(res => ({
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
    post(params) {
        let { apiUrl, options } = this.configRequest(params.uri);
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
    put(params) {
        let { apiUrl, options } = this.configRequest(params.uri);
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
    configRequest(uri) {
        let apiUrl = `${Config.HOST}/${Config.API}/${uri}`;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return { apiUrl, options };
    }
};
HttpWrapperService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], HttpWrapperService);
export { HttpWrapperService };
