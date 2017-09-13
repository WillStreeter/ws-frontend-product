"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var validation_service_1 = require("../../../business-layer/validators/services/validation.service");
var ControlMessagesComponent = (function () {
    function ControlMessagesComponent() {
    }
    Object.defineProperty(ControlMessagesComponent.prototype, "errorMessage", {
        get: function () {
            for (var propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                    return validation_service_1.ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    return ControlMessagesComponent;
}());
ControlMessagesComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'control-messages',
                styles: ['div { color:#D73117 }'],
                template: "<div *ngIf=\"errorMessage !== null\">{{errorMessage}}</div>"
            },] },
];
ControlMessagesComponent.ctorParameters = function () { return []; };
ControlMessagesComponent.propDecorators = {
    'control': [{ type: core_1.Input },],
};
exports.ControlMessagesComponent = ControlMessagesComponent;
//# sourceMappingURL=control.messaging.component.js.map