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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhLWxheWVyL25ncngtZGF0YS9hY3Rpb25zL3BvcnRhbC5hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsb0dBQXNHO0FBRXpGLFFBQUEsV0FBVyxHQUFHLGlCQUFpQixDQUFDO0FBRzdDO0lBRUksb0NBQW1CLE9BQWM7UUFBZCxZQUFPLEdBQVAsT0FBTyxDQUFPO1FBRG5CLFNBQUksR0FBRyxpQkFBaUIsQ0FBQyw4QkFBOEIsQ0FBQztJQUNoQyxDQUFDO0lBQzNDLGlDQUFDO0FBQUQsQ0FIQSxBQUdDLElBQUE7QUFIWSxnRUFBMEI7QUFLdkM7SUFFSyw4QkFBbUIsT0FBYztRQUFkLFlBQU8sR0FBUCxPQUFPLENBQU87UUFEcEIsU0FBSSxHQUFHLGlCQUFpQixDQUFDLHVCQUF1QixDQUFDO0lBQ3hCLENBQUM7SUFDNUMsMkJBQUM7QUFBRCxDQUhBLEFBR0MsSUFBQTtBQUhZLG9EQUFvQjtBQUtqQztJQUVFLGdDQUFtQixPQUF3QjtRQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUQ1QixTQUFJLEdBQUcsaUJBQWlCLENBQUMsaUJBQWlCLENBQUM7SUFDVixDQUFDO0lBQ25ELDZCQUFDO0FBQUQsQ0FIQSxBQUdDLElBQUE7QUFIWSx3REFBc0I7QUFJbkM7SUFFRSw2QkFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEbkIsU0FBSSxHQUFHLGlCQUFpQixDQUFDLDZCQUE2QixDQUFDO0lBQy9CLENBQUM7SUFDMUMsMEJBQUM7QUFBRCxDQUhBLEFBR0MsSUFBQTtBQUhZLGtEQUFtQjtBQUtoQztJQUVJLGdDQUFtQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQURsQixTQUFJLEdBQUcsaUJBQWlCLENBQUMsMEJBQTBCLENBQUM7SUFDN0IsQ0FBQztJQUM1Qyw2QkFBQztBQUFELENBSEEsQUFHQyxJQUFBO0FBSFksd0RBQXNCIiwiZmlsZSI6ImFwcC9kYXRhLWxheWVyL25ncngtZGF0YS9hY3Rpb25zL3BvcnRhbC5hY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgU29ydFJlcXVlc3RNb2RlbCB9IGZyb20gJy4uLy4uLy4uL2J1c2luZXNzLWxheWVyL21vZGVscy9zb3J0UmVxdWVzdC5tb2RlbCc7XG5pbXBvcnQgKiBhcyBQb3J0YWxBY3Rpb25UeXBlcyBmcm9tICcuLi8uLi8uLi9idXNpbmVzcy1sYXllci9zaGFyZWQtdHlwZXMvYWN0aW9ucy9wb3J0YWwuYWN0aW9uLnR5cGVzJztcblxuZXhwb3J0IGNvbnN0IFBvcnRhbFR5cGVzID0gUG9ydGFsQWN0aW9uVHlwZXM7XG5cblxuZXhwb3J0IGNsYXNzIFVwZGF0ZVZpZXdhYmxlUGVyUGFnZUNvdW50IGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcHVibGljIHJlYWRvbmx5IHR5cGUgPSBQb3J0YWxBY3Rpb25UeXBlcy5VUERBVEVfVklFV0FCTEVfUEVSX1BBR0VfQ09VTlQ7XG4gICAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6bnVtYmVyKSB7ICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXRDdXJyZW50UGFnZU51bWJlciBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHB1YmxpYyByZWFkb25seSB0eXBlID0gUG9ydGFsQWN0aW9uVHlwZXMuU0VUX0NVUlJFTlRfUEFHRV9OVU1CRVI7XG4gICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOm51bWJlcikgeyAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlQ3VycmVudFNvcnRTdGF0ZSBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gcHVibGljIHJlYWRvbmx5IHR5cGUgPSBQb3J0YWxBY3Rpb25UeXBlcy5VUERBVEVfU09SVF9TVEFURTtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6U29ydFJlcXVlc3RNb2RlbCkgeyAgfVxufVxuZXhwb3J0IGNsYXNzIFVwZGF0ZUFkZFJvd0dhcm1lbnQgaW1wbGVtZW50cyBBY3Rpb257XG4gcHVibGljIHJlYWRvbmx5IHR5cGUgPSBQb3J0YWxBY3Rpb25UeXBlcy5VUERBVEVfUkVWRUFMX0dBUk1FTlRfQUREX1JPVztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6Ym9vbGVhbikgeyAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0R2FybWVudEFkZEJ0blN0YXR1cyBpbXBsZW1lbnRzIEFjdGlvbntcbiAgICBwdWJsaWMgcmVhZG9ubHkgdHlwZSA9IFBvcnRhbEFjdGlvblR5cGVzLlNFVF9HQVJNRU5UX0FERF9CVE5fU1RBVFVTO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOmJvb2xlYW4pIHsgIH1cbn1cblxuXG5leHBvcnQgdHlwZSBBY3Rpb25zXG4gID0gVXBkYXRlVmlld2FibGVQZXJQYWdlQ291bnRcbiAgfCBTZXRDdXJyZW50UGFnZU51bWJlclxuICB8IFVwZGF0ZUFkZFJvd0dhcm1lbnRcbiAgfCBVcGRhdGVDdXJyZW50U29ydFN0YXRlXG4gIHwgU2V0R2FybWVudEFkZEJ0blN0YXR1cztcbiJdfQ==