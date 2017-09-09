import { createSelector } from 'reselect';
import { GarmentModel,
         GarmentAddModel,
         GarmentSortModel,
         GarmentCollectionModel} from '../../../../business-layer/models';
import * as garmentActions from '../../actions/garment.actions';
import * as GarmentActionTypes from '../../../../business-layer/shared-types/actions/garment.action.types';

export  interface State {
  ids: string[];
  entities: { [id: string]: GarmentCollectionModel };
  currentCollectionId:string;
}

export const initialState: State = {
  ids: [],
  entities: {},
  currentCollectionId:''
};

export function reducer(state = initialState, action: garmentActions.Actions): State {
  switch (action.type) {
      case GarmentActionTypes.FETCH_GARMENT_COLLECTION_SUCCESS:{
          if(action.payload.hasOwnProperty('id') ||
             action.payload.hasOwnProperty('products')) {
              const garmentCollection:GarmentCollectionModel = <GarmentCollectionModel>(action.payload);
              if (state.ids.indexOf(garmentCollection.id) > -1) {
                return state;
              }

              return {
                currentCollectionId:garmentCollection.id,
                ids: [ ...state.ids, garmentCollection.id ],
                entities: Object.assign({}, state.entities, {
                  [garmentCollection.id]: garmentCollection
                })
              };

          }else {
             return state;
          }
      }

      case GarmentActionTypes.UPDATE_SORTED_COLLECTION:{
           if(action.payload) {
                const garmentSort = <GarmentSortModel>(action.payload);
                const sortedCollection = state.entities[garmentSort.collectionId];
                state.entities = sortedCollection.products = garmentSort.products;
                entities: Object.assign({}, state.entities, {
                  [sortedCollection.id]: sortedCollection
                });
           }
           return state;
      }

      case GarmentActionTypes.ADD_GARMENT_TO_COLLECTION:{
           if(action.payload) {
                const garmentToAdd = <GarmentAddModel>(action.payload);
                const collectionAddingTo = state.entities[garmentToAdd.collectionId];
                state.entities = collectionAddingTo.push(garmentToAdd.product);
                entities: Object.assign({}, state.entities, {
                  [collectionAddingTo.id]: collectionAddingTo
                });
           }
           return state;

      }

      default: {
          return state;
        }
      }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getEntities = (state: State) => state.entities;

export const getIds = (state: State) => state.ids;

export const getCurrentCollectionId = (state: State) => state.currentCollectionId;

export const getCurrentGarmentCollection  = createSelector(getEntities, getCurrentCollectionId, (entities, currentCollectionId) => {
  return entities[currentCollectionId];
});


