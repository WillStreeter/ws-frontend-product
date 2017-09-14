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
import {GarmentSortModel, GarmentModel} from '../../../business-layer/models';
import {SortingServices} from '../../sorting-services/sorting.service';



@Injectable()
export class GarmentEffects {



    @Effect()  startUpApp  = Observable.of(new garmentActions.GetGarmentCollection());


    @Effect() fetchGarmentCollection = this.actions$
        .ofType(garmentActions.GarmentTypes.FETCH_GARMENT_COLLECTION_ATTEMPT)
        .map(action => action.payload)
        .switchMap(() => this.garmentServices.getProducts(
            errorActions.ErrorTypes.REPORT_ERROR,
            garmentActions.GarmentTypes.FETCH_GARMENT_COLLECTION_FAILURE,
            garmentActions.GarmentTypes.FETCH_GARMENT_COLLECTION_SUCCESS));


    @Effect()  garmentCollectionFetched = this.actions$
      .ofType(garmentActions.GarmentTypes.FETCH_GARMENT_COLLECTION_SUCCESS)
      .map(action => action.payload)
      .switchMap( (payload)=>( this.sortingServices.sortGarmentCollection()))
      .map((payload) =>  {
           localStorage.setItem('products', JSON.stringify(payload.products));
          return new garmentActions.UpdateSortedCollection(payload)
      });

    @Effect()  sortCollectionBySearchTerm = this.actions$
        .ofType(garmentActions.GarmentTypes.SEARCH_COLLECTION_BY_TERM)
        .map(action => action.payload)
        .switchMap((action, garmentCollection)=>this.sortingServices.searchGarmentCollection(action))
        .map(payload =>  new garmentActions.UpdateSortedCollection(payload));


    @Effect() upddateGarementInCollection = this.actions$
        .ofType(garmentActions.GarmentTypes.UPDATE_GARMENT_IN_COLLECTION_ATTEMPT)
        .map(action => action.payload)
        .switchMap(payload => this.garmentServices.updateProduct( payload,
            errorActions.ErrorTypes.REPORT_ERROR,
            garmentActions.GarmentTypes.UPDATE_GARMENT_IN_COLLECTION_FAILURE,
            garmentActions.GarmentTypes.UPDATE_GARMENT_IN_COLLECTION_SUCCESS));



    @Effect() garmentUpdatedInCollection = this.actions$
        .ofType(garmentActions.GarmentTypes.UPDATE_GARMENT_IN_COLLECTION_SUCCESS)
        .map(action => action.payload)
        .switchMap( (garmentCollection)=>this.sortingServices.sortGarmentCollection())
        .map(payload =>  new garmentActions.UpdateSortedCollection(payload));




    @Effect() addGarmentToCollection = this.actions$
        .ofType(garmentActions.GarmentTypes.ADD_GARMENT_TO_COLLECTION_ATTEMPT)
        .map(action => action.payload)
        .switchMap(payload => this.garmentServices.addNewProduct( payload,
            errorActions.ErrorTypes.REPORT_ERROR,
            garmentActions.GarmentTypes.ADD_GARMENT_TO_COLLECTION_FAILURE,
            garmentActions.GarmentTypes.ADD_GARMENT_TO_COLLECTION_SUCCESS));



    @Effect() garmentAddedToCollection = this.actions$
        .ofType(garmentActions.GarmentTypes.ADD_GARMENT_TO_COLLECTION_SUCCESS)
        .map(action => action.payload)
        .switchMap( (garmentCollection)=>this.sortingServices.sortGarmentCollection())
        .map(payload =>  new garmentActions.UpdateSortedCollection(payload));






 constructor( private store:Store<fromRoot.State>,
              private garmentServices: GarmentService,
              private sortingServices: SortingServices,
              private actions$: Actions
             ) {  }
}
