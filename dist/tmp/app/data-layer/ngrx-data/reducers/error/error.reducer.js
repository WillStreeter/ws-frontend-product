"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reselect_1 = require("reselect");
var ErrorActionTypes = require("../../../../business-layer/shared-types/actions/error.action.types");
exports.initialState = {
    ids: [],
    entities: {}
};
function reducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case ErrorActionTypes.REPORT_ERROR: {
            var errorObj = Object.assign({}, action.payload, { id: (Date.now()).toString() });
            var error = action.payload;
            return {
                ids: state.ids.concat([error.id]),
                entities: Object.assign({}, state.entities, (_a = {}, _a[error.id] = error, _a))
            };
        }
        case ErrorActionTypes.REMOVE_ERROR: {
            var errorId_1 = action.payload;
            if (state.ids.indexOf(errorId_1) > -1) {
                return state;
            }
            var errorIdsPostRemoval = state.ids.filter(function (id) { return id !== errorId_1; });
            var errorEntities = Object.assign({}, state.entities);
            delete errorEntities[errorId_1];
            return Object.assign({}, state, {
                ids: errorIdsPostRemoval,
                entities: errorEntities
            });
        }
        default: {
            return state;
        }
    }
    var _a;
}
exports.reducer = reducer;
exports.getEntities = function (state) { return state.entities; };
exports.getIds = function (state) { return state.ids; };
exports.getAll = reselect_1.createSelector(exports.getEntities, exports.getIds, function (entities, ids) {
    return ids.map(function (id) { return entities[id]; });
});
