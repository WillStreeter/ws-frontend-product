import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import { BrokerActionBuilder }  from '../../pubsub-broker/services/broker.action.builder';
import { BrokerAction  } from '../../pubsub-broker/models/broker.action.model'
import * as fromRoot from '../../../data-layer/ngrx-data/reducers/index';
import * as garmentActions from '../../../data-layer/ngrx-data/actions/garment.actions';
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
                    },
                });

    }

    dispatchAction(brokerAction:BrokerAction):void {
        // switch(brokerAction.actionType){
        //     case LayoutActionTypes.HIDE_LOGIN_DIALOG:
        //          this.store.dispatch(new layoutActions.HideLoginDialog());
        //     break;
        // }
    }
}


