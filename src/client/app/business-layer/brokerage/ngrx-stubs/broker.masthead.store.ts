import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import { BrokerActionBuilder }  from '../../pubsub-broker/services/broker.action.builder';
import { BrokerAction  } from '../../pubsub-broker/models/broker.action.model'
import * as fromRoot from '../../../data-layer/ngrx-data/reducers/index';
import * as garmentActions from '../../../data-layer/ngrx-data/actions/garment.actions';
import * as portalActions from '../../../data-layer/ngrx-data/actions/portal.actions';
import * as GarmentActionTypes from '../../shared-types/actions/garment.action.types';
import * as PortalActionTypes from '../../shared-types/actions/portal.action.types';

import { BrokerList } from './brokerlist';


@Injectable()
export class BrokerMastheadStore {
    brokerLabel:string = BrokerList.BROKER_MASTHEAD_STORE;
    constructor( private store: Store<fromRoot.State>,
                 private brkrActnBuilder:BrokerActionBuilder ) { }

    getComponentSupplies():any{
       return  Object.assign({
                   brokerLabel:this.brokerLabel,
                   storeObs:{
                        brokerRevealAddRowState$: this.store.select(fromRoot.getRevealAddGarmentRow),
                    },
                   storeDsp:{
                       UPDATE_REVEAL_GARMENT_ADD_ROW:this.brkrActnBuilder.create(  PortalActionTypes.UPDATE_REVEAL_GARMENT_ADD_ROW,
                                                           this.brokerLabel,
                                                             null),
                      }
                });

    }

    dispatchAction(brokerAction:BrokerAction):void {
         switch(brokerAction.actionType){
             case PortalActionTypes.UPDATE_REVEAL_GARMENT_ADD_ROW:
                 this.store.dispatch(new portalActions.UpdateAddRowGarment(brokerAction.payLoad));
             break;
         }
    }
}


