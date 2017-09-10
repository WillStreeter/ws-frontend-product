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
  currentSubSet:GarmentModel[];
  currentCollectionId:string;
}

export const initialState: State = {
  ids: [],
  entities: {},
  currentSubSet:[],
  currentCollectionId:''
};

export function reducer(state = initialState, action: garmentActions.Actions): State {
  switch (action.type) {
      case GarmentActionTypes.FETCH_GARMENT_COLLECTION_SUCCESS:{
              console.log('  reducer FETCH_GARMENT_COLLECTION_SUCCESS', action.payload)
          if(action.payload) {
              let  garmentCollection:GarmentCollectionModel = <GarmentCollectionModel>{};
              garmentCollection.id=''+state.ids.length + Math.floor(Math.random() * (100 - 1)) +1,
              garmentCollection.products=action.payload;
              if (state.ids.indexOf(garmentCollection.id) > -1) {
                return state;
              }

             state = Object.assign( {
                                        currentSubSet:state.currentSubSet,
                                        ids: [ ...state.ids, garmentCollection.id ],
                                        entities: Object.assign({}, state.entities, {
                                          [garmentCollection.id]: garmentCollection
                                        }),
                                        currentCollectionId:garmentCollection.id,
                                      });
          }
             return state;
      }

      case GarmentActionTypes.UPDATE_SORTED_COLLECTION:{
           if(action.payload) {
                let  garmentCollection:GarmentCollectionModel = <GarmentCollectionModel>{};
                const garmentSorted:GarmentSortModel = <GarmentSortModel>(action.payload);
                garmentCollection.id = garmentSorted.collectionId;
                garmentCollection.products = [...<GarmentModel[]>(garmentSorted.products)];

              console.log('  UPDATE_SORTED_COLLECTION garmentCollection ', garmentCollection )
              console.log('  before state.entities[ garmentCollection.id] ', state.entities[ garmentCollection.id] )


             state =  Object.assign( {
                                        currentSubSet:state.currentSubSet,
                                        ids: state.ids ,
                                        entities: Object.assign({}, state.entities, {
                                          [garmentCollection.id]: garmentCollection
                                        }),
                                        currentCollectionId:state.currentCollectionId
                                      });
              console.log('  UPDATE_SORTED_COLLECTION  state .entities[ garmentCollection.id] ',  state .entities[ garmentCollection.id] )

           }
           return state

      }

      case GarmentActionTypes.UPDATE_GARMENT_IN_COLLECTION_SUCCESS:{
           if(action.payload) {
                const garmentUpdate = <GarmentAddModel>(action.payload);
                const sortedCollection:GarmentCollectionModel = state.entities[garmentUpdate.collectionId];
                sortedCollection.products = sortedCollection.products.map((product:GarmentModel)=>{
                     if(product.id === garmentUpdate.product.id){
                         product = garmentUpdate.product;
                     }
                     return product;
                 });
                 state.entities =  Object.assign({}, state.entities, {
                  [sortedCollection.id]: sortedCollection
                });
           }
           return state
      }

      case GarmentActionTypes.ADD_GARMENT_TO_COLLECTION_SUCCESS:{
           if(action.payload) {
                const garmentToAdd = <GarmentAddModel>(action.payload);
                const collectionAddingTo = state.entities[garmentToAdd.collectionId];
                collectionAddingTo.products.push(garmentToAdd.product);
                 state.entities =  Object.assign({}, state.entities, {
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

export const getCurrentSubSet = (state: State) => state.currentSubSet;

export const getCurrentGarmentCollection  = createSelector(getEntities, getCurrentCollectionId, (entities, currentCollectionId) => {
  return entities[currentCollectionId];
});


