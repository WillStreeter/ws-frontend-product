import { Action } from '@ngrx/store';
import { SortRequestModel } from '../../../business-layer/models/sortRequest.model';
import * as PortalActionTypes from '../../../business-layer/shared-types/actions/portal.action.types';

export const PortalTypes = PortalActionTypes;


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
export class UpdateAddRowGarment implements Action{
 public readonly type = PortalActionTypes.UPDATE_REVEAL_GARMENT_ADD_ROW;
  constructor(public payload:boolean) {  }
}

export class SetGarmentAddBtnStatus implements Action{
    public readonly type = PortalActionTypes.SET_GARMENT_ADD_BTN_STATUS;
    constructor(public payload:boolean) {  }
}


export type Actions
  = UpdateViewablePerPageCount
  | SetCurrentPageNumber
  | UpdateAddRowGarment
  | UpdateCurrentSortState
  | SetGarmentAddBtnStatus;
