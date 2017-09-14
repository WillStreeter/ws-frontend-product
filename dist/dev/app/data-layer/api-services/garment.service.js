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
var http_wrapper_service_1 = require("./http.wrapper.service");
var GarmentService = (function () {
    function GarmentService(httpWrapperService) {
        this.httpWrapperService = httpWrapperService;
    }
    GarmentService.prototype.getProducts = function (ErrorActionType, SpecificErrorType, SuccessType) {
        var getParams = {
            errorActionType: ErrorActionType,
            specificErrorType: SpecificErrorType,
            responseObject: 'products',
            successActionType: SuccessType,
            uri: 'http://private-anon-85f7209c9f-weeblyfrontendtrialapi.apiary-mock.com/products'
        };
        return this.httpWrapperService.get(getParams);
    };
    GarmentService.prototype.updateProduct = function (payload, ErrorActionType, SpecificErrorType, SuccessType) {
        console.log('GarmentService === updateProduct', payload);
        var postParams = {
            errorActionType: ErrorActionType,
            specificErrorType: SpecificErrorType,
            payload: payload,
            responseObject: 'product',
            successActionType: SuccessType,
            uri: 'products/update'
        };
        return this.httpWrapperService.post(postParams);
    };
    GarmentService.prototype.addNewProduct = function (payload, ErrorActionType, SpecificErrorType, SuccessType) {
        var postParams = {
            errorActionType: ErrorActionType,
            specificErrorType: SpecificErrorType,
            payload: payload,
            responseObject: 'product',
            successActionType: SuccessType,
            uri: 'products/add'
        };
        return this.httpWrapperService.post(postParams);
    };
    return GarmentService;
}());
GarmentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_wrapper_service_1.HttpWrapperService])
], GarmentService);
exports.GarmentService = GarmentService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhLWxheWVyL2FwaS1zZXJ2aWNlcy9nYXJtZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFFM0MsK0RBQTREO0FBSTVELElBQWEsY0FBYztJQUV6Qix3QkFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFBSSxDQUFDO0lBRS9ELG9DQUFXLEdBQVgsVUFBWSxlQUFzQixFQUFFLGlCQUF3QixFQUFFLFdBQWtCO1FBQzlFLElBQUksU0FBUyxHQUFlO1lBQzFCLGVBQWUsRUFBRSxlQUFlO1lBQ2hDLGlCQUFpQixFQUFFLGlCQUFpQjtZQUNwQyxjQUFjLEVBQUUsVUFBVTtZQUMxQixpQkFBaUIsRUFBQyxXQUFXO1lBQzdCLEdBQUcsRUFBRSxnRkFBZ0Y7U0FDdEYsQ0FBQztRQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxzQ0FBYSxHQUFiLFVBQWMsT0FBa0csRUFDbkcsZUFBc0IsRUFBRSxpQkFBd0IsRUFBRSxXQUFrQjtRQUNwRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQ25FLElBQUksVUFBVSxHQUFlO1lBQzNCLGVBQWUsRUFBRSxlQUFlO1lBQ2hDLGlCQUFpQixFQUFFLGlCQUFpQjtZQUNwQyxPQUFPLEVBQUUsT0FBTztZQUNoQixjQUFjLEVBQUUsU0FBUztZQUN6QixpQkFBaUIsRUFBRSxXQUFXO1lBQzlCLEdBQUcsRUFBRSxpQkFBaUI7U0FDdkIsQ0FBQztRQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxzQ0FBYSxHQUFiLFVBQWMsT0FBaUcsRUFDbEcsZUFBc0IsRUFBRSxpQkFBd0IsRUFBRSxXQUFrQjtRQUMvRSxJQUFJLFVBQVUsR0FBZTtZQUMzQixlQUFlLEVBQUMsZUFBZTtZQUMvQixpQkFBaUIsRUFBRSxpQkFBaUI7WUFDcEMsT0FBTyxFQUFFLE9BQU87WUFDaEIsY0FBYyxFQUFFLFNBQVM7WUFDekIsaUJBQWlCLEVBQUUsV0FBVztZQUM5QixHQUFHLEVBQUUsY0FBYztTQUNwQixDQUFDO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFJbEQsQ0FBQztJQUVILHFCQUFDO0FBQUQsQ0E3Q0EsQUE2Q0MsSUFBQTtBQTdDWSxjQUFjO0lBRDFCLGlCQUFVLEVBQUU7cUNBRzZCLHlDQUFrQjtHQUYvQyxjQUFjLENBNkMxQjtBQTdDWSx3Q0FBYyIsImZpbGUiOiJhcHAvZGF0YS1sYXllci9hcGktc2VydmljZXMvZ2FybWVudC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBIdHRwV3JhcHBlclNlcnZpY2UgfSBmcm9tICcuL2h0dHAud3JhcHBlci5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBQYXJhbXMgfSBmcm9tICcuL2ludGVyZmFjZXMvaHR0cFBhcmFtcy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHYXJtZW50U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwV3JhcHBlclNlcnZpY2U6IEh0dHBXcmFwcGVyU2VydmljZSkgeyB9XG5cbiAgZ2V0UHJvZHVjdHMoRXJyb3JBY3Rpb25UeXBlOnN0cmluZywgU3BlY2lmaWNFcnJvclR5cGU6c3RyaW5nLCBTdWNjZXNzVHlwZTpzdHJpbmcpIHtcbiAgICBsZXQgZ2V0UGFyYW1zOiBIdHRwUGFyYW1zID0ge1xuICAgICAgZXJyb3JBY3Rpb25UeXBlOiBFcnJvckFjdGlvblR5cGUsXG4gICAgICBzcGVjaWZpY0Vycm9yVHlwZTogU3BlY2lmaWNFcnJvclR5cGUsXG4gICAgICByZXNwb25zZU9iamVjdDogJ3Byb2R1Y3RzJyxcbiAgICAgIHN1Y2Nlc3NBY3Rpb25UeXBlOlN1Y2Nlc3NUeXBlLFxuICAgICAgdXJpOiAnaHR0cDovL3ByaXZhdGUtYW5vbi04NWY3MjA5YzlmLXdlZWJseWZyb250ZW5kdHJpYWxhcGkuYXBpYXJ5LW1vY2suY29tL3Byb2R1Y3RzJ1xuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuaHR0cFdyYXBwZXJTZXJ2aWNlLmdldChnZXRQYXJhbXMpO1xuICB9XG5cbiAgdXBkYXRlUHJvZHVjdChwYXlsb2FkOiB7aWQ6bnVtYmVyLCBuYW1lOiBzdHJpbmcsIHR5cGU6IHN0cmluZywgcHJpY2U6bnVtYmVyLCBpbnZlbnRvcnk6c3RyaW5nLCB0aHVtYm5haWw6c3RyaW5nfSxcbiAgICAgICAgICAgICAgIEVycm9yQWN0aW9uVHlwZTpzdHJpbmcsIFNwZWNpZmljRXJyb3JUeXBlOnN0cmluZywgU3VjY2Vzc1R5cGU6c3RyaW5nKSB7XG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR2FybWVudFNlcnZpY2UgPT09IHVwZGF0ZVByb2R1Y3QnLCBwYXlsb2FkKVxuICAgIGxldCBwb3N0UGFyYW1zOiBIdHRwUGFyYW1zID0ge1xuICAgICAgZXJyb3JBY3Rpb25UeXBlOiBFcnJvckFjdGlvblR5cGUsXG4gICAgICBzcGVjaWZpY0Vycm9yVHlwZTogU3BlY2lmaWNFcnJvclR5cGUsXG4gICAgICBwYXlsb2FkOiBwYXlsb2FkLFxuICAgICAgcmVzcG9uc2VPYmplY3Q6ICdwcm9kdWN0JyxcbiAgICAgIHN1Y2Nlc3NBY3Rpb25UeXBlOiBTdWNjZXNzVHlwZSxcbiAgICAgIHVyaTogJ3Byb2R1Y3RzL3VwZGF0ZSdcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmh0dHBXcmFwcGVyU2VydmljZS5wb3N0KHBvc3RQYXJhbXMpO1xuICB9XG5cbiAgYWRkTmV3UHJvZHVjdChwYXlsb2FkOiB7aWQ6bnVtYmVyLG5hbWU6IHN0cmluZywgdHlwZTogc3RyaW5nLCBwcmljZTpudW1iZXIsIGludmVudG9yeTpzdHJpbmcsIHRodW1ibmFpbDpzdHJpbmd9LFxuICAgICAgICAgICAgICAgRXJyb3JBY3Rpb25UeXBlOnN0cmluZywgU3BlY2lmaWNFcnJvclR5cGU6c3RyaW5nLCBTdWNjZXNzVHlwZTpzdHJpbmcpIHtcbiAgICBsZXQgcG9zdFBhcmFtczogSHR0cFBhcmFtcyA9IHtcbiAgICAgIGVycm9yQWN0aW9uVHlwZTpFcnJvckFjdGlvblR5cGUsXG4gICAgICBzcGVjaWZpY0Vycm9yVHlwZTogU3BlY2lmaWNFcnJvclR5cGUsXG4gICAgICBwYXlsb2FkOiBwYXlsb2FkLFxuICAgICAgcmVzcG9uc2VPYmplY3Q6ICdwcm9kdWN0JyxcbiAgICAgIHN1Y2Nlc3NBY3Rpb25UeXBlOiBTdWNjZXNzVHlwZSxcbiAgICAgIHVyaTogJ3Byb2R1Y3RzL2FkZCdcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmh0dHBXcmFwcGVyU2VydmljZS5wb3N0KHBvc3RQYXJhbXMpO1xuXG4gICAgLy8gY29uc29sZS5sb2coJ3ZhbHVlIGNhbGxiYWNrICcsIHZhbHVlKVxuICAgIC8vIHJldHVybiB2YWx1ZTtcbiAgfVxuXG59XG4iXX0=
