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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhLWxheWVyL2FwaS1zZXJ2aWNlcy9nYXJtZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFFM0MsK0RBQTREO0FBSTVELElBQWEsY0FBYztJQUV6Qix3QkFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFBSSxDQUFDO0lBRS9ELG9DQUFXLEdBQVgsVUFBWSxlQUFzQixFQUFFLGlCQUF3QixFQUFFLFdBQWtCO1FBQzlFLElBQUksU0FBUyxHQUFlO1lBQzFCLGVBQWUsRUFBRSxlQUFlO1lBQ2hDLGlCQUFpQixFQUFFLGlCQUFpQjtZQUNwQyxjQUFjLEVBQUUsVUFBVTtZQUMxQixpQkFBaUIsRUFBQyxXQUFXO1lBQzdCLEdBQUcsRUFBRSxnRkFBZ0Y7U0FDdEYsQ0FBQztRQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxzQ0FBYSxHQUFiLFVBQWMsT0FBa0csRUFDbkcsZUFBc0IsRUFBRSxpQkFBd0IsRUFBRSxXQUFrQjtRQUMvRSxJQUFJLFVBQVUsR0FBZTtZQUMzQixlQUFlLEVBQUMsZUFBZTtZQUMvQixpQkFBaUIsRUFBRSxpQkFBaUI7WUFDcEMsT0FBTyxFQUFFLE9BQU87WUFDaEIsY0FBYyxFQUFFLFNBQVM7WUFDekIsaUJBQWlCLEVBQUUsV0FBVztZQUM5QixHQUFHLEVBQUUsaUJBQWlCO1NBQ3ZCLENBQUM7UUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsc0NBQWEsR0FBYixVQUFjLE9BQXVGLEVBQ3hGLGVBQXNCLEVBQUUsaUJBQXdCLEVBQUUsV0FBa0I7UUFDL0UsSUFBSSxVQUFVLEdBQWU7WUFDM0IsZUFBZSxFQUFDLGVBQWU7WUFDL0IsaUJBQWlCLEVBQUUsaUJBQWlCO1lBQ3BDLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLGNBQWMsRUFBRSxTQUFTO1lBQ3pCLGlCQUFpQixFQUFFLFdBQVc7WUFDOUIsR0FBRyxFQUFFLGNBQWM7U0FDcEIsQ0FBQztRQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFJSCxxQkFBQztBQUFELENBM0NBLEFBMkNDLElBQUE7QUEzQ1ksY0FBYztJQUQxQixpQkFBVSxFQUFFO3FDQUc2Qix5Q0FBa0I7R0FGL0MsY0FBYyxDQTJDMUI7QUEzQ1ksd0NBQWMiLCJmaWxlIjoiYXBwL2RhdGEtbGF5ZXIvYXBpLXNlcnZpY2VzL2dhcm1lbnQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSHR0cFdyYXBwZXJTZXJ2aWNlIH0gZnJvbSAnLi9odHRwLndyYXBwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSAnLi9pbnRlcmZhY2VzL2h0dHBQYXJhbXMubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2FybWVudFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cFdyYXBwZXJTZXJ2aWNlOiBIdHRwV3JhcHBlclNlcnZpY2UpIHsgfVxuXG4gIGdldFByb2R1Y3RzKEVycm9yQWN0aW9uVHlwZTpzdHJpbmcsIFNwZWNpZmljRXJyb3JUeXBlOnN0cmluZywgU3VjY2Vzc1R5cGU6c3RyaW5nKSB7XG4gICAgbGV0IGdldFBhcmFtczogSHR0cFBhcmFtcyA9IHtcbiAgICAgIGVycm9yQWN0aW9uVHlwZTogRXJyb3JBY3Rpb25UeXBlLFxuICAgICAgc3BlY2lmaWNFcnJvclR5cGU6IFNwZWNpZmljRXJyb3JUeXBlLFxuICAgICAgcmVzcG9uc2VPYmplY3Q6ICdwcm9kdWN0cycsXG4gICAgICBzdWNjZXNzQWN0aW9uVHlwZTpTdWNjZXNzVHlwZSxcbiAgICAgIHVyaTogJ2h0dHA6Ly9wcml2YXRlLWFub24tODVmNzIwOWM5Zi13ZWVibHlmcm9udGVuZHRyaWFsYXBpLmFwaWFyeS1tb2NrLmNvbS9wcm9kdWN0cydcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmh0dHBXcmFwcGVyU2VydmljZS5nZXQoZ2V0UGFyYW1zKTtcbiAgfVxuXG4gIHVwZGF0ZVByb2R1Y3QocGF5bG9hZDoge2lkOnN0cmluZywgbmFtZTogc3RyaW5nLCB0eXBlOiBzdHJpbmcsIHByaWNlOm51bWJlciwgaW52ZW50b3J5OnN0cmluZywgdGh1bWJuYWlsOnN0cmluZ30sXG4gICAgICAgICAgICAgICBFcnJvckFjdGlvblR5cGU6c3RyaW5nLCBTcGVjaWZpY0Vycm9yVHlwZTpzdHJpbmcsIFN1Y2Nlc3NUeXBlOnN0cmluZykge1xuICAgIGxldCBwb3N0UGFyYW1zOiBIdHRwUGFyYW1zID0ge1xuICAgICAgZXJyb3JBY3Rpb25UeXBlOkVycm9yQWN0aW9uVHlwZSxcbiAgICAgIHNwZWNpZmljRXJyb3JUeXBlOiBTcGVjaWZpY0Vycm9yVHlwZSxcbiAgICAgIHBheWxvYWQ6IHBheWxvYWQsXG4gICAgICByZXNwb25zZU9iamVjdDogJ3Byb2R1Y3QnLFxuICAgICAgc3VjY2Vzc0FjdGlvblR5cGU6IFN1Y2Nlc3NUeXBlLFxuICAgICAgdXJpOiAncHJvZHVjdHMvdXBkYXRlJ1xuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuaHR0cFdyYXBwZXJTZXJ2aWNlLnBvc3QocG9zdFBhcmFtcyk7XG4gIH1cblxuICBhZGROZXdQcm9kdWN0KHBheWxvYWQ6IHtuYW1lOiBzdHJpbmcsIHR5cGU6IHN0cmluZywgcHJpY2U6bnVtYmVyLCBpbnZlbnRvcnk6c3RyaW5nLCB0aHVtYm5haWw6c3RyaW5nfSxcbiAgICAgICAgICAgICAgIEVycm9yQWN0aW9uVHlwZTpzdHJpbmcsIFNwZWNpZmljRXJyb3JUeXBlOnN0cmluZywgU3VjY2Vzc1R5cGU6c3RyaW5nKSB7XG4gICAgbGV0IHBvc3RQYXJhbXM6IEh0dHBQYXJhbXMgPSB7XG4gICAgICBlcnJvckFjdGlvblR5cGU6RXJyb3JBY3Rpb25UeXBlLFxuICAgICAgc3BlY2lmaWNFcnJvclR5cGU6IFNwZWNpZmljRXJyb3JUeXBlLFxuICAgICAgcGF5bG9hZDogcGF5bG9hZCxcbiAgICAgIHJlc3BvbnNlT2JqZWN0OiAncHJvZHVjdCcsXG4gICAgICBzdWNjZXNzQWN0aW9uVHlwZTogU3VjY2Vzc1R5cGUsXG4gICAgICB1cmk6ICdwcm9kdWN0cy9hZGQnXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5odHRwV3JhcHBlclNlcnZpY2UucG9zdChwb3N0UGFyYW1zKTtcbiAgfVxuXG5cblxufVxuIl19
