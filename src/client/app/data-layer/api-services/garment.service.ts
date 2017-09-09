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
      payload: payload,
      responseObject: 'products',
      successActionType:SuccessType,
      uri: 'http://private-anon-85f7209c9f-weeblyfrontendtrialapi.apiary-mock.com/products'
    };
    return this.httpWrapperService.get(getParams);
  }


}
