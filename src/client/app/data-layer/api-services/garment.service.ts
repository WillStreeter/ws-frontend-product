import { Injectable } from '@angular/core';

import { HttpWrapperService } from './http.wrapper.service';
import { HttpParams } from './interfaces/httpParams.model';

@Injectable()
export class GarmentService {

  constructor(private httpWrapperService: HttpWrapperService) { }

  getProducts(ErrorActionType:string, SpecificErrorType:string, SuccessType:string) {
    let getParams: HttpParams = {
      errorActionType: ErrorActionType,
      specificErrorType: SpecificErrorType,
      responseObject: 'products',
      successActionType:SuccessType,
      uri: 'http://private-anon-85f7209c9f-weeblyfrontendtrialapi.apiary-mock.com/products'
    };
    return this.httpWrapperService.get(getParams);
  }

  updateProduct(payload: {id:number, name: string, type: string, price:number, inventory:string, thumbnail:string},
               ErrorActionType:string, SpecificErrorType:string, SuccessType:string) {
               console.log('GarmentService === updateProduct', payload)
    let postParams: HttpParams = {
      errorActionType: ErrorActionType,
      specificErrorType: SpecificErrorType,
      payload: payload,
      responseObject: 'product',
      successActionType: SuccessType,
      uri: 'products/update'
    };
    return this.httpWrapperService.post(postParams);
  }

  addNewProduct(payload: {id:number,name: string, type: string, price:number, inventory:string, thumbnail:string},
               ErrorActionType:string, SpecificErrorType:string, SuccessType:string) {
    let postParams: HttpParams = {
      errorActionType:ErrorActionType,
      specificErrorType: SpecificErrorType,
      payload: payload,
      responseObject: 'product',
      successActionType: SuccessType,
      uri: 'products/add'
    };
    return this.httpWrapperService.post(postParams);

    // console.log('value callback ', value)
    // return value;
  }

}
