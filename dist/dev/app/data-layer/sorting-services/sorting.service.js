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
            var pages = Math.ceil(collectionList.length / this.sortStateVal.viewablePerPage);
            var start = (this.sortStateVal.currentPage - 1) * this.sortStateVal.viewablePerPage;
            var end = (this.sortStateVal.currentPage === pages) ?
                collectionList.length :
                this.sortStateVal.viewablePerPage;
            collectionSubset = collectionList.slice(start, end);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhLWxheWVyL3NvcnRpbmctc2VydmljZXMvc29ydGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR0Esc0NBQXlDO0FBQ3pDLHFDQUFvQztBQUVwQyw4Q0FBNkM7QUFDN0Msa0NBQWdDO0FBQ2hDLHNEQUF3RDtBQUV4RCxpR0FBMEY7QUFJMUYsSUFBYSxlQUFlO0lBVXhCLHlCQUFxQixLQUE0QjtRQUE1QixVQUFLLEdBQUwsS0FBSyxDQUF1QjtJQUFFLENBQUM7SUFJcEQsK0NBQXFCLEdBQXJCLFVBQXNCLFFBQXVCO1FBQTdDLGlCQXdCRTtRQXZCQyxJQUFJLGdCQUFnQixDQUFDO1FBQ3BCLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFHO1lBQ3ZGLEtBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLG1CQUFtQixDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRTVDLElBQUksQ0FBQyxVQUFVLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUc7WUFDcEUsS0FBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlCLElBQU0sY0FBYyxHQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEQsRUFBRSxDQUFBLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUM7WUFDdkIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMs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QUFLLENBQUM7WUFDTixLQUFLLFNBQVM7Z0JBQ1YsVUFBVSxHQUFNLE9BQU8sUUFBSSxRQUFRLEVBQUssT0FBTyxDQUFDLENBQUM7Z0JBQ3JELEtBQUssQ0FBQztZQUNOLEtBQUssU0FBUztnQkFDVixVQUFVLEdBQU0sT0FBTyxRQUFJLFFBQVEsRUFBSyxPQUFPLENBQUMsQ0FBQztnQkFDckQsS0FBSyxDQUFDO1FBQ1YsQ0FBQztRQUNELE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUdMLHNCQUFDO0FBQUQsQ0F2SEEsQUF1SEMsSUFBQTtBQXZIWSxlQUFlO0lBRDNCLGlCQUFVLEVBQUU7cUNBV21CLGFBQUs7R0FWeEIsZUFBZSxDQXVIM0I7QUF2SFksMENBQWUiLCJmaWxlIjoiYXBwL2RhdGEtbGF5ZXIvc29ydGluZy1zZXJ2aWNlcy9zb3J0aW5nLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgd2lsbHN0cmVldGVyIG9uIDkvOC8xNy5cbiAqL1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiQG5ncngvc3RvcmVcIjtcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcbmltcG9ydCAqIGFzIGZyb21Sb290IGZyb20gJy4uL25ncngtZGF0YS9yZWR1Y2Vycy9pbmRleCc7XG5pbXBvcnQgeyBHYXJtZW50TW9kZWwsIEdhcm1lbnRDb2xsZWN0aW9uTW9kZWwsIEdhcm1lbnRTb3J0TW9kZWwgfSBmcm9tIFwiLi4vLi4vYnVzaW5lc3MtbGF5ZXIvbW9kZWxzL2luZGV4XCI7XG5pbXBvcnQgeyBTT1JUX0JBU0VTICB9IGZyb20gXCIuLi8uLi9idXNpbmVzcy1sYXllci9zaGFyZWQtdHlwZXMvc29ydGVycy9zb3J0LmNvbmZpZy50eXBlc1wiO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb3J0aW5nU2VydmljZXMge1xuXG4gICAgc29ydFN0YXRlJDpTdWJzY3JpcHRpb247XG4gICAgY3VycmVudEdhcm1lbnRDb2xsZWN0aW9uOlN1YnNjcmlwdGlvbjtcbiAgICBwb3J0YWxTdGF0ZTpTdWJzY3JpcHRpb247XG4gICAgc29ydFN0YXRlVmFsOmFueTtcblxuICAgIGN1cnJlbnRQYWdlOmFueTtcbiAgICB2aWV3YWJsZVBlclBhZ2U6YW55O1xuICAgIGNvbGxlY3Rpb25JZDpzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgc3RvcmU6IFN0b3JlPGZyb21Sb290LlN0YXRlPil7fVxuXG5cblxuICAgIHNvcnRHYXJtZW50Q29sbGVjdGlvbihwcm9kdWN0czpHYXJtZW50TW9kZWxbXSl7XG4gICAgICAgbGV0IGNvbGxlY3Rpb25TdWJzZXQ7XG4gICAgICAgIHRoaXMuY3VycmVudEdhcm1lbnRDb2xsZWN0aW9uID0gdGhpcy5zdG9yZS5zZWxlY3QoZnJvbVJvb3QuZ2V0R2FybWVudHNTdGF0ZSkuc3Vic2NyaWJlKCh2YWwpPT57XG4gICAgICAgICAgICB0aGlzLmNvbGxlY3Rpb25JZCA9IHZhbC5jdXJyZW50Q29sbGVjdGlvbklkO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jdXJyZW50R2FybWVudENvbGxlY3Rpb24udW5zdWJzY3JpYmUoKTtcblxuICAgICAgICB0aGlzLnNvcnRTdGF0ZSQ9IHRoaXMuc3RvcmUuc2VsZWN0KGZyb21Sb290LmdldFBvcnRhbFN0YXRlKS5zdWJzY3JpYmUoKHZhbCk9PntcbiAgICAgICAgICAgICAgdGhpcy5zb3J0U3RhdGVWYWwgPSB2YWw7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNvcnRTdGF0ZSQudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbkxpc3Q9IHRoaXMuc29ydENvbGxlY3Rpb24ocHJvZHVjdHMpO1xuICAgICAgICBpZihjb2xsZWN0aW9uTGlzdC5sZW5ndGgpe1xuICAgICAgICAgICBjb25zdCBwYWdlcyA9IE1hdGguY2VpbChjb2xsZWN0aW9uTGlzdC5sZW5ndGgvdGhpcy5zb3J0U3RhdGVWYWwudmlld2FibGVQZXJQYWdlKTtcbiAgICAgICAgICAgY29uc3Qgc3RhcnQgPSAodGhpcy5zb3J0U3RhdGVWYWwuY3VycmVudFBhZ2UgLSAxKSAqIHRoaXMuc29ydFN0YXRlVmFsLnZpZXdhYmxlUGVyUGFnZTtcbiAgICAgICAgICAgY29uc3QgZW5kID0gKHRoaXMuc29ydFN0YXRlVmFsLmN1cnJlbnRQYWdlID09PSBwYWdlcykgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0aW9uTGlzdC5sZW5ndGg6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydFN0YXRlVmFsLnZpZXdhYmxlUGVyUGFnZTtcbiAgICAgICAgICAgY29sbGVjdGlvblN1YnNldCA9IGNvbGxlY3Rpb25MaXN0LnNsaWNlKHN0YXJ0LCBlbmQgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZig8R2FybWVudFNvcnRNb2RlbD57IGNvbGxlY3Rpb25JZDp0aGlzLmNvbGxlY3Rpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydFR5cGU6dGhpcy5zb3J0U3RhdGVWYWwuc29ydFR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YlNldENvbGxlY3Rpb246Y29sbGVjdGlvblN1YnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6Y29sbGVjdGlvbkxpc3QgfSk7XG4gICAgIH1cblxuXG4gICAgc29ydENvbGxlY3Rpb24oY29sbGVjdGlvbkxpc3Q6R2FybWVudE1vZGVsW10pe1xuXG4gICAgICAgaWYoU09SVF9CQVNFU1t0aGlzLnNvcnRTdGF0ZVZhbC5zb3J0QmFzZV0uZGF0YVR5cGUgPT09IFwic3RyaW5nXCIpe1xuICAgICAgICAgIGNvbGxlY3Rpb25MaXN0ID0gdGhpcy5kb0FscGhhU29ydChjb2xsZWN0aW9uTGlzdCwgIFNPUlRfQkFTRVNbdGhpcy5zb3J0U3RhdGVWYWwuc29ydEJhc2VdLmF0dHIpO1xuICAgICAgICAgIGlmKCAgdGhpcy5zb3J0U3RhdGVWYWwuc29ydERpcmVjdGlvbiA9PSBcIkRlc2NlbmRpbmdcIil7XG4gICAgICAgICAgICAgY29sbGVjdGlvbkxpc3QgPSBjb2xsZWN0aW9uTGlzdC5yZXZlcnNlKCk7XG4gICAgICAgICAgfVxuICAgICAgIH1lbHNlIGlmKFNPUlRfQkFTRVNbICB0aGlzLnNvcnRTdGF0ZVZhbC5zb3J0QmFzZV0uZGF0YVR5cGUgPT09IFwibnVtYmVyXCIpe1xuICAgICAgICAgIGNvbGxlY3Rpb25MaXN0ID0gdGhpcy5kb051bWVyaWNhbFNvcnQoY29sbGVjdGlvbkxpc3QsICAgU09SVF9CQVNFU1t0aGlzLnNvcnRTdGF0ZVZhbC5zb3J0QmFzZV0uYXR0cik7XG4gICAgICAgICAgaWYoICB0aGlzLnNvcnRTdGF0ZVZhbC5zb3J0RGlyZWN0aW9uID09IFwiRGVzY2VuZGluZ1wiKXtcbiAgICAgICAgICAgICBjb2xsZWN0aW9uTGlzdCA9IGNvbGxlY3Rpb25MaXN0LnJldmVyc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgfWVsc2V7XG4gICAgICAgICAgY29sbGVjdGlvbkxpc3QgPSB0aGlzLmRvVHlwZVNvcnQoY29sbGVjdGlvbkxpc3QsICAgU09SVF9CQVNFU1t0aGlzLnNvcnRTdGF0ZVZhbC5zb3J0QmFzZV0uYXR0cik7XG5cbiAgICAgICB9XG5cbiAgICAgICByZXR1cm4gY29sbGVjdGlvbkxpc3Q7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGRvQWxwaGFTb3J0KGxpc3Q6YW55LCBiYXNlOnN0cmluZyl7XG4gICAgbGV0IHZhbHVlOmFueSA9IFsuLi5saXN0XS5zb3J0KChmaXJzdFRlcm0sIHNlY29uZFRlcm0pOm51bWJlciA9PntcbiAgICAgICAgICAgIGNvbnN0IGEgPSBmaXJzdFRlcm1bYmFzZV0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGNvbnN0IGIgPSBzZWNvbmRUZXJtW2Jhc2VdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAoYSA+IGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGEgPCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH0pO1xuICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkb051bWVyaWNhbFNvcnQobGlzdDphbnksIGJhc2U6c3RyaW5nKXtcbiAgICAgICAgcmV0dXJuICBbLi4ubGlzdF0uc29ydCgoZmlyc3RUZXJtLCBzZWNvbmRUZXJtKSA9PihmaXJzdFRlcm1bYmFzZV0gLSAoc2Vjb25kVGVybSlbYmFzZV0pKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRvVHlwZVNvcnQobGlzdDpHYXJtZW50TW9kZWxbXSAsIHR5cGU6c3RyaW5nKXtcbiAgICAgIGxldCBQaHlzaWNhbDpHYXJtZW50TW9kZWxbXSA9IFtdO1xuICAgICAgbGV0IERpZ2l0YWw6R2FybWVudE1vZGVsW10gID0gW107XG4gICAgICBsZXQgU2VydmljZTpHYXJtZW50TW9kZWxbXSAgPSBbXTtcblxuICAgICAgbGlzdC5mb3JFYWNoKCAoaXRlbSk9PntcbiAgICAgICAgICBzd2l0Y2goaXRlbS50eXBlKXtcbiAgICAgICAgICAgICAgY2FzZSBcIlBoeXNpY2FsXCI6XG4gICAgICAgICAgICAgICAgUGh5c2ljYWwucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgXCJEaWdpdGFsXCI6XG4gICAgICAgICAgICAgICAgRGlnaXRhbC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSBcIlNlcnZpY2VcIjpcbiAgICAgICAgICAgICAgICBTZXJ2aWNlLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBsZXQgdHlwZVNvcnRlZDpHYXJtZW50TW9kZWxbXSA7XG5cbiAgICAgIHN3aXRjaCh0eXBlKXtcbiAgICAgICAgICBjYXNlIFwiUGh5c2ljYWxcIjpcbiAgICAgICAgICAgICAgdHlwZVNvcnRlZD0gWy4uLlBoeXNpY2FsLC4uLkRpZ2l0YWwsIC4uLlNlcnZpY2VdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJEaWdpdGFsXCI6XG4gICAgICAgICAgICAgIHR5cGVTb3J0ZWQ9IFsuLi5EaWdpdGFsLC4uLlBoeXNpY2FsLCAuLi5TZXJ2aWNlXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwiU2VydmljZVwiOlxuICAgICAgICAgICAgICB0eXBlU29ydGVkPSBbLi4uU2VydmljZSwuLi5QaHlzaWNhbCwgLi4uRGlnaXRhbF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHlwZVNvcnRlZDtcbiAgICB9XG5cblxufSJdfQ==
