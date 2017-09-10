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
    SortingServices.prototype.sortGarmentCollection = function (products) {
        console.log('sortGarmentCollection = ', products);
        var collectionList = this.sortCollection(products);
        return Observable_1.Observable.of({ collectionId: this.collectionId,
            sortType: this.sortStateVal.sortType,
            products: collectionList });
    };
    SortingServices.prototype.sortCollection = function (collectionList) {
        var _this = this;
        this.currentCollectionId$ = this.store.select(fromRoot.getCurrentCollectionId).subscribe(function (val) {
            _this.collectionId = val;
        });
        this.currentCollectionId$.unsubscribe();
        this.sortState$ = this.store.select(fromRoot.getPortalState).subscribe(function (val) {
            _this.sortStateVal = val;
        });
        this.sortState$.unsubscribe();
        if (sort_config_types_1.SORT_BASES[this.sortStateVal.sortBase].dataType === "string") {
            collectionList = this.doAlphaSort(collectionList, sort_config_types_1.SORT_BASES[this.sortStateVal.sortBase].attr);
            if (this.sortStateVal.sortType == "Descending") {
                collectionList = collectionList.reverse();
            }
        }
        else if (sort_config_types_1.SORT_BASES[this.sortStateVal.sortBase].dataType === "number") {
            collectionList = this.doNumericalSort(collectionList, sort_config_types_1.SORT_BASES[this.sortStateVal.sortBase].attr);
            if (this.sortStateVal.sortType == "Descending") {
                collectionList = collectionList.reverse();
            }
        }
        else {
            collectionList = this.doTypeSort(collectionList, sort_config_types_1.SORT_BASES[this.sortStateVal.sortBase].attr);
        }
        return collectionList;
    };
    SortingServices.prototype.doAlphaSort = function (list, base) {
        console.log('list is =', list);
        console.log('base is =', base);
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
        return list.slice().sort(function (firstTerm, secondTerm) { return (firstTerm[base] - (secondTerm)[base]); });
    };
    SortingServices.prototype.doTypeSort = function (list, type) {
        var Physical = [];
        var Digital = [];
        var Service = [];
        list.forEach(function (item) {
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
        var typeSorted;
        switch (type) {
            case "Physical":
                typeSorted = Physical.concat(Digital, Service);
                break;
            case "Digital":
                typeSorted = Digital.concat(Physical, Service);
                break;
            case "Service":
                typeSorted = Service.concat(Physical, Digital);
                break;
        }
        return typeSorted;
    };
    return SortingServices;
}());
SortingServices = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [store_1.Store])
], SortingServices);
exports.SortingServices = SortingServices;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhLWxheWVyL3NvcnRpbmctc2VydmljZXMvc29ydGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR0Esc0NBQXlDO0FBQ3pDLHFDQUFvQztBQUVwQyw4Q0FBNkM7QUFDN0Msa0NBQWdDO0FBQ2hDLHNEQUF3RDtBQUV4RCxpR0FBMEY7QUFJMUYsSUFBYSxlQUFlO0lBTXhCLHlCQUFxQixLQUE0QjtRQUE1QixVQUFLLEdBQUwsS0FBSyxDQUF1QjtJQUFFLENBQUM7SUFJcEQsK0NBQXFCLEdBQXJCLFVBQXNCLFFBQXVCO1FBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFDaEQsSUFBTSxjQUFjLEdBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRCxNQUFNLENBQUMsdUJBQVUsQ0FBQyxFQUFFLENBQW1CLEVBQUMsWUFBWSxFQUFDLElBQUksQ0FBQyxZQUFZO1lBQzVDLFFBQVEsRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVE7WUFDbkMsUUFBUSxFQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUdELHdDQUFjLEdBQWQsVUFBZSxjQUE2QjtRQUE1QyxpQkE2QkM7UUEzQkUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUc7WUFDeEYsS0FBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFekMsSUFBSSxDQUFDLFVBQVUsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FB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dGluZy1zZXJ2aWNlcy9zb3J0aW5nLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgd2lsbHN0cmVldGVyIG9uIDkvOC8xNy5cbiAqL1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcbmltcG9ydCAqIGFzIGZyb21Sb290IGZyb20gJy4uL25ncngtZGF0YS9yZWR1Y2Vycy9pbmRleCc7XG5pbXBvcnQgeyBHYXJtZW50TW9kZWwsIEdhcm1lbnRDb2xsZWN0aW9uTW9kZWwsIEdhcm1lbnRTb3J0TW9kZWwgfSBmcm9tIFwiLi4vLi4vYnVzaW5lc3MtbGF5ZXIvbW9kZWxzL2luZGV4XCI7XG5pbXBvcnQgeyBTT1JUX0JBU0VTICB9IGZyb20gXCIuLi8uLi9idXNpbmVzcy1sYXllci9zaGFyZWQtdHlwZXMvc29ydGVycy9zb3J0LmNvbmZpZy50eXBlc1wiO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb3J0aW5nU2VydmljZXMge1xuXG4gICAgc29ydFN0YXRlJDpTdWJzY3JpcHRpb247XG4gICAgY3VycmVudENvbGxlY3Rpb25JZCQ6U3Vic2NyaXB0aW9uO1xuICAgIHNvcnRTdGF0ZVZhbDphbnk7XG4gICAgY29sbGVjdGlvbklkOnN0cmluZztcbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBzdG9yZTogU3RvcmU8ZnJvbVJvb3QuU3RhdGU+KXt9XG5cblxuXG4gICAgc29ydEdhcm1lbnRDb2xsZWN0aW9uKHByb2R1Y3RzOkdhcm1lbnRNb2RlbFtdKXtcbiAgICAgICBjb25zb2xlLmxvZygnc29ydEdhcm1lbnRDb2xsZWN0aW9uID0gJywgcHJvZHVjdHMpXG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb25MaXN0PSB0aGlzLnNvcnRDb2xsZWN0aW9uKHByb2R1Y3RzKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YoPEdhcm1lbnRTb3J0TW9kZWw+e2NvbGxlY3Rpb25JZDp0aGlzLmNvbGxlY3Rpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0VHlwZTp0aGlzLnNvcnRTdGF0ZVZhbC5zb3J0VHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czpjb2xsZWN0aW9uTGlzdCB9KTtcbiAgICB9XG5cblxuICAgIHNvcnRDb2xsZWN0aW9uKGNvbGxlY3Rpb25MaXN0Okdhcm1lbnRNb2RlbFtdKXtcblxuICAgICAgIHRoaXMuY3VycmVudENvbGxlY3Rpb25JZCQgPSB0aGlzLnN0b3JlLnNlbGVjdChmcm9tUm9vdC5nZXRDdXJyZW50Q29sbGVjdGlvbklkKS5zdWJzY3JpYmUoKHZhbCk9PntcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdGlvbklkID0gdmFsO1xuICAgICAgIH0pO1xuICAgICAgICB0aGlzLmN1cnJlbnRDb2xsZWN0aW9uSWQkLnVuc3Vic2NyaWJlKCk7XG5cbiAgICAgICB0aGlzLnNvcnRTdGF0ZSQ9IHRoaXMuc3RvcmUuc2VsZWN0KGZyb21Sb290LmdldFBvcnRhbFN0YXRlKS5zdWJzY3JpYmUoKHZhbCk9PntcbiAgICAgICAgICAgICAgdGhpcy5zb3J0U3RhdGVWYWwgPSB2YWw7XG4gICAgICAgfSk7XG4gICAgICAgdGhpcy5zb3J0U3RhdGUkLnVuc3Vic2NyaWJlKCk7XG5cbiAgICAgICBpZihTT1JUX0JBU0VTW3RoaXMuc29ydFN0YXRlVmFsLnNvcnRCYXNlXS5kYXRhVHlwZSA9PT0gXCJzdHJpbmdcIil7XG4gICAgICAgICAgY29sbGVjdGlvbkxpc3QgPSB0aGlzLmRvQWxwaGFTb3J0KGNvbGxlY3Rpb25MaXN0LCAgU09SVF9CQVNFU1t0aGlzLnNvcnRTdGF0ZVZhbC5zb3J0QmFzZV0uYXR0cik7XG4gICAgICAgICAgaWYoICB0aGlzLnNvcnRTdGF0ZVZhbC5zb3J0VHlwZSA9PSBcIkRlc2NlbmRpbmdcIil7XG4gICAgICAgICAgICAgY29sbGVjdGlvbkxpc3QgPSBjb2xsZWN0aW9uTGlzdC5yZXZlcnNlKCk7XG4gICAgICAgICAgfVxuICAgICAgIH1lbHNlIGlmKFNPUlRfQkFTRVNbICB0aGlzLnNvcnRTdGF0ZVZhbC5zb3J0QmFzZV0uZGF0YVR5cGUgPT09IFwibnVtYmVyXCIpe1xuICAgICAgICAgIGNvbGxlY3Rpb25MaXN0ID0gdGhpcy5kb051bWVyaWNhbFNvcnQoY29sbGVjdGlvbkxpc3QsICAgU09SVF9CQVNFU1t0aGlzLnNvcnRTdGF0ZVZhbC5zb3J0QmFzZV0uYXR0cik7XG4gICAgICAgICAgaWYoICB0aGlzLnNvcnRTdGF0ZVZhbC5zb3J0VHlwZSA9PSBcIkRlc2NlbmRpbmdcIil7XG4gICAgICAgICAgICAgY29sbGVjdGlvbkxpc3QgPSBjb2xsZWN0aW9uTGlzdC5yZXZlcnNlKCk7XG4gICAgICAgICAgfVxuICAgICAgIH1lbHNle1xuICAgICAgICAgIGNvbGxlY3Rpb25MaXN0ID0gdGhpcy5kb1R5cGVTb3J0KGNvbGxlY3Rpb25MaXN0LCAgIFNPUlRfQkFTRVNbdGhpcy5zb3J0U3RhdGVWYWwuc29ydEJhc2VdLmF0dHIpO1xuXG4gICAgICAgfVxuXG4gICAgICAgcmV0dXJuIGNvbGxlY3Rpb25MaXN0O1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkb0FscGhhU29ydChsaXN0OmFueSwgYmFzZTpzdHJpbmcpe1xuICAgIGNvbnNvbGUubG9nKCdsaXN0IGlzID0nLCBsaXN0KVxuICAgIGNvbnNvbGUubG9nKCdiYXNlIGlzID0nLCBiYXNlKVxuICAgIGxldCB2YWx1ZTphbnkgPSBbLi4ubGlzdF0uc29ydCgoZmlyc3RUZXJtLCBzZWNvbmRUZXJtKTpudW1iZXIgPT57XG4gICAgICAgICAgICBjb25zdCBhID0gZmlyc3RUZXJtW2Jhc2VdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBjb25zdCBiID0gc2Vjb25kVGVybVtiYXNlXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKGEgPiBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhIDwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9KTtcbiAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZG9OdW1lcmljYWxTb3J0KGxpc3Q6YW55LCBiYXNlOnN0cmluZyl7XG4gICAgICAgIHJldHVybiAgWy4uLmxpc3RdLnNvcnQoKGZpcnN0VGVybSwgc2Vjb25kVGVybSkgPT4oZmlyc3RUZXJtW2Jhc2VdIC0gKHNlY29uZFRlcm0pW2Jhc2VdKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkb1R5cGVTb3J0KGxpc3Q6QXJyYXk8R2FybWVudE1vZGVsPiwgdHlwZTpzdHJpbmcpe1xuICAgICAgbGV0IFBoeXNpY2FsOkFycmF5PEdhcm1lbnRNb2RlbD4gPSBbXTtcbiAgICAgIGxldCBEaWdpdGFsOkFycmF5PEdhcm1lbnRNb2RlbD4gID0gW107XG4gICAgICBsZXQgU2VydmljZTpBcnJheTxHYXJtZW50TW9kZWw+ICA9IFtdO1xuXG4gICAgICBsaXN0LmZvckVhY2goIChpdGVtKT0+e1xuICAgICAgICAgIHN3aXRjaChpdGVtLnR5cGUpe1xuICAgICAgICAgICAgICBjYXNlIFwiUGh5c2ljYWxcIjpcbiAgICAgICAgICAgICAgICBQaHlzaWNhbC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIkRpZ2l0YWxcIjpcbiAgICAgICAgICAgICAgICBEaWdpdGFsLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiU2VydmljZVwiOlxuICAgICAgICAgICAgICAgIFNlcnZpY2UucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGxldCB0eXBlU29ydGVkOkFycmF5PEdhcm1lbnRNb2RlbD47XG5cbiAgICAgIHN3aXRjaCh0eXBlKXtcbiAgICAgICAgICBjYXNlIFwiUGh5c2ljYWxcIjpcbiAgICAgICAgICAgICAgdHlwZVNvcnRlZD0gWy4uLlBoeXNpY2FsLC4uLkRpZ2l0YWwsIC4uLlNlcnZpY2VdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJEaWdpdGFsXCI6XG4gICAgICAgICAgICAgIHR5cGVTb3J0ZWQ9IFsuLi5EaWdpdGFsLC4uLlBoeXNpY2FsLCAuLi5TZXJ2aWNlXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiU2VydmljZVwiOlxuICAgICAgICAgICAgICB0eXBlU29ydGVkPSBbLi4uU2VydmljZSwuLi5QaHlzaWNhbCwgLi4uRGlnaXRhbF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHlwZVNvcnRlZDtcbiAgICB9XG5cblxufSJdfQ==
