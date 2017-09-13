export class AbstractBrokerTrader {
    constructor() {
        this._consumers = [];
    }
    RegisterBrokerConsumer(consumer) {
        this._consumers.push(consumer);
    }
    RemoveBrokerConsumer(consumer) {
        let i = this._consumers.length;
        while (i--) {
            if (this._consumers[i] === consumer) {
                this._consumers.splice(i, 1);
            }
        }
    }
}
