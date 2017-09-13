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
var broker_dispatcher_service_1 = require("../../../business-layer/pubsub-broker/services/broker.dispatcher.service");
var brokerlist_1 = require("../../../business-layer/brokerage/ngrx-stubs/brokerlist");
var PaginatorToolbarComponent = (function () {
    function PaginatorToolbarComponent(bDS) {
        this.bDS = bDS;
        this.onLastPage = false;
        this.disabled5 = false;
        this.disabled10 = false;
        this.disabled15 = false;
        var brokerResponse = this.bDS.dispatchBrokerSelector(brokerlist_1.BrokerList.BROKER_PAGINATOR_STORE);
        this.brokerRef = brokerResponse.brokerRequested;
    }
    PaginatorToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.portalState$ = this.brokerRef.storeObs.brokerPortalState.subscribe(function (prtlState) {
            _this.viewablePerPage = prtlState.viewablePerPage;
            _this.currentPage = prtlState.currentPage;
        });
        this.currentGarmentCollection$ = this.brokerRef.storeObs.brokerCurrentGarmentCollection.subscribe(function (garmentCollection) {
            if (garmentCollection && garmentCollection.products) {
                _this.totalNumberProducts = garmentCollection.products.length;
                _this.totalNumberOfPages = Math.ceil(garmentCollection.products.length / _this.viewablePerPage);
                _this.pageList = Array.from(Array(_this.totalNumberOfPages).keys());
                if (_this.totalNumberProducts <= 5) {
                    _this.disabled5 = true;
                }
                else if (_this.totalNumberProducts >= 5 && _this.totalNumberProducts <= 10) {
                    _this.disabled5 = false;
                    _this.disabled10 = false;
                }
                else {
                    _this.disabled5 = false;
                    _this.disabled10 = false;
                    _this.disabled15 = false;
                }
                _this.onLastPage = (_this.currentPage === _this.totalNumberOfPages) ? true : false;
            }
        });
    };
    PaginatorToolbarComponent.prototype.setViewableCount = function (viewCount) {
        var note = this.brokerRef.storeDsp.UPDATE_VIEWABLE_PER_PAGE_COUNT;
        note.payLoad = viewCount;
        this.bDS.dispatchBrokerAction(note);
    };
    PaginatorToolbarComponent.prototype.goToPage = function (page) {
        var note = this.brokerRef.storeDsp.SET_CURRENT_PAGE_NUMBER;
        note.payLoad = page;
        this.bDS.dispatchBrokerAction(note);
    };
    return PaginatorToolbarComponent;
}());
PaginatorToolbarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'paginator-toolbar',
        templateUrl: 'paginator.toolbar.component.html',
        styleUrls: ['paginator.toolbar.component.css']
    }),
    __metadata("design:paramtypes", [broker_dispatcher_service_1.BrokerDispatcherService])
], PaginatorToolbarComponent);
exports.PaginatorToolbarComponent = PaginatorToolbarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9wYWdpbmF0b3ItdG9vbGJhci9wYWdpbmF0b3IudG9vbGJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHQSxzQ0FBa0Q7QUFJbEQsc0hBQW1IO0FBRW5ILHNGQUFxRjtBQVdyRixJQUFhLHlCQUF5QjtJQWlCbEMsbUNBQW9CLEdBQTJCO1FBQTNCLFFBQUcsR0FBSCxHQUFHLENBQXdCO1FBVi9DLGVBQVUsR0FBVyxLQUFLLENBQUM7UUFDM0IsY0FBUyxHQUFXLEtBQUssQ0FBQztRQUMxQixlQUFVLEdBQVcsS0FBSyxDQUFDO1FBQzNCLGVBQVUsR0FBVyxLQUFLLENBQUM7UUFTdkIsSUFBSSxjQUFjLEdBQWtCLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsdUJBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3ZHLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLGVBQWUsQ0FBQztJQUNwRCxDQUFDO0lBRUQsNENBQVEsR0FBUjtRQUFBLGlCQXlCQztRQXZCQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBRSxVQUFDLFNBQVM7WUFDM0UsS0FBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUMsZUFBZSxDQUFDO1lBQ2pELEtBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyx5QkFBeUIsR0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyw4QkFBOEIsQ0FBQyxTQUFTLENBQUUsVUFBQyxpQkFBaUI7WUFDNUcsRUFBRSxDQUFBLENBQUMsaUJBQWlCLElBQUksaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUEsQ0FBQztnQkFDaEQsS0FBSSxDQUFDLG1CQUFtQixHQUFHLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQzdELEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUM1RixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBQ2xFLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxtQkFBbUIsSUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFDO29CQUM3QixLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDekIsQ0FBQztnQkFBQSxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLG1CQUFtQixJQUFFLENBQUMsSUFBSSxLQUFJLENBQUMsbUJBQW1CLElBQUcsRUFBRSxDQUFDLENBQUEsQ0FBQztvQkFDbEUsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7b0JBQ3ZCLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUM3QixDQUFDO2dCQUFBLElBQUksQ0FBQSxDQUFDO29CQUNELEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO29CQUN2QixLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztvQkFDeEIsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQzdCLENBQUM7Z0JBQ0QsS0FBSSxDQUFDLFVBQVUsR0FBRSxDQUFDLEtBQUksQ0FBQyxXQUFXLEtBQUssS0FBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUMsSUFBSSxHQUFDLEtBQUssQ0FBQztZQUMvRSxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsb0RBQWdCLEdBQWhCLFVBQWlCLFNBQVM7UUFDckIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsOEJBQThCLENBQUM7UUFDbEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsNENBQVEsR0FBUixVQUFTLElBQUk7UUFDUixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQztRQUMzRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTCxnQ0FBQztBQUFELENBOURBLEFBOERDLElBQUE7QUE5RFkseUJBQXlCO0lBTnJDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixXQUFXLEVBQUUsa0NBQWtDO1FBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO0tBQ2pELENBQUM7cUNBa0IwQixtREFBdUI7R0FqQnRDLHlCQUF5QixDQThEckM7QUE5RFksOERBQXlCIiwiZmlsZSI6ImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9wYWdpbmF0b3ItdG9vbGJhci9wYWdpbmF0b3IudG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgd2lsbHN0cmVldGVyIG9uIDkvMTAvMTcuXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbi8vaW1wb3J0IHsgR2FybWVudE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vYnVzaW5lc3MtbGF5ZXIvbW9kZWxzJ1xuaW1wb3J0IHsgQnJva2VyRGlzcGF0Y2hlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9idXNpbmVzcy1sYXllci9wdWJzdWItYnJva2VyL3NlcnZpY2VzL2Jyb2tlci5kaXNwYXRjaGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQnJva2VyUmVzcG9uc2UgfSBmcm9tIFwiLi4vLi4vLi4vYnVzaW5lc3MtbGF5ZXIvcHVic3ViLWJyb2tlci9tb2RlbHMvYnJva2VyLnJlc3BvbnNlLm1vZGVsXCI7XG5pbXBvcnQgeyBCcm9rZXJMaXN0IH0gZnJvbSAnLi4vLi4vLi4vYnVzaW5lc3MtbGF5ZXIvYnJva2VyYWdlL25ncngtc3R1YnMvYnJva2VybGlzdCc7XG5pbXBvcnQge1BvcnRhbE1vZGVsfSBmcm9tIFwiLi4vLi4vLi4vYnVzaW5lc3MtbGF5ZXIvbW9kZWxzL3BvcnRhbC5tb2RlbFwiO1xuXG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ3BhZ2luYXRvci10b29sYmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3BhZ2luYXRvci50b29sYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsncGFnaW5hdG9yLnRvb2xiYXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRvclRvb2xiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHBvcnRhbFN0YXRlJDogU3Vic2NyaXB0aW9uO1xuICAgIGN1cnJlbnRHYXJtZW50Q29sbGVjdGlvbiQ6U3Vic2NyaXB0aW9uO1xuICAgIGJyb2tlclJlZjphbnk7XG4gICAgY3VycmVudFBhZ2U6bnVtYmVyO1xuICAgIHZpZXdhYmxlUGVyUGFnZTpudW1iZXI7XG4gICAgdG90YWxOdW1iZXJPZlBhZ2VzOm51bWJlcjtcbiAgICBvbkxhc3RQYWdlOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBkaXNhYmxlZDU6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIGRpc2FibGVkMTA6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIGRpc2FibGVkMTU6Ym9vbGVhbiA9IGZhbHNlO1xuICAgIHRvdGFsTnVtYmVyUHJvZHVjdHM6bnVtYmVyO1xuICAgIHBhZ2VMaXN0Om51bWJlcltdO1xuXG5cblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBiRFM6QnJva2VyRGlzcGF0Y2hlclNlcnZpY2UpIHtcblxuICAgICAgICB2YXIgYnJva2VyUmVzcG9uc2U6QnJva2VyUmVzcG9uc2UgPSB0aGlzLmJEUy5kaXNwYXRjaEJyb2tlclNlbGVjdG9yKEJyb2tlckxpc3QuQlJPS0VSX1BBR0lOQVRPUl9TVE9SRSk7XG4gICAgICAgIHRoaXMuYnJva2VyUmVmID0gYnJva2VyUmVzcG9uc2UuYnJva2VyUmVxdWVzdGVkO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICB0aGlzLnBvcnRhbFN0YXRlJCA9IHRoaXMuYnJva2VyUmVmLnN0b3JlT2JzLmJyb2tlclBvcnRhbFN0YXRlLnN1YnNjcmliZSggKHBydGxTdGF0ZSk9PntcbiAgICAgICAgICAgICAgdGhpcy52aWV3YWJsZVBlclBhZ2UgPSBwcnRsU3RhdGUudmlld2FibGVQZXJQYWdlO1xuICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gcHJ0bFN0YXRlLmN1cnJlbnRQYWdlO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY3VycmVudEdhcm1lbnRDb2xsZWN0aW9uJD0gdGhpcy5icm9rZXJSZWYuc3RvcmVPYnMuYnJva2VyQ3VycmVudEdhcm1lbnRDb2xsZWN0aW9uLnN1YnNjcmliZSggKGdhcm1lbnRDb2xsZWN0aW9uKT0+e1xuICAgICAgICAgICAgICBpZihnYXJtZW50Q29sbGVjdGlvbiAmJiBnYXJtZW50Q29sbGVjdGlvbi5wcm9kdWN0cyl7XG4gICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsTnVtYmVyUHJvZHVjdHMgPSBnYXJtZW50Q29sbGVjdGlvbi5wcm9kdWN0cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsTnVtYmVyT2ZQYWdlcyA9IE1hdGguY2VpbChnYXJtZW50Q29sbGVjdGlvbi5wcm9kdWN0cy5sZW5ndGgvdGhpcy52aWV3YWJsZVBlclBhZ2UpO1xuICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlTGlzdCA9IEFycmF5LmZyb20oQXJyYXkodGhpcy50b3RhbE51bWJlck9mUGFnZXMpLmtleXMoKSk7XG4gICAgICAgICAgICAgICAgICBpZih0aGlzLnRvdGFsTnVtYmVyUHJvZHVjdHM8PTUpe1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZDUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy50b3RhbE51bWJlclByb2R1Y3RzPj01ICYmIHRoaXMudG90YWxOdW1iZXJQcm9kdWN0cyA8PTEwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZDUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZDEwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZDUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlZDEwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQxNSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdGhpcy5vbkxhc3RQYWdlID0odGhpcy5jdXJyZW50UGFnZSA9PT0gdGhpcy50b3RhbE51bWJlck9mUGFnZXMpP3RydWU6ZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFZpZXdhYmxlQ291bnQodmlld0NvdW50KXtcbiAgICAgICAgIHZhciBub3RlID0gdGhpcy5icm9rZXJSZWYuc3RvcmVEc3AuVVBEQVRFX1ZJRVdBQkxFX1BFUl9QQUdFX0NPVU5UO1xuICAgICAgICAgbm90ZS5wYXlMb2FkID0gdmlld0NvdW50O1xuICAgICAgICAgdGhpcy5iRFMuZGlzcGF0Y2hCcm9rZXJBY3Rpb24obm90ZSk7XG4gICAgfVxuXG4gICAgZ29Ub1BhZ2UocGFnZSl7XG4gICAgICAgICB2YXIgbm90ZSA9IHRoaXMuYnJva2VyUmVmLnN0b3JlRHNwLlNFVF9DVVJSRU5UX1BBR0VfTlVNQkVSO1xuICAgICAgICAgbm90ZS5wYXlMb2FkID0gcGFnZTtcbiAgICAgICAgIHRoaXMuYkRTLmRpc3BhdGNoQnJva2VyQWN0aW9uKG5vdGUpO1xuICAgIH1cblxufVxuIl19
