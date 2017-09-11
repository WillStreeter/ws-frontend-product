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
var GridToolbarComponent = (function () {
    function GridToolbarComponent() {
        this.updateSort = new core_1.EventEmitter();
    }
    GridToolbarComponent.prototype.onChange = function (city) {
        alert(city.name);
    };
    GridToolbarComponent.prototype.updateGridSortBase = function (baseId) {
        var newSort = {
            directionChange: false,
            base: baseId,
            direction: ''
        };
        this.updateSort.emit(newSort);
    };
    return GridToolbarComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], GridToolbarComponent.prototype, "updateSort", void 0);
GridToolbarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'grid-toolbar',
        templateUrl: 'grid.toolbar.component.html',
        styleUrls: ['grid.toolbar.component.css']
    })
], GridToolbarComponent);
exports.GridToolbarComponent = GridToolbarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9ncmlkLXRvb2xiYXIvZ3JpZC50b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBLHNDQUFnRTtBQWdCaEUsSUFBYSxvQkFBb0I7SUFOakM7UUFPZSxlQUFVLEdBQUcsSUFBSSxtQkFBWSxFQUFvQixDQUFDO0lBZWpFLENBQUM7SUFaRyx1Q0FBUSxHQUFSLFVBQVMsSUFBSTtRQUNULEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVILGlEQUFrQixHQUFsQixVQUFtQixNQUFhO1FBQzVCLElBQUksT0FBTyxHQUFxQztZQUNFLGVBQWUsRUFBQyxLQUFLO1lBQ3JCLElBQUksRUFBQyxNQUFNO1lBQ1gsU0FBUyxFQUFDLEVBQUU7U0FDWixDQUFDO1FBQ25ELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFBO0lBQ2xDLENBQUM7SUFDTCwyQkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFmYztJQUFULGFBQU0sRUFBRTs7d0RBQW1EO0FBRHBELG9CQUFvQjtJQU5oQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFdBQVcsRUFBRSw2QkFBNkI7UUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7S0FDNUMsQ0FBQztHQUNXLG9CQUFvQixDQWdCaEM7QUFoQlksb0RBQW9CIiwiZmlsZSI6ImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9ncmlkLXRvb2xiYXIvZ3JpZC50b29sYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSB3aWxsc3RyZWV0ZXIgb24gOS8xMC8xNy5cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LE91dHB1dCwgRXZlbnRFbWl0dGVyICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBNZEJ1dHRvblRvZ2dsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IE1kTWVudSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFNvcnRSZXF1ZXN0TW9kZWwgfSBmcm9tICcuLi8uLi8uLi9idXNpbmVzcy1sYXllci9tb2RlbHMnO1xuXG5cblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnZ3JpZC10b29sYmFyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2dyaWQudG9vbGJhci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2dyaWQudG9vbGJhci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR3JpZFRvb2xiYXJDb21wb25lbnQge1xuICAgICBAT3V0cHV0KCkgdXBkYXRlU29ydCA9IG5ldyBFdmVudEVtaXR0ZXI8U29ydFJlcXVlc3RNb2RlbD4oKTtcblxuXG4gICAgb25DaGFuZ2UoY2l0eSkge1xuICAgICAgICBhbGVydChjaXR5Lm5hbWUpO1xuICAgICAgfVxuXG4gICAgdXBkYXRlR3JpZFNvcnRCYXNlKGJhc2VJZDpzdHJpbmcpOnZvaWR7XG4gICAgICAgIGxldCBuZXdTb3J0OlNvcnRSZXF1ZXN0TW9kZWwgPTxTb3J0UmVxdWVzdE1vZGVsPntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb25DaGFuZ2U6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTpiYXNlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICB0aGlzLnVwZGF0ZVNvcnQuZW1pdChuZXdTb3J0IClcbiAgICB9XG59XG4iXX0=
