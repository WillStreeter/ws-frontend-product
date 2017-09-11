import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/observable/of';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect  } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import * as portalActions from '../actions/portal.actions';
import * as garmentActions from '../actions/garment.actions';
import {SortingServices} from "../../sorting-services/sorting.service";
import * as fromRoot from '../reducers/index';



@Injectable()
export class PortalEffects {
    @Effect()  portalActionUpdate = this.actions$
      .ofType(portalActions.PortalTypes.UPDATE_SORT_STATE)
      .withLatestFrom( this.store.select(fromRoot.getCurrentGarmentCollection) )
      .map( ([action, garmentCollection]) => [action.payload, garmentCollection] )
      .switchMap((garmentCollection)=>( this.sortingServices.sortGarmentCollection(garmentCollection[1].products)))
      .map((payload) =>  new garmentActions.UpdateSortedCollection(payload));



  constructor(private store:Store<fromRoot.State>,
              private actions$: Actions,
              private sortingServices:SortingServices
             ) {  }
}
