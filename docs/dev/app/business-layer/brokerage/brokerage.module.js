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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ngrx_broker_consumer_1 = require("./consumers/ngrx.broker.consumer");
var ngrx_data_module_1 = require("../../data-layer/ngrx-data/ngrx.data.module");
var index_1 = require("./ngrx-stubs/index");
var BrokerageModule = BrokerageModule_1 = (function () {
    function BrokerageModule(parentModule) {
        if (parentModule) {
            throw new Error('PubSubBrokerageModule already loaded; Import in root module only.');
        }
    }
    BrokerageModule.forRoot = function () {
        return {
            ngModule: BrokerageModule_1,
            providers: index_1.BROKER_PROVIDERS.concat([ngrx_broker_consumer_1.NGRxBrokerConsumer])
        };
    };
    return BrokerageModule;
}());
BrokerageModule = BrokerageModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule,
            ngrx_data_module_1.NGRxDataModule],
        providers: index_1.BROKER_PROVIDERS.concat([ngrx_broker_consumer_1.NGRxBrokerConsumer])
    }),
    __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
    __metadata("design:paramtypes", [BrokerageModule])
], BrokerageModule);
exports.BrokerageModule = BrokerageModule;
var BrokerageModule_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9idXNpbmVzcy1sYXllci9icm9rZXJhZ2UvYnJva2VyYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUFrRjtBQUNsRiwwQ0FBK0M7QUFFL0MseUVBQXVFO0FBQ3ZFLGdGQUE2RTtBQUc3RSw0Q0FBdUQ7QUFTdkQsSUFBYSxlQUFlO0lBRTFCLHlCQUFvQyxZQUE2QjtRQUMvRCxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsbUVBQW1FLENBQUMsQ0FBQztRQUN2RixDQUFDO0lBQ0gsQ0FBQztJQUdNLHVCQUFPLEdBQWQ7UUFDRSxNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsaUJBQWU7WUFDekIsU0FBUyxFQUFRLHdCQUFnQixTQUNuQix5Q0FBa0IsRUFBRTtTQUNuQyxDQUFBO0lBQ0gsQ0FBQztJQUVILHNCQUFDO0FBQUQsQ0FqQkEsQUFpQkMsSUFBQTtBQWpCWSxlQUFlO0lBTjNCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRSxDQUFFLHFCQUFZO1lBQ1osaUNBQWMsQ0FBRTtRQUMzQixTQUFTLEVBQU8sd0JBQWdCLFNBQ25CLHlDQUFrQixFQUFDO0tBQ25DLENBQUM7SUFHYSxXQUFBLGVBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxlQUFRLEVBQUUsQ0FBQTtxQ0FBZSxlQUFlO0dBRnRELGVBQWUsQ0FpQjNCO0FBakJZLDBDQUFlIiwiZmlsZSI6ImFwcC9idXNpbmVzcy1sYXllci9icm9rZXJhZ2UvYnJva2VyYWdlLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTkdSeEJyb2tlckNvbnN1bWVyIH0gIGZyb20gJy4vY29uc3VtZXJzL25ncnguYnJva2VyLmNvbnN1bWVyJztcbmltcG9ydCB7IE5HUnhEYXRhTW9kdWxlIH0gZnJvbSBcIi4uLy4uL2RhdGEtbGF5ZXIvbmdyeC1kYXRhL25ncnguZGF0YS5tb2R1bGVcIjtcblxuXG5pbXBvcnQgeyBCUk9LRVJfUFJPVklERVJTIH0gIGZyb20gJy4vbmdyeC1zdHVicy9pbmRleCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbIENvbW1vbk1vZHVsZSxcbiAgICAgICAgICAgICAgIE5HUnhEYXRhTW9kdWxlIF0sXG4gICAgcHJvdmlkZXJzOiBbIC4uLkJST0tFUl9QUk9WSURFUlMsXG4gICAgICAgICAgICAgICAgIE5HUnhCcm9rZXJDb25zdW1lcl1cbn0pXG5leHBvcnQgY2xhc3MgQnJva2VyYWdlTW9kdWxlIHtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IEJyb2tlcmFnZU1vZHVsZSkge1xuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUHViU3ViQnJva2VyYWdlTW9kdWxlIGFscmVhZHkgbG9hZGVkOyBJbXBvcnQgaW4gcm9vdCBtb2R1bGUgb25seS4nKTtcbiAgICB9XG4gIH1cblxuXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnN7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBCcm9rZXJhZ2VNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFsgIC4uLkJST0tFUl9QUk9WSURFUlMsXG4gICAgICAgICAgICAgICAgICAgIE5HUnhCcm9rZXJDb25zdW1lciBdXG4gICAgfVxuICB9XG5cbn0iXX0=
