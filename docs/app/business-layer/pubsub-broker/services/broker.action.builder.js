"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var broker_action_model_1 = require("../models/broker.action.model");
var BrokerActionBuilder = (function () {
    function BrokerActionBuilder() {
    }
    BrokerActionBuilder.prototype.create = function (actionType, brokerType, payLoad) {
        var brokerAction = new broker_action_model_1.BrokerAction();
        brokerAction.actionType = actionType;
        brokerAction.brokerType = brokerType;
        brokerAction.payLoad = payLoad;
        return brokerAction;
    };
    return BrokerActionBuilder;
}());
BrokerActionBuilder = __decorate([
    core_1.Injectable()
], BrokerActionBuilder);
exports.BrokerActionBuilder = BrokerActionBuilder;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9idXNpbmVzcy1sYXllci9wdWJzdWItYnJva2VyL3NlcnZpY2VzL2Jyb2tlci5hY3Rpb24uYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxxRUFBNkQ7QUFLN0QsSUFBYSxtQkFBbUI7SUFBaEM7SUFjQSxDQUFDO0lBWk0sb0NBQU0sR0FBTixVQUFRLFVBQWtCLEVBQUMsVUFBa0IsRUFBRSxPQUFZO1FBRXpELElBQUksWUFBWSxHQUFnQixJQUFJLGtDQUFZLEVBQUUsQ0FBQztRQUNuRCxZQUFZLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUNyQyxZQUFZLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUNyQyxZQUFZLENBQUMsT0FBTyxHQUFJLE9BQU8sQ0FBQztRQUVoQyxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFJUiwwQkFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZFksbUJBQW1CO0lBRC9CLGlCQUFVLEVBQUU7R0FDQSxtQkFBbUIsQ0FjL0I7QUFkWSxrREFBbUIiLCJmaWxlIjoiYXBwL2J1c2luZXNzLWxheWVyL3B1YnN1Yi1icm9rZXIvc2VydmljZXMvYnJva2VyLmFjdGlvbi5idWlsZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJva2VyQWN0aW9uICB9IGZyb20gJy4uL21vZGVscy9icm9rZXIuYWN0aW9uLm1vZGVsJ1xuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJyb2tlckFjdGlvbkJ1aWxkZXJ7XG5cbiAgICAgICBjcmVhdGUoIGFjdGlvblR5cGU/OnN0cmluZyxicm9rZXJUeXBlPzpzdHJpbmcsIHBheUxvYWQ/OmFueSk6QnJva2VyQWN0aW9ue1xuXG4gICAgICAgICB2YXIgYnJva2VyQWN0aW9uOkJyb2tlckFjdGlvbiA9IG5ldyBCcm9rZXJBY3Rpb24oKTtcbiAgICAgICAgIGJyb2tlckFjdGlvbi5hY3Rpb25UeXBlID0gYWN0aW9uVHlwZTtcbiAgICAgICAgIGJyb2tlckFjdGlvbi5icm9rZXJUeXBlID0gYnJva2VyVHlwZTtcbiAgICAgICAgIGJyb2tlckFjdGlvbi5wYXlMb2FkID0gIHBheUxvYWQ7XG5cbiAgICAgICAgIHJldHVybiBicm9rZXJBY3Rpb247XG4gICAgICAgfVxuXG5cblxufSJdfQ==
