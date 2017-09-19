/**
 * Created by willstreeter on 9/19/17.
 */
/**
 * Created by willstreeter on 9/19/17.
 */
import { Garment }       from './garment.clone';
import { Observable } from 'rxjs/Observable';

export abstract class GarmentService {
  garmentsUrl = 'api/products';  // URL to web api

  abstract getGarments(ErrorActionType:string,
                       SpecificErrorType:string,
                       SuccessType:string): Observable<Garment[]>;

  abstract getGarment( payload: {
                                  id:number
                                },
                       ErrorActionType:string,
                       SpecificErrorType:string,
                       SuccessType:string): Observable<Garment>;

  abstract addGarment( payload: {
                                    name:string
                                    type:string,
                                    price:number,
                                    inventory:number,
                                    thumbnail:string
                                 },
                       ErrorActionType:string,
                       SpecificErrorType:string,
                       SuccessType:string): Observable<Garment>;

  abstract updateGarment( payload: {
                                       garment: Garment
                                    },
                           ErrorActionType:string,
                           SpecificErrorType:string,
                           SuccessType:string): Observable<Garment>;

  abstract deleteGarment ( payload: {
                                      garment: Garment | number
                                    },
                           ErrorActionType:string,
                           SpecificErrorType:string,
                           SuccessType:string): Observable<Garment>;
}