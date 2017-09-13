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
    GridToolbarComponent.prototype.updateChangeDirection = function () {
        var newSort = {
            directionChange: true,
            base: '',
            direction: ''
        };
        this.updateSort.emit(newSort);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9ncmlkLXRvb2xiYXIvZ3JpZC50b29sYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBLHNDQUFnRTtBQWdCaEUsSUFBYSxvQkFBb0I7SUFOakM7UUFPZSxlQUFVLEdBQUcsSUFBSSxtQkFBWSxFQUFvQixDQUFDO0lBb0JqRSxDQUFDO0lBakJHLG9EQUFxQixHQUFyQjtRQUNJLElBQUksT0FBTyxHQUFxQztZQUNFLGVBQWUsRUFBQyxJQUFJO1lBQ3BCLElBQUksRUFBQyxFQUFFO1lBQ1AsU0FBUyxFQUFDLEVBQUU7U0FDWixDQUFDO1FBQ25ELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFBO0lBQ2hDLENBQUM7SUFFSCxpREFBa0IsR0FBbEIsVUFBbUIsTUFBYTtRQUM1QixJQUFJLE9BQU8sR0FBcUM7WUFDRSxlQUFlLEVBQUMsS0FBSztZQUNyQixJQUFJLEVBQUMsTUFBTTtZQUNYLFNBQVMsRUFBQyxFQUFFO1NBQ1osQ0FBQztRQUNuRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQTtJQUNsQyxDQUFDO0lBQ0wsMkJBQUM7QUFBRCxDQXJCQSxBQXFCQyxJQUFBO0FBcEJjO0lBQVQsYUFBTSxFQUFFOzt3REFBbUQ7QUFEcEQsb0JBQW9CO0lBTmhDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGNBQWM7UUFDeEIsV0FBVyxFQUFFLDZCQUE2QjtRQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztLQUM1QyxDQUFDO0dBQ1csb0JBQW9CLENBcUJoQztBQXJCWSxvREFBb0IiLCJmaWxlIjoiYXBwL3ZpZXctbGF5ZXIvY29tbW9uLXZpZXdzL2dyaWQtdG9vbGJhci9ncmlkLnRvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHdpbGxzdHJlZXRlciBvbiA5LzEwLzE3LlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsT3V0cHV0LCBFdmVudEVtaXR0ZXIgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IE1kQnV0dG9uVG9nZ2xlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgTWRNZW51IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgU29ydFJlcXVlc3RNb2RlbCB9IGZyb20gJy4uLy4uLy4uL2J1c2luZXNzLWxheWVyL21vZGVscyc7XG5cblxuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdncmlkLXRvb2xiYXInLFxuICAgIHRlbXBsYXRlVXJsOiAnZ3JpZC50b29sYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnZ3JpZC50b29sYmFyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHcmlkVG9vbGJhckNvbXBvbmVudCB7XG4gICAgIEBPdXRwdXQoKSB1cGRhdGVTb3J0ID0gbmV3IEV2ZW50RW1pdHRlcjxTb3J0UmVxdWVzdE1vZGVsPigpO1xuXG5cbiAgICB1cGRhdGVDaGFuZ2VEaXJlY3Rpb24oKTp2b2lke1xuICAgICAgICBsZXQgbmV3U29ydDpTb3J0UmVxdWVzdE1vZGVsID08U29ydFJlcXVlc3RNb2RlbD57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uQ2hhbmdlOnRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTonJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgIHRoaXMudXBkYXRlU29ydC5lbWl0KG5ld1NvcnQgKVxuICAgICAgfVxuXG4gICAgdXBkYXRlR3JpZFNvcnRCYXNlKGJhc2VJZDpzdHJpbmcpOnZvaWR7XG4gICAgICAgIGxldCBuZXdTb3J0OlNvcnRSZXF1ZXN0TW9kZWwgPTxTb3J0UmVxdWVzdE1vZGVsPntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb25DaGFuZ2U6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTpiYXNlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICB0aGlzLnVwZGF0ZVNvcnQuZW1pdChuZXdTb3J0IClcbiAgICB9XG59XG4iXX0=
