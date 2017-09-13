import * as PortalActionTypes from '../../../../business-layer/shared-types/actions/portal.action.types';
const initialState = {
    garmentAddLock: false,
    viewablePerPage: 10,
    revealAddGarmentRow: false,
    currentPage: 1,
    totalPages: 5,
    sortDirection: 'Ascending',
    sortBase: 'Name',
};
export function reducer(state = initialState, action) {
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
            const sortRequest = (action.payload);
            return Object.assign({}, state, { sortDirection: !sortRequest.directionChange ?
                    state.sortDirection : (state.sortDirection === "Ascending") ?
                    "Descending" : "Ascending",
                sortBase: sortRequest.base ? sortRequest.base : state.sortBase });
        }
        default:
            return state;
    }
}
export const getRevealAddGarmentRow = (state) => state.revealAddGarmentRow;
export const getViewablePerPage = (state) => state.viewablePerPage;
export const getCurrentPage = (state) => state.currentPage;
export const getSortType = (state) => state.sortDirection;
export const getSortBase = (state) => state.sortBase;
export const getGarmentAddLock = (state) => state.garmentAddLock;
export const getSortState = (state) => Object.assign({}, { sortDirection: state.sortDirection, sortBase: state.sortBase });
