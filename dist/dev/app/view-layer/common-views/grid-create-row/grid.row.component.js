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
var GridRowComponent = (function () {
    function GridRowComponent() {
        this.updateGarmentModel = new core_1.EventEmitter();
        this.isChecked = false;
        this.isReadOnly = true;
        this.liveInput_Class = 'noStyle';
        this.revealPublish_Class = 'un-revealed';
        this.updatedType = '';
    }
    Object.defineProperty(GridRowComponent.prototype, "id", {
        get: function () {
            return this.garment.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowComponent.prototype, "name", {
        get: function () {
            return this.garment.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowComponent.prototype, "type", {
        get: function () {
            this.updatedType = this.garment.type;
            return this.updatedType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowComponent.prototype, "price", {
        get: function () {
            return "$" + this.garment.price;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowComponent.prototype, "inventory", {
        get: function () {
            return this.garment.inventory;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowComponent.prototype, "thumbnail", {
        get: function () {
            return this.garment.thumbnail;
        },
        enumerable: true,
        configurable: true
    });
    GridRowComponent.prototype.updateGarmentType = function (value) {
        this.updatedType = value;
    };
    GridRowComponent.prototype.turnPublishingOn = function (garmentId) {
        this.isChecked = true;
        this.isReadOnly = false;
        this.liveInput_Class = 'input-on';
        this.revealPublish_Class = 'do-reveal';
    };
    ;
    GridRowComponent.prototype.publishGarmentUpdate = function (f) {
        this.isReadOnly = true;
        this.isChecked = false;
        this.liveInput_Class = 'noStyle';
        this.revealPublish_Class = 'un-revealed';
        var updateGM = {
            id: this.garment.id,
            name: f.value.garmentName,
            type: this.updatedType,
            price: f.value.garmentPrice,
            inventory: f.value.garmentInventory,
            thumbnail: this.garment.thumbnail
        };
        console.log('turnPublishingOn updateGM =', updateGM);
        this.updateGarmentModel.emit(updateGM);
    };
    return GridRowComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], GridRowComponent.prototype, "garment", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], GridRowComponent.prototype, "updateGarmentModel", void 0);
GridRowComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'grid-row',
        templateUrl: 'grid.row.component.html',
        styleUrls: ['grid.row.component.css']
    })
], GridRowComponent);
exports.GridRowComponent = GridRowComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9ncmlkLWNyZWF0ZS1yb3cvZ3JpZC5yb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXFFO0FBWXJFLElBQWEsZ0JBQWdCO0lBTjdCO1FBUWMsdUJBQWtCLEdBQUcsSUFBSSxtQkFBWSxFQUFnQixDQUFDO1FBQ2hFLGNBQVMsR0FBVyxLQUFLLENBQUM7UUFDMUIsZUFBVSxHQUFXLElBQUksQ0FBQztRQUN6QixvQkFBZSxHQUFDLFNBQVMsQ0FBQztRQUMxQix3QkFBbUIsR0FBQyxhQUFhLENBQUM7UUFDbEMsZ0JBQVcsR0FBUyxFQUFFLENBQUM7SUF5RDVCLENBQUM7SUF2REcsc0JBQUksZ0NBQUU7YUFBTjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGtDQUFJO2FBQVI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrQ0FBSTthQUFSO1lBQ0csSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQTtZQUNuQyxNQUFNLENBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLG1DQUFLO2FBQVQ7WUFDRyxNQUFNLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksdUNBQVM7YUFBYjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHVDQUFTO2FBQWI7WUFDRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFHRCw0Q0FBaUIsR0FBakIsVUFBa0IsS0FBSztRQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsMkNBQWdCLEdBQWhCLFVBQWlCLFNBQWdCO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxtQkFBbUIsR0FBQyxXQUFXLENBQUM7SUFDekMsQ0FBQztJQUFBLENBQUM7SUFFRiwrQ0FBb0IsR0FBcEIsVUFBcUIsQ0FBUztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFFLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsbUJBQW1CLEdBQUMsYUFBYSxDQUFDO1FBRXZDLElBQUksUUFBUSxHQUE2QjtZQUNDLEVBQUUsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbEIsSUFBSSxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVztZQUN4QixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDdEIsS0FBSyxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWTtZQUMxQixTQUFTLEVBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0I7WUFDbEMsU0FBUyxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUztTQUNoQyxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFDcEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUUxQyxDQUFDO0lBRUwsdUJBQUM7QUFBRCxDQWhFQSxBQWdFQyxJQUFBO0FBL0RZO0lBQVIsWUFBSyxFQUFFOztpREFBc0I7QUFDcEI7SUFBVCxhQUFNLEVBQUU7OzREQUF1RDtBQUZ2RCxnQkFBZ0I7SUFONUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUseUJBQXlCO1FBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO0tBQ3hDLENBQUM7R0FDVyxnQkFBZ0IsQ0FnRTVCO0FBaEVZLDRDQUFnQiIsImZpbGUiOiJhcHAvdmlldy1sYXllci9jb21tb24tdmlld3MvZ3JpZC1jcmVhdGUtcm93L2dyaWQucm93LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdGb3JtLCBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEdhcm1lbnRNb2RlbCB9IGZyb20gJy4uLy4uLy4uL2J1c2luZXNzLWxheWVyL21vZGVscyc7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnZ3JpZC1yb3cnLFxuICAgIHRlbXBsYXRlVXJsOiAnZ3JpZC5yb3cuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydncmlkLnJvdy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR3JpZFJvd0NvbXBvbmVudHtcbiAgICBASW5wdXQoKSBnYXJtZW50Okdhcm1lbnRNb2RlbDtcbiAgICBAT3V0cHV0KCkgdXBkYXRlR2FybWVudE1vZGVsID0gbmV3IEV2ZW50RW1pdHRlcjxHYXJtZW50TW9kZWw+KCk7XG4gICAgaXNDaGVja2VkOmJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc1JlYWRPbmx5OmJvb2xlYW4gPSB0cnVlO1xuICAgICBsaXZlSW5wdXRfQ2xhc3M9J25vU3R5bGUnO1xuICAgICByZXZlYWxQdWJsaXNoX0NsYXNzPSd1bi1yZXZlYWxlZCc7XG4gICAgIHVwZGF0ZWRUeXBlOnN0cmluZyA9Jyc7XG5cbiAgICBnZXQgaWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nYXJtZW50LmlkO1xuICAgIH1cblxuICAgIGdldCBuYW1lKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2FybWVudC5uYW1lO1xuICAgIH1cblxuICAgIGdldCB0eXBlKCkge1xuICAgICAgIHRoaXMudXBkYXRlZFR5cGUgPSB0aGlzLmdhcm1lbnQudHlwZVxuICAgICAgICByZXR1cm4gIHRoaXMudXBkYXRlZFR5cGU7XG4gICAgfVxuXG4gICAgZ2V0IHByaWNlKCkge1xuICAgICAgIHJldHVybiBcIiRcIit0aGlzLmdhcm1lbnQucHJpY2U7XG4gICAgfVxuICAgIGdldCBpbnZlbnRvcnkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FybWVudC5pbnZlbnRvcnk7XG4gICAgfVxuXG4gICAgZ2V0IHRodW1ibmFpbCgpe1xuICAgICAgIHJldHVybiB0aGlzLmdhcm1lbnQudGh1bWJuYWlsO1xuICAgIH1cblxuXG4gICAgdXBkYXRlR2FybWVudFR5cGUodmFsdWUpe1xuICAgICAgICB0aGlzLnVwZGF0ZWRUeXBlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgdHVyblB1Ymxpc2hpbmdPbihnYXJtZW50SWQ6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5pc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzUmVhZE9ubHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5saXZlSW5wdXRfQ2xhc3MgPSAnaW5wdXQtb24nO1xuICAgICAgICB0aGlzLnJldmVhbFB1Ymxpc2hfQ2xhc3M9J2RvLXJldmVhbCc7XG4gICAgfTtcblxuICAgIHB1Ymxpc2hHYXJtZW50VXBkYXRlKGY6IE5nRm9ybSl7XG4gICAgICAgIHRoaXMuaXNSZWFkT25seSA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNDaGVja2VkPSBmYWxzZTtcbiAgICAgICAgdGhpcy5saXZlSW5wdXRfQ2xhc3MgPSAnbm9TdHlsZSc7XG4gICAgICAgIHRoaXMucmV2ZWFsUHVibGlzaF9DbGFzcz0ndW4tcmV2ZWFsZWQnO1xuXG4gICAgICAgIGxldCB1cGRhdGVHTTpHYXJtZW50TW9kZWwgPTxHYXJtZW50TW9kZWw+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDp0aGlzLmdhcm1lbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6Zi52YWx1ZS5nYXJtZW50TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdGhpcy51cGRhdGVkVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6Zi52YWx1ZS5nYXJtZW50UHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmVudG9yeTpmLnZhbHVlLmdhcm1lbnRJbnZlbnRvcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbDp0aGlzLmdhcm1lbnQudGh1bWJuYWlsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2coJ3R1cm5QdWJsaXNoaW5nT24gdXBkYXRlR00gPScsIHVwZGF0ZUdNKVxuICAgICAgICB0aGlzLnVwZGF0ZUdhcm1lbnRNb2RlbC5lbWl0KHVwZGF0ZUdNKVxuXG4gICAgfVxuXG59XG4iXX0=
