"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorActionTypes = require("../../../business-layer/shared-types/actions/error.action.types");
exports.ErrorTypes = ErrorActionTypes;
var ReportError = (function () {
    function ReportError(payload) {
        this.payload = payload;
        this.type = ErrorActionTypes.REPORT_ERROR;
    }
    return ReportError;
}());
exports.ReportError = ReportError;
var RemoveError = (function () {
    function RemoveError(payload) {
        this.payload = payload;
        this.type = ErrorActionTypes.REMOVE_ERROR;
    }
    return RemoveError;
}());
exports.RemoveError = RemoveError;
//# sourceMappingURL=error.actions.js.map