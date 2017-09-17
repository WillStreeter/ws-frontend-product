import { createSelector,
         ActionReducerMap,
         createFeatureSelector,
         ActionReducer,
         MetaReducer, } from '@ngrx/store';



import { environment } from '../../../../environments/environment';

import { enableProdMode } from '@angular/core';



/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import * as fromErrors from './error/error.reducer';
import * as fromPortal from './portal/portal.reducer';
import * as fromGarment from './garment/garment.reducer';


/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  errors: fromErrors.State;
  portals: fromPortal.State;
  garments: fromGarment.State;
}


/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */


export const reducers: ActionReducerMap<State> = {
  errors: fromErrors.reducer,
  portals: fromPortal.reducer,
  garments: fromGarment.reducer,
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];



/**
 * Just like with the books selectors, we also have to compose the search
 * reducer's and collection reducer's selectors.
 */
export const getErrorState = createFeatureSelector<fromErrors.State>('errors');

export const getErrorIds = createSelector(getErrorState, fromErrors.getIds);
export const getErrorEntities  = createSelector(getErrorState, fromErrors.getEntities);



export const getGarmentsState = createFeatureSelector<fromGarment.State>('garments');

export const getGarmentIds = createSelector(getGarmentsState, fromGarment.getIds);

export const getCurrentCollectionId = createSelector(getGarmentsState, fromGarment.getCurrentCollectionId);

export const getGarmentEntities  = createSelector(getGarmentsState, fromGarment.getEntities);

export const getCurrentGarmentCollection  = createSelector(getGarmentsState, fromGarment.getCurrentGarmentCollection);

export const getCurrentSubSet =  createSelector(getGarmentsState, fromGarment.getCurrentSubSet);






/**
 * portal Reducers
 */
export const getPortalState = createFeatureSelector<fromPortal.State>('portals');


export const getGarmentAddLock =  createSelector(getPortalState, fromPortal.getGarmentAddLock);

export const getRevealAddGarmentRow =  createSelector(getPortalState, fromPortal.getRevealAddGarmentRow);

export const getViewablePerPage = createSelector(getPortalState, fromPortal.getViewablePerPage);

export const getCurrentPage = createSelector(getPortalState, fromPortal.getCurrentPage);

export const getSortType = createSelector(getPortalState, fromPortal.getSortType);

export const getSortBase = createSelector(getPortalState, fromPortal.getSortBase);

export const getSortState = createSelector(getPortalState, fromPortal.getSortState);


