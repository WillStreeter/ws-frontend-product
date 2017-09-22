import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpWrapperService } from '../http.wrapper.service';
import { HttpParams } from '../interfaces/httpParams.model';
import {Garment} from "./garment-mock/garment.clone";
import { environment } from '../../../../environments/environment';

@Injectable()
export class HttpGarmentService {

  garmentsUrl = 'api/garments';  // URL to web api

  constructor(private httpWrapperService: HttpWrapperService) { }

  getGarments(ErrorActionType:string,
              SpecificErrorType:string,
              SuccessType:string){
    let getParams: HttpParams = {
      errorActionType: ErrorActionType,
      specificErrorType: SpecificErrorType,
      responseObject: 'garments',
      successActionType:SuccessType,
      uri: `${this.garmentsUrl}`
    };
    return this.httpWrapperService.get(getParams).map( (response)=>(this.checkForClientDev(response)));
  }

  getGarment(payload: {
                        id:number
                      },
             ErrorActionType:string,
             SpecificErrorType:string,
             SuccessType:string) {
    let getParams: HttpParams = {
      errorActionType: ErrorActionType,
      specificErrorType: SpecificErrorType,
      payload: payload,
      responseObject: 'garment',
      successActionType: SuccessType,
      uri: `${this.garmentsUrl}/${payload.id}`
    };
    return this.httpWrapperService.post(getParams).map( (response)=>(this.checkForClientDev(response)));
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
              SuccessType:string){

    let postParams: HttpParams = {
      errorActionType:ErrorActionType,
      specificErrorType: SpecificErrorType,
      payload: payload,
      responseObject: 'garment',
      successActionType: SuccessType,
      uri:  `${this.garmentsUrl}/add`
    };
    return this.httpWrapperService.post(postParams).map( (response)=>this.checkForClientDev(response));
  }


  updateGarment(payload: {
                             garment:Garment
                         },
               ErrorActionType:string,
               SpecificErrorType:string,
               SuccessType:string){
    let postParams: HttpParams = {
      errorActionType: ErrorActionType,
      specificErrorType: SpecificErrorType,
      payload: payload,
      responseObject: 'garment',
      successActionType: SuccessType,
      uri: `${this.garmentsUrl}/update`
    };
    return this.httpWrapperService.put(postParams).map( (response)=>this.checkForClientDev(response))
  }

  deleteGarment(payload: {
                             garment:Garment
                         },
               ErrorActionType:string,
               SpecificErrorType:string,
               SuccessType:string) {
    let postParams: HttpParams = {
      errorActionType: ErrorActionType,
      specificErrorType: SpecificErrorType,
      payload: payload,
      responseObject: 'garment',
      successActionType: SuccessType,
      uri: `${this.garmentsUrl}/delete`
    };
    return this.httpWrapperService.post(postParams);
  }


  private checkForClientDev(response:any){
   // because I am using api in memory for a gh page I am commenting this out
     if(environment.production ) {
        //return response;
        return Object.assign(response,{payload: <Garment[]> response.payload['data'] } );
     }else{
        return Object.assign(response,{payload: <Garment[]> response.payload['data'] } );
     }

  }


}
