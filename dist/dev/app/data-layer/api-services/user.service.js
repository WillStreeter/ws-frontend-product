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
var UserServices = (function () {
    function UserServices(httpWrapperService) {
        this.httpWrapperService = httpWrapperService;
    }
    UserServices.prototype.getUserById = function (payload, ErrorActionType, SpecificErrorType, SuccessType) {
        var getParams = {
            auth: true,
            errorActionType: ErrorActionType,
            specificErrorType: SpecificErrorType,
            payload: payload,
            responseObject: 'user',
            successActionType: SuccessType,
            uri: 'Users/' + payload
        };
        return this.httpWrapperService.get(getParams);
    };
    UserServices.prototype.getUserByName = function (payload, ErrorActionType, SpecificErrorType, SuccessType) {
        var getParams = {
            auth: false,
            errorActionType: ErrorActionType,
            specificErrorType: SpecificErrorType,
            payload: payload,
            responseObject: 'user',
            successActionType: SuccessType,
            uri: 'Users/username/' + payload
        };
        return this.httpWrapperService.get(getParams);
    };
    UserServices.prototype.loginUser = function (payload, ErrorActionType, SpecificErrorType, SuccessType) {
        var postParams = {
            auth: false,
            errorActionType: ErrorActionType,
            specificErrorType: SpecificErrorType,
            payload: payload,
            responseObject: 'account',
            successActionType: SuccessType,
            uri: 'Authorizations/Login'
        };
        return this.httpWrapperService.post(postParams);
    };
    UserServices.prototype.logoutUser = function (ErrorActionType, SpecificErrorType, SuccessType) {
        var postParams = {
            auth: true,
            errorActionType: ErrorActionType,
            specificErrorType: SpecificErrorType,
            responseObject: 'general',
            successActionType: SuccessType,
            uri: 'Authorizations/Logout'
        };
        return this.httpWrapperService.post(postParams);
    };
    UserServices.prototype.registerUser = function (payload, ErrorActionType, SpecificErrorType, SuccessType) {
        var postParams = {
            auth: false,
            errorActionType: ErrorActionType,
            specificErrorType: SpecificErrorType,
            payload: payload,
            responseObject: 'account',
            successActionType: SuccessType,
            uri: 'Users'
        };
        return this.httpWrapperService.post(postParams);
    };
    return UserServices;
}());
UserServices = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_wrapper_service_1.HttpWrapperService])
], UserServices);
exports.UserServices = UserServices;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhLWxheWVyL2FwaS1zZXJ2aWNlcy91c2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMkM7QUFFM0MsK0RBQTREO0FBSTVELElBQWEsWUFBWTtJQUV2QixzQkFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFBSSxDQUFDO0lBRS9ELGtDQUFXLEdBQVgsVUFBWSxPQUFjLEVBQ2QsZUFBc0IsRUFBRSxpQkFBd0IsRUFBRSxXQUFrQjtRQUM5RSxJQUFJLFNBQVMsR0FBZTtZQUMxQixJQUFJLEVBQUUsSUFBSTtZQUNWLGVBQWUsRUFBRSxlQUFlO1lBQ2hDLGlCQUFpQixFQUFFLGlCQUFpQjtZQUNwQyxPQUFPLEVBQUUsT0FBTztZQUNoQixjQUFjLEVBQUUsTUFBTTtZQUN0QixpQkFBaUIsRUFBQyxXQUFXO1lBQzdCLEdBQUcsRUFBRSxRQUFRLEdBQUMsT0FBTztTQUN0QixDQUFDO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUdELG9DQUFhLEdBQWIsVUFBYyxPQUFjLEVBQ2QsZUFBc0IsRUFBRSxpQkFBd0IsRUFBRSxXQUFrQjtRQUNoRixJQUFJLFNBQVMsR0FBZTtZQUMxQixJQUFJLEVBQUUsS0FBSztZQUNYLGVBQWUsRUFBRSxlQUFlO1lBQ2hDLGlCQUFpQixFQUFDLGlCQUFpQjtZQUNuQyxPQUFPLEVBQUUsT0FBTztZQUNoQixjQUFjLEVBQUUsTUFBTTtZQUN0QixpQkFBaUIsRUFBQyxXQUFXO1lBQzdCLEdBQUcsRUFBRSxpQkFBaUIsR0FBQyxPQUFPO1NBQy9CLENBQUM7UUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsZ0NBQVMsR0FBVCxVQUFVLE9BQTZDLEVBQzdDLGVBQXNCLEVBQUUsaUJBQXdCLEVBQUUsV0FBa0I7UUFDNUUsSUFBSSxVQUFVLEdBQWU7WUFDM0IsSUFBSSxFQUFFLEtBQUs7WUFDWCxlQUFlLEVBQUUsZUFBZTtZQUNoQyxpQkFBaUIsRUFBRSxpQkFBaUI7WUFDcEMsT0FBTyxFQUFFLE9BQU87WUFDaEIsY0FBYyxFQUFFLFNBQVM7WUFDekIsaUJBQWlCLEVBQUUsV0FBVztZQUM5QixHQUFHLEVBQUUsc0JBQXNCO1NBQzVCLENBQUM7UUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsaUNBQVUsR0FBVixVQUFZLGVBQXNCLEVBQUUsaUJBQWlCLEVBQUUsV0FBa0I7UUFDdkUsSUFBSSxVQUFVLEdBQWU7WUFDM0IsSUFBSSxFQUFFLElBQUk7WUFDVixlQUFlLEVBQUMsZUFBZTtZQUMvQixpQkFBaUIsRUFBRSxpQkFBaUI7WUFDcEMsY0FBYyxFQUFFLFNBQVM7WUFDekIsaUJBQWlCLEVBQUUsV0FBVztZQUM5QixHQUFHLEVBQUUsdUJBQXVCO1NBQzdCLENBQUM7UUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsbUNBQVksR0FBWixVQUFhLE9BQThGLEVBQ3BGLGVBQXNCLEVBQUUsaUJBQXdCLEVBQUUsV0FBa0I7UUFDekYsSUFBSSxVQUFVLEdBQWU7WUFDM0IsSUFBSSxFQUFFLEtBQUs7WUFDWCxlQUFlLEVBQUMsZUFBZTtZQUMvQixpQkFBaUIsRUFBRSxpQkFBaUI7WUFDcEMsT0FBTyxFQUFFLE9BQU87WUFDaEIsY0FBYyxFQUFFLFNBQVM7WUFDekIsaUJBQWlCLEVBQUUsV0FBVztZQUM5QixHQUFHLEVBQUUsT0FBTztTQUNiLENBQUM7UUFDRixNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUgsbUJBQUM7QUFBRCxDQXpFQSxBQXlFQyxJQUFBO0FBekVZLFlBQVk7SUFEeEIsaUJBQVUsRUFBRTtxQ0FHNkIseUNBQWtCO0dBRi9DLFlBQVksQ0F5RXhCO0FBekVZLG9DQUFZIiwiZmlsZSI6ImFwcC9kYXRhLWxheWVyL2FwaS1zZXJ2aWNlcy91c2VyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEh0dHBXcmFwcGVyU2VydmljZSB9IGZyb20gJy4vaHR0cC53cmFwcGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cFBhcmFtcyB9IGZyb20gJy4vaW50ZXJmYWNlcy9odHRwUGFyYW1zLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlcyB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwV3JhcHBlclNlcnZpY2U6IEh0dHBXcmFwcGVyU2VydmljZSkgeyB9XG5cbiAgZ2V0VXNlckJ5SWQocGF5bG9hZDpzdHJpbmcsXG4gICAgICAgICAgICAgIEVycm9yQWN0aW9uVHlwZTpzdHJpbmcsIFNwZWNpZmljRXJyb3JUeXBlOnN0cmluZywgU3VjY2Vzc1R5cGU6c3RyaW5nKSB7XG4gICAgbGV0IGdldFBhcmFtczogSHR0cFBhcmFtcyA9IHtcbiAgICAgIGF1dGg6IHRydWUsXG4gICAgICBlcnJvckFjdGlvblR5cGU6IEVycm9yQWN0aW9uVHlwZSxcbiAgICAgIHNwZWNpZmljRXJyb3JUeXBlOiBTcGVjaWZpY0Vycm9yVHlwZSxcbiAgICAgIHBheWxvYWQ6IHBheWxvYWQsXG4gICAgICByZXNwb25zZU9iamVjdDogJ3VzZXInLFxuICAgICAgc3VjY2Vzc0FjdGlvblR5cGU6U3VjY2Vzc1R5cGUsXG4gICAgICB1cmk6ICdVc2Vycy8nK3BheWxvYWRcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmh0dHBXcmFwcGVyU2VydmljZS5nZXQoZ2V0UGFyYW1zKTtcbiAgfVxuXG5cbiAgZ2V0VXNlckJ5TmFtZShwYXlsb2FkOnN0cmluZyxcbiAgICAgICAgICAgICAgICBFcnJvckFjdGlvblR5cGU6c3RyaW5nLCBTcGVjaWZpY0Vycm9yVHlwZTpzdHJpbmcsIFN1Y2Nlc3NUeXBlOnN0cmluZykge1xuICAgIGxldCBnZXRQYXJhbXM6IEh0dHBQYXJhbXMgPSB7XG4gICAgICBhdXRoOiBmYWxzZSxcbiAgICAgIGVycm9yQWN0aW9uVHlwZTogRXJyb3JBY3Rpb25UeXBlLFxuICAgICAgc3BlY2lmaWNFcnJvclR5cGU6U3BlY2lmaWNFcnJvclR5cGUsXG4gICAgICBwYXlsb2FkOiBwYXlsb2FkLFxuICAgICAgcmVzcG9uc2VPYmplY3Q6ICd1c2VyJyxcbiAgICAgIHN1Y2Nlc3NBY3Rpb25UeXBlOlN1Y2Nlc3NUeXBlLFxuICAgICAgdXJpOiAnVXNlcnMvdXNlcm5hbWUvJytwYXlsb2FkXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5odHRwV3JhcHBlclNlcnZpY2UuZ2V0KGdldFBhcmFtcyk7XG4gIH1cblxuICBsb2dpblVzZXIocGF5bG9hZDoge3VzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmd9LFxuICAgICAgICAgICAgRXJyb3JBY3Rpb25UeXBlOnN0cmluZywgU3BlY2lmaWNFcnJvclR5cGU6c3RyaW5nLCBTdWNjZXNzVHlwZTpzdHJpbmcpIHtcbiAgICBsZXQgcG9zdFBhcmFtczogSHR0cFBhcmFtcyA9IHtcbiAgICAgIGF1dGg6IGZhbHNlLFxuICAgICAgZXJyb3JBY3Rpb25UeXBlOiBFcnJvckFjdGlvblR5cGUsXG4gICAgICBzcGVjaWZpY0Vycm9yVHlwZTogU3BlY2lmaWNFcnJvclR5cGUsXG4gICAgICBwYXlsb2FkOiBwYXlsb2FkLFxuICAgICAgcmVzcG9uc2VPYmplY3Q6ICdhY2NvdW50JyxcbiAgICAgIHN1Y2Nlc3NBY3Rpb25UeXBlOiBTdWNjZXNzVHlwZSxcbiAgICAgIHVyaTogJ0F1dGhvcml6YXRpb25zL0xvZ2luJ1xuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuaHR0cFdyYXBwZXJTZXJ2aWNlLnBvc3QocG9zdFBhcmFtcyk7XG4gIH1cblxuICBsb2dvdXRVc2VyKCBFcnJvckFjdGlvblR5cGU6c3RyaW5nLCBTcGVjaWZpY0Vycm9yVHlwZSwgU3VjY2Vzc1R5cGU6c3RyaW5nKSB7XG4gICAgbGV0IHBvc3RQYXJhbXM6IEh0dHBQYXJhbXMgPSB7XG4gICAgICBhdXRoOiB0cnVlLFxuICAgICAgZXJyb3JBY3Rpb25UeXBlOkVycm9yQWN0aW9uVHlwZSxcbiAgICAgIHNwZWNpZmljRXJyb3JUeXBlOiBTcGVjaWZpY0Vycm9yVHlwZSxcbiAgICAgIHJlc3BvbnNlT2JqZWN0OiAnZ2VuZXJhbCcsXG4gICAgICBzdWNjZXNzQWN0aW9uVHlwZTogU3VjY2Vzc1R5cGUsXG4gICAgICB1cmk6ICdBdXRob3JpemF0aW9ucy9Mb2dvdXQnXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5odHRwV3JhcHBlclNlcnZpY2UucG9zdChwb3N0UGFyYW1zKTtcbiAgfVxuXG4gIHJlZ2lzdGVyVXNlcihwYXlsb2FkOiB7dXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgZmlyc3RuYW1lOnN0cmluZywgbGFzdG5hbWU6c3RyaW5nLCBlbWFpbDpzdHJpbmd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgIEVycm9yQWN0aW9uVHlwZTpzdHJpbmcsIFNwZWNpZmljRXJyb3JUeXBlOnN0cmluZywgU3VjY2Vzc1R5cGU6c3RyaW5nKSB7XG4gICAgbGV0IHBvc3RQYXJhbXM6IEh0dHBQYXJhbXMgPSB7XG4gICAgICBhdXRoOiBmYWxzZSxcbiAgICAgIGVycm9yQWN0aW9uVHlwZTpFcnJvckFjdGlvblR5cGUsXG4gICAgICBzcGVjaWZpY0Vycm9yVHlwZTogU3BlY2lmaWNFcnJvclR5cGUsXG4gICAgICBwYXlsb2FkOiBwYXlsb2FkLFxuICAgICAgcmVzcG9uc2VPYmplY3Q6ICdhY2NvdW50JyxcbiAgICAgIHN1Y2Nlc3NBY3Rpb25UeXBlOiBTdWNjZXNzVHlwZSxcbiAgICAgIHVyaTogJ1VzZXJzJ1xuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuaHR0cFdyYXBwZXJTZXJ2aWNlLnBvc3QocG9zdFBhcmFtcyk7XG4gIH1cblxufVxuIl19
