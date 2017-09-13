"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': 'Required',
            'isAlphanumeric': 'Only Alpha and Numerical characters.',
            'isAlpha': 'Only Alpha characters.',
            'isEmail': 'Invalid email address',
            'userNameAvailable': 'This username has been taken',
            'emailMatcher': 'The email address you have entered do not match',
            'invalidPassword': 'Only AlphaNumeric and the "$" sign.',
            'minlength': "Minimum length " + validatorValue.requiredLength,
            'maxlength': "Maximum length " + validatorValue.requiredLength
        };
        return config[validatorName];
    };
    ValidationService.passwordValidator = function () {
        return function (options) {
            return function (c) {
                if (c.value === null) {
                    return null;
                }
                var regexStr = '^[A-Za-z0-9$]+$';
                var regex = new RegExp(regexStr);
                if (regex.test(c.value)) {
                    return null;
                }
                else {
                    return { 'invalidPassword': true };
                }
            };
        };
    };
    return ValidationService;
}());
exports.ValidationService = ValidationService;
//# sourceMappingURL=validation.service.js.map