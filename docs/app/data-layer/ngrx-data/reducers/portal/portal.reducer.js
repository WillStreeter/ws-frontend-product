"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PortalActionTypes = require("../../../../business-layer/shared-types/actions/portal.action.types");
var initialState = {
    garmentAddLock: false,
    viewablePerPage: 10,
    revealAddGarmentRow: false,
    currentPage: 1,
    totalPages: 5,
    sortDirection: 'Ascending',
    sortBase: 'Name',
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case PortalActionTypes.UPDATE_VIEWABLE_PER_PAGE_COUNT: {
            return Object.assign({}, state, { viewablePerPage: action.payload });
        }
        case PortalActionTypes.SET_CURRENT_PAGE_NUMBER: {
            return Object.assign({}, state, { currentPage: action.payload });
        }
        case PortalActionTypes.SET_GARMENT_ADD_BTN_STATUS: {
            return Object.assign({}, state, { garmentAddLock: action.payload });
        }
        case PortalActionTypes.UPDATE_REVEAL_GARMENT_ADD_ROW: {
            return Object.assign({}, state, { revealAddGarmentRow: action.payload, garmentAddLock: action.payload });
        }
        case PortalActionTypes.UPDATE_SORT_STATE: {
            var sortRequest = (action.payload);
            return Object.assign({}, state, { sortDirection: !sortRequest.directionChange ?
                    state.sortDirection : (state.sortDirection === "Ascending") ?
                    "Descending" : "Ascending",
                sortBase: sortRequest.base ? sortRequest.base : state.sortBase });
        }
        default:
            return state;
    }
}
exports.reducer = reducer;
exports.getRevealAddGarmentRow = function (state) { return state.revealAddGarmentRow; };
exports.getViewablePerPage = function (state) { return state.viewablePerPage; };
exports.getCurrentPage = function (state) { return state.currentPage; };
exports.getSortType = function (state) { return state.sortDirection; };
exports.getSortBase = function (state) { return state.sortBase; };
exports.getGarmentAddLock = function (state) { return state.garmentAddLock; };
exports.getSortState = function (state) { return Object.assign({}, { sortDirection: state.sortDirection, sortBase: state.sortBase }); };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhLWxheWVyL25ncngtZGF0YS9yZWR1Y2Vycy9wb3J0YWwvcG9ydGFsLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx1R0FBeUc7QUFjekcsSUFBTSxZQUFZLEdBQVU7SUFDMUIsY0FBYyxFQUFDLEtBQUs7SUFDcEIsZUFBZSxFQUFDLEVBQUU7SUFDbEIsbUJBQW1CLEVBQUMsS0FBSztJQUN6QixXQUFXLEVBQUMsQ0FBQztJQUNiLFVBQVUsRUFBQyxDQUFDO0lBQ1osYUFBYSxFQUFDLFdBQVc7SUFDekIsUUFBUSxFQUFDLE1BQU07Q0FDaEIsQ0FBQztBQUVGLGlCQUF3QixLQUFvQixFQUFFLE1BQXNCO0lBQTVDLHNCQUFBLEVBQUEsb0JBQW9CO0lBQzFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssaUJBQWlCLENBQUMsOEJBQThCLEVBQUUsQ0FBQztZQUNwRCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFJLEVBQUMsZUFBZSxFQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO1FBQ3hFLENBQUM7UUFDRCxLQUFLLGlCQUFpQixDQUFDLHVCQUF1QixFQUFFLENBQUM7WUFDN0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBSSxFQUFDLFdBQVcsRUFBQyxNQUFNLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztRQUNwRSxDQUFDO1FBRUQsS0FBSyxpQkFBaUIsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1lBQ2hELE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUksRUFBQyxjQUFjLEVBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7UUFDdkUsQ0FBQztRQUNELEtBQUssaUJBQWlCLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztZQUNyRCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFJLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7UUFDekcsQ0FBQztRQUNELEtBQUssaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUN6QyxJQUFNLFdBQVcsR0FBc0MsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFeEUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBSSxFQUFDLGFBQWEsRUFBQyxDQUFDLFdBQVcsQ0FBQyxlQUFlO29CQUM1QixLQUFLLENBQUMsYUFBYSxHQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsS0FBRyxXQUFXLENBQUM7b0JBQ3ZELFlBQVksR0FBQyxXQUFXO2dCQUV0QyxRQUFRLEVBQUMsV0FBVyxDQUFDLElBQUksR0FBQyxXQUFXLENBQUMsSUFBSSxHQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2xHLENBQUM7UUFFRDtZQUNFLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztBQUNILENBQUM7QUE1QkQsMEJBNEJDO0FBRVksUUFBQSxzQkFBc0IsR0FBRSxVQUFDLEtBQVksSUFBSyxPQUFBLEtBQUssQ0FBQyxtQkFBbUIsRUFBekIsQ0FBeUIsQ0FBQztBQUNwRSxRQUFBLGtCQUFrQixHQUFHLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSyxDQUFDLGVBQWUsRUFBckIsQ0FBcUIsQ0FBQztBQUM3RCxRQUFBLGNBQWMsR0FBRyxVQUFDLEtBQVksSUFBSyxPQUFBLEtBQUssQ0FBQyxXQUFXLEVBQWpCLENBQWlCLENBQUM7QUFDckQsUUFBQSxXQUFXLEdBQUcsVUFBQyxLQUFZLElBQUssT0FBQSxLQUFLLENBQUMsYUFBYSxFQUFuQixDQUFtQixDQUFDO0FBQ3BELFFBQUEsV0FBVyxHQUFHLFVBQUMsS0FBWSxJQUFLLE9BQUEsS0FBSyxDQUFDLFFBQVEsRUFBZCxDQUFjLENBQUM7QUFDL0MsUUFBQSxpQkFBaUIsR0FBRSxVQUFDLEtBQVksSUFBSyxPQUFBLEtBQUssQ0FBQyxjQUFjLEVBQXBCLENBQW9CLENBQUM7QUFDMUQsUUFBQSxZQUFZLEdBQUcsVUFBQyxLQUFZLElBQUssT0FBQSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBQyxFQUFDLGFBQWEsRUFBQyxLQUFLLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxLQUFLLENBQUMsUUFBUSxFQUFDLENBQUMsRUFBOUUsQ0FBOEUsQ0FBQyIsImZpbGUiOiJhcHAvZGF0YS1sYXllci9uZ3J4LWRhdGEvcmVkdWNlcnMvcG9ydGFsL3BvcnRhbC5yZWR1Y2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcG9ydGFsIGZyb20gJy4uLy4uL2FjdGlvbnMvcG9ydGFsLmFjdGlvbnMnO1xuaW1wb3J0ICogYXMgUG9ydGFsQWN0aW9uVHlwZXMgZnJvbSAnLi4vLi4vLi4vLi4vYnVzaW5lc3MtbGF5ZXIvc2hhcmVkLXR5cGVzL2FjdGlvbnMvcG9ydGFsLmFjdGlvbi50eXBlcyc7XG5pbXBvcnQgeyBTb3J0UmVxdWVzdE1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2J1c2luZXNzLWxheWVyL21vZGVscy9zb3J0UmVxdWVzdC5tb2RlbFwiO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICAgZ2FybWVudEFkZExvY2s6Ym9vbGVhbjtcbiAgdmlld2FibGVQZXJQYWdlOm51bWJlcjtcbiAgcmV2ZWFsQWRkR2FybWVudFJvdzpib29sZWFuLFxuICBjdXJyZW50UGFnZTpudW1iZXI7XG4gIHRvdGFsUGFnZXM6bnVtYmVyO1xuICBzb3J0RGlyZWN0aW9uOnN0cmluZztcbiAgc29ydEJhc2U6c3RyaW5nO1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGU6IFN0YXRlID0ge1xuICBnYXJtZW50QWRkTG9jazpmYWxzZSxcbiAgdmlld2FibGVQZXJQYWdlOjEwLFxuICByZXZlYWxBZGRHYXJtZW50Um93OmZhbHNlLFxuICBjdXJyZW50UGFnZToxLFxuICB0b3RhbFBhZ2VzOjUsXG4gIHNvcnREaXJlY3Rpb246J0FzY2VuZGluZycsXG4gIHNvcnRCYXNlOidOYW1lJyxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IHBvcnRhbC5BY3Rpb25zKTogU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBQb3J0YWxBY3Rpb25UeXBlcy5VUERBVEVfVklFV0FCTEVfUEVSX1BBR0VfQ09VTlQ6IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCAgIHt2aWV3YWJsZVBlclBhZ2U6YWN0aW9uLnBheWxvYWR9KTtcbiAgICB9XG4gICAgY2FzZSBQb3J0YWxBY3Rpb25UeXBlcy5TRVRfQ1VSUkVOVF9QQUdFX05VTUJFUjoge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsICAge2N1cnJlbnRQYWdlOmFjdGlvbi5wYXlsb2FkfSk7XG4gICAgfVxuXG4gICAgY2FzZSBQb3J0YWxBY3Rpb25UeXBlcy5TRVRfR0FSTUVOVF9BRERfQlROX1NUQVRVUzoge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsICAge2dhcm1lbnRBZGRMb2NrOmFjdGlvbi5wYXlsb2FkfSk7XG4gICAgfVxuICAgIGNhc2UgUG9ydGFsQWN0aW9uVHlwZXMuVVBEQVRFX1JFVkVBTF9HQVJNRU5UX0FERF9ST1c6IHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgICB7cmV2ZWFsQWRkR2FybWVudFJvdzphY3Rpb24ucGF5bG9hZCwgZ2FybWVudEFkZExvY2s6YWN0aW9uLnBheWxvYWR9KTtcbiAgICB9XG4gICAgY2FzZSBQb3J0YWxBY3Rpb25UeXBlcy5VUERBVEVfU09SVF9TVEFURToge1xuICAgICAgY29uc3Qgc29ydFJlcXVlc3Q6U29ydFJlcXVlc3RNb2RlbCA9IDxTb3J0UmVxdWVzdE1vZGVsPihhY3Rpb24ucGF5bG9hZCk7XG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgICB7c29ydERpcmVjdGlvbjohc29ydFJlcXVlc3QuZGlyZWN0aW9uQ2hhbmdlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLnNvcnREaXJlY3Rpb246KHN0YXRlLnNvcnREaXJlY3Rpb249PT1cIkFzY2VuZGluZ1wiKT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkRlc2NlbmRpbmdcIjpcIkFzY2VuZGluZ1wiLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRCYXNlOnNvcnRSZXF1ZXN0LmJhc2U/c29ydFJlcXVlc3QuYmFzZTpzdGF0ZS5zb3J0QmFzZSB9KTtcbiAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBnZXRSZXZlYWxBZGRHYXJtZW50Um93PSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5yZXZlYWxBZGRHYXJtZW50Um93O1xuZXhwb3J0IGNvbnN0IGdldFZpZXdhYmxlUGVyUGFnZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnZpZXdhYmxlUGVyUGFnZTtcbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50UGFnZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLmN1cnJlbnRQYWdlO1xuZXhwb3J0IGNvbnN0IGdldFNvcnRUeXBlID0gKHN0YXRlOiBTdGF0ZSkgPT4gc3RhdGUuc29ydERpcmVjdGlvbjtcbmV4cG9ydCBjb25zdCBnZXRTb3J0QmFzZSA9IChzdGF0ZTogU3RhdGUpID0+IHN0YXRlLnNvcnRCYXNlO1xuZXhwb3J0IGNvbnN0IGdldEdhcm1lbnRBZGRMb2NrPSAoc3RhdGU6IFN0YXRlKSA9PiBzdGF0ZS5nYXJtZW50QWRkTG9jaztcbmV4cG9ydCBjb25zdCBnZXRTb3J0U3RhdGUgPSAoc3RhdGU6IFN0YXRlKSA9PiBPYmplY3QuYXNzaWduKHt9LHtzb3J0RGlyZWN0aW9uOnN0YXRlLnNvcnREaXJlY3Rpb24sIHNvcnRCYXNlOnN0YXRlLnNvcnRCYXNlfSk7XG5cbiJdfQ==