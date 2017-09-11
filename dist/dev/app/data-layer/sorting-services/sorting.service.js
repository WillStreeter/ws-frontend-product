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
        var _this = this;
        var collectionSubset;
        this.currentGarmentCollection = this.store.select(fromRoot.getGarmentsState).subscribe(function (val) {
            _this.collectionId = val.currentCollectionId;
        });
        this.currentGarmentCollection.unsubscribe();
        this.sortState$ = this.store.select(fromRoot.getPortalState).subscribe(function (val) {
            _this.sortStateVal = val;
        });
        this.sortState$.unsubscribe();
        var collectionList = this.sortCollection(products);
        if (collectionList.length) {
            var pages = (collectionList.length / this.sortStateVal.viewablePerPage);
            var start = (this.sortStateVal.currentPage - 1) * this.sortStateVal.viewablePerPage;
            var end = (this.sortStateVal.currentPage === pages) ?
                collectionList.length - (pages * start) :
                this.sortStateVal.viewablePerPage;
            collectionSubset = collectionList.slice(start, end);
            console.log(" collectionSubsetsliced =", collectionSubset);
        }
        return Observable_1.Observable.of({ collectionId: this.collectionId,
            sortType: this.sortStateVal.sortType,
            subSetCollection: collectionSubset,
            products: collectionList });
    };
    SortingServices.prototype.sortCollection = function (collectionList) {
        if (sort_config_types_1.SORT_BASES[this.sortStateVal.sortBase].dataType === "string") {
            collectionList = this.doAlphaSort(collectionList, sort_config_types_1.SORT_BASES[this.sortStateVal.sortBase].attr);
            if (this.sortStateVal.sortDirection == "Descending") {
                collectionList = collectionList.reverse();
            }
        }
        else if (sort_config_types_1.SORT_BASES[this.sortStateVal.sortBase].dataType === "number") {
            collectionList = this.doNumericalSort(collectionList, sort_config_types_1.SORT_BASES[this.sortStateVal.sortBase].attr);
            if (this.sortStateVal.sortDirection == "Descending") {
                collectionList = collectionList.reverse();
            }
        }
        else {
            collectionList = this.doTypeSort(collectionList, sort_config_types_1.SORT_BASES[this.sortStateVal.sortBase].attr);
        }
        return collectionList;
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
        return list.slice().sort(function (firstTerm, secondTerm) { return (firstTerm[base] - (secondTerm)[base]); });
    };
    SortingServices.prototype.doTypeSort = function (list, type) {
        var Physical = [];
        var Digital = [];
        var Service = [];
        list.forEach(function (item) {
            console.log('item.type =', item.type);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhLWxheWVyL3NvcnRpbmctc2VydmljZXMvc29ydGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR0Esc0NBQXlDO0FBQ3pDLHFDQUFvQztBQUVwQyw4Q0FBNkM7QUFDN0Msa0NBQWdDO0FBQ2hDLHNEQUF3RDtBQUV4RCxpR0FBMEY7QUFJMUYsSUFBYSxlQUFlO0lBVXhCLHlCQUFxQixLQUE0QjtRQUE1QixVQUFLLEdBQUwsS0FBSyxDQUF1QjtJQUFFLENBQUM7SUFJcEQsK0NBQXFCLEdBQXJCLFVBQXNCLFFBQXVCO1FBQTdDLGlCQTJCRTtRQTFCQyxJQUFJLGdCQUFnQixDQUFDO1FBQ3BCLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFHO1lBQ3ZGLEtBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLG1CQUFtQixDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRTVDLElBQUksQ0FBQyxVQUFVLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUc7WUFDcEUsS0FBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlCLElBQU0sY0FBYyxHQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEQsRUFBRSxDQUFBLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUM7WUFDdkIsSUFBTSxLQUFLLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDeEUsSUFBTSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQztZQUN0RixJQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxLQUFLLEtBQUssQ0FBQztnQkFDbkMsY0FBYyxDQUFDLE1BQU0sR0FBRSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDO1lBRXBELGdCQUFnQixHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBRSxDQUFDO1lBRXJELE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTtRQUM3RCxDQUFDO1FBQ0QsTUFBTSxDQUFDLHVCQUFVLENBQUMsRUFBRSxDQUFtQixFQUFFLFlBQVksRUFBQyxJQUFJLENBQUMsWUFBWTtZQUM3QixRQUFRLEVBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRO1lBQ25DLGdCQUFnQixFQUFDLGdCQUFnQjtZQUNqQyxRQUFRLEVBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBR0Ysd0NBQWMsR0FBZCxVQUFlLGNBQTZCO1FBRXpDLEVBQUUsQ0FBQSxDQUFDLDhCQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDLENBQUEsQ0FBQztZQUM5RCxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUcsOEJBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hHLEVBQUUsQ0FBQSxDQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxJQUFJLFlBQVksQ0FBQyxDQUFBLENBQUM7Z0JBQ25ELGNBQWMsR0FBRyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDN0MsQ0FBQztRQUNKLENBQUM7UUFBQSxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsOEJBQVUsQ0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQSxDQUFDO1lBQ3RFLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBSSw4QkFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckcsRUFBRSxDQUFBLENBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLElBQUksWUFBWSxDQUFDLENBQUEsQ0FBQztnQkFDbkQsY0FBYyxHQUFHLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM3QyxDQUFDO1FBQ0osQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0gsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFJLDhCQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVuRyxDQUFDO1FBRUQsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUV6QixDQUFDO0lBRU8scUNBQVcsR0FBbkIsVUFBb0IsSUFBUSxFQUFFLElBQVc7UUFDekMsSUFBSSxLQUFLLEdBQVcsSUFBSSxTQUFFLElBQUksQ0FBQyxVQUFDLFNBQVMsRUFBRSxVQUFVO1lBQzdDLElBQU0sQ0FBQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN4QyxJQUFNLENBQUMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDekMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1IsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNiLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDUixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZCxDQUFDO1lBRUQsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFDO1FBQ1YsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNkLENBQUM7SUFFTyx5Q0FBZSxHQUF2QixVQUF3QixJQUFRLEVBQUUsSUFBVztRQUN6QyxNQUFNLENBQU0sSUFBSSxTQUFFLElBQUksQ0FBQyxVQUFDLFNBQVMsRUFBRSxVQUFVLElBQUksT0FBQSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQXRDLENBQXNDLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBRU8sb0NBQVUsR0FBbEIsVUFBbUIsSUFBbUIsRUFBRyxJQUFXO1FBQ2xELElBQUksUUFBUSxHQUFrQixFQUFFLENBQUM7UUFDakMsSUFBSSxPQUFPLEdBQW1CLEVBQUUsQ0FBQztRQUNqQyxJQUFJLE9BQU8sR0FBbUIsRUFBRSxDQUFDO1FBRWpDLElBQUksQ0FBQyxPQUFPLENBQUUsVUFBQyxJQUFJO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ3JDLE1BQU0sQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUNkLEtBQUssVUFBVTtvQkFDYixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN0QixLQUFLLENBQUM7Z0JBQ04sS0FBSyxTQUFTO29CQUNaLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3JCLEtBQUssQ0FBQztnQkFDTixLQUFLLFNBQVM7b0JBQ1osT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDckIsS0FBSyxDQUFDO1lBQ1YsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxVQUF5QixDQUFFO1FBRS9CLE1BQU0sQ0FBQSxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDVCxLQUFLLFVBQVU7Z0JBQ1gsVUFBVSxHQUFNLFFBQVEsUUFBSSxPQUFPLEVBQUssT0FBTyxDQUFDLENBQUM7Z0JBQ3JELEtBQUssQ0FBQztZQUNOLEtBQUssU0FBUztnQkFDVixVQUFVLEdBQU0sT0FBTyxRQUFJLFFBQVEsRUFBSyxPQUFPLENBQUMsQ0FBQztnQkFDckQsS0FBSyxDQUFDO1lBQ04sS0FBSyxTQUFTO2dCQUNWLFVBQVUsR0FBTSxPQUFPLFFBQUksUUFBUSxFQUFLLE9BQU8sQ0FBQyxDQUFDO2dCQUNyRCxLQUFLLENBQUM7UUFDVixDQUFDO1FBQ0QsTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBR0wsc0JBQUM7QUFBRCxDQTNIQSxBQTJIQyxJQUFBO0FBM0hZLGVBQWU7SUFEM0IsaUJBQVUsRUFBRTtxQ0FXbUIsYUFBSztHQVZ4QixlQUFlLENBMkgzQjtBQTNIWSwwQ0FBZSIsImZpbGUiOiJhcHAvZGF0YS1sYXllci9zb3J0aW5nLXNlcnZpY2VzL3NvcnRpbmcuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB3aWxsc3RyZWV0ZXIgb24gOS84LzE3LlxuICovXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCJAbmdyeC9zdG9yZVwiO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvb2YnO1xuaW1wb3J0ICogYXMgZnJvbVJvb3QgZnJvbSAnLi4vbmdyeC1kYXRhL3JlZHVjZXJzL2luZGV4JztcbmltcG9ydCB7IEdhcm1lbnRNb2RlbCwgR2FybWVudENvbGxlY3Rpb25Nb2RlbCwgR2FybWVudFNvcnRNb2RlbCB9IGZyb20gXCIuLi8uLi9idXNpbmVzcy1sYXllci9tb2RlbHMvaW5kZXhcIjtcbmltcG9ydCB7IFNPUlRfQkFTRVMgIH0gZnJvbSBcIi4uLy4uL2J1c2luZXNzLWxheWVyL3NoYXJlZC10eXBlcy9zb3J0ZXJzL3NvcnQuY29uZmlnLnR5cGVzXCI7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNvcnRpbmdTZXJ2aWNlcyB7XG5cbiAgICBzb3J0U3RhdGUkOlN1YnNjcmlwdGlvbjtcbiAgICBjdXJyZW50R2FybWVudENvbGxlY3Rpb246U3Vic2NyaXB0aW9uO1xuICAgIHBvcnRhbFN0YXRlOlN1YnNjcmlwdGlvbjtcbiAgICBzb3J0U3RhdGVWYWw6YW55O1xuXG4gICAgY3VycmVudFBhZ2U6YW55O1xuICAgIHZpZXdhYmxlUGVyUGFnZTphbnk7XG4gICAgY29sbGVjdGlvbklkOnN0cmluZztcbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBzdG9yZTogU3RvcmU8ZnJvbVJvb3QuU3RhdGU+KXt9XG5cblxuXG4gICAgc29ydEdhcm1lbnRDb2xsZWN0aW9uKHByb2R1Y3RzOkdhcm1lbnRNb2RlbFtdKXtcbiAgICAgICBsZXQgY29sbGVjdGlvblN1YnNldDtcbiAgICAgICAgdGhpcy5jdXJyZW50R2FybWVudENvbGxlY3Rpb24gPSB0aGlzLnN0b3JlLnNlbGVjdChmcm9tUm9vdC5nZXRHYXJtZW50c1N0YXRlKS5zdWJzY3JpYmUoKHZhbCk9PntcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdGlvbklkID0gdmFsLmN1cnJlbnRDb2xsZWN0aW9uSWQ7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmN1cnJlbnRHYXJtZW50Q29sbGVjdGlvbi51bnN1YnNjcmliZSgpO1xuXG4gICAgICAgIHRoaXMuc29ydFN0YXRlJD0gdGhpcy5zdG9yZS5zZWxlY3QoZnJvbVJvb3QuZ2V0UG9ydGFsU3RhdGUpLnN1YnNjcmliZSgodmFsKT0+e1xuICAgICAgICAgICAgICB0aGlzLnNvcnRTdGF0ZVZhbCA9IHZhbDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc29ydFN0YXRlJC51bnN1YnNjcmliZSgpO1xuICAgICAgICBjb25zdCBjb2xsZWN0aW9uTGlzdD0gdGhpcy5zb3J0Q29sbGVjdGlvbihwcm9kdWN0cyk7XG4gICAgICAgIGlmKGNvbGxlY3Rpb25MaXN0Lmxlbmd0aCl7XG4gICAgICAgICAgIGNvbnN0IHBhZ2VzID0gKGNvbGxlY3Rpb25MaXN0Lmxlbmd0aC90aGlzLnNvcnRTdGF0ZVZhbC52aWV3YWJsZVBlclBhZ2UpO1xuICAgICAgICAgICBjb25zdCBzdGFydCA9ICh0aGlzLnNvcnRTdGF0ZVZhbC5jdXJyZW50UGFnZSAtIDEpICogdGhpcy5zb3J0U3RhdGVWYWwudmlld2FibGVQZXJQYWdlO1xuICAgICAgICAgICBjb25zdCBlbmQgPSAodGhpcy5zb3J0U3RhdGVWYWwuY3VycmVudFBhZ2UgPT09IHBhZ2VzKT9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbkxpc3QubGVuZ3RoIC0ocGFnZXMgKiBzdGFydCApOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRTdGF0ZVZhbC52aWV3YWJsZVBlclBhZ2U7XG5cbiAgICAgICAgICAgY29sbGVjdGlvblN1YnNldCA9IGNvbGxlY3Rpb25MaXN0LnNsaWNlKHN0YXJ0LCBlbmQgKTtcblxuICAgICAgICAgICBjb25zb2xlLmxvZyhcIiBjb2xsZWN0aW9uU3Vic2V0c2xpY2VkID1cIiwgY29sbGVjdGlvblN1YnNldClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZig8R2FybWVudFNvcnRNb2RlbD57IGNvbGxlY3Rpb25JZDp0aGlzLmNvbGxlY3Rpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydFR5cGU6dGhpcy5zb3J0U3RhdGVWYWwuc29ydFR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YlNldENvbGxlY3Rpb246Y29sbGVjdGlvblN1YnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6Y29sbGVjdGlvbkxpc3QgfSk7XG4gICAgIH1cblxuXG4gICAgc29ydENvbGxlY3Rpb24oY29sbGVjdGlvbkxpc3Q6R2FybWVudE1vZGVsW10pe1xuXG4gICAgICAgaWYoU09SVF9CQVNFU1t0aGlzLnNvcnRTdGF0ZVZhbC5zb3J0QmFzZV0uZGF0YVR5cGUgPT09IFwic3RyaW5nXCIpe1xuICAgICAgICAgIGNvbGxlY3Rpb25MaXN0ID0gdGhpcy5kb0FscGhhU29ydChjb2xsZWN0aW9uTGlzdCwgIFNPUlRfQkFTRVNbdGhpcy5zb3J0U3RhdGVWYWwuc29ydEJhc2VdLmF0dHIpO1xuICAgICAgICAgIGlmKCAgdGhpcy5zb3J0U3RhdGVWYWwuc29ydERpcmVjdGlvbiA9PSBcIkRlc2NlbmRpbmdcIil7XG4gICAgICAgICAgICAgY29sbGVjdGlvbkxpc3QgPSBjb2xsZWN0aW9uTGlzdC5yZXZlcnNlKCk7XG4gICAgICAgICAgfVxuICAgICAgIH1lbHNlIGlmKFNPUlRfQkFTRVNbICB0aGlzLnNvcnRTdGF0ZVZhbC5zb3J0QmFzZV0uZGF0YVR5cGUgPT09IFwibnVtYmVyXCIpe1xuICAgICAgICAgIGNvbGxlY3Rpb25MaXN0ID0gdGhpcy5kb051bWVyaWNhbFNvcnQoY29sbGVjdGlvbkxpc3QsICAgU09SVF9CQVNFU1t0aGlzLnNvcnRTdGF0ZVZhbC5zb3J0QmFzZV0uYXR0cik7XG4gICAgICAgICAgaWYoICB0aGlzLnNvcnRTdGF0ZVZhbC5zb3J0RGlyZWN0aW9uID09IFwiRGVzY2VuZGluZ1wiKXtcbiAgICAgICAgICAgICBjb2xsZWN0aW9uTGlzdCA9IGNvbGxlY3Rpb25MaXN0LnJldmVyc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgfWVsc2V7XG4gICAgICAgICAgY29sbGVjdGlvbkxpc3QgPSB0aGlzLmRvVHlwZVNvcnQoY29sbGVjdGlvbkxpc3QsICAgU09SVF9CQVNFU1t0aGlzLnNvcnRTdGF0ZVZhbC5zb3J0QmFzZV0uYXR0cik7XG5cbiAgICAgICB9XG5cbiAgICAgICByZXR1cm4gY29sbGVjdGlvbkxpc3Q7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGRvQWxwaGFTb3J0KGxpc3Q6YW55LCBiYXNlOnN0cmluZyl7XG4gICAgbGV0IHZhbHVlOmFueSA9IFsuLi5saXN0XS5zb3J0KChmaXJzdFRlcm0sIHNlY29uZFRlcm0pOm51bWJlciA9PntcbiAgICAgICAgICAgIGNvbnN0IGEgPSBmaXJzdFRlcm1bYmFzZV0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGNvbnN0IGIgPSBzZWNvbmRUZXJtW2Jhc2VdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAoYSA+IGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGEgPCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH0pO1xuICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkb051bWVyaWNhbFNvcnQobGlzdDphbnksIGJhc2U6c3RyaW5nKXtcbiAgICAgICAgcmV0dXJuICBbLi4ubGlzdF0uc29ydCgoZmlyc3RUZXJtLCBzZWNvbmRUZXJtKSA9PihmaXJzdFRlcm1bYmFzZV0gLSAoc2Vjb25kVGVybSlbYmFzZV0pKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRvVHlwZVNvcnQobGlzdDpHYXJtZW50TW9kZWxbXSAsIHR5cGU6c3RyaW5nKXtcbiAgICAgIGxldCBQaHlzaWNhbDpHYXJtZW50TW9kZWxbXSA9IFtdO1xuICAgICAgbGV0IERpZ2l0YWw6R2FybWVudE1vZGVsW10gID0gW107XG4gICAgICBsZXQgU2VydmljZTpHYXJtZW50TW9kZWxbXSAgPSBbXTtcblxuICAgICAgbGlzdC5mb3JFYWNoKCAoaXRlbSk9PntcbiAgICAgICAgICBjb25zb2xlLmxvZygnaXRlbS50eXBlID0nLCBpdGVtLnR5cGUpXG4gICAgICAgICAgc3dpdGNoKGl0ZW0udHlwZSl7XG4gICAgICAgICAgICAgIGNhc2UgXCJQaHlzaWNhbFwiOlxuICAgICAgICAgICAgICAgIFBoeXNpY2FsLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIFwiRGlnaXRhbFwiOlxuICAgICAgICAgICAgICAgIERpZ2l0YWwucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJTZXJ2aWNlXCI6XG4gICAgICAgICAgICAgICAgU2VydmljZS5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbGV0IHR5cGVTb3J0ZWQ6R2FybWVudE1vZGVsW10gO1xuXG4gICAgICBzd2l0Y2godHlwZSl7XG4gICAgICAgICAgY2FzZSBcIlBoeXNpY2FsXCI6XG4gICAgICAgICAgICAgIHR5cGVTb3J0ZWQ9IFsuLi5QaHlzaWNhbCwuLi5EaWdpdGFsLCAuLi5TZXJ2aWNlXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiRGlnaXRhbFwiOlxuICAgICAgICAgICAgICB0eXBlU29ydGVkPSBbLi4uRGlnaXRhbCwuLi5QaHlzaWNhbCwgLi4uU2VydmljZV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcIlNlcnZpY2VcIjpcbiAgICAgICAgICAgICAgdHlwZVNvcnRlZD0gWy4uLlNlcnZpY2UsLi4uUGh5c2ljYWwsIC4uLkRpZ2l0YWxdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHR5cGVTb3J0ZWQ7XG4gICAgfVxuXG5cbn0iXX0=
