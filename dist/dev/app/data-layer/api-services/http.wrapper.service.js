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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhLWxheWVyL2FwaS1zZXJ2aWNlcy9odHRwLndyYXBwZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBd0U7QUFDeEUsOENBQTZDO0FBQzdDLG9FQUErRDtBQUkvRCxJQUFhLGtCQUFrQjtJQU83Qiw0QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBSSxDQUFDO0lBRzVCLG1DQUFNLEdBQWIsVUFBYyxNQUFrQjtRQUMxQixJQUFBLG1DQUFrRCxFQUFqRCxrQkFBTSxFQUFFLG9CQUFPLENBQW1DO1FBRXZELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDO2FBQ3JDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUM7WUFDWCxJQUFJLEVBQUUsTUFBTSxDQUFDLGlCQUFpQjtZQUM5QixPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUM7U0FDM0MsQ0FBQyxFQUhVLENBR1YsQ0FBQzthQUNGLEtBQUssQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLHVCQUFVLENBQUMsRUFBRSxDQUFDO1lBQzFCLElBQUksRUFBRSxNQUFNLENBQUMsZUFBZTtZQUM1QixPQUFPLEVBQUU7Z0JBQ1AsV0FBVyxFQUFFLE1BQU0sQ0FBQyxpQkFBaUI7Z0JBQ3JDLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSzthQUMxQjtTQUNGLENBQUMsRUFOWSxDQU1aLENBQUMsQ0FBQztJQUNSLENBQUM7SUFFTSxnQ0FBRyxHQUFWLFVBQVcsTUFBa0I7UUFDdkIsSUFBQSxtQ0FBa0QsRUFBakQsa0JBQU0sRUFBRSxvQkFBTyxDQUFtQztRQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0ZBQWdGLEVBQUUsT0FB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SUFBQTtBQXhGWSxrQkFBa0I7SUFEOUIsaUJBQVUsRUFBRTtxQ0FRZSxXQUFJO0dBUG5CLGtCQUFrQixDQXdGOUI7QUF4RlksZ0RBQWtCIiwiZmlsZSI6ImFwcC9kYXRhLWxheWVyL2FwaS1zZXJ2aWNlcy9odHRwLndyYXBwZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi9zaGFyZWQtdXRpbHMvYXBwLWVudi9lbnYuY29uZmlnJztcbmltcG9ydCB7IEh0dHBQYXJhbXMgfSBmcm9tICcuL2ludGVyZmFjZXMvaHR0cFBhcmFtcy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIdHRwV3JhcHBlclNlcnZpY2Uge1xuICAvKlxuICAgIFRoZXNlIGFyZSB0aGUgbWV0aG9kcyB0aGF0IGFyZSB1c2VkIGluIHRoZSBhZGRpdGlvbmFsIGFwaS1zZXJ2aWNlcyxcbiAgICB3aGVyZSBvdGhlcndpc2UgdGhleSB3b3VsZCByZXF1aXJlIGltcG9ydGluZyBhbmd1bGFyIDIgaHR0cCBtb2R1bGUuXG4gICAgVGhpcyBrZWVwcyB0aGUgYXBpLXNlcnZpY2VzIERSWSwgZWFzaWVyIHRvIHRlc3QsIGFuZCBzY2FsYWJsZS5cbiAgKi9cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuXG5cbiAgcHVibGljIGRlbGV0ZShwYXJhbXM6IEh0dHBQYXJhbXMpIHtcbiAgICBsZXQge2FwaVVybCwgb3B0aW9uc30gPSB0aGlzLmNvbmZpZ1JlcXVlc3QocGFyYW1zLnVyaSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShhcGlVcmwsIG9wdGlvbnMpXG4gICAgICAubWFwKHJlcyA9PiAoe1xuICAgICAgICB0eXBlOiBwYXJhbXMuc3VjY2Vzc0FjdGlvblR5cGUsXG4gICAgICAgIHBheWxvYWQ6IHJlcy5qc29uKClbcGFyYW1zLnJlc3BvbnNlT2JqZWN0XVxuICAgICAgfSkpXG4gICAgICAuY2F0Y2gocmVzID0+IE9ic2VydmFibGUub2Yoe1xuICAgICAgICB0eXBlOiBwYXJhbXMuZXJyb3JBY3Rpb25UeXBlLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgYWN0aW9uX3R5cGU6IHBhcmFtcy5zcGVjaWZpY0Vycm9yVHlwZSxcbiAgICAgICAgICBtZXNzYWdlOiByZXMuanNvbigpLmVycm9yXG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQocGFyYW1zOiBIdHRwUGFyYW1zKSB7XG4gICAgbGV0IHthcGlVcmwsIG9wdGlvbnN9ID0gdGhpcy5jb25maWdSZXF1ZXN0KHBhcmFtcy51cmkpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vcHJpdmF0ZS1hbm9uLTg1ZjcyMDljOWYtd2VlYmx5ZnJvbnRlbmR0cmlhbGFwaS5hcGlhcnktbW9jay5jb20vcHJvZHVjdHMnLCBvcHRpb25zKVxuICAgICAgLm1hcChyZXMgPT4oe1xuICAgICAgICB0eXBlOiBwYXJhbXMuc3VjY2Vzc0FjdGlvblR5cGUsXG4gICAgICAgIHBheWxvYWQ6IHJlcy5qc29uKClcbiAgICAgIH0pKVxuICAgICAgLmNhdGNoKHJlcyA9PiBPYnNlcnZhYmxlLm9mKHtcbiAgICAgICAgdHlwZTogcGFyYW1zLmVycm9yQWN0aW9uVHlwZSxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGFjdGlvbl90eXBlOiBwYXJhbXMuc3BlY2lmaWNFcnJvclR5cGUsXG4gICAgICAgICAgbWVzc2FnZTogcmVzLmpzb24oKVxuICAgICAgICB9XG4gICAgICB9KSk7XG4gIH1cblxuICBwdWJsaWMgcG9zdChwYXJhbXM6IEh0dHBQYXJhbXMpIHtcblxuICAgIGxldCB7YXBpVXJsLCBvcHRpb25zfSA9IHRoaXMuY29uZmlnUmVxdWVzdChwYXJhbXMudXJpKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYXBpVXJsLCBwYXJhbXMucGF5bG9hZCwgb3B0aW9ucylcbiAgICAgIC5tYXAocmVzID0+ICh7XG4gICAgICAgIHR5cGU6IHBhcmFtcy5zdWNjZXNzQWN0aW9uVHlwZSxcbiAgICAgICAgcGF5bG9hZDogcmVzLmpzb24oKVtwYXJhbXMucmVzcG9uc2VPYmplY3RdXG4gICAgICB9KSlcbiAgICAgIC5jYXRjaChyZXMgPT4gT2JzZXJ2YWJsZS5vZih7XG4gICAgICAgIHR5cGU6IHBhcmFtcy5lcnJvckFjdGlvblR5cGUsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBhY3Rpb25fdHlwZTogcGFyYW1zLnNwZWNpZmljRXJyb3JUeXBlLFxuICAgICAgICAgIG1lc3NhZ2U6IHJlcy5qc29uKCkuZXJyb3JcbiAgICAgICAgfVxuICAgICAgfSkpO1xuICB9XG5cbiAgcHVibGljIHB1dChwYXJhbXM6IEh0dHBQYXJhbXMpIHtcbiAgICBsZXQge2FwaVVybCwgb3B0aW9uc30gPSB0aGlzLmNvbmZpZ1JlcXVlc3QocGFyYW1zLnVyaSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dChhcGlVcmwsIHBhcmFtcy5wYXlsb2FkLCBvcHRpb25zKVxuICAgICAgLm1hcChyZXMgPT4gKHtcbiAgICAgICAgdHlwZTogcGFyYW1zLnN1Y2Nlc3NBY3Rpb25UeXBlLFxuICAgICAgICBwYXlsb2FkOiByZXMuanNvbigpW3BhcmFtcy5yZXNwb25zZU9iamVjdF1cbiAgICAgIH0pKVxuICAgICAgLmNhdGNoKHJlcyA9PiBPYnNlcnZhYmxlLm9mKHtcbiAgICAgICAgdHlwZTogcGFyYW1zLmVycm9yQWN0aW9uVHlwZSxcbiAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIGFjdGlvbl90eXBlOiBwYXJhbXMuc3BlY2lmaWNFcnJvclR5cGUsXG4gICAgICAgICAgbWVzc2FnZTogcmVzLmpzb24oKS5lcnJvclxuICAgICAgICB9XG4gICAgICB9KSk7XG4gIH1cblxuXG5cbiAgcHJpdmF0ZSBjb25maWdSZXF1ZXN0KHVyaTogc3RyaW5nKToge2FwaVVybDogc3RyaW5nLCBvcHRpb25zOiBSZXF1ZXN0T3B0aW9uc30ge1xuICAgIGxldCBhcGlVcmwgPSBgJHtDb25maWcuSE9TVH0vJHtDb25maWcuQVBJfS8ke3VyaX1gO1xuXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xuICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcblxuICAgIHJldHVybiB7YXBpVXJsLCBvcHRpb25zfTtcbiAgfVxuXG59XG4iXX0=
