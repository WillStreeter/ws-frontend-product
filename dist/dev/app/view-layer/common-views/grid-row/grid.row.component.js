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
        this.addRowState = new core_1.EventEmitter();
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
        this.updateEditRowState();
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
            price: parseInt((f.value.garmentPrice).replace(/(?:[a-zA-Z]|\s|,|\$)+/ig, '')),
            inventory: parseInt(f.value.garmentInventory),
            thumbnail: this.garment.thumbnail
        };
        this.updateGarmentModel.emit(updateGM);
    };
    GridRowComponent.prototype.updateEditRowState = function () {
        this.addRowState.emit(this.isChecked);
    };
    return GridRowComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], GridRowComponent.prototype, "garment", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], GridRowComponent.prototype, "rowUpdateState", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], GridRowComponent.prototype, "updateGarmentModel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], GridRowComponent.prototype, "addRowState", void 0);
GridRowComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'grid-row',
        templateUrl: 'grid.row.component.html',
        styleUrls: ['grid.row.component.css']
    })
], GridRowComponent);
exports.GridRowComponent = GridRowComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9ncmlkLXJvdy9ncmlkLnJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBcUU7QUFZckUsSUFBYSxnQkFBZ0I7SUFON0I7UUFTYyx1QkFBa0IsR0FBRyxJQUFJLG1CQUFZLEVBQWdCLENBQUM7UUFDdEQsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQVcsQ0FBQztRQUNwRCxjQUFTLEdBQVcsS0FBSyxDQUFDO1FBQzFCLGVBQVUsR0FBVyxJQUFJLENBQUM7UUFDekIsb0JBQWUsR0FBQyxTQUFTLENBQUM7UUFDMUIsd0JBQW1CLEdBQUMsYUFBYSxDQUFDO1FBQ2xDLGdCQUFXLEdBQVMsRUFBRSxDQUFDO0lBd0U1QixDQUFDO0lBckVHLHNCQUFJLGdDQUFFO2FBQU47WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrQ0FBSTthQUFSO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksa0NBQUk7YUFBUjtZQUNHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUE7WUFDbkMsTUFBTSxDQUFFLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtQ0FBSzthQUFUO1lBQ0csTUFBTSxDQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHVDQUFTO2FBQWI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx1Q0FBUzthQUFiO1lBQ0csTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBR0QsNENBQWlCLEdBQWpCLFVBQWtCLEtBQUs7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUtELDJDQUFnQixHQUFoQixVQUFpQixTQUFnQjtRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBRTtRQUNsQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUEsQ0FBQztZQUNmLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxtQkFBbUIsR0FBQyxXQUFXLENBQUM7UUFDekMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7WUFDakMsSUFBSSxDQUFDLG1CQUFtQixHQUFDLGFBQWEsQ0FBQztRQUMzQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUFBLENBQUM7SUFFRiwrQ0FBb0IsR0FBcEIsVUFBcUIsQ0FBUztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFFLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsbUJBQW1CLEdBQUMsYUFBYSxDQUFDO1FBRXZDLElBQUksUUFBUSxHQUE2QjtZQUNDLEVBQUUsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbEIsSUFBSSxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVztZQUN4QixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDdEIsS0FBSyxFQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzVFLFNBQVMsRUFBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztZQUM1QyxTQUFTLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTO1NBQ2hDLENBQUM7UUFDM0MsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUUxQyxDQUFDO0lBRU8sNkNBQWtCLEdBQTFCO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBRXpDLENBQUM7SUFFTCx1QkFBQztBQUFELENBakZBLEFBaUZDLElBQUE7QUFoRlk7SUFBUixZQUFLLEVBQUU7O2lEQUFzQjtBQUN0QjtJQUFQLFlBQUssRUFBRTs7d0RBQXVCO0FBQ3JCO0lBQVQsYUFBTSxFQUFFOzs0REFBdUQ7QUFDdEQ7SUFBVCxhQUFNLEVBQUU7O3FEQUEyQztBQUozQyxnQkFBZ0I7SUFONUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUseUJBQXlCO1FBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO0tBQ3hDLENBQUM7R0FDVyxnQkFBZ0IsQ0FpRjVCO0FBakZZLDRDQUFnQiIsImZpbGUiOiJhcHAvdmlldy1sYXllci9jb21tb24tdmlld3MvZ3JpZC1yb3cvZ3JpZC5yb3cuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0Zvcm0sIEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgR2FybWVudE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vYnVzaW5lc3MtbGF5ZXIvbW9kZWxzJztcblxuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdncmlkLXJvdycsXG4gICAgdGVtcGxhdGVVcmw6ICdncmlkLnJvdy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2dyaWQucm93LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHcmlkUm93Q29tcG9uZW50e1xuICAgIEBJbnB1dCgpIGdhcm1lbnQ6R2FybWVudE1vZGVsO1xuICAgIEBJbnB1dCgpcm93VXBkYXRlU3RhdGU6Ym9vbGVhbjtcbiAgICBAT3V0cHV0KCkgdXBkYXRlR2FybWVudE1vZGVsID0gbmV3IEV2ZW50RW1pdHRlcjxHYXJtZW50TW9kZWw+KCk7XG4gICAgQE91dHB1dCgpIGFkZFJvd1N0YXRlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgIGlzQ2hlY2tlZDpib29sZWFuID0gZmFsc2U7XG4gICAgaXNSZWFkT25seTpib29sZWFuID0gdHJ1ZTtcbiAgICAgbGl2ZUlucHV0X0NsYXNzPSdub1N0eWxlJztcbiAgICAgcmV2ZWFsUHVibGlzaF9DbGFzcz0ndW4tcmV2ZWFsZWQnO1xuICAgICB1cGRhdGVkVHlwZTpzdHJpbmcgPScnO1xuXG5cbiAgICBnZXQgaWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nYXJtZW50LmlkO1xuICAgIH1cblxuICAgIGdldCBuYW1lKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2FybWVudC5uYW1lO1xuICAgIH1cblxuICAgIGdldCB0eXBlKCkge1xuICAgICAgIHRoaXMudXBkYXRlZFR5cGUgPSB0aGlzLmdhcm1lbnQudHlwZVxuICAgICAgICByZXR1cm4gIHRoaXMudXBkYXRlZFR5cGU7XG4gICAgfVxuXG4gICAgZ2V0IHByaWNlKCkge1xuICAgICAgIHJldHVybiBcIiRcIit0aGlzLmdhcm1lbnQucHJpY2U7XG4gICAgfVxuICAgIGdldCBpbnZlbnRvcnkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FybWVudC5pbnZlbnRvcnk7XG4gICAgfVxuXG4gICAgZ2V0IHRodW1ibmFpbCgpe1xuICAgICAgIHJldHVybiB0aGlzLmdhcm1lbnQudGh1bWJuYWlsO1xuICAgIH1cblxuXG4gICAgdXBkYXRlR2FybWVudFR5cGUodmFsdWUpe1xuICAgICAgICB0aGlzLnVwZGF0ZWRUeXBlID0gdmFsdWU7XG4gICAgfVxuXG5cblxuXG4gICAgdHVyblB1Ymxpc2hpbmdPbihnYXJtZW50SWQ6bnVtYmVyKXtcbiAgICAgICAgdGhpcy5pc0NoZWNrZWQgPSAhdGhpcy5pc0NoZWNrZWQgO1xuICAgICAgICBpZih0aGlzLmlzQ2hlY2tlZCl7XG4gICAgICAgICAgICB0aGlzLmlzUmVhZE9ubHkgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGl2ZUlucHV0X0NsYXNzID0gJ2lucHV0LW9uJztcbiAgICAgICAgICAgIHRoaXMucmV2ZWFsUHVibGlzaF9DbGFzcz0nZG8tcmV2ZWFsJztcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmlzUmVhZE9ubHkgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5saXZlSW5wdXRfQ2xhc3MgPSAnbm9TdHlsZSc7XG4gICAgICAgICAgICB0aGlzLnJldmVhbFB1Ymxpc2hfQ2xhc3M9J3VuLXJldmVhbGVkJztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZUVkaXRSb3dTdGF0ZSgpO1xuICAgIH07XG5cbiAgICBwdWJsaXNoR2FybWVudFVwZGF0ZShmOiBOZ0Zvcm0pe1xuICAgICAgICB0aGlzLmlzUmVhZE9ubHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzQ2hlY2tlZD0gZmFsc2U7XG4gICAgICAgIHRoaXMubGl2ZUlucHV0X0NsYXNzID0gJ25vU3R5bGUnO1xuICAgICAgICB0aGlzLnJldmVhbFB1Ymxpc2hfQ2xhc3M9J3VuLXJldmVhbGVkJztcblxuICAgICAgICBsZXQgdXBkYXRlR006R2FybWVudE1vZGVsID08R2FybWVudE1vZGVsPntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6dGhpcy5nYXJtZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOmYudmFsdWUuZ2FybWVudE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMudXBkYXRlZFR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOnBhcnNlSW50KChmLnZhbHVlLmdhcm1lbnRQcmljZSkucmVwbGFjZSgvKD86W2EtekEtWl18XFxzfCx8XFwkKSsvaWcsJycpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52ZW50b3J5OnBhcnNlSW50KGYudmFsdWUuZ2FybWVudEludmVudG9yeSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbDp0aGlzLmdhcm1lbnQudGh1bWJuYWlsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgdGhpcy51cGRhdGVHYXJtZW50TW9kZWwuZW1pdCh1cGRhdGVHTSlcblxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlRWRpdFJvd1N0YXRlKCl7XG4gICAgICAgIHRoaXMuYWRkUm93U3RhdGUuZW1pdCh0aGlzLmlzQ2hlY2tlZClcblxuICAgIH1cblxufVxuIl19
