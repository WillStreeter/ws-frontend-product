import { Action } from '@ngrx/store';
import { SortRequestModel } from '../../../business-layer/models/sortRequest.model';
import * as PortalActionTypes from '../../../business-layer/shared-types/actions/portal.action.types';

export class UpdateViewablePerPageCount implements Action {
  public readonly type = PortalActionTypes.UPDATE_VIEWABLE_PER_PAGE_COUNT;
    constructor(public payload:number) {  }
}

export class SetCurrentPageNumber implements Action {
  public readonly type = PortalActionTypes.SET_CURRENT_PAGE_NUMBER;
     constructor(public payload:number) {  }
}

export class UpdateCurrentSortState implements Action {
 public readonly type = PortalActionTypes.UPDATE_SORT_STATE;
  constructor(public payload:SortRequestModel) {  }
}


export type Actions
  = UpdateViewablePerPageCount
  | SetCurrentPageNumber
  | UpdateCurrentSortState;
