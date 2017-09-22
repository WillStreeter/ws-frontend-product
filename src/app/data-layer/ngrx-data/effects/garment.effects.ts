import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import * as errorActions from '../actions/error.actions';
import * as portalActions from '../actions/portal.actions';
import * as garmentActions from '../actions/garment.actions';
import { HttpGarmentService } from '../../api-services/garments/http.garment.service';
import * as fromRoot from '../reducers/index';
import {GarmentSortModel, GarmentModel, GarmentAddModel} from '../../../business-layer/models';
import * as  GarmentActionTypes  from '../../../business-layer/shared-types/actions/garment.action.types';
import {SortingServices} from '../../sorting-services/sorting.service';
import {UpdateGarmentAttempt} from "../actions/garment.actions";



@Injectable()
export class GarmentEffects {



    //@Effect( )  startUpApp$: Observable<Action> = Observable.of(new garmentActions.GetGarmentCollection());


    @Effect() fetchGarmentCollection: Observable<Action>  = this.actions$
        .ofType(garmentActions.GarmentTypes.FETCH_GARMENT_COLLECTION_ATTEMPT)
        .switchMap(() => {
                return this.garmentServices.getGarments(
                errorActions.ErrorTypes.REPORT_ERROR,
                garmentActions.GarmentTypes.FETCH_GARMENT_COLLECTION_FAILURE,
                garmentActions.GarmentTypes.FETCH_GARMENT_COLLECTION_SUCCESS)
        });


    @Effect()  garmentCollectionFetched: Observable<Action>  = this.actions$
      .ofType(garmentActions.GarmentTypes.FETCH_GARMENT_COLLECTION_SUCCESS)
      .map((action:garmentActions.GetGarmentCollectionSuccess) => action.payload)
      .switchMap( (payload)=> {
          return this.sortingServices.sortGarmentCollection()})
      .map((payload) =>  {
          return new garmentActions.UpdateSortedCollection(payload)
      });

    @Effect()  sortCollectionBySearchTerm = this.actions$
        .ofType(garmentActions.GarmentTypes.SEARCH_COLLECTION_BY_TERM)
        .map((action:garmentActions.SearchCollectionByTerm) => action.payload)
        .switchMap((action, garmentCollection)=>this.sortingServices.searchGarmentCollection(action))
        .map(payload =>  new garmentActions.UpdateSortedCollection(payload));


    @Effect() updateGarmentInCollectionAttempt = this.actions$
        .ofType(garmentActions.GarmentTypes.UPDATE_GARMENT_IN_COLLECTION_ATTEMPT)
        .map((action:garmentActions.UpdateGarmentAttempt) => action.payload)
        .switchMap((payload:any) => this.garmentServices.updateGarment( payload,
            errorActions.ErrorTypes.REPORT_ERROR,
            garmentActions.GarmentTypes.UPDATE_GARMENT_IN_COLLECTION_FAILURE,
            garmentActions.GarmentTypes.UPDATE_GARMENT_IN_COLLECTION_SUCCESS));



    @Effect() garmentUpdatedInCollectionSuccess = this.actions$
        .ofType(garmentActions.GarmentTypes.UPDATE_GARMENT_IN_COLLECTION_SUCCESS)
        .map((action:garmentActions.UpdateGarmentSuccess) => action.payload)
        .switchMap( (garmentCollection)=>this.sortingServices.sortGarmentCollection())
        .map(payload =>  new garmentActions.UpdateSortedCollection(payload));




    @Effect() addGarmentToCollection = this.actions$
        .ofType(garmentActions.GarmentTypes.ADD_GARMENT_TO_COLLECTION_ATTEMPT)
        .map((action:garmentActions.AddGarmentToCollectionAttempt) => action.payload)
        .switchMap((payload:any) => this.garmentServices.addGarment( payload,
            errorActions.ErrorTypes.REPORT_ERROR,
            garmentActions.GarmentTypes.ADD_GARMENT_TO_COLLECTION_FAILURE,
            garmentActions.GarmentTypes.ADD_GARMENT_TO_COLLECTION_SUCCESS));



    @Effect() garmentAddedToCollection = this.actions$
        .ofType(garmentActions.GarmentTypes.ADD_GARMENT_TO_COLLECTION_SUCCESS)
        .map((action:garmentActions.AddGarmentToCollectionSuccess) => action.payload)
        .switchMap( (garmentCollection)=>this.sortingServices.sortGarmentCollection())
        .map(payload =>  new garmentActions.UpdateSortedCollection(payload));






 constructor( private store:Store<fromRoot.State>,
              private garmentServices: HttpGarmentService,
              private sortingServices: SortingServices,
              private actions$: Actions
             ) {  }
}
