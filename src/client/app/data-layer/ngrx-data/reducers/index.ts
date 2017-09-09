import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { Config } from '../../../shared-utils/app-env/env.config';

/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */
import { compose } from '@ngrx/core/compose';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */
import { combineReducers } from '@ngrx/store';


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
  router: fromRouter.RouterState;
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

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (Config.ENV === 'PROD') {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}




/**
 * Just like with the books selectors, we also have to compose the search
 * reducer's and collection reducer's selectors.
 */
export const getErrorState = (state: State) => state.errors;

export const getErrorIds = createSelector(getErrorState, fromErrors.getIds);
export const getErrorEntities  = createSelector(getErrorState, fromErrors.getEntities);



export const getGarmentsState = (state: State) => state.garments;

export const getGarmentIds = createSelector(getGarmentsState, fromGarment.getIds);

export const getGarmentEntities  = createSelector(getGarmentsState, fromGarment.getEntities);

export const getCurrentSubSet =  createSelector(getGarmentsState, fromGarment.getCurrentSubSet);

export const getCurrentGarmentCollection  = createSelector(getGarmentsState, fromGarment.getEntities);





/**
 * portal Reducers
 */
export const getPortalState = (state: State) => state.portals;

export const getViewablePerPage = createSelector(getPortalState, fromPortal.getViewablePerPage);

export const getCurrentPage = createSelector(getPortalState, fromPortal.getCurrentPage);

export const getSortType = createSelector(getPortalState, fromPortal.getSortType);

export const getSortBase = createSelector(getPortalState, fromPortal.getSortBase);

export const getSortState = createSelector(getPortalState, fromPortal.getSortState);
