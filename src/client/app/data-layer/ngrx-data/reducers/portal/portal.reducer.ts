import * as portal from '../../actions/portal.actions';
import * as PortalActionTypes from '../../../../business-layer/shared-types/actions/portal.action.types';
import { SortRequestModel } from "../../../../business-layer/models/sortRequest.model";


export interface State {
  viewablePerPage:number;
  currentPage:number;
  totalPages:number;
  sortType:string;
  sortBase:string;
}

const initialState: State = {
  viewablePerPage:10,
  currentPage:1,
  totalPages:5,
  sortType:'Ascending',
  sortBase:'Name',
};

export function reducer(state = initialState, action: portal.Actions): State {
  switch (action.type) {
    case PortalActionTypes.UPDATE_VIEWABLE_PER_PAGE_COUNT: {
        return Object.assign({}, state,   {viewablePerPage:action.payload});
    }
    case PortalActionTypes.SET_CURRENT_PAGE_NUMBER: {
        return Object.assign({}, state,   {currentPage:action.payload});
    }

    case PortalActionTypes.UPDATE_SORT_STATE: {
      const sortRequest:SortRequestModel = <SortRequestModel>(action.payload);

      return Object.assign({}, state,   {sortDirection:sortRequest.type, sortBase:sortRequest.base });
    }

    default:
      return state;
  }
}

export const getViewablePerPage = (state: State) => state.viewablePerPage;
export const getCurrentPage = (state: State) => state.currentPage;
export const getSortType = (state: State) => state.sortType;
export const getSortBase = (state: State) => state.sortBase;
export const getSortState = (state: State) => Object.assign({},{sortType:state.sortType, sortBase:state.sortBase});

