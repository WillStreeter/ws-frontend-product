import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GarmentService } from './garment.service';
import { HttpWrapperService } from '../http.wrapper.service';
import { HttpParams } from '../interfaces/httpParams.model';
import {Garment} from "./garment.clone";

@Injectable()
export class HttpGarmentService extends GarmentService {

  constructor(private httpWrapperService: HttpWrapperService) {
      super()
   }

  getGarments(ErrorActionType:string,
              SpecificErrorType:string,
              SuccessType:string): Observable<Garment[]> {
    console.log('GarmentService  getGarments')
    let getParams: HttpParams = {
      errorActionType: ErrorActionType,
      specificErrorType: SpecificErrorType,
      responseObject: 'products',
      responseType:<Garment>[],
      successActionType:SuccessType,
      uri: `${this.garmentsUrl}`
    };
    return this.httpWrapperService.get(getParams);
  }

  getGarment(payload: {
                        id:number
                      },
             ErrorActionType:string,
             SpecificErrorType:string,
             SuccessType:string): Observable<Garment>  {
    let getParams: HttpParams = {
      errorActionType: ErrorActionType,
      specificErrorType: SpecificErrorType,
      payload: payload,
      responseObject: 'product',
      responseType:Garment,
      successActionType: SuccessType,
      uri: `${this.garmentsUrl}/${payload.id}`
    };
    return this.httpWrapperService.post(getParams);
  }

  addGarment( payload: {
                        name: string,
                        type: string,
                        price:number,
                        inventory:number,
                        thumbnail:string
                      },
              ErrorActionType:string,
              SpecificErrorType:string,
              SuccessType:string): Observable<Garment> {

    let postParams: HttpParams = {
      errorActionType:ErrorActionType,
      specificErrorType: SpecificErrorType,
      payload: payload,
      responseObject: 'product',
      responseType:Garment,
      successActionType: SuccessType,
      uri:  `${this.garmentsUrl}/add`
    };
    return this.httpWrapperService.post(postParams);
  }


  updateGarment(payload: {
                             garment:Garment
                         },
               ErrorActionType:string,
               SpecificErrorType:string,
               SuccessType:string) :Observable<Garment> {
               console.log('GarmentService === updateProduct', payload)
    let postParams: HttpParams = {
      errorActionType: ErrorActionType,
      specificErrorType: SpecificErrorType,
      payload: payload,
      responseObject: 'product',
      responseType:Garment,
      successActionType: SuccessType,
      uri: `${this.garmentsUrl}/update`
    };
    return this.httpWrapperService.post(postParams);
  }

  deleteGarment(payload: {
                             garment:Garment
                         },
               ErrorActionType:string,
               SpecificErrorType:string,
               SuccessType:string) :Observable<Garment> {
               console.log('GarmentService === delete', payload)
    let deletParams: HttpParams = {
      errorActionType: ErrorActionType,
      specificErrorType: SpecificErrorType,
      payload: payload,
      responseType:Garment,
      responseObject: 'product',
      successActionType: SuccessType,
      uri: `${this.garmentsUrl}/delete`
    };
    return this.httpWrapperService.delete(deletParams);
  }




}
