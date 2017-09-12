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
        this.isChecked = !this.isChecked;
        if (this.isChecked) {
            this.isReadOnly = false;
            this.liveInput_Class = 'input-on';
            this.revealPublish_Class = 'do-reveal';
        }
        else {
            this.isReadOnly = true;
            this.liveInput_Class = 'noStyle';
            this.revealPublish_Class = 'un-revealed';
        }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9ncmlkLXJvdy9ncmlkLnJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBcUU7QUFZckUsSUFBYSxnQkFBZ0I7SUFON0I7UUFRYyx1QkFBa0IsR0FBRyxJQUFJLG1CQUFZLEVBQWdCLENBQUM7UUFDaEUsY0FBUyxHQUFXLEtBQUssQ0FBQztRQUMxQixlQUFVLEdBQVcsSUFBSSxDQUFDO1FBQ3pCLG9CQUFlLEdBQUMsU0FBUyxDQUFDO1FBQzFCLHdCQUFtQixHQUFDLGFBQWEsQ0FBQztRQUNsQyxnQkFBVyxHQUFTLEVBQUUsQ0FBQztJQWdFNUIsQ0FBQztJQTdERyxzQkFBSSxnQ0FBRTthQUFOO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksa0NBQUk7YUFBUjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGtDQUFJO2FBQVI7WUFDRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFBO1lBQ25DLE1BQU0sQ0FBRSxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksbUNBQUs7YUFBVDtZQUNHLE1BQU0sQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSx1Q0FBUzthQUFiO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksdUNBQVM7YUFBYjtZQUNHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQUdELDRDQUFpQixHQUFqQixVQUFrQixLQUFLO1FBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFHRCwyQ0FBZ0IsR0FBaEIsVUFBaUIsU0FBZ0I7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUU7UUFDbEMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBLENBQUM7WUFDZixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQztZQUNsQyxJQUFJLENBQUMsbUJBQW1CLEdBQUMsV0FBVyxDQUFDO1FBQ3pDLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxtQkFBbUIsR0FBQyxhQUFhLENBQUM7UUFDM0MsQ0FBQztJQUNMLENBQUM7SUFBQSxDQUFDO0lBRUYsK0NBQW9CLEdBQXBCLFVBQXFCLENBQVM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRSxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7UUFDakMsSUFBSSxDQUFDLG1CQUFtQixHQUFDLGFBQWEsQ0FBQztRQUV2QyxJQUFJLFFBQVEsR0FBNkI7WUFDQyxFQUFFLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2xCLElBQUksRUFBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVc7WUFDeEIsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQ3RCLEtBQUssRUFBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVk7WUFDMUIsU0FBUyxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCO1lBQ2xDLFNBQVMsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVM7U0FDaEMsQ0FBQztRQUMzQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBRTFDLENBQUM7SUFFTCx1QkFBQztBQUFELENBdkVBLEFBdUVDLElBQUE7QUF0RVk7SUFBUixZQUFLLEVBQUU7O2lEQUFzQjtBQUNwQjtJQUFULGFBQU0sRUFBRTs7NERBQXVEO0FBRnZELGdCQUFnQjtJQU41QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSx5QkFBeUI7UUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7S0FDeEMsQ0FBQztHQUNXLGdCQUFnQixDQXVFNUI7QUF2RVksNENBQWdCIiwiZmlsZSI6ImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9ncmlkLXJvdy9ncmlkLnJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nRm9ybSwgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBHYXJtZW50TW9kZWwgfSBmcm9tICcuLi8uLi8uLi9idXNpbmVzcy1sYXllci9tb2RlbHMnO1xuXG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2dyaWQtcm93JyxcbiAgICB0ZW1wbGF0ZVVybDogJ2dyaWQucm93LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnZ3JpZC5yb3cuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdyaWRSb3dDb21wb25lbnR7XG4gICAgQElucHV0KCkgZ2FybWVudDpHYXJtZW50TW9kZWw7XG4gICAgQE91dHB1dCgpIHVwZGF0ZUdhcm1lbnRNb2RlbCA9IG5ldyBFdmVudEVtaXR0ZXI8R2FybWVudE1vZGVsPigpO1xuICAgIGlzQ2hlY2tlZDpib29sZWFuID0gZmFsc2U7XG4gICAgaXNSZWFkT25seTpib29sZWFuID0gdHJ1ZTtcbiAgICAgbGl2ZUlucHV0X0NsYXNzPSdub1N0eWxlJztcbiAgICAgcmV2ZWFsUHVibGlzaF9DbGFzcz0ndW4tcmV2ZWFsZWQnO1xuICAgICB1cGRhdGVkVHlwZTpzdHJpbmcgPScnO1xuXG5cbiAgICBnZXQgaWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nYXJtZW50LmlkO1xuICAgIH1cblxuICAgIGdldCBuYW1lKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2FybWVudC5uYW1lO1xuICAgIH1cblxuICAgIGdldCB0eXBlKCkge1xuICAgICAgIHRoaXMudXBkYXRlZFR5cGUgPSB0aGlzLmdhcm1lbnQudHlwZVxuICAgICAgICByZXR1cm4gIHRoaXMudXBkYXRlZFR5cGU7XG4gICAgfVxuXG4gICAgZ2V0IHByaWNlKCkge1xuICAgICAgIHJldHVybiBcIiRcIit0aGlzLmdhcm1lbnQucHJpY2U7XG4gICAgfVxuICAgIGdldCBpbnZlbnRvcnkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FybWVudC5pbnZlbnRvcnk7XG4gICAgfVxuXG4gICAgZ2V0IHRodW1ibmFpbCgpe1xuICAgICAgIHJldHVybiB0aGlzLmdhcm1lbnQudGh1bWJuYWlsO1xuICAgIH1cblxuXG4gICAgdXBkYXRlR2FybWVudFR5cGUodmFsdWUpe1xuICAgICAgICB0aGlzLnVwZGF0ZWRUeXBlID0gdmFsdWU7XG4gICAgfVxuXG5cbiAgICB0dXJuUHVibGlzaGluZ09uKGdhcm1lbnRJZDpzdHJpbmcpe1xuICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9ICF0aGlzLmlzQ2hlY2tlZCA7XG4gICAgICAgIGlmKHRoaXMuaXNDaGVja2VkKXtcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkT25seSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5saXZlSW5wdXRfQ2xhc3MgPSAnaW5wdXQtb24nO1xuICAgICAgICAgICAgdGhpcy5yZXZlYWxQdWJsaXNoX0NsYXNzPSdkby1yZXZlYWwnO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkT25seSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxpdmVJbnB1dF9DbGFzcyA9ICdub1N0eWxlJztcbiAgICAgICAgICAgIHRoaXMucmV2ZWFsUHVibGlzaF9DbGFzcz0ndW4tcmV2ZWFsZWQnO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHB1Ymxpc2hHYXJtZW50VXBkYXRlKGY6IE5nRm9ybSl7XG4gICAgICAgIHRoaXMuaXNSZWFkT25seSA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNDaGVja2VkPSBmYWxzZTtcbiAgICAgICAgdGhpcy5saXZlSW5wdXRfQ2xhc3MgPSAnbm9TdHlsZSc7XG4gICAgICAgIHRoaXMucmV2ZWFsUHVibGlzaF9DbGFzcz0ndW4tcmV2ZWFsZWQnO1xuXG4gICAgICAgIGxldCB1cGRhdGVHTTpHYXJtZW50TW9kZWwgPTxHYXJtZW50TW9kZWw+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDp0aGlzLmdhcm1lbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6Zi52YWx1ZS5nYXJtZW50TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdGhpcy51cGRhdGVkVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6Zi52YWx1ZS5nYXJtZW50UHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmVudG9yeTpmLnZhbHVlLmdhcm1lbnRJbnZlbnRvcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbDp0aGlzLmdhcm1lbnQudGh1bWJuYWlsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgdGhpcy51cGRhdGVHYXJtZW50TW9kZWwuZW1pdCh1cGRhdGVHTSlcblxuICAgIH1cblxufVxuIl19
