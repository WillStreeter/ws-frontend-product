"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailMatcher = function (control) {
    var email = control.get('email');
    var confirm = control.get('confirm');
    if (!email || !confirm) {
        return null;
    }
    if (email.value === confirm.value) {
        return null;
    }
    else {
        return { nomatch: true };
    }
};
