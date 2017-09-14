import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { BrokerActionBuilder }  from '../../pubsub-broker/services/broker.action.builder';
import { BrokerAction  } from '../../pubsub-broker/models/broker.action.model'
import * as fromRoot from '../../../data-layer/ngrx-data/reducers/index';
import * as garmentActions from '../../../data-layer/ngrx-data/actions/garment.actions';
import * as portalActions from '../../../data-layer/ngrx-data/actions/portal.actions';
import * as GarmentActionTypes from '../../shared-types/actions/garment.action.types';
import * as PortalActionTypes from '../../shared-types/actions/portal.action.types';

import { BrokerList } from './brokerlist';


@Injectable()
export class BrokerGridStore {
    brokerLabel:string = BrokerList.BROKER_GRID_STORE;
    constructor( private store: Store<fromRoot.State>,
                 private brkrActnBuilder:BrokerActionBuilder ) { }

    getComponentSupplies():any{
       return  Object.assign({
                   brokerLabel:this.brokerLabel,
                   storeObs:{
                        brokerGarmentSubset: this.store.select(fromRoot.getCurrentSubSet),
                        brokerPortalState: this.store.select(fromRoot.getPortalState),
                    },
                   storeDsp:{
                       UPDATE_SORT_STATE:this.brkrActnBuilder.create(  PortalActionTypes.UPDATE_SORT_STATE,
                                                           this.brokerLabel,
                                                          null),

                       UPDATE_GARMENT_IN_COLLECTION_ATTEMPT:this.brkrActnBuilder.create(
                                                            GarmentActionTypes.UPDATE_GARMENT_IN_COLLECTION_ATTEMPT,
                                                            this.brokerLabel,
                                                             null),

                       ADD_GARMENT_TO_COLLECTION_ATTEMPT:this.brkrActnBuilder.create(
                                                            GarmentActionTypes.ADD_GARMENT_TO_COLLECTION_ATTEMPT,
                                                            this.brokerLabel,
                                                             null),
                       SET_GARMENT_ADD_BTN_STATUS:this.brkrActnBuilder.create(  PortalActionTypes.SET_GARMENT_ADD_BTN_STATUS,
                           this.brokerLabel,
                           null),
                       UPDATE_REVEAL_GARMENT_ADD_ROW:this.brkrActnBuilder.create(  PortalActionTypes.UPDATE_REVEAL_GARMENT_ADD_ROW,
                           this.brokerLabel,
                           null),
                      }
                });

    }

    dispatchAction(brokerAction:BrokerAction):void {
         switch(brokerAction.actionType){
             case PortalActionTypes.UPDATE_SORT_STATE:
                 this.store.dispatch(new portalActions.UpdateCurrentSortState(brokerAction.payLoad));
             break;
             case PortalActionTypes.SET_GARMENT_ADD_BTN_STATUS:
                 this.store.dispatch(new portalActions.SetGarmentAddBtnStatus(brokerAction.payLoad));
                 break;
             case PortalActionTypes.UPDATE_REVEAL_GARMENT_ADD_ROW:
                 this.store.dispatch(new portalActions.UpdateAddRowGarment(brokerAction.payLoad));
                 break;
             case GarmentActionTypes.UPDATE_GARMENT_IN_COLLECTION_ATTEMPT:
                 this.store.dispatch(new garmentActions.UpdateGarmentAttempt(brokerAction.payLoad));
             break;
             case GarmentActionTypes.ADD_GARMENT_TO_COLLECTION_ATTEMPT:
                 this.store.dispatch(new garmentActions.AddGarmentToCollectionAttempt(brokerAction.payLoad));
             break;
         }
    }
}


