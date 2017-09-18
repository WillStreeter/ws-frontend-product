import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { GarmentModel,
         ErrorModel,
         GarmentAddModel,
         GarmentCollectionModel,
         GarmentSubsetModel,
         GarmentSortModel} from '../../../business-layer/models/index';

import * as  GarmentActionTypes  from '../../../business-layer/shared-types/actions/garment.action.types';


export const GarmentTypes = GarmentActionTypes;

export class GetGarmentCollection implements Action {
 public readonly type = GarmentActionTypes.FETCH_GARMENT_COLLECTION_ATTEMPT;
  constructor() {  }
}

export class GetGarmentCollectionFailure implements Action {
 public readonly type = GarmentActionTypes.FETCH_GARMENT_COLLECTION_FAILURE;
  constructor(public payload:ErrorModel) {  }
}


export class GetGarmentCollectionSuccess implements Action {
 public readonly type = GarmentActionTypes.FETCH_GARMENT_COLLECTION_SUCCESS;
  constructor(public payload:any) {  }
}

export class UpdateGarmentAttempt implements Action {
 public readonly type =  GarmentActionTypes.UPDATE_GARMENT_IN_COLLECTION_ATTEMPT;
 constructor(public payload:any) {  }
}

export class UpdateGarmentFailure implements Action {
 public readonly type =  GarmentActionTypes.UPDATE_GARMENT_IN_COLLECTION_FAILURE;
 constructor(public payload:ErrorModel) {  }
}


export class UpdateGarmentSuccess implements Action {
 public readonly type =  GarmentActionTypes.UPDATE_GARMENT_IN_COLLECTION_SUCCESS;
 constructor(public payload:GarmentModel) {  }
}


export class AddGarmentToCollectionAttempt implements Action {
 public readonly type =  GarmentActionTypes.ADD_GARMENT_TO_COLLECTION_ATTEMPT;
 constructor(public payload:any) {  }
}

export class AddGarmentToCollectionFailure implements Action {
 public readonly type =  GarmentActionTypes.ADD_GARMENT_TO_COLLECTION_FAILURE;
 constructor(public payload:ErrorModel) {  }
}

export class AddGarmentToCollectionSuccess implements Action {
 public readonly type =  GarmentActionTypes.ADD_GARMENT_TO_COLLECTION_SUCCESS;
 constructor(public payload:GarmentModel) {  }
}

export class GetSubsetOfCollection implements Action {
 public readonly type =  GarmentActionTypes.GET_SUBSET_OF_COLLECTION;
  constructor(public payload:GarmentSubsetModel) {  }
}

export class UpdateSortedCollection implements Action {
 public readonly type =  GarmentActionTypes.UPDATE_SORTED_COLLECTION;
  constructor(public payload:GarmentSortModel) {  }
}
export class SearchCollectionByTerm implements Action {
 public readonly type =  GarmentActionTypes.SEARCH_COLLECTION_BY_TERM;
 constructor(public payload:string) {  }
}

export type Actions =
GetGarmentCollection
     | GetGarmentCollectionFailure
     | GetGarmentCollectionSuccess
     | UpdateGarmentAttempt
     | UpdateGarmentFailure
     | UpdateGarmentSuccess
     | AddGarmentToCollectionAttempt
     | AddGarmentToCollectionFailure
     | AddGarmentToCollectionSuccess
     | GetSubsetOfCollection
     | UpdateSortedCollection
     | SearchCollectionByTerm;




