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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9ncmlkLXJvdy9ncmlkLnJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBcUU7QUFZckUsSUFBYSxnQkFBZ0I7SUFON0I7UUFRYyx1QkFBa0IsR0FBRyxJQUFJLG1CQUFZLEVBQWdCLENBQUM7UUFDaEUsY0FBUyxHQUFXLEtBQUssQ0FBQztRQUMxQixlQUFVLEdBQVcsSUFBSSxDQUFDO1FBQ3pCLG9CQUFlLEdBQUMsU0FBUyxDQUFDO1FBQzFCLHdCQUFtQixHQUFDLGFBQWEsQ0FBQztRQUNsQyxnQkFBVyxHQUFTLEVBQUUsQ0FBQztJQXlENUIsQ0FBQztJQXZERyxzQkFBSSxnQ0FBRTthQUFOO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksa0NBQUk7YUFBUjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGtDQUFJO2FBQVI7WUFDRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFBO1lBQ25DLE1BQU0sQ0FBRSxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksbUNBQUs7YUFBVDtZQUNHLE1BQU0sQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSx1Q0FBUzthQUFiO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksdUNBQVM7YUFBYjtZQUNHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQUdELDRDQUFpQixHQUFqQixVQUFrQixLQUFLO1FBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRCwyQ0FBZ0IsR0FBaEIsVUFBaUIsU0FBZ0I7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxVQUFVLENBQUM7UUFDbEMsSUFBSSxDQUFDLG1CQUFtQixHQUFDLFdBQVcsQ0FBQztJQUN6QyxDQUFDO0lBQUEsQ0FBQztJQUVGLCtDQUFvQixHQUFwQixVQUFxQixDQUFTO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUUsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxtQkFBbUIsR0FBQyxhQUFhLENBQUM7UUFFdkMsSUFBSSxRQUFRLEdBQTZCO1lBQ0MsRUFBRSxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNsQixJQUFJLEVBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXO1lBQ3hCLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVztZQUN0QixLQUFLLEVBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZO1lBQzFCLFNBQVMsRUFBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQjtZQUNsQyxTQUFTLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTO1NBQ2hDLENBQUM7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxRQUFRLENBQUMsQ0FBQTtRQUNwRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBRTFDLENBQUM7SUFFTCx1QkFBQztBQUFELENBaEVBLEFBZ0VDLElBQUE7QUEvRFk7SUFBUixZQUFLLEVBQUU7O2lEQUFzQjtBQUNwQjtJQUFULGFBQU0sRUFBRTs7NERBQXVEO0FBRnZELGdCQUFnQjtJQU41QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSx5QkFBeUI7UUFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7S0FDeEMsQ0FBQztHQUNXLGdCQUFnQixDQWdFNUI7QUFoRVksNENBQWdCIiwiZmlsZSI6ImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9ncmlkLXJvdy9ncmlkLnJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nRm9ybSwgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBHYXJtZW50TW9kZWwgfSBmcm9tICcuLi8uLi8uLi9idXNpbmVzcy1sYXllci9tb2RlbHMnO1xuXG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2dyaWQtcm93JyxcbiAgICB0ZW1wbGF0ZVVybDogJ2dyaWQucm93LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnZ3JpZC5yb3cuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdyaWRSb3dDb21wb25lbnR7XG4gICAgQElucHV0KCkgZ2FybWVudDpHYXJtZW50TW9kZWw7XG4gICAgQE91dHB1dCgpIHVwZGF0ZUdhcm1lbnRNb2RlbCA9IG5ldyBFdmVudEVtaXR0ZXI8R2FybWVudE1vZGVsPigpO1xuICAgIGlzQ2hlY2tlZDpib29sZWFuID0gZmFsc2U7XG4gICAgaXNSZWFkT25seTpib29sZWFuID0gdHJ1ZTtcbiAgICAgbGl2ZUlucHV0X0NsYXNzPSdub1N0eWxlJztcbiAgICAgcmV2ZWFsUHVibGlzaF9DbGFzcz0ndW4tcmV2ZWFsZWQnO1xuICAgICB1cGRhdGVkVHlwZTpzdHJpbmcgPScnO1xuXG4gICAgZ2V0IGlkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2FybWVudC5pZDtcbiAgICB9XG5cbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdhcm1lbnQubmFtZTtcbiAgICB9XG5cbiAgICBnZXQgdHlwZSgpIHtcbiAgICAgICB0aGlzLnVwZGF0ZWRUeXBlID0gdGhpcy5nYXJtZW50LnR5cGVcbiAgICAgICAgcmV0dXJuICB0aGlzLnVwZGF0ZWRUeXBlO1xuICAgIH1cblxuICAgIGdldCBwcmljZSgpIHtcbiAgICAgICByZXR1cm4gXCIkXCIrdGhpcy5nYXJtZW50LnByaWNlO1xuICAgIH1cbiAgICBnZXQgaW52ZW50b3J5KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmdhcm1lbnQuaW52ZW50b3J5O1xuICAgIH1cblxuICAgIGdldCB0aHVtYm5haWwoKXtcbiAgICAgICByZXR1cm4gdGhpcy5nYXJtZW50LnRodW1ibmFpbDtcbiAgICB9XG5cblxuICAgIHVwZGF0ZUdhcm1lbnRUeXBlKHZhbHVlKXtcbiAgICAgICAgdGhpcy51cGRhdGVkVHlwZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHR1cm5QdWJsaXNoaW5nT24oZ2FybWVudElkOnN0cmluZyl7XG4gICAgICAgIHRoaXMuaXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc1JlYWRPbmx5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGl2ZUlucHV0X0NsYXNzID0gJ2lucHV0LW9uJztcbiAgICAgICAgdGhpcy5yZXZlYWxQdWJsaXNoX0NsYXNzPSdkby1yZXZlYWwnO1xuICAgIH07XG5cbiAgICBwdWJsaXNoR2FybWVudFVwZGF0ZShmOiBOZ0Zvcm0pe1xuICAgICAgICB0aGlzLmlzUmVhZE9ubHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzQ2hlY2tlZD0gZmFsc2U7XG4gICAgICAgIHRoaXMubGl2ZUlucHV0X0NsYXNzID0gJ25vU3R5bGUnO1xuICAgICAgICB0aGlzLnJldmVhbFB1Ymxpc2hfQ2xhc3M9J3VuLXJldmVhbGVkJztcblxuICAgICAgICBsZXQgdXBkYXRlR006R2FybWVudE1vZGVsID08R2FybWVudE1vZGVsPntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6dGhpcy5nYXJtZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOmYudmFsdWUuZ2FybWVudE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMudXBkYXRlZFR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOmYudmFsdWUuZ2FybWVudFByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZlbnRvcnk6Zi52YWx1ZS5nYXJtZW50SW52ZW50b3J5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWw6dGhpcy5nYXJtZW50LnRodW1ibmFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKCd0dXJuUHVibGlzaGluZ09uIHVwZGF0ZUdNID0nLCB1cGRhdGVHTSlcbiAgICAgICAgdGhpcy51cGRhdGVHYXJtZW50TW9kZWwuZW1pdCh1cGRhdGVHTSlcblxuICAgIH1cblxufVxuIl19
