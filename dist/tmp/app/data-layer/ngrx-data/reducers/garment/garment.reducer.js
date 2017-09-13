import { createSelector } from 'reselect';
import * as GarmentActionTypes from '../../../../business-layer/shared-types/actions/garment.action.types';
export const initialState = {
    ids: [],
    entities: {},
    currentSubSet: [],
    currentCollectionId: ''
};
export function reducer(state = initialState, action) {
    switch (action.type) {
        case GarmentActionTypes.FETCH_GARMENT_COLLECTION_SUCCESS: {
            if (action.payload) {
                let garmentCollection = {};
                garmentCollection.id = '' + state.ids.length + Math.floor(Math.random() * (100 - 1)) + 1,
                    garmentCollection.products = action.payload;
                if (state.ids.indexOf(garmentCollection.id) > -1) {
                    return state;
                }
                state = Object.assign({
                    currentSubSet: state.currentSubSet,
                    ids: [...state.ids, garmentCollection.id],
                    entities: Object.assign({}, state.entities, {
                        [garmentCollection.id]: garmentCollection
                    }),
                    currentCollectionId: garmentCollection.id,
                });
            }
            return state;
        }
        case GarmentActionTypes.UPDATE_SORTED_COLLECTION: {
            if (action.payload) {
                let garmentCollection = {};
                const garmentSorted = (action.payload);
                garmentCollection.id = garmentSorted.collectionId;
                garmentCollection.products = [...(garmentSorted.products)];
                state = Object.assign({
                    currentSubSet: garmentSorted.subSetCollection,
                    ids: state.ids,
                    entities: Object.assign({}, state.entities, {
                        [garmentCollection.id]: garmentCollection
                    }),
                    currentCollectionId: state.currentCollectionId
                });
            }
            return state;
        }
        case GarmentActionTypes.UPDATE_GARMENT_IN_COLLECTION_SUCCESS: {
            if (action.payload) {
                const garmentUpdate = (action.payload);
                let currentGarmentCollection = state.entities[state.currentCollectionId];
                let garmentProducts = [...currentGarmentCollection.products];
                garmentProducts = garmentProducts.map((product) => {
                    if (product.id === garmentUpdate.id) {
                        product = Object.assign({}, garmentUpdate);
                    }
                    return product;
                });
                state = Object.assign({
                    currentSubSet: state.currentSubSet,
                    ids: state.ids,
                    entities: Object.assign({}, state.entities, {
                        [currentGarmentCollection.id]: ({
                            id: currentGarmentCollection.id,
                            products: garmentProducts
                        })
                    }),
                    currentCollectionId: state.currentCollectionId
                });
            }
            return state;
        }
        case GarmentActionTypes.ADD_GARMENT_TO_COLLECTION_SUCCESS: {
            if (action.payload) {
                const garmentToAdd = (action.payload);
                let currentGarmentCollection = state.entities[state.currentCollectionId];
                let garmentProducts = [...currentGarmentCollection.products, garmentToAdd];
                state = Object.assign({
                    currentSubSet: state.currentSubSet,
                    ids: state.ids,
                    entities: Object.assign({}, state.entities, {
                        [currentGarmentCollection.id]: ({
                            id: currentGarmentCollection.id,
                            products: garmentProducts
                        })
                    }),
                    currentCollectionId: state.currentCollectionId
                });
            }
            return state;
        }
        default: {
            return state;
        }
    }
}
export const getEntities = (state) => state.entities;
export const getIds = (state) => state.ids;
export const getCurrentCollectionId = (state) => state.currentCollectionId;
export const getCurrentSubSet = (state) => state.currentSubSet;
export const getCurrentGarmentCollection = createSelector(getEntities, getCurrentCollectionId, (entities, currentCollectionId) => {
    return entities[currentCollectionId];
});
