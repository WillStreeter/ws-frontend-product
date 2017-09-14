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
