"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FETCH_GARMENT_COLLECTION_ATTEMPT = '[GarmentActions] fetch garment from apiary api';
exports.FETCH_GARMENT_COLLECTION_SUCCESS = '[GarmentActions] fetch garment from apiary success';
exports.FETCH_GARMENT_COLLECTION_FAILURE = '[GarmentActions] fetch garment from apiary failure';
exports.UPDATE_GARMENT_IN_COLLECTION_ATTEMPT = '[GarmentActions] update a garment to collection';
exports.UPDATE_GARMENT_IN_COLLECTION_SUCCESS = '[GarmentActions] update a garment to collection success';
exports.UPDATE_GARMENT_IN_COLLECTION_FAILURE = '[GarmentActions] update a garment to collection failure';
exports.ADD_GARMENT_TO_COLLECTION_ATTEMPT = '[GarmentActions] add a garment to collection';
exports.ADD_GARMENT_TO_COLLECTION_SUCCESS = '[GarmentActions] add a garment to collection success';
exports.ADD_GARMENT_TO_COLLECTION_FAILURE = '[GarmentActions] add a garment to  collection failure';
exports.SET_SUBSET_OF_COLLECTION = '[GarmentActions] set subset of garments from collection';
exports.GET_SUBSET_OF_COLLECTION = '[GarmentActions] get subset of garments from collection';
exports.UPDATE_SORTED_COLLECTION = '[GarmentActions] update new sorted collection';
exports.SEARCH_COLLECTION_BY_TERM = '[GarmentActions] search collection by term';

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9idXNpbmVzcy1sYXllci9zaGFyZWQtdHlwZXMvYWN0aW9ucy9nYXJtZW50LmFjdGlvbi50eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNhLFFBQUEsZ0NBQWdDLEdBQUcsZ0RBQWdELENBQUM7QUFDcEYsUUFBQSxnQ0FBZ0MsR0FBRyxvREFBb0QsQ0FBQztBQUN4RixRQUFBLGdDQUFnQyxHQUFHLG9EQUFvRCxDQUFDO0FBR3hGLFFBQUEsb0NBQW9DLEdBQUcsaURBQWlELENBQUM7QUFDekYsUUFBQSxvQ0FBb0MsR0FBRyx5REFBeUQsQ0FBQztBQUNqRyxRQUFBLG9DQUFvQyxHQUFHLHlEQUF5RCxDQUFDO0FBRWpHLFFBQUEsaUNBQWlDLEdBQUcsOENBQThDLENBQUM7QUFDbkYsUUFBQSxpQ0FBaUMsR0FBRyxzREFBc0QsQ0FBQztBQUMzRixRQUFBLGlDQUFpQyxHQUFHLHVEQUF1RCxDQUFDO0FBRTVGLFFBQUEsd0JBQXdCLEdBQUcseURBQXlELENBQUM7QUFDckYsUUFBQSx3QkFBd0IsR0FBRyx5REFBeUQsQ0FBQztBQUVyRixRQUFBLHdCQUF3QixHQUFHLCtDQUErQyxDQUFDO0FBRTNFLFFBQUEseUJBQXlCLEdBQUksNENBQTRDLENBQUMiLCJmaWxlIjoiYXBwL2J1c2luZXNzLWxheWVyL3NoYXJlZC10eXBlcy9hY3Rpb25zL2dhcm1lbnQuYWN0aW9uLnR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY29uc3QgRkVUQ0hfR0FSTUVOVF9DT0xMRUNUSU9OX0FUVEVNUFQgPSAnW0dhcm1lbnRBY3Rpb25zXSBmZXRjaCBnYXJtZW50IGZyb20gYXBpYXJ5IGFwaSc7XG5leHBvcnQgY29uc3QgRkVUQ0hfR0FSTUVOVF9DT0xMRUNUSU9OX1NVQ0NFU1MgPSAnW0dhcm1lbnRBY3Rpb25zXSBmZXRjaCBnYXJtZW50IGZyb20gYXBpYXJ5IHN1Y2Nlc3MnO1xuZXhwb3J0IGNvbnN0IEZFVENIX0dBUk1FTlRfQ09MTEVDVElPTl9GQUlMVVJFID0gJ1tHYXJtZW50QWN0aW9uc10gZmV0Y2ggZ2FybWVudCBmcm9tIGFwaWFyeSBmYWlsdXJlJztcblxuXG5leHBvcnQgY29uc3QgVVBEQVRFX0dBUk1FTlRfSU5fQ09MTEVDVElPTl9BVFRFTVBUID0gJ1tHYXJtZW50QWN0aW9uc10gdXBkYXRlIGEgZ2FybWVudCB0byBjb2xsZWN0aW9uJztcbmV4cG9ydCBjb25zdCBVUERBVEVfR0FSTUVOVF9JTl9DT0xMRUNUSU9OX1NVQ0NFU1MgPSAnW0dhcm1lbnRBY3Rpb25zXSB1cGRhdGUgYSBnYXJtZW50IHRvIGNvbGxlY3Rpb24gc3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgVVBEQVRFX0dBUk1FTlRfSU5fQ09MTEVDVElPTl9GQUlMVVJFID0gJ1tHYXJtZW50QWN0aW9uc10gdXBkYXRlIGEgZ2FybWVudCB0byBjb2xsZWN0aW9uIGZhaWx1cmUnO1xuXG5leHBvcnQgY29uc3QgQUREX0dBUk1FTlRfVE9fQ09MTEVDVElPTl9BVFRFTVBUID0gJ1tHYXJtZW50QWN0aW9uc10gYWRkIGEgZ2FybWVudCB0byBjb2xsZWN0aW9uJztcbmV4cG9ydCBjb25zdCBBRERfR0FSTUVOVF9UT19DT0xMRUNUSU9OX1NVQ0NFU1MgPSAnW0dhcm1lbnRBY3Rpb25zXSBhZGQgYSBnYXJtZW50IHRvIGNvbGxlY3Rpb24gc3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgQUREX0dBUk1FTlRfVE9fQ09MTEVDVElPTl9GQUlMVVJFID0gJ1tHYXJtZW50QWN0aW9uc10gYWRkIGEgZ2FybWVudCB0byAgY29sbGVjdGlvbiBmYWlsdXJlJztcblxuZXhwb3J0IGNvbnN0IFNFVF9TVUJTRVRfT0ZfQ09MTEVDVElPTiA9ICdbR2FybWVudEFjdGlvbnNdIHNldCBzdWJzZXQgb2YgZ2FybWVudHMgZnJvbSBjb2xsZWN0aW9uJztcbmV4cG9ydCBjb25zdCBHRVRfU1VCU0VUX09GX0NPTExFQ1RJT04gPSAnW0dhcm1lbnRBY3Rpb25zXSBnZXQgc3Vic2V0IG9mIGdhcm1lbnRzIGZyb20gY29sbGVjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBVUERBVEVfU09SVEVEX0NPTExFQ1RJT04gPSAnW0dhcm1lbnRBY3Rpb25zXSB1cGRhdGUgbmV3IHNvcnRlZCBjb2xsZWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IFNFQVJDSF9DT0xMRUNUSU9OX0JZX1RFUk0gPSAgJ1tHYXJtZW50QWN0aW9uc10gc2VhcmNoIGNvbGxlY3Rpb24gYnkgdGVybSc7XG4iXX0=
