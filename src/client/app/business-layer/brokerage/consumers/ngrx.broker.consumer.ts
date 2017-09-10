import { Injectable } from '@angular/core';
import { BrokerAction  } from '../../pubsub-broker/models/broker.action.model';

import { IConsumer } from '../../pubsub-broker/interfaces/IConsumer'

import {  BrokerResponse } from "../../pubsub-broker/models/broker.response.model";
import {  BrokerGridStore }  from "../ngrx-stubs/index";


@Injectable()
export class NGRxBrokerConsumer implements IConsumer{

    constructor(  private brokerGridStore:BrokerGridStore  ){ }

    public ReceiveBrokerAction( brokerAction:BrokerAction){
        switch(brokerAction.brokerType){
            case this.brokerGridStore.brokerLabel:
                  this.brokerGridStore.dispatchAction(brokerAction);
            break;
        }
    }

    public ReceivedBrokerSelectorRequest( brokerType:string):BrokerResponse{
        var brokerResponse = new BrokerResponse();
        switch(brokerType){
            case this.brokerGridStore.brokerLabel:
                  brokerResponse.brokerRequested = this.brokerGridStore.getComponentSupplies();
            break;
        }
        return brokerResponse;
    }

}