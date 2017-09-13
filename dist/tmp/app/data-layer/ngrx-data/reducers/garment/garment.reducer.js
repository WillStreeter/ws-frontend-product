"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reselect_1 = require("reselect");
var GarmentActionTypes = require("../../../../business-layer/shared-types/actions/garment.action.types");
exports.initialState = {
    ids: [],
    entities: {},
    currentSubSet: [],
    currentCollectionId: ''
};
function reducer(state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case GarmentActionTypes.FETCH_GARMENT_COLLECTION_SUCCESS: {
            if (action.payload) {
                var garmentCollection = {};
                garmentCollection.id = '' + state.ids.length + Math.floor(Math.random() * (100 - 1)) + 1,
                    garmentCollection.products = action.payload;
                if (state.ids.indexOf(garmentCollection.id) > -1) {
                    return state;
                }
                state = Object.assign({
                    currentSubSet: state.currentSubSet,
                    ids: state.ids.concat([garmentCollection.id]),
                    entities: Object.assign({}, state.entities, (_a = {},
                        _a[garmentCollection.id] = garmentCollection,
                        _a)),
                    currentCollectionId: garmentCollection.id,
                });
            }
            return state;
        }
        case GarmentActionTypes.UPDATE_SORTED_COLLECTION: {
            if (action.payload) {
                var garmentCollection = {};
                var garmentSorted = (action.payload);
                garmentCollection.id = garmentSorted.collectionId;
                garmentCollection.products = (garmentSorted.products).slice();
                state = Object.assign({
                    currentSubSet: garmentSorted.subSetCollection,
                    ids: state.ids,
                    entities: Object.assign({}, state.entities, (_b = {},
                        _b[garmentCollection.id] = garmentCollection,
                        _b)),
                    currentCollectionId: state.currentCollectionId
                });
            }
            return state;
        }
        case GarmentActionTypes.UPDATE_GARMENT_IN_COLLECTION_SUCCESS: {
            if (action.payload) {
                var garmentUpdate_1 = (action.payload);
                var currentGarmentCollection = state.entities[state.currentCollectionId];
                var garmentProducts = currentGarmentCollection.products.slice();
                garmentProducts = garmentProducts.map(function (product) {
                    if (product.id === garmentUpdate_1.id) {
                        product = Object.assign({}, garmentUpdate_1);
                    }
                    return product;
                });
                state = Object.assign({
                    currentSubSet: state.currentSubSet,
                    ids: state.ids,
                    entities: Object.assign({}, state.entities, (_c = {},
                        _c[currentGarmentCollection.id] = ({
                            id: currentGarmentCollection.id,
                            products: garmentProducts
                        }),
                        _c)),
                    currentCollectionId: state.currentCollectionId
                });
            }
            return state;
        }
        case GarmentActionTypes.ADD_GARMENT_TO_COLLECTION_SUCCESS: {
            if (action.payload) {
                var garmentToAdd = (action.payload);
                var currentGarmentCollection = state.entities[state.currentCollectionId];
                var garmentProducts = currentGarmentCollection.products.concat([garmentToAdd]);
                state = Object.assign({
                    currentSubSet: state.currentSubSet,
                    ids: state.ids,
                    entities: Object.assign({}, state.entities, (_d = {},
                        _d[currentGarmentCollection.id] = ({
                            id: currentGarmentCollection.id,
                            products: garmentProducts
                        }),
                        _d)),
                    currentCollectionId: state.currentCollectionId
                });
            }
            return state;
        }
        default: {
            return state;
        }
    }
    var _a, _b, _c, _d;
}
exports.reducer = reducer;
exports.getEntities = function (state) { return state.entities; };
exports.getIds = function (state) { return state.ids; };
exports.getCurrentCollectionId = function (state) { return state.currentCollectionId; };
exports.getCurrentSubSet = function (state) { return state.currentSubSet; };
exports.getCurrentGarmentCollection = reselect_1.createSelector(exports.getEntities, exports.getCurrentCollectionId, function (entities, currentCollectionId) {
    return entities[currentCollectionId];
});
//# sourceMappingURL=garment.reducer.js.map