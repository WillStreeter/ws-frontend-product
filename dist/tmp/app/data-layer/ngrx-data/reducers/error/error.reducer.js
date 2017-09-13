import { createSelector } from 'reselect';
import * as ErrorActionTypes from '../../../../business-layer/shared-types/actions/error.action.types';
export const initialState = {
    ids: [],
    entities: {}
};
export function reducer(state = initialState, action) {
    switch (action.type) {
        case ErrorActionTypes.REPORT_ERROR: {
            let errorObj = Object.assign({}, action.payload, { id: (Date.now()).toString() });
            const error = action.payload;
            return {
                ids: [...state.ids, error.id],
                entities: Object.assign({}, state.entities, { [error.id]: error })
            };
        }
        case ErrorActionTypes.REMOVE_ERROR: {
            const errorId = action.payload;
            if (state.ids.indexOf(errorId) > -1) {
                return state;
            }
            const errorIdsPostRemoval = state.ids.filter(id => id !== errorId);
            let errorEntities = Object.assign({}, state.entities);
            delete errorEntities[errorId];
            return Object.assign({}, state, {
                ids: errorIdsPostRemoval,
                entities: errorEntities
            });
        }
        default: {
            return state;
        }
    }
}
export const getEntities = (state) => state.entities;
export const getIds = (state) => state.ids;
export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
    return ids.map(id => entities[id]);
});
