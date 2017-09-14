"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PortalActionTypes = require("../../../../business-layer/shared-types/actions/portal.action.types");
var initialState = {
    garmentAddLock: false,
    viewablePerPage: 10,
    revealAddGarmentRow: false,
    currentPage: 1,
    totalPages: 5,
    sortDirection: 'Ascending',
    sortBase: 'Name',
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case PortalActionTypes.UPDATE_VIEWABLE_PER_PAGE_COUNT: {
            return Object.assign({}, state, { viewablePerPage: action.payload });
        }
        case PortalActionTypes.SET_CURRENT_PAGE_NUMBER: {
            return Object.assign({}, state, { currentPage: action.payload });
        }
        case PortalActionTypes.SET_GARMENT_ADD_BTN_STATUS: {
            return Object.assign({}, state, { garmentAddLock: action.payload });
        }
        case PortalActionTypes.UPDATE_REVEAL_GARMENT_ADD_ROW: {
            return Object.assign({}, state, { revealAddGarmentRow: action.payload, garmentAddLock: action.payload });
        }
        case PortalActionTypes.UPDATE_SORT_STATE: {
            var sortRequest = (action.payload);
            return Object.assign({}, state, { sortDirection: !sortRequest.directionChange ?
                    state.sortDirection : (state.sortDirection === 'Ascending') ?
                    'Descending' : 'Ascending',
                sortBase: sortRequest.base ? sortRequest.base : state.sortBase });
        }
        default:
            return state;
    }
}
exports.reducer = reducer;
exports.getRevealAddGarmentRow = function (state) { return state.revealAddGarmentRow; };
exports.getViewablePerPage = function (state) { return state.viewablePerPage; };
exports.getCurrentPage = function (state) { return state.currentPage; };
exports.getSortType = function (state) { return state.sortDirection; };
exports.getSortBase = function (state) { return state.sortBase; };
exports.getGarmentAddLock = function (state) { return state.garmentAddLock; };
exports.getSortState = function (state) { return Object.assign({}, { sortDirection: state.sortDirection, sortBase: state.sortBase }); };
