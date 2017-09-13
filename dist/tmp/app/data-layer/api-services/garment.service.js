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
import { HttpWrapperService } from './http.wrapper.service';
let GarmentService = class GarmentService {
    constructor(httpWrapperService) {
        this.httpWrapperService = httpWrapperService;
    }
    getProducts(ErrorActionType, SpecificErrorType, SuccessType) {
        let getParams = {
            errorActionType: ErrorActionType,
            specificErrorType: SpecificErrorType,
            responseObject: 'products',
            successActionType: SuccessType,
            uri: 'http://private-anon-85f7209c9f-weeblyfrontendtrialapi.apiary-mock.com/products'
        };
        return this.httpWrapperService.get(getParams);
    }
    updateProduct(payload, ErrorActionType, SpecificErrorType, SuccessType) {
        console.log('GarmentService === updateProduct', payload);
        let postParams = {
            errorActionType: ErrorActionType,
            specificErrorType: SpecificErrorType,
            payload: payload,
            responseObject: 'product',
            successActionType: SuccessType,
            uri: 'products/update'
        };
        return this.httpWrapperService.post(postParams);
    }
    addNewProduct(payload, ErrorActionType, SpecificErrorType, SuccessType) {
        let postParams = {
            errorActionType: ErrorActionType,
            specificErrorType: SpecificErrorType,
            payload: payload,
            responseObject: 'product',
            successActionType: SuccessType,
            uri: 'products/add'
        };
        return this.httpWrapperService.post(postParams);
    }
};
GarmentService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpWrapperService])
], GarmentService);
export { GarmentService };
