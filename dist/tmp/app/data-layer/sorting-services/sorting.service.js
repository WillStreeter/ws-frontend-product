"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
var fromRoot = require("../ngrx-data/reducers/index");
var sort_config_types_1 = require("../../business-layer/shared-types/sorters/sort.config.types");
var SortingServices = (function () {
    function SortingServices(store) {
        this.store = store;
    }
    SortingServices.prototype.getCollectionSubset = function () {
        this.setMostCurrentStoreValues();
        var collectionSubset = this.createGarmentSubSet();
        return Observable_1.Observable.of({ collectionId: this.collectionId,
            sortType: this.sortStateVal.sortType,
            subSetCollection: collectionSubset,
            products: this.garmentProducts });
    };
    SortingServices.prototype.sortGarmentCollection = function () {
        this.setMostCurrentStoreValues();
        this.sortCollection();
        var collectionSubset = this.createGarmentSubSet();
        return Observable_1.Observable.of({ collectionId: this.collectionId,
            sortType: this.sortStateVal.sortType,
            subSetCollection: collectionSubset,
            products: this.garmentProducts });
    };
    SortingServices.prototype.searchGarmentCollection = function (searchTerm) {
        var _this = this;
        this.setMostCurrentStoreValues();
        var termsInset = this.findTermsInCollectionNames(searchTerm);
        var clonedGM = this.garmentProducts.slice();
        termsInset.forEach(function (item, index) {
            _this.moveElementsInList(item.index, index, clonedGM);
        });
        return Observable_1.Observable.of({ collectionId: this.collectionId,
            sortType: this.sortStateVal.sortType,
            subSetCollection: clonedGM,
            products: this.garmentProducts });
    };
    SortingServices.prototype.findTermsInCollectionNames = function (searchTerm) {
        var stringObjects = { rank: -1, index: -1 };
        var termList = [];
        this.garmentProducts.forEach(function (item, index) {
            var rank = item.name.search(searchTerm);
            if (rank > -1) {
                termList.push({ rank: (rank + 1), index: index });
            }
        });
        if (termList.length > 0) {
            return this.doNumericalSort(termList, 'rank');
        }
        else {
            return termList;
        }
    };
    SortingServices.prototype.sortCollection = function () {
        if (sort_config_types_1.SORT_BASES[this.sortStateVal.sortBase].dataType === 'string') {
            this.garmentProducts = this.doAlphaSort(this.garmentProducts, sort_config_types_1.SORT_BASES[this.sortStateVal.sortBase].attr);
            if (this.sortStateVal.sortDirection == 'Descending') {
                this.garmentProducts = this.garmentProducts.reverse();
            }
        }
        else if (sort_config_types_1.SORT_BASES[this.sortStateVal.sortBase].dataType === 'number') {
            this.garmentProducts = this.doNumericalSort(this.garmentProducts, sort_config_types_1.SORT_BASES[this.sortStateVal.sortBase].attr);
            if (this.sortStateVal.sortDirection == 'Descending') {
                this.garmentProducts = this.garmentProducts.reverse();
            }
        }
        else {
            this.garmentProducts = this.doTypeSort(this.garmentProducts, sort_config_types_1.SORT_BASES[this.sortStateVal.sortBase].attr);
        }
        return this.garmentProducts;
    };
    SortingServices.prototype.setMostCurrentStoreValues = function () {
        var _this = this;
        this.garmentStore$ = this.store.select(fromRoot.getGarmentsState).subscribe(function (val) {
            _this.collectionId = val.currentCollectionId;
            _this.currentGarmentCollection = val.entities[_this.collectionId];
            _this.garmentProducts = _this.currentGarmentCollection.products;
        });
        this.garmentStore$.unsubscribe();
        this.sortState$ = this.store.select(fromRoot.getPortalState).subscribe(function (val) {
            _this.sortStateVal = val;
        });
        this.sortState$.unsubscribe();
    };
    SortingServices.prototype.doAlphaSort = function (list, base) {
        var value = list.slice().sort(function (firstTerm, secondTerm) {
            var a = firstTerm[base].toLowerCase();
            var b = secondTerm[base].toLowerCase();
            if (a > b) {
                return 1;
            }
            if (a < b) {
                return -1;
            }
            return 0;
        });
        return value;
    };
    SortingServices.prototype.doNumericalSort = function (list, base) {
        return list.slice().sort(function (firstTerm, secondTerm) {
            return (firstTerm[base] - (secondTerm)[base]);
        });
    };
    SortingServices.prototype.doTypeSort = function (list, type) {
        var Physical = [];
        var Digital = [];
        var Service = [];
        list.forEach(function (item) {
            switch (item.type) {
                case 'Physical':
                    Physical.push(item);
                    break;
                case 'Digital':
                    Digital.push(item);
                    break;
                case 'Service':
                    Service.push(item);
                    break;
            }
        });
        var typeSorted;
        switch (type) {
            case 'Physical':
                typeSorted = Physical.concat(Digital, Service);
                break;
            case 'Digital':
                typeSorted = Digital.concat(Physical, Service);
                break;
            case 'Service':
                typeSorted = Service.concat(Physical, Digital);
                break;
        }
        return typeSorted;
    };
    SortingServices.prototype.moveElementsInList = function (crntIndex, newIndex, list) {
        list.splice(newIndex, 0, list.splice(crntIndex, 1)[0]);
    };
    SortingServices.prototype.createGarmentSubSet = function () {
        var pages = Math.ceil(this.garmentProducts.length / this.sortStateVal.viewablePerPage);
        var start = (this.sortStateVal.currentPage - 1) * this.sortStateVal.viewablePerPage;
        var end = (this.sortStateVal.currentPage === pages) ?
            this.garmentProducts.length :
            this.sortStateVal.viewablePerPage * this.sortStateVal.currentPage;
        return this.garmentProducts.slice(start, end);
    };
    return SortingServices;
}());
SortingServices = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store])
], SortingServices);
exports.SortingServices = SortingServices;
