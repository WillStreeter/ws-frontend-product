var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import * as fromRoot from '../ngrx-data/reducers/index';
import { SORT_BASES } from "../../business-layer/shared-types/sorters/sort.config.types";
let SortingServices = class SortingServices {
    constructor(store) {
        this.store = store;
    }
    getCollectionSubset() {
        this.setMostCurrentStoreValues();
        let collectionSubset = this.createGarmentSubSet();
        return Observable.of({ collectionId: this.collectionId,
            sortType: this.sortStateVal.sortType,
            subSetCollection: collectionSubset,
            products: this.garmentProducts });
    }
    sortGarmentCollection() {
        this.setMostCurrentStoreValues();
        this.sortCollection();
        let collectionSubset = this.createGarmentSubSet();
        return Observable.of({ collectionId: this.collectionId,
            sortType: this.sortStateVal.sortType,
            subSetCollection: collectionSubset,
            products: this.garmentProducts });
    }
    searchGarmentCollection(searchTerm) {
        this.setMostCurrentStoreValues();
        let termsInset = this.findTermsInCollectionNames(searchTerm);
        let clonedGM = [...this.garmentProducts];
        termsInset.forEach((item, index) => {
            this.moveElementsInList(item.index, index, clonedGM);
        });
        return Observable.of({ collectionId: this.collectionId,
            sortType: this.sortStateVal.sortType,
            subSetCollection: clonedGM,
            products: this.garmentProducts });
    }
    findTermsInCollectionNames(searchTerm) {
        let stringObjects = { rank: -1, index: -1 };
        let termList = [];
        this.garmentProducts.forEach((item, index) => {
            const rank = item.name.search(searchTerm);
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
    }
    sortCollection() {
        if (SORT_BASES[this.sortStateVal.sortBase].dataType === "string") {
            this.garmentProducts = this.doAlphaSort(this.garmentProducts, SORT_BASES[this.sortStateVal.sortBase].attr);
            if (this.sortStateVal.sortDirection == "Descending") {
                this.garmentProducts = this.garmentProducts.reverse();
            }
        }
        else if (SORT_BASES[this.sortStateVal.sortBase].dataType === "number") {
            this.garmentProducts = this.doNumericalSort(this.garmentProducts, SORT_BASES[this.sortStateVal.sortBase].attr);
            if (this.sortStateVal.sortDirection == "Descending") {
                this.garmentProducts = this.garmentProducts.reverse();
            }
        }
        else {
            this.garmentProducts = this.doTypeSort(this.garmentProducts, SORT_BASES[this.sortStateVal.sortBase].attr);
        }
        return this.garmentProducts;
    }
    setMostCurrentStoreValues() {
        this.garmentStore$ = this.store.select(fromRoot.getGarmentsState).subscribe((val) => {
            this.collectionId = val.currentCollectionId;
            this.currentGarmentCollection = val.entities[this.collectionId];
            this.garmentProducts = this.currentGarmentCollection.products;
        });
        this.garmentStore$.unsubscribe();
        this.sortState$ = this.store.select(fromRoot.getPortalState).subscribe((val) => {
            this.sortStateVal = val;
        });
        this.sortState$.unsubscribe();
    }
    doAlphaSort(list, base) {
        let value = [...list].sort((firstTerm, secondTerm) => {
            const a = firstTerm[base].toLowerCase();
            const b = secondTerm[base].toLowerCase();
            if (a > b) {
                return 1;
            }
            if (a < b) {
                return -1;
            }
            return 0;
        });
        return value;
    }
    doNumericalSort(list, base) {
        return [...list].sort((firstTerm, secondTerm) => {
            return (firstTerm[base] - (secondTerm)[base]);
        });
    }
    doTypeSort(list, type) {
        let Physical = [];
        let Digital = [];
        let Service = [];
        list.forEach((item) => {
            switch (item.type) {
                case "Physical":
                    Physical.push(item);
                    break;
                case "Digital":
                    Digital.push(item);
                    break;
                case "Service":
                    Service.push(item);
                    break;
            }
        });
        let typeSorted;
        switch (type) {
            case "Physical":
                typeSorted = [...Physical, ...Digital, ...Service];
                break;
            case "Digital":
                typeSorted = [...Digital, ...Physical, ...Service];
                break;
            case "Service":
                typeSorted = [...Service, ...Physical, ...Digital];
                break;
        }
        return typeSorted;
    }
    moveElementsInList(crntIndex, newIndex, list) {
        list.splice(newIndex, 0, list.splice(crntIndex, 1)[0]);
    }
    createGarmentSubSet() {
        const pages = Math.ceil(this.garmentProducts.length / this.sortStateVal.viewablePerPage);
        const start = (this.sortStateVal.currentPage - 1) * this.sortStateVal.viewablePerPage;
        const end = (this.sortStateVal.currentPage === pages) ?
            this.garmentProducts.length :
            this.sortStateVal.viewablePerPage * this.sortStateVal.currentPage;
        return this.garmentProducts.slice(start, end);
    }
};
SortingServices = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Store])
], SortingServices);
export { SortingServices };
