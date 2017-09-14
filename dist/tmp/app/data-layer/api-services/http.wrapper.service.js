"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var env_config_1 = require("../../shared-utils/app-env/env.config");
var HttpWrapperService = (function () {
    function HttpWrapperService(http) {
        this.http = http;
    }
    HttpWrapperService.prototype.delete = function (params) {
        var _a = this.configRequest(params.uri), apiUrl = _a.apiUrl, options = _a.options;
        return this.http.delete(apiUrl, options)
            .map(function (res) { return ({
            type: params.successActionType,
            payload: res.json()[params.responseObject]
        }); })
            .catch(function (res) { return Observable_1.Observable.of({
            type: params.errorActionType,
            payload: {
                action_type: params.specificErrorType,
                message: res.json().error
            }
        }); });
    };
    HttpWrapperService.prototype.get = function (params) {
        var _a = this.configRequest(params.uri), apiUrl = _a.apiUrl, options = _a.options;
        return this.http.get('http://private-anon-85f7209c9f-weeblyfrontendtrialapi.apiary-mock.com/products', options)
            .map(function (res) { return ({
            type: params.successActionType,
            payload: res.json()
        }); })
            .catch(function (res) { return Observable_1.Observable.of({
            type: params.errorActionType,
            payload: {
                action_type: params.specificErrorType,
                message: res.json()
            }
        }); });
    };
    HttpWrapperService.prototype.post = function (params) {
        var _a = this.configRequest(params.uri), apiUrl = _a.apiUrl, options = _a.options;
        return this.http.post(apiUrl, params.payload, options)
            .map(function (res) { return ({
            type: params.successActionType,
            payload: res.json()[params.responseObject]
        }); })
            .catch(function (res) { return Observable_1.Observable.of({
            type: params.errorActionType,
            payload: {
                action_type: params.specificErrorType,
                message: res.json().error
            }
        }); });
    };
    HttpWrapperService.prototype.put = function (params) {
        var _a = this.configRequest(params.uri), apiUrl = _a.apiUrl, options = _a.options;
        return this.http.put(apiUrl, params.payload, options)
            .map(function (res) { return ({
            type: params.successActionType,
            payload: res.json()[params.responseObject]
        }); })
            .catch(function (res) { return Observable_1.Observable.of({
            type: params.errorActionType,
            payload: {
                action_type: params.specificErrorType,
                message: res.json().error
            }
        }); });
    };
    HttpWrapperService.prototype.configRequest = function (uri) {
        var apiUrl = env_config_1.Config.HOST + "/" + env_config_1.Config.API + "/" + uri;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return { apiUrl: apiUrl, options: options };
    };
    return HttpWrapperService;
}());
HttpWrapperService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HttpWrapperService);
exports.HttpWrapperService = HttpWrapperService;
