"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reselect_1 = require("reselect");
var fromRouter = require("@ngrx/router-store");
var env_config_1 = require("../../../shared-utils/app-env/env.config");
var compose_1 = require("@ngrx/core/compose");
var ngrx_store_freeze_1 = require("ngrx-store-freeze");
var store_1 = require("@ngrx/store");
var fromErrors = require("./error/error.reducer");
var fromPortal = require("./portal/portal.reducer");
var fromGarment = require("./garment/garment.reducer");
var reducers = {
    errors: fromErrors.reducer,
    portals: fromPortal.reducer,
    garments: fromGarment.reducer,
    router: fromRouter.routerReducer
};
var developmentReducer = compose_1.compose(ngrx_store_freeze_1.storeFreeze, store_1.combineReducers)(reducers);
var productionReducer = store_1.combineReducers(reducers);
function reducer(state, action) {
    if (env_config_1.Config.ENV === 'PROD') {
        return productionReducer(state, action);
    }
    else {
        return developmentReducer(state, action);
    }
}
exports.reducer = reducer;
exports.getErrorState = function (state) { return state.errors; };
exports.getErrorIds = reselect_1.createSelector(exports.getErrorState, fromErrors.getIds);
exports.getErrorEntities = reselect_1.createSelector(exports.getErrorState, fromErrors.getEntities);
exports.getGarmentsState = function (state) { return state.garments; };
exports.getGarmentIds = reselect_1.createSelector(exports.getGarmentsState, fromGarment.getIds);
exports.getCurrentCollectionId = reselect_1.createSelector(exports.getGarmentsState, fromGarment.getCurrentCollectionId);
exports.getGarmentEntities = reselect_1.createSelector(exports.getGarmentsState, fromGarment.getEntities);
exports.getCurrentGarmentCollection = reselect_1.createSelector(exports.getGarmentsState, fromGarment.getCurrentGarmentCollection);
exports.getCurrentSubSet = reselect_1.createSelector(exports.getGarmentsState, fromGarment.getCurrentSubSet);
exports.getPortalState = function (state) { return state.portals; };
exports.getGarmentAddLock = reselect_1.createSelector(exports.getPortalState, fromPortal.getGarmentAddLock);
exports.getRevealAddGarmentRow = reselect_1.createSelector(exports.getPortalState, fromPortal.getRevealAddGarmentRow);
exports.getViewablePerPage = reselect_1.createSelector(exports.getPortalState, fromPortal.getViewablePerPage);
exports.getCurrentPage = reselect_1.createSelector(exports.getPortalState, fromPortal.getCurrentPage);
exports.getSortType = reselect_1.createSelector(exports.getPortalState, fromPortal.getSortType);
exports.getSortBase = reselect_1.createSelector(exports.getPortalState, fromPortal.getSortBase);
exports.getSortState = reselect_1.createSelector(exports.getPortalState, fromPortal.getSortState);
