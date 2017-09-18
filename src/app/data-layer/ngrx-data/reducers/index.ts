import {createSelector, createFeatureSelector} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import * as fromRoot from '../reducers';


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
export interface StyleState {
  errors: fromErrors.State
  portal: fromPortal.State;
  garment: fromGarment.State;
  router: fromRouter.State;
}



export interface State extends fromRoot.State {
  style: StyleState
}
/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
const reducers = {
  errors: fromErrors.reducer,
  portals: fromPortal.reducer,
  garments: fromGarment.reducer,
  router: fromRouter.routerReducer
};



/**
 * Just like with the books selectors, we also have to compose the search
 * reducer's and collection reducer's selectors.
 */
export const getErrorState = createFeatureSelector<StyleState>('errors');

export const getErrorIds = createSelector(getErrorState, fromErrors.getIds);
export const getErrorEntities  = createSelector(getErrorState, fromErrors.getEntities);



export const getGarmentsState = createFeatureSelector<StyleState>('garment');

export const getGarmentIds = createSelector(getGarmentsState, fromGarment.getIds);

export const getCurrentCollectionId = createSelector(getGarmentsState, fromGarment.getCurrentCollectionId);

export const getGarmentEntities  = createSelector(getGarmentsState, fromGarment.getEntities);

export const getCurrentGarmentCollection  = createSelector(getGarmentsState, fromGarment.getCurrentGarmentCollection);

export const getCurrentSubSet =  createSelector(getGarmentsState, fromGarment.getCurrentSubSet);






/**
 * portal Reducers
 */
export const getPortalState = createFeatureSelector<StyleState>('portal');


export const getGarmentAddLock =  createSelector(getPortalState, fromPortal.getGarmentAddLock);

export const getRevealAddGarmentRow =  createSelector(getPortalState, fromPortal.getRevealAddGarmentRow);

export const getViewablePerPage = createSelector(getPortalState, fromPortal.getViewablePerPage);

export const getCurrentPage = createSelector(getPortalState, fromPortal.getCurrentPage);

export const getSortType = createSelector(getPortalState, fromPortal.getSortType);

export const getSortBase = createSelector(getPortalState, fromPortal.getSortBase);

export const getSortState = createSelector(getPortalState, fromPortal.getSortState);



