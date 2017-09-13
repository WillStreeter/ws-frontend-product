import * as ErrorActionTypes from '../../../business-layer/shared-types/actions/error.action.types';
export const ErrorTypes = ErrorActionTypes;
export class ReportError {
    constructor(payload) {
        this.payload = payload;
        this.type = ErrorActionTypes.REPORT_ERROR;
    }
}
export class RemoveError {
    constructor(payload) {
        this.payload = payload;
        this.type = ErrorActionTypes.REMOVE_ERROR;
    }
}
