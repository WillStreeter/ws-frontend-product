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
var http_1 = require("@angular/common/http");
var Observable_1 = require("rxjs/Observable");
var env_config_1 = require("../../shared-utils/app-env/env.config");
var HttpWrapperService = (function () {
    function HttpWrapperService(http) {
        this.http = http;
    }
    HttpWrapperService.prototype.delete = function (params) {
        var _a = this.configRequest(params.uri), apiUrl = _a.apiUrl, options = _a.options;
        return this.http.delete(apiUrl, options)
            .map(function (data) { return ({
            type: params.successActionType,
            payload: data[params.responseObject]
        }); }, function (err) { return (function (data) { return Observable_1.Observable.of({
            type: params.errorActionType,
            payload: {
                action_type: params.specificErrorType,
                message: data.error
            }
        }); }); });
    };
    HttpWrapperService.prototype.get = function (params) {
        var _a = this.configRequest(params.uri), apiUrl = _a.apiUrl, options = _a.options;
        return this.http.get('http://private-anon-85f7209c9f-weeblyfrontendtrialapi.apiary-mock.com/products', options)
            .map(function (data) { return ({
            type: params.successActionType,
            payload: data
        }); }, function (err) { return (function (data) { return Observable_1.Observable.of({
            type: params.errorActionType,
            payload: {
                action_type: params.specificErrorType,
                message: data.error
            }
        }); }); });
    };
    HttpWrapperService.prototype.post = function (params) {
        var _a = this.configRequest(params.uri), apiUrl = _a.apiUrl, options = _a.options;
        return this.http.post(apiUrl, params.payload, options)
            .map(function (data) { return ({
            type: params.successActionType,
            payload: data[params.responseObject]
        }); }, function (err) { return (function (data) { return Observable_1.Observable.of({
            type: params.errorActionType,
            payload: {
                action_type: params.specificErrorType,
                message: data.error
            }
        }); }); });
    };
    HttpWrapperService.prototype.put = function (params) {
        var _a = this.configRequest(params.uri), apiUrl = _a.apiUrl, options = _a.options;
        return this.http.put(apiUrl, params.payload, options)
            .map(function (data) { return ({
            type: params.successActionType,
            payload: data[params.responseObject]
        }); }, function (err) { return (function (data) { return Observable_1.Observable.of({
            type: params.errorActionType,
            payload: {
                action_type: params.specificErrorType,
                message: data.error
            }
        }); }); });
    };
    HttpWrapperService.prototype.configRequest = function (uri) {
        var apiUrl = env_config_1.Config.HOST + "/" + env_config_1.Config.API + "/" + uri;
        var headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        var options = { headers: headers };
        return { apiUrl: apiUrl, options: options };
    };
    return HttpWrapperService;
}());
HttpWrapperService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], HttpWrapperService);
exports.HttpWrapperService = HttpWrapperService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhLWxheWVyL2FwaS1zZXJ2aWNlcy9odHRwLndyYXBwZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBMEY7QUFFMUYsOENBQTZDO0FBQzdDLG9FQUErRDtBQUkvRCxJQUFhLGtCQUFrQjtJQU83Qiw0QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7SUFHbEMsbUNBQU0sR0FBYixVQUFjLE1BQWtCO1FBQzFCLElBQUEsbUNBQWtELEVBQWpELGtCQUFNLEVBQUUsb0JBQU8sQ0FBbUM7UUFFdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFTLE1BQU0sRUFBRSxPQUFPLENBQUM7YUFDN0MsR0FBRyxDQUNKLFVBQUEsSUFBSSxJQUFHLE9BQUEsQ0FBQztZQUNOLElBQUksRUFBRSxNQUFNLENBQUMsaUJBQWlCO1lBQzlCLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQztTQUNyQyxDQUFDLEVBSEssQ0FHTCxFQUNGLFVBQUEsR0FBRyxJQUFJLE9BQUEsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLHVCQUFVLENBQUMsRUFBRSxDQUFDO1lBQzVCLElBQUksRUFBRSxNQUFNLENBQUMsZUFBZTtZQUM1QixPQUFPLEVBQUU7Z0JBQ1AsV0FBVyxFQUFFLE1BQU0sQ0FBQyxpQkFBaUI7Z0JBQ3JDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSzthQUNwQjtTQUNGLENBQUMsRUFOYyxDQU1kLENBQUMsRUFOSSxDQU1KLENBQUMsQ0FBQztJQUNULENBQUM7SUFFTSxnQ0FBRyxHQUFWLFVBQVcsTUFBa0I7UUFDdkIsSUFBQSxtQ0FBa0QsRUFBakQsa0JBQU0sRUFBRSxvQkFBTyxDQUFtQztRQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVMsZ0ZBQWdGLEVBQUUsT0FBTyxD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aUJBQVUsRUFBRTtxQ0FRZSxpQkFBVTtHQVB6QixrQkFBa0IsQ0E0RjlCO0FBNUZZLGdEQUFrQiIsImZpbGUiOiJhcHAvZGF0YS1sYXllci9hcGktc2VydmljZXMvaHR0cC53cmFwcGVyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL3NoYXJlZC11dGlscy9hcHAtZW52L2Vudi5jb25maWcnO1xuaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJy4vaW50ZXJmYWNlcy9odHRwUGFyYW1zLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEh0dHBXcmFwcGVyU2VydmljZSB7XG4gIC8qXG4gICAgVGhlc2UgYXJlIHRoZSBtZXRob2RzIHRoYXQgYXJlIHVzZWQgaW4gdGhlIGFkZGl0aW9uYWwgYXBpLXNlcnZpY2VzLFxuICAgIHdoZXJlIG90aGVyd2lzZSB0aGV5IHdvdWxkIHJlcXVpcmUgaW1wb3J0aW5nIGFuZ3VsYXIgMiBodHRwIG1vZHVsZS5cbiAgICBUaGlzIGtlZXBzIHRoZSBhcGktc2VydmljZXMgRFJZLCBlYXNpZXIgdG8gdGVzdCwgYW5kIHNjYWxhYmxlLlxuICAqL1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cblxuICBwdWJsaWMgZGVsZXRlKHBhcmFtczogSHR0cFBhcmFtcykge1xuICAgIGxldCB7YXBpVXJsLCBvcHRpb25zfSA9IHRoaXMuY29uZmlnUmVxdWVzdChwYXJhbXMudXJpKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPE9iamVjdD4oYXBpVXJsLCBvcHRpb25zKVxuICAgICAgLm1hcChcbiAgICAgIGRhdGEgPT4oe1xuICAgICAgICB0eXBlOiBwYXJhbXMuc3VjY2Vzc0FjdGlvblR5cGUsXG4gICAgICAgIHBheWxvYWQ6IGRhdGFbcGFyYW1zLnJlc3BvbnNlT2JqZWN0XVxuICAgICAgfSksXG4gICAgICBlcnIgPT4gKGRhdGEgPT4gT2JzZXJ2YWJsZS5vZih7XG4gICAgICAgIHR5cGU6IHBhcmFtcy5lcnJvckFjdGlvblR5cGUsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBhY3Rpb25fdHlwZTogcGFyYW1zLnNwZWNpZmljRXJyb3JUeXBlLFxuICAgICAgICAgIG1lc3NhZ2U6IGRhdGEuZXJyb3JcbiAgICAgICAgfVxuICAgICAgfSkpKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQocGFyYW1zOiBIdHRwUGFyYW1zKXtcbiAgICBsZXQge2FwaVVybCwgb3B0aW9uc30gPSB0aGlzLmNvbmZpZ1JlcXVlc3QocGFyYW1zLnVyaSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T2JqZWN0PignaHR0cDovL3ByaXZhdGUtYW5vbi04NWY3MjA5YzlmLXdlZWJseWZyb250ZW5kdHJpYWxhcGkuYXBpYXJ5LW1vY2suY29tL3Byb2R1Y3RzJywgb3B0aW9ucylcbiAgICAgIC5tYXAoXG4gICAgICBkYXRhID0+KHtcbiAgICAgICAgdHlwZTogcGFyYW1zLnN1Y2Nlc3NBY3Rpb25UeXBlLFxuICAgICAgICBwYXlsb2FkOiBkYXRhXG4gICAgICB9KSxcbiAgICAgIGVyciA9PiAoZGF0YSA9PiBPYnNlcnZhYmxlLm9mKHtcbiAgICAgICAgdHlwZTogcGFyYW1zLmVycm9yQWN0aW9uVHlwZSxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGFjdGlvbl90eXBlOiBwYXJhbXMuc3BlY2lmaWNFcnJvclR5cGUsXG4gICAgICAgICAgbWVzc2FnZTogZGF0YS5lcnJvclxuICAgICAgICB9XG4gICAgICB9KSkpO1xuICB9XG5cbiAgcHVibGljIHBvc3QocGFyYW1zOiBIdHRwUGFyYW1zKXtcblxuICAgIGxldCB7YXBpVXJsLCBvcHRpb25zfSA9IHRoaXMuY29uZmlnUmVxdWVzdChwYXJhbXMudXJpKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8T2JqZWN0PihhcGlVcmwsIHBhcmFtcy5wYXlsb2FkLCBvcHRpb25zKVxuICAgICAgLm1hcChcbiAgICAgIGRhdGEgPT4oe1xuICAgICAgICB0eXBlOiBwYXJhbXMuc3VjY2Vzc0FjdGlvblR5cGUsXG4gICAgICAgIHBheWxvYWQ6IGRhdGFbcGFyYW1zLnJlc3BvbnNlT2JqZWN0XVxuICAgICAgfSksXG4gICAgICBlcnIgPT4gKGRhdGEgPT4gT2JzZXJ2YWJsZS5vZih7XG4gICAgICAgIHR5cGU6IHBhcmFtcy5lcnJvckFjdGlvblR5cGUsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBhY3Rpb25fdHlwZTogcGFyYW1zLnNwZWNpZmljRXJyb3JUeXBlLFxuICAgICAgICAgIG1lc3NhZ2U6IGRhdGEuZXJyb3JcbiAgICAgICAgfVxuICAgICAgfSkpKTtcbiAgfVxuXG4gIHB1YmxpYyBwdXQocGFyYW1zOiBIdHRwUGFyYW1zKXtcbiAgICBsZXQge2FwaVVybCwgb3B0aW9uc30gPSB0aGlzLmNvbmZpZ1JlcXVlc3QocGFyYW1zLnVyaSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dDxPYmplY3Q+KGFwaVVybCwgcGFyYW1zLnBheWxvYWQsIG9wdGlvbnMpXG4gICAgICAubWFwKFxuICAgICAgZGF0YSA9Pih7XG4gICAgICAgIHR5cGU6IHBhcmFtcy5zdWNjZXNzQWN0aW9uVHlwZSxcbiAgICAgICAgcGF5bG9hZDogZGF0YVtwYXJhbXMucmVzcG9uc2VPYmplY3RdXG4gICAgICB9KSxcbiAgICAgIGVyciA9PiAoZGF0YSA9PiBPYnNlcnZhYmxlLm9mKHtcbiAgICAgICAgdHlwZTogcGFyYW1zLmVycm9yQWN0aW9uVHlwZSxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGFjdGlvbl90eXBlOiBwYXJhbXMuc3BlY2lmaWNFcnJvclR5cGUsXG4gICAgICAgICAgbWVzc2FnZTogZGF0YS5lcnJvclxuICAgICAgICB9XG4gICAgICB9KSkpO1xuICB9XG5cblxuXG4gIHByaXZhdGUgY29uZmlnUmVxdWVzdCh1cmk6IHN0cmluZyk6IHthcGlVcmw6IHN0cmluZywgb3B0aW9uczphbnl9IHtcbiAgICBsZXQgYXBpVXJsID0gYCR7Q29uZmlnLkhPU1R9LyR7Q29uZmlnLkFQSX0vJHt1cml9YDtcblxuICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgIGxldCBvcHRpb25zID0geyBoZWFkZXJzOiBoZWFkZXJzIH07XG5cbiAgICByZXR1cm4ge2FwaVVybCwgb3B0aW9uc307XG4gIH1cblxufVxuIl19
