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
        var _a = this.configRequest(params.uri, true), apiUrl = _a.apiUrl, options = _a.options;
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
        var _a = this.configRequest(params.uri, params.auth), apiUrl = _a.apiUrl, options = _a.options;
        return this.http.get(apiUrl, options)
            .map(function (res) { return ({
            type: params.successActionType,
            payload: res.json()[params.responseObject]
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
        var _a = this.configRequest(params.uri, params.auth), apiUrl = _a.apiUrl, options = _a.options;
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
        var _a = this.configRequest(params.uri, true), apiUrl = _a.apiUrl, options = _a.options;
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
    HttpWrapperService.prototype.configRequest = function (uri, authRequired) {
        if (authRequired === void 0) { authRequired = false; }
        var apiUrl = env_config_1.Config.HOST + "/" + env_config_1.Config.API + "/" + uri;
        var headers = authRequired ?
            new http_1.Headers({
                'Content-Type': 'application/json',
                'x-access-token': "" + localStorage['Authorized']
            }) :
            new http_1.Headers({ 'Content-Type': 'application/json' });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhLWxheWVyL2FwaS1zZXJ2aWNlcy9odHRwLndyYXBwZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBd0U7QUFDeEUsOENBQTZDO0FBQzdDLG9FQUErRDtBQUkvRCxJQUFhLGtCQUFrQjtJQU83Qiw0QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBSSxDQUFDO0lBRzVCLG1DQUFNLEdBQWIsVUFBYyxNQUFrQjtRQUMxQixJQUFBLHlDQUF3RCxFQUF2RCxrQkFBTSxFQUFFLG9CQUFPLENBQXlDO1FBRTdELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDO2FBQ3JDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUM7WUFDWCxJQUFJLEVBQUUsTUFBTSxDQUFDLGlCQUFpQjtZQUM5QixPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7U0FDM0MsQ0FBQyxFQUhVLENBR1YsQ0FBQzthQUNGLEtBQUssQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLHVCQUFVLENBQUMsRUFBRSxDQUFDO1lBQzFCLElBQUksRUFBRSxNQUFNLENBQUMsZUFBZTtZQUM1QixPQUFPLEVBQUU7Z0JBQ1AsV0FBVyxFQUFFLE1BQU0sQ0FBQyxpQkFBaUI7Z0JBQ3JDLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSzthQUMxQjtTQUNGLENBQUMsRUFOWSxDQU1aLENBQUMsQ0FBQztJQUNSLENBQUM7SUFFTSxnQ0FBRyxHQUFWLFVBQVcsTUFBa0I7UUFDdkIsSUFBQSxnREFBK0QsRUFBOUQsa0JBQU0sRUFBRSxvQkFBTyxDQUFnRDtRQUNwRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8s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UUFDcEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFFdkQsTUFBTSxDQUFDLEVBQUMsTUFBTSxRQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUgseUJBQUM7QUFBRCxDQTdGQSxBQTZGQyxJQUFBO0FBN0ZZLGtCQUFrQjtJQUQ5QixpQkFBVSxFQUFFO3FDQVFlLFdBQUk7R0FQbkIsa0JBQWtCLENBNkY5QjtBQTdGWSxnREFBa0IiLCJmaWxlIjoiYXBwL2RhdGEtbGF5ZXIvYXBpLXNlcnZpY2VzL2h0dHAud3JhcHBlci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL3NoYXJlZC11dGlscy9hcHAtZW52L2Vudi5jb25maWcnO1xuaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJy4vaW50ZXJmYWNlcy9odHRwUGFyYW1zLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEh0dHBXcmFwcGVyU2VydmljZSB7XG4gIC8qXG4gICAgVGhlc2UgYXJlIHRoZSBtZXRob2RzIHRoYXQgYXJlIHVzZWQgaW4gdGhlIGFkZGl0aW9uYWwgYXBpLXNlcnZpY2VzLFxuICAgIHdoZXJlIG90aGVyd2lzZSB0aGV5IHdvdWxkIHJlcXVpcmUgaW1wb3J0aW5nIGFuZ3VsYXIgMiBodHRwIG1vZHVsZS5cbiAgICBUaGlzIGtlZXBzIHRoZSBhcGktc2VydmljZXMgRFJZLCBlYXNpZXIgdG8gdGVzdCwgYW5kIHNjYWxhYmxlLlxuICAqL1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XG5cblxuICBwdWJsaWMgZGVsZXRlKHBhcmFtczogSHR0cFBhcmFtcykge1xuICAgIGxldCB7YXBpVXJsLCBvcHRpb25zfSA9IHRoaXMuY29uZmlnUmVxdWVzdChwYXJhbXMudXJpLCB0cnVlKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKGFwaVVybCwgb3B0aW9ucylcbiAgICAgIC5tYXAocmVzID0+ICh7XG4gICAgICAgIHR5cGU6IHBhcmFtcy5zdWNjZXNzQWN0aW9uVHlwZSxcbiAgICAgICAgcGF5bG9hZDogcmVzLmpzb24oKVtwYXJhbXMucmVzcG9uc2VPYmplY3RdXG4gICAgICB9KSlcbiAgICAgIC5jYXRjaChyZXMgPT4gT2JzZXJ2YWJsZS5vZih7XG4gICAgICAgIHR5cGU6IHBhcmFtcy5lcnJvckFjdGlvblR5cGUsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBhY3Rpb25fdHlwZTogcGFyYW1zLnNwZWNpZmljRXJyb3JUeXBlLFxuICAgICAgICAgIG1lc3NhZ2U6IHJlcy5qc29uKCkuZXJyb3JcbiAgICAgICAgfVxuICAgICAgfSkpO1xuICB9XG5cbiAgcHVibGljIGdldChwYXJhbXM6IEh0dHBQYXJhbXMpIHtcbiAgICBsZXQge2FwaVVybCwgb3B0aW9uc30gPSB0aGlzLmNvbmZpZ1JlcXVlc3QocGFyYW1zLnVyaSwgcGFyYW1zLmF1dGgpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGFwaVVybCwgb3B0aW9ucylcbiAgICAgIC5tYXAocmVzID0+ICh7XG4gICAgICAgIHR5cGU6IHBhcmFtcy5zdWNjZXNzQWN0aW9uVHlwZSxcbiAgICAgICAgcGF5bG9hZDogcmVzLmpzb24oKVtwYXJhbXMucmVzcG9uc2VPYmplY3RdXG4gICAgICB9KSlcbiAgICAgIC5jYXRjaChyZXMgPT4gT2JzZXJ2YWJsZS5vZih7XG4gICAgICAgIHR5cGU6IHBhcmFtcy5lcnJvckFjdGlvblR5cGUsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBhY3Rpb25fdHlwZTogcGFyYW1zLnNwZWNpZmljRXJyb3JUeXBlLFxuICAgICAgICAgIG1lc3NhZ2U6IHJlcy5qc29uKClcbiAgICAgICAgfVxuICAgICAgfSkpO1xuICB9XG5cbiAgcHVibGljIHBvc3QocGFyYW1zOiBIdHRwUGFyYW1zKSB7XG5cbiAgICBsZXQge2FwaVVybCwgb3B0aW9uc30gPSB0aGlzLmNvbmZpZ1JlcXVlc3QocGFyYW1zLnVyaSwgcGFyYW1zLmF1dGgpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChhcGlVcmwsIHBhcmFtcy5wYXlsb2FkLCBvcHRpb25zKVxuICAgICAgLm1hcChyZXMgPT4gKHtcbiAgICAgICAgdHlwZTogcGFyYW1zLnN1Y2Nlc3NBY3Rpb25UeXBlLFxuICAgICAgICBwYXlsb2FkOiByZXMuanNvbigpW3BhcmFtcy5yZXNwb25zZU9iamVjdF1cbiAgICAgIH0pKVxuICAgICAgLmNhdGNoKHJlcyA9PiBPYnNlcnZhYmxlLm9mKHtcbiAgICAgICAgdHlwZTogcGFyYW1zLmVycm9yQWN0aW9uVHlwZSxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGFjdGlvbl90eXBlOiBwYXJhbXMuc3BlY2lmaWNFcnJvclR5cGUsXG4gICAgICAgICAgbWVzc2FnZTogcmVzLmpzb24oKS5lcnJvclxuICAgICAgICB9XG4gICAgICB9KSk7XG4gIH1cblxuICBwdWJsaWMgcHV0KHBhcmFtczogSHR0cFBhcmFtcykge1xuICAgIGxldCB7YXBpVXJsLCBvcHRpb25zfSA9IHRoaXMuY29uZmlnUmVxdWVzdChwYXJhbXMudXJpLCB0cnVlKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KGFwaVVybCwgcGFyYW1zLnBheWxvYWQsIG9wdGlvbnMpXG4gICAgICAubWFwKHJlcyA9PiAoe1xuICAgICAgICB0eXBlOiBwYXJhbXMuc3VjY2Vzc0FjdGlvblR5cGUsXG4gICAgICAgIHBheWxvYWQ6IHJlcy5qc29uKClbcGFyYW1zLnJlc3BvbnNlT2JqZWN0XVxuICAgICAgfSkpXG4gICAgICAuY2F0Y2gocmVzID0+IE9ic2VydmFibGUub2Yoe1xuICAgICAgICB0eXBlOiBwYXJhbXMuZXJyb3JBY3Rpb25UeXBlLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgYWN0aW9uX3R5cGU6IHBhcmFtcy5zcGVjaWZpY0Vycm9yVHlwZSxcbiAgICAgICAgICBtZXNzYWdlOiByZXMuanNvbigpLmVycm9yXG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgfVxuXG5cblxuICBwcml2YXRlIGNvbmZpZ1JlcXVlc3QodXJpOiBzdHJpbmcsIGF1dGhSZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlKToge2FwaVVybDogc3RyaW5nLCBvcHRpb25zOiBSZXF1ZXN0T3B0aW9uc30ge1xuICAgIGxldCBhcGlVcmwgPSBgJHtDb25maWcuSE9TVH0vJHtDb25maWcuQVBJfS8ke3VyaX1gO1xuXG4gICAgbGV0IGhlYWRlcnMgPSBhdXRoUmVxdWlyZWQgP1xuICAgICAgbmV3IEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nIDogYCR7bG9jYWxTdG9yYWdlWydBdXRob3JpemVkJ119YFxuICAgICAgfSkgOlxuICAgICAgbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcbiAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG5cbiAgICByZXR1cm4ge2FwaVVybCwgb3B0aW9uc307XG4gIH1cblxufVxuIl19
