"use strict";
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
GarmentService.decorators = [
    { type: core_1.Injectable },
];
GarmentService.ctorParameters = function () { return [
    { type: http_wrapper_service_1.HttpWrapperService, },
]; };
exports.GarmentService = GarmentService;
//# sourceMappingURL=garment.service.js.map