"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PortalActionTypes = require("../../../business-layer/shared-types/actions/portal.action.types");
exports.PortalTypes = PortalActionTypes;
var UpdateViewablePerPageCount = (function () {
    function UpdateViewablePerPageCount(payload) {
        this.payload = payload;
        this.type = PortalActionTypes.UPDATE_VIEWABLE_PER_PAGE_COUNT;
    }
    return UpdateViewablePerPageCount;
}());
exports.UpdateViewablePerPageCount = UpdateViewablePerPageCount;
var SetCurrentPageNumber = (function () {
    function SetCurrentPageNumber(payload) {
        this.payload = payload;
        this.type = PortalActionTypes.SET_CURRENT_PAGE_NUMBER;
    }
    return SetCurrentPageNumber;
}());
exports.SetCurrentPageNumber = SetCurrentPageNumber;
var UpdateCurrentSortState = (function () {
    function UpdateCurrentSortState(payload) {
        this.payload = payload;
        this.type = PortalActionTypes.UPDATE_SORT_STATE;
    }
    return UpdateCurrentSortState;
}());
exports.UpdateCurrentSortState = UpdateCurrentSortState;
var UpdateAddRowGarment = (function () {
    function UpdateAddRowGarment(payload) {
        this.payload = payload;
        this.type = PortalActionTypes.UPDATE_REVEAL_GARMENT_ADD_ROW;
    }
    return UpdateAddRowGarment;
}());
exports.UpdateAddRowGarment = UpdateAddRowGarment;
var SetGarmentAddBtnStatus = (function () {
    function SetGarmentAddBtnStatus(payload) {
        this.payload = payload;
        this.type = PortalActionTypes.SET_GARMENT_ADD_BTN_STATUS;
    }
    return SetGarmentAddBtnStatus;
}());
exports.SetGarmentAddBtnStatus = SetGarmentAddBtnStatus;
