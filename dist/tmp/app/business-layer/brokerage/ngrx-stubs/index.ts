/**
 * This barrel file provides current brokers
 */
 import { BrokerGridStore } from './broker.grid.store';
 import { BrokerMastheadStore } from './broker.masthead.store';
 import { BrokerPaginatorStore } from './broker.paginator.store';
 import { BrokerSearchStore }  from './broker.search.store';


export const BROKER_PROVIDERS: any[] = [
  BrokerGridStore,
  BrokerMastheadStore,
  BrokerPaginatorStore,
  BrokerSearchStore,
];



export * from './broker.grid.store';
export * from './broker.masthead.store';
export * from  './broker.paginator.store';
export * from  './broker.search.store';


