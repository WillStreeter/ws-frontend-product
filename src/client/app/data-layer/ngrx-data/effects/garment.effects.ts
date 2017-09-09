import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect  } from '@ngrx/effects';
import * as errorActions from '../actions/error.actions';
import * as portalActions from '../actions/portal.actions';
import * as garmentActions from '../actions/garment.actions';
import { GarmentService } from '../../api-services/garment.service';
import * as fromRoot from '../reducers/index';
import {GarmentSortModel} from "../../../business-layer/models/garmentSort.model";
import {SortingServices} from "../../sorting-services/sorting.service";



@Injectable()
export class GarmentEffects {

  @Effect()  fetchGarmentCollection  = Observable.of(new garmentActions.GetGarmentCollection());


 @Effect() setGarmentServiced = this.actions$
  .ofType(garmentActions.GarmentTypes.FETCH_GARMENT_COLLECTION_ATTEMPT)
  .map(action => action.payload)
  .switchMap( (payload)=>( this.sortingServices.sortGarmentCollection(payload)))
  .map(payload =>  new garmentActions.UpdateSortedCollection(payload));





 constructor( private store:Store<fromRoot.State>,
              private garmentServices: GarmentService,
              private sortingServices: SortingServices,
              private actions$: Actions
             ) {  }
}
