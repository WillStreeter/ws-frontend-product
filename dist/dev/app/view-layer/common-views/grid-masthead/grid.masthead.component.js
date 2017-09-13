"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var broker_dispatcher_service_1 = require("../../../business-layer/pubsub-broker/services/broker.dispatcher.service");
var brokerlist_1 = require("../../../business-layer/brokerage/ngrx-stubs/brokerlist");
var GridMastheadComponent = (function () {
    function GridMastheadComponent(bDS) {
        this.bDS = bDS;
        var brokerResponse = this.bDS.dispatchBrokerSelector(brokerlist_1.BrokerList.BROKER_MASTHEAD_STORE);
        this.brokerRef = brokerResponse.brokerRequested;
    }
    GridMastheadComponent.prototype.ngOnInit = function () {
        this.addBtnDisable$ = this.brokerRef.storeObs.brokerGarmentAddLock$;
    };
    GridMastheadComponent.prototype.showCreateGarment = function () {
        var note = this.brokerRef.storeDsp.UPDATE_REVEAL_GARMENT_ADD_ROW;
        note.payLoad = true;
        this.bDS.dispatchBrokerAction(note);
    };
    return GridMastheadComponent;
}());
GridMastheadComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'grid-masthead',
        templateUrl: 'grid.masthead.component.html',
        styleUrls: ['grid.masthead.component.css']
    }),
    __metadata("design:paramtypes", [broker_dispatcher_service_1.BrokerDispatcherService])
], GridMastheadComponent);
exports.GridMastheadComponent = GridMastheadComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9ncmlkLW1hc3RoZWFkL2dyaWQubWFzdGhlYWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR0Esc0NBQWtEO0FBSWxELHNIQUFtSDtBQUVuSCxzRkFBcUY7QUFVckYsSUFBYSxxQkFBcUI7SUFLOUIsK0JBQW9CLEdBQTJCO1FBQTNCLFFBQUcsR0FBSCxHQUFHLENBQXdCO1FBRTNDLElBQUksY0FBYyxHQUFrQixJQUFJLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLHVCQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUN0RyxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQyxlQUFlLENBQUM7SUFDcEQsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFFRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDO0lBQ3RFLENBQUM7SUFFRCxpREFBaUIsR0FBakI7UUFDSyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyw2QkFBNkIsQ0FBQztRQUNqRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTCw0QkFBQztBQUFELENBdEJBLEFBc0JDLElBQUE7QUF0QlkscUJBQXFCO0lBTmpDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGVBQWU7UUFDekIsV0FBVyxFQUFFLDhCQUE4QjtRQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztLQUM3QyxDQUFDO3FDQU0wQixtREFBdUI7R0FMdEMscUJBQXFCLENBc0JqQztBQXRCWSxzREFBcUIiLCJmaWxlIjoiYXBwL3ZpZXctbGF5ZXIvY29tbW9uLXZpZXdzL2dyaWQtbWFzdGhlYWQvZ3JpZC5tYXN0aGVhZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgd2lsbHN0cmVldGVyIG9uIDkvMTAvMTcuXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IEdhcm1lbnRNb2RlbCB9IGZyb20gJy4uLy4uLy4uL2J1c2luZXNzLWxheWVyL21vZGVscydcbmltcG9ydCB7IEJyb2tlckRpc3BhdGNoZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYnVzaW5lc3MtbGF5ZXIvcHVic3ViLWJyb2tlci9zZXJ2aWNlcy9icm9rZXIuZGlzcGF0Y2hlci5zZXJ2aWNlJztcbmltcG9ydCB7IEJyb2tlclJlc3BvbnNlIH0gZnJvbSBcIi4uLy4uLy4uL2J1c2luZXNzLWxheWVyL3B1YnN1Yi1icm9rZXIvbW9kZWxzL2Jyb2tlci5yZXNwb25zZS5tb2RlbFwiO1xuaW1wb3J0IHsgQnJva2VyTGlzdCB9IGZyb20gJy4uLy4uLy4uL2J1c2luZXNzLWxheWVyL2Jyb2tlcmFnZS9uZ3J4LXN0dWJzL2Jyb2tlcmxpc3QnO1xuXG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2dyaWQtbWFzdGhlYWQnLFxuICAgIHRlbXBsYXRlVXJsOiAnZ3JpZC5tYXN0aGVhZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2dyaWQubWFzdGhlYWQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdyaWRNYXN0aGVhZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgYnJva2VyUmVmOmFueTtcbiAgICBhZGRCdG5EaXNhYmxlJDpPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJEUzpCcm9rZXJEaXNwYXRjaGVyU2VydmljZSkge1xuXG4gICAgICAgIHZhciBicm9rZXJSZXNwb25zZTpCcm9rZXJSZXNwb25zZSA9IHRoaXMuYkRTLmRpc3BhdGNoQnJva2VyU2VsZWN0b3IoQnJva2VyTGlzdC5CUk9LRVJfTUFTVEhFQURfU1RPUkUpO1xuICAgICAgICB0aGlzLmJyb2tlclJlZiA9IGJyb2tlclJlc3BvbnNlLmJyb2tlclJlcXVlc3RlZDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICAgdGhpcy5hZGRCdG5EaXNhYmxlJCA9IHRoaXMuYnJva2VyUmVmLnN0b3JlT2JzLmJyb2tlckdhcm1lbnRBZGRMb2NrJDtcbiAgICB9XG5cbiAgICBzaG93Q3JlYXRlR2FybWVudCgpe1xuICAgICAgICAgdmFyIG5vdGUgPSB0aGlzLmJyb2tlclJlZi5zdG9yZURzcC5VUERBVEVfUkVWRUFMX0dBUk1FTlRfQUREX1JPVztcbiAgICAgICAgIG5vdGUucGF5TG9hZCA9IHRydWU7XG4gICAgICAgIHRoaXMuYkRTLmRpc3BhdGNoQnJva2VyQWN0aW9uKG5vdGUpO1xuICAgIH1cblxufVxuIl19
