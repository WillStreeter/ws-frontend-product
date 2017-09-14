/**
 * Created by williestreeter on 9/12/17.
 */

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { BrokerActionBuilder }  from '../../pubsub-broker/services/broker.action.builder';
import { BrokerAction  } from '../../pubsub-broker/models/broker.action.model'
import * as fromRoot from '../../../data-layer/ngrx-data/reducers/index';
import * as garmentActions from '../../../data-layer/ngrx-data/actions/garment.actions';
import * as GarmentActionTypes from '../../shared-types/actions/garment.action.types';
import * as PortalActionTypes from '../../shared-types/actions/portal.action.types';

import { BrokerList } from './brokerlist';


@Injectable()
export class BrokerSearchStore {
    brokerLabel:string = BrokerList.BROKER_SEARCH_STORE;
    constructor( private store: Store<fromRoot.State>,
                 private brkrActnBuilder:BrokerActionBuilder ) { }

    getComponentSupplies():any{
        return  Object.assign({
            brokerLabel:this.brokerLabel,
            storeObs:{
                brokerPortalState: this.store.select(fromRoot.getPortalState),
            },
            storeDsp:{

                SEARCH_COLLECTION_BY_TERM:this.brkrActnBuilder.create(
                    GarmentActionTypes.SEARCH_COLLECTION_BY_TERM,
                    this.brokerLabel,
                    null),
            }
        });

    }

    dispatchAction(brokerAction:BrokerAction):void {
        console.log(' dispatchAction brokerAction =',brokerAction)
        switch(brokerAction.actionType){
            case GarmentActionTypes.SEARCH_COLLECTION_BY_TERM:
                console.log(' dispatchAction  brokerAction.payLoad) =',brokerAction.payLoad)
                this.store.dispatch(new garmentActions.SearchCollectionByTerm(brokerAction.payLoad));
                break;
        }
    }
}



