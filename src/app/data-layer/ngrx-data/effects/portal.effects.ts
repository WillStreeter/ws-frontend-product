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
import { SortingServices } from '../../sorting-services/sorting.service';
import * as fromRoot from '../reducers/index';



@Injectable()
export class PortalEffects {
    @Effect()  portalActionUpdate = this.actions$
      .ofType(portalActions.PortalTypes.UPDATE_SORT_STATE)
      .map( (action:portalActions.UpdateCurrentSortState) => action.payload )
      .switchMap(()=> this.sortingServices.sortGarmentCollection())
      .map((payload) =>  new garmentActions.UpdateSortedCollection(payload));

    @Effect()  updateAddRowRevealState = this.actions$
       .ofType(garmentActions.GarmentTypes.ADD_GARMENT_TO_COLLECTION_SUCCESS)
         .map( (action:garmentActions.AddGarmentToCollectionSuccess) => action.payload )
        .switchMap(payload =>{
            return Observable.of( new portalActions.UpdateAddRowGarment(false));
        });

     @Effect()  updateAfterPageChange= this.actions$
      .ofType(portalActions.PortalTypes.SET_CURRENT_PAGE_NUMBER)
         .map( (action:portalActions.SetCurrentPageNumber) => action.payload )
         .switchMap(()=> this.sortingServices.getCollectionSubset())
         .map((payload) =>  new garmentActions.UpdateSortedCollection(payload));

     @Effect()  updateAfterViewableUpdate= this.actions$
      .ofType(portalActions.PortalTypes.UPDATE_VIEWABLE_PER_PAGE_COUNT)
         .map( (action:portalActions.UpdateViewablePerPageCount) => action.payload )
         .switchMap(()=> this.sortingServices.getCollectionSubset())
         .map((payload) =>  new garmentActions.UpdateSortedCollection(payload));

  constructor(private store:Store<fromRoot.State>,
              private actions$: Actions,
              private sortingServices:SortingServices
             ) {  }
}
