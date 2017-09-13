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
var Observable_1 = require("rxjs/Observable");
var core_1 = require("@angular/core");
require("rxjs/add/observable/fromEvent");
var broker_dispatcher_service_1 = require("../../../business-layer/pubsub-broker/services/broker.dispatcher.service");
var brokerlist_1 = require("../../../business-layer/brokerage/ngrx-stubs/brokerlist");
var SearchAheadComponent = (function () {
    function SearchAheadComponent(bDS) {
        this.bDS = bDS;
        this.searchTerm = [];
        var brokerResponse = this.bDS.dispatchBrokerSelector(brokerlist_1.BrokerList.BROKER_SEARCH_STORE);
        this.brokerRef = brokerResponse.brokerRequested;
    }
    SearchAheadComponent.prototype.ngOnInit = function () {
        this.portalState$ = this.brokerRef.storeObs.brokerPortalState;
    };
    SearchAheadComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var searchValue$ = Observable_1.Observable.fromEvent(this.input.nativeElement, 'keyup')
            .map(function (x) {
            return x['key'];
        })
            .debounceTime(100);
        var value = searchValue$.subscribe(function (x) {
            if (x.length > 1) {
                if (x === 'Backspace' && _this.searchTerm.length > 0) {
                    _this.searchTerm.pop();
                }
                if (x === 'Enter') {
                }
            }
            else {
                console.log(' doSearch  doSearch =', x);
                _this.searchTerm.push(x);
                _this.doSearch(_this.searchTerm.join('').replace(/[^A-Za-z0-9]/g, ''));
            }
            return x;
        });
    };
    SearchAheadComponent.prototype.doSearch = function (terrm) {
        console.log(' doSearch  doSearch =', terrm);
        var note = this.brokerRef.storeDsp.SEARCH_COLLECTION_BY_TERM;
        note.payLoad = terrm && terrm[0].toUpperCase() + terrm.slice(1);
        this.bDS.dispatchBrokerAction(note);
    };
    return SearchAheadComponent;
}());
__decorate([
    core_1.ViewChild('searchBox'),
    __metadata("design:type", core_1.ElementRef)
], SearchAheadComponent.prototype, "input", void 0);
SearchAheadComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'search-ahead',
        templateUrl: 'search.ahead.component.html',
        styleUrls: ['search.ahead.component.css']
    }),
    __metadata("design:paramtypes", [broker_dispatcher_service_1.BrokerDispatcherService])
], SearchAheadComponent);
exports.SearchAheadComponent = SearchAheadComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9zZWFyY2gtYWhlYWQvc2VhcmNoLmFoZWFkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBLDhDQUE2QztBQUU3QyxzQ0FBeUU7QUFFekUseUNBQXVDO0FBQ3ZDLHNIQUFtSDtBQUVuSCxzRkFBcUY7QUFXckYsSUFBYSxvQkFBb0I7SUFRN0IsOEJBQW9CLEdBQTJCO1FBQTNCLFFBQUcsR0FBSCxHQUFHLENBQXdCO1FBRi9DLGVBQVUsR0FBVSxFQUFFLENBQUM7UUFJbkIsSUFBSSxjQUFjLEdBQWtCLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsdUJBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3BHLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLGVBQWUsQ0FBQztJQUNwRCxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUE7SUFDakUsQ0FBQztJQUVELDhDQUFlLEdBQWY7UUFBQSxpQkEwQkM7UUF4QkcsSUFBSSxZQUFZLEdBQW1CLHVCQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQzthQUNyRSxHQUFHLENBQUMsVUFBQSxDQUFDO1lBQ0YsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNuQixDQUFDLENBQUM7YUFDRCxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUE7UUFHdEMsSUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7WUFDbEMsRUFBRSxDQUFBLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUNYLEVBQUUsQ0FBQSxDQUFDLENBQUMsS0FBRyxXQUFXLElBQUksS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQztvQkFDNUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDMUIsQ0FBQztnQkFDRCxFQUFFLENBQUEsQ0FBQyxDQUFDLEtBQUcsT0FBTyxDQUFDLENBQUEsQ0FBQztnQkFFaEIsQ0FBQztZQUdMLENBQUM7WUFBQSxJQUFJLENBQUEsQ0FBQztnQkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUN0QyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFDeEUsQ0FBQztZQUNELE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFHRCx1Q0FBUSxHQUFSLFVBQVMsS0FBWTtRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3hDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDO1FBQzdELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0FyREEsQUFxREMsSUFBQTtBQXBEMkI7SUFBdkIsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7OEJBQVEsaUJBQVU7bURBQUM7QUFEakMsb0JBQW9CO0lBTmhDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGNBQWM7UUFDeEIsV0FBVyxFQUFFLDZCQUE2QjtRQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztLQUM1QyxDQUFDO3FDQVMwQixtREFBdUI7R0FSdEMsb0JBQW9CLENBcURoQztBQXJEWSxvREFBb0IiLCJmaWxlIjoiYXBwL3ZpZXctbGF5ZXIvY29tbW9uLXZpZXdzL3NlYXJjaC1haGVhZC9zZWFyY2guYWhlYWQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHdpbGxzdHJlZXRlciBvbiA5LzEwLzE3LlxuICovXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL1N1YmplY3QnO1xuaW1wb3J0IFwicnhqcy9hZGQvb2JzZXJ2YWJsZS9mcm9tRXZlbnRcIjtcbmltcG9ydCB7IEJyb2tlckRpc3BhdGNoZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYnVzaW5lc3MtbGF5ZXIvcHVic3ViLWJyb2tlci9zZXJ2aWNlcy9icm9rZXIuZGlzcGF0Y2hlci5zZXJ2aWNlJztcbmltcG9ydCB7IEJyb2tlclJlc3BvbnNlIH0gZnJvbSBcIi4uLy4uLy4uL2J1c2luZXNzLWxheWVyL3B1YnN1Yi1icm9rZXIvbW9kZWxzL2Jyb2tlci5yZXNwb25zZS5tb2RlbFwiO1xuaW1wb3J0IHsgQnJva2VyTGlzdCB9IGZyb20gJy4uLy4uLy4uL2J1c2luZXNzLWxheWVyL2Jyb2tlcmFnZS9uZ3J4LXN0dWJzL2Jyb2tlcmxpc3QnO1xuaW1wb3J0IHtQb3J0YWxNb2RlbH0gZnJvbSBcIi4uLy4uLy4uL2J1c2luZXNzLWxheWVyL21vZGVscy9wb3J0YWwubW9kZWxcIjtcblxuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdzZWFyY2gtYWhlYWQnLFxuICAgIHRlbXBsYXRlVXJsOiAnc2VhcmNoLmFoZWFkLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnc2VhcmNoLmFoZWFkLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hBaGVhZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgQFZpZXdDaGlsZCgnc2VhcmNoQm94JykgaW5wdXQ6IEVsZW1lbnRSZWY7XG4gICAgcG9ydGFsU3RhdGUkOk9ic2VydmFibGU8UG9ydGFsTW9kZWw+O1xuXG4gICAgYnJva2VyUmVmOmFueTtcbiAgICBsaW5lVmFsdWU6c3RyaW5nO1xuICAgIHNlYXJjaFRlcm06c3RyaW5nW109W107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJEUzpCcm9rZXJEaXNwYXRjaGVyU2VydmljZSkge1xuXG4gICAgICAgIHZhciBicm9rZXJSZXNwb25zZTpCcm9rZXJSZXNwb25zZSA9IHRoaXMuYkRTLmRpc3BhdGNoQnJva2VyU2VsZWN0b3IoQnJva2VyTGlzdC5CUk9LRVJfU0VBUkNIX1NUT1JFKTtcbiAgICAgICAgdGhpcy5icm9rZXJSZWYgPSBicm9rZXJSZXNwb25zZS5icm9rZXJSZXF1ZXN0ZWQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucG9ydGFsU3RhdGUkID0gdGhpcy5icm9rZXJSZWYuc3RvcmVPYnMuYnJva2VyUG9ydGFsU3RhdGVcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZHtcblxuICAgICAgICBsZXQgc2VhcmNoVmFsdWUkOk9ic2VydmFibGU8YW55PiA9IE9ic2VydmFibGUuZnJvbUV2ZW50KHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCwgJ2tleXVwJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKHggPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geFsna2V5J11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kZWJvdW5jZVRpbWUoMTAwKVxuXG5cbiAgICAgICAgY29uc3QgdmFsdWUgPSBzZWFyY2hWYWx1ZSQuc3Vic2NyaWJlKHggPT4ge1xuICAgICAgICAgICAgaWYoeC5sZW5ndGg+MSl7XG4gICAgICAgICAgICAgICAgaWYoeD09PSdCYWNrc3BhY2UnICYmIHRoaXMuc2VhcmNoVGVybS5sZW5ndGg+MCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoVGVybS5wb3AoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoeD09PSdFbnRlcicpe1xuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuc2VhcmNoVGVybT1bXTtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyBkb1NlYXJjaCAgZG9TZWFyY2ggPScseClcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFRlcm0ucHVzaCh4KTtcbiAgICAgICAgICAgICAgICB0aGlzLmRvU2VhcmNoKHRoaXMuc2VhcmNoVGVybS5qb2luKCcnKS5yZXBsYWNlKC9bXkEtWmEtejAtOV0vZywgJycpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZG9TZWFyY2godGVycm06c3RyaW5nKXtcbiAgICAgICAgY29uc29sZS5sb2coJyBkb1NlYXJjaCAgZG9TZWFyY2ggPScsdGVycm0pXG4gICAgICAgICAgbGV0IG5vdGUgPSB0aGlzLmJyb2tlclJlZi5zdG9yZURzcC5TRUFSQ0hfQ09MTEVDVElPTl9CWV9URVJNO1xuICAgICAgICAgIG5vdGUucGF5TG9hZCA9IHRlcnJtICYmIHRlcnJtWzBdLnRvVXBwZXJDYXNlKCkgKyB0ZXJybS5zbGljZSgxKTtcbiAgICAgICAgICB0aGlzLmJEUy5kaXNwYXRjaEJyb2tlckFjdGlvbihub3RlKTtcbiAgICB9XG59XG5cbiJdfQ==
