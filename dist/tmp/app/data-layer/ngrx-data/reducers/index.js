import { createSelector } from 'reselect';
import * as fromRouter from '@ngrx/router-store';
import { Config } from '../../../shared-utils/app-env/env.config';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';
import * as fromErrors from './error/error.reducer';
import * as fromPortal from './portal/portal.reducer';
import * as fromGarment from './garment/garment.reducer';
const reducers = {
    errors: fromErrors.reducer,
    portals: fromPortal.reducer,
    garments: fromGarment.reducer,
    router: fromRouter.routerReducer
};
const developmentReducer = compose(storeFreeze, combineReducers)(reducers);
const productionReducer = combineReducers(reducers);
export function reducer(state, action) {
    if (Config.ENV === 'PROD') {
        return productionReducer(state, action);
    }
    else {
        return developmentReducer(state, action);
    }
}
export const getErrorState = (state) => state.errors;
export const getErrorIds = createSelector(getErrorState, fromErrors.getIds);
export const getErrorEntities = createSelector(getErrorState, fromErrors.getEntities);
export const getGarmentsState = (state) => state.garments;
export const getGarmentIds = createSelector(getGarmentsState, fromGarment.getIds);
export const getCurrentCollectionId = createSelector(getGarmentsState, fromGarment.getCurrentCollectionId);
export const getGarmentEntities = createSelector(getGarmentsState, fromGarment.getEntities);
export const getCurrentGarmentCollection = createSelector(getGarmentsState, fromGarment.getCurrentGarmentCollection);
export const getCurrentSubSet = createSelector(getGarmentsState, fromGarment.getCurrentSubSet);
export const getPortalState = (state) => state.portals;
export const getGarmentAddLock = createSelector(getPortalState, fromPortal.getGarmentAddLock);
export const getRevealAddGarmentRow = createSelector(getPortalState, fromPortal.getRevealAddGarmentRow);
export const getViewablePerPage = createSelector(getPortalState, fromPortal.getViewablePerPage);
export const getCurrentPage = createSelector(getPortalState, fromPortal.getCurrentPage);
export const getSortType = createSelector(getPortalState, fromPortal.getSortType);
export const getSortBase = createSelector(getPortalState, fromPortal.getSortBase);
export const getSortState = createSelector(getPortalState, fromPortal.getSortState);
