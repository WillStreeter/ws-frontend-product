import * as GarmentActionTypes from '../../../business-layer/shared-types/actions/garment.action.types';
export const GarmentTypes = GarmentActionTypes;
export class GetGarmentCollection {
    constructor() {
        this.type = GarmentActionTypes.FETCH_GARMENT_COLLECTION_ATTEMPT;
    }
}
export class GetGarmentCollectionFailure {
    constructor(payload) {
        this.payload = payload;
        this.type = GarmentActionTypes.FETCH_GARMENT_COLLECTION_FAILURE;
    }
}
export class GetGarmentCollectionSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = GarmentActionTypes.FETCH_GARMENT_COLLECTION_SUCCESS;
    }
}
export class UpdateGarmentAttempt {
    constructor(payload) {
        this.payload = payload;
        this.type = GarmentActionTypes.UPDATE_GARMENT_IN_COLLECTION_ATTEMPT;
    }
}
export class UpdateGarmentFailure {
    constructor(payload) {
        this.payload = payload;
        this.type = GarmentActionTypes.UPDATE_GARMENT_IN_COLLECTION_FAILURE;
    }
}
export class UpdateGarmentSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = GarmentActionTypes.UPDATE_GARMENT_IN_COLLECTION_SUCCESS;
    }
}
export class AddGarmentToCollectionAttempt {
    constructor(payload) {
        this.payload = payload;
        this.type = GarmentActionTypes.ADD_GARMENT_TO_COLLECTION_ATTEMPT;
    }
}
export class AddGarmentToCollectionFailure {
    constructor(payload) {
        this.payload = payload;
        this.type = GarmentActionTypes.ADD_GARMENT_TO_COLLECTION_FAILURE;
    }
}
export class AddGarmentToCollectionSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = GarmentActionTypes.ADD_GARMENT_TO_COLLECTION_SUCCESS;
    }
}
export class GetSubsetOfCollection {
    constructor(payload) {
        this.payload = payload;
        this.type = GarmentActionTypes.GET_SUBSET_OF_COLLECTION;
    }
}
export class UpdateSortedCollection {
    constructor(payload) {
        this.payload = payload;
        this.type = GarmentActionTypes.UPDATE_SORTED_COLLECTION;
    }
}
export class SearchCollectionByTerm {
    constructor(payload) {
        this.payload = payload;
        this.type = GarmentActionTypes.SEARCH_COLLECTION_BY_TERM;
    }
}
