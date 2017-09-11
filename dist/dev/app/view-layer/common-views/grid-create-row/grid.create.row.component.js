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
var GridCreateRowComponent = (function () {
    function GridCreateRowComponent() {
        this.addGarmentModel = new core_1.EventEmitter();
        this.liveInput_Class = 'noStyle';
        this.revealPublish_Class = 'un-revealed';
        this.updatedType = 'Physical';
    }
    GridCreateRowComponent.prototype.updateGarmentType = function (value) {
        this.updatedType = value;
    };
    GridCreateRowComponent.prototype.turnPublishingOn = function (garmentId) {
        this.liveInput_Class = 'input-on';
        this.revealPublish_Class = 'do-reveal';
    };
    ;
    GridCreateRowComponent.prototype.publishGarmentAdd = function (f) {
        this.liveInput_Class = 'noStyle';
        this.revealPublish_Class = 'un-revealed';
        var updateGM = {
            id: Math.floor(Math.random() * (1000 - 1)) + 1,
            name: f.value.garmentName,
            type: this.updatedType,
            price: f.value.garmentPrice,
            inventory: f.value.garmentInventory,
            thumbnail: ''
        };
        console.log('turnPublishingOn updateGM =', updateGM);
        this.addGarmentModel.emit(updateGM);
    };
    return GridCreateRowComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], GridCreateRowComponent.prototype, "addGarmentModel", void 0);
GridCreateRowComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'grid-create-row',
        templateUrl: 'grid.create.row.component.html',
        styleUrls: ['grid.create.row.component.css']
    })
], GridCreateRowComponent);
exports.GridCreateRowComponent = GridCreateRowComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9ncmlkLWNyZWF0ZS1yb3cvZ3JpZC5jcmVhdGUucm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFxRTtBQVlyRSxJQUFhLHNCQUFzQjtJQU5uQztRQU9jLG9CQUFlLEdBQUcsSUFBSSxtQkFBWSxFQUFnQixDQUFDO1FBQzVELG9CQUFlLEdBQUMsU0FBUyxDQUFDO1FBQzFCLHdCQUFtQixHQUFDLGFBQWEsQ0FBQztRQUNsQyxnQkFBVyxHQUFTLFVBQVUsQ0FBQztJQTZCcEMsQ0FBQztJQTFCRyxrREFBaUIsR0FBakIsVUFBa0IsS0FBSztRQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsaURBQWdCLEdBQWhCLFVBQWlCLFNBQWdCO1FBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxtQkFBbUIsR0FBQyxXQUFXLENBQUM7SUFDekMsQ0FBQztJQUFBLENBQUM7SUFFRixrREFBaUIsR0FBakIsVUFBa0IsQ0FBUztRQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsbUJBQW1CLEdBQUMsYUFBYSxDQUFDO1FBRXZDLElBQUksUUFBUSxHQUE2QjtZQUNDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUM7WUFDN0MsSUFBSSxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVztZQUN4QixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDdEIsS0FBSyxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWTtZQUMxQixTQUFTLEVBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0I7WUFDbEMsU0FBUyxFQUFDLEVBQUU7U0FDWixDQUFDO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFDcEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFFdkMsQ0FBQztJQUVMLDZCQUFDO0FBQUQsQ0FqQ0EsQUFpQ0MsSUFBQTtBQWhDYTtJQUFULGFBQU0sRUFBRTs7K0RBQW9EO0FBRHBELHNCQUFzQjtJQU5sQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsV0FBVyxFQUFFLGdDQUFnQztRQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztLQUMvQyxDQUFDO0dBQ1csc0JBQXNCLENBaUNsQztBQWpDWSx3REFBc0IiLCJmaWxlIjoiYXBwL3ZpZXctbGF5ZXIvY29tbW9uLXZpZXdzL2dyaWQtY3JlYXRlLXJvdy9ncmlkLmNyZWF0ZS5yb3cuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0Zvcm0sIEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgR2FybWVudE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vYnVzaW5lc3MtbGF5ZXIvbW9kZWxzJztcblxuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdncmlkLWNyZWF0ZS1yb3cnLFxuICAgIHRlbXBsYXRlVXJsOiAnZ3JpZC5jcmVhdGUucm93LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnZ3JpZC5jcmVhdGUucm93LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHcmlkQ3JlYXRlUm93Q29tcG9uZW50e1xuICAgIEBPdXRwdXQoKSBhZGRHYXJtZW50TW9kZWwgPSBuZXcgRXZlbnRFbWl0dGVyPEdhcm1lbnRNb2RlbD4oKTtcbiAgICAgbGl2ZUlucHV0X0NsYXNzPSdub1N0eWxlJztcbiAgICAgcmV2ZWFsUHVibGlzaF9DbGFzcz0ndW4tcmV2ZWFsZWQnO1xuICAgICB1cGRhdGVkVHlwZTpzdHJpbmcgPSdQaHlzaWNhbCc7XG5cblxuICAgIHVwZGF0ZUdhcm1lbnRUeXBlKHZhbHVlKXtcbiAgICAgICAgdGhpcy51cGRhdGVkVHlwZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHR1cm5QdWJsaXNoaW5nT24oZ2FybWVudElkOnN0cmluZyl7XG4gICAgICAgIHRoaXMubGl2ZUlucHV0X0NsYXNzID0gJ2lucHV0LW9uJztcbiAgICAgICAgdGhpcy5yZXZlYWxQdWJsaXNoX0NsYXNzPSdkby1yZXZlYWwnO1xuICAgIH07XG5cbiAgICBwdWJsaXNoR2FybWVudEFkZChmOiBOZ0Zvcm0pe1xuICAgICAgICB0aGlzLmxpdmVJbnB1dF9DbGFzcyA9ICdub1N0eWxlJztcbiAgICAgICAgdGhpcy5yZXZlYWxQdWJsaXNoX0NsYXNzPSd1bi1yZXZlYWxlZCc7XG5cbiAgICAgICAgbGV0IHVwZGF0ZUdNOkdhcm1lbnRNb2RlbCA9PEdhcm1lbnRNb2RlbD57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAwMCAtIDEpKSArMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTpmLnZhbHVlLmdhcm1lbnROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLnVwZGF0ZWRUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTpmLnZhbHVlLmdhcm1lbnRQcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52ZW50b3J5OmYudmFsdWUuZ2FybWVudEludmVudG9yeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsOicnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2coJ3R1cm5QdWJsaXNoaW5nT24gdXBkYXRlR00gPScsIHVwZGF0ZUdNKVxuICAgICAgICB0aGlzLmFkZEdhcm1lbnRNb2RlbC5lbWl0KHVwZGF0ZUdNKVxuXG4gICAgfVxuXG59XG4iXX0=
