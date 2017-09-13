"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GarmentActionTypes = require("../../../business-layer/shared-types/actions/garment.action.types");
exports.GarmentTypes = GarmentActionTypes;
var GetGarmentCollection = (function () {
    function GetGarmentCollection() {
        this.type = GarmentActionTypes.FETCH_GARMENT_COLLECTION_ATTEMPT;
    }
    return GetGarmentCollection;
}());
exports.GetGarmentCollection = GetGarmentCollection;
var GetGarmentCollectionFailure = (function () {
    function GetGarmentCollectionFailure(payload) {
        this.payload = payload;
        this.type = GarmentActionTypes.FETCH_GARMENT_COLLECTION_FAILURE;
    }
    return GetGarmentCollectionFailure;
}());
exports.GetGarmentCollectionFailure = GetGarmentCollectionFailure;
var GetGarmentCollectionSuccess = (function () {
    function GetGarmentCollectionSuccess(payload) {
        this.payload = payload;
        this.type = GarmentActionTypes.FETCH_GARMENT_COLLECTION_SUCCESS;
    }
    return GetGarmentCollectionSuccess;
}());
exports.GetGarmentCollectionSuccess = GetGarmentCollectionSuccess;
var UpdateGarmentAttempt = (function () {
    function UpdateGarmentAttempt(payload) {
        this.payload = payload;
        this.type = GarmentActionTypes.UPDATE_GARMENT_IN_COLLECTION_ATTEMPT;
    }
    return UpdateGarmentAttempt;
}());
exports.UpdateGarmentAttempt = UpdateGarmentAttempt;
var UpdateGarmentFailure = (function () {
    function UpdateGarmentFailure(payload) {
        this.payload = payload;
        this.type = GarmentActionTypes.UPDATE_GARMENT_IN_COLLECTION_FAILURE;
    }
    return UpdateGarmentFailure;
}());
exports.UpdateGarmentFailure = UpdateGarmentFailure;
var UpdateGarmentSuccess = (function () {
    function UpdateGarmentSuccess(payload) {
        this.payload = payload;
        this.type = GarmentActionTypes.UPDATE_GARMENT_IN_COLLECTION_SUCCESS;
    }
    return UpdateGarmentSuccess;
}());
exports.UpdateGarmentSuccess = UpdateGarmentSuccess;
var AddGarmentToCollectionAttempt = (function () {
    function AddGarmentToCollectionAttempt(payload) {
        this.payload = payload;
        this.type = GarmentActionTypes.ADD_GARMENT_TO_COLLECTION_ATTEMPT;
    }
    return AddGarmentToCollectionAttempt;
}());
exports.AddGarmentToCollectionAttempt = AddGarmentToCollectionAttempt;
var AddGarmentToCollectionFailure = (function () {
    function AddGarmentToCollectionFailure(payload) {
        this.payload = payload;
        this.type = GarmentActionTypes.ADD_GARMENT_TO_COLLECTION_FAILURE;
    }
    return AddGarmentToCollectionFailure;
}());
exports.AddGarmentToCollectionFailure = AddGarmentToCollectionFailure;
var AddGarmentToCollectionSuccess = (function () {
    function AddGarmentToCollectionSuccess(payload) {
        this.payload = payload;
        this.type = GarmentActionTypes.ADD_GARMENT_TO_COLLECTION_SUCCESS;
    }
    return AddGarmentToCollectionSuccess;
}());
exports.AddGarmentToCollectionSuccess = AddGarmentToCollectionSuccess;
var GetSubsetOfCollection = (function () {
    function GetSubsetOfCollection(payload) {
        this.payload = payload;
        this.type = GarmentActionTypes.GET_SUBSET_OF_COLLECTION;
    }
    return GetSubsetOfCollection;
}());
exports.GetSubsetOfCollection = GetSubsetOfCollection;
var UpdateSortedCollection = (function () {
    function UpdateSortedCollection(payload) {
        this.payload = payload;
        this.type = GarmentActionTypes.UPDATE_SORTED_COLLECTION;
    }
    return UpdateSortedCollection;
}());
exports.UpdateSortedCollection = UpdateSortedCollection;
var SearchCollectionByTerm = (function () {
    function SearchCollectionByTerm(payload) {
        this.payload = payload;
        this.type = GarmentActionTypes.SEARCH_COLLECTION_BY_TERM;
    }
    return SearchCollectionByTerm;
}());
exports.SearchCollectionByTerm = SearchCollectionByTerm;
//# sourceMappingURL=garment.actions.js.map