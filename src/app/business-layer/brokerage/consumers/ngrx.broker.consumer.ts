import { Injectable } from '@angular/core';
import { BrokerAction  } from '../../pubsub-broker/models/broker.action.model';

import { IConsumer } from '../../pubsub-broker/interfaces/IConsumer';

import {  BrokerResponse } from '../../pubsub-broker/models/broker.response.model';
import {  BrokerGridStore, BrokerMastheadStore, BrokerPaginatorStore, BrokerSearchStore }  from '../ngrx-stubs/index';


@Injectable()
export class NGRxBrokerConsumer implements IConsumer{

    constructor(  private brokerGridStore:BrokerGridStore,
                  private brokerMastheadStore:BrokerMastheadStore,
                  private brokerPaginatorStore:BrokerPaginatorStore,
                  private brokerSearchStore:BrokerSearchStore){ }

    public ReceiveBrokerAction( brokerAction:BrokerAction){
        switch(brokerAction.brokerType){
            case this.brokerGridStore.brokerLabel:
                  this.brokerGridStore.dispatchAction(brokerAction);
            break;
            case this.brokerMastheadStore.brokerLabel:
                  this.brokerMastheadStore.dispatchAction(brokerAction);
            break;
            case this.brokerPaginatorStore.brokerLabel:
                  this.brokerPaginatorStore.dispatchAction(brokerAction);
            break;
            case this.brokerSearchStore.brokerLabel:
                this.brokerSearchStore.dispatchAction(brokerAction);
            break;
        }
    }

    public ReceivedBrokerSelectorRequest( brokerType:string):BrokerResponse{
        var brokerResponse = new BrokerResponse();
        switch(brokerType){
            case this.brokerGridStore.brokerLabel:
                  brokerResponse.brokerRequested = this.brokerGridStore.getComponentSupplies();
            break;
            case this.brokerMastheadStore.brokerLabel:
                  brokerResponse.brokerRequested = this.brokerMastheadStore.getComponentSupplies();
            break;
            case this.brokerPaginatorStore.brokerLabel:
                  brokerResponse.brokerRequested = this.brokerPaginatorStore.getComponentSupplies();
            break;
            case this.brokerSearchStore.brokerLabel:
                brokerResponse.brokerRequested = this.brokerSearchStore.getComponentSupplies();
                break;
        }
        return brokerResponse;
    }

}