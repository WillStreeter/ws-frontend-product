import * as PortalActionTypes from '../../../business-layer/shared-types/actions/portal.action.types';
export const PortalTypes = PortalActionTypes;
export class UpdateViewablePerPageCount {
    constructor(payload) {
        this.payload = payload;
        this.type = PortalActionTypes.UPDATE_VIEWABLE_PER_PAGE_COUNT;
    }
}
export class SetCurrentPageNumber {
    constructor(payload) {
        this.payload = payload;
        this.type = PortalActionTypes.SET_CURRENT_PAGE_NUMBER;
    }
}
export class UpdateCurrentSortState {
    constructor(payload) {
        this.payload = payload;
        this.type = PortalActionTypes.UPDATE_SORT_STATE;
    }
}
export class UpdateAddRowGarment {
    constructor(payload) {
        this.payload = payload;
        this.type = PortalActionTypes.UPDATE_REVEAL_GARMENT_ADD_ROW;
    }
}
export class SetGarmentAddBtnStatus {
    constructor(payload) {
        this.payload = payload;
        this.type = PortalActionTypes.SET_GARMENT_ADD_BTN_STATUS;
    }
}
