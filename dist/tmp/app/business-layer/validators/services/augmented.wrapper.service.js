"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator = require("validator");
var getValidator = function (name, value, options) {
    if (options) {
        return validator[name](value, options) ? null : (_a = {},
            _a[name] = {
                valid: false
            },
            _a);
    }
    return validator[name](value) ? null : (_b = {},
        _b[name] = {
            valid: false
        },
        _b);
    var _a, _b;
};
function getParamValidator(name) {
    return function (options) {
        return function (c) {
            return getValidator(name, c.value, options);
        };
    };
}
exports.getParamValidator = getParamValidator;
