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
        this.removeAddRow = new core_1.EventEmitter();
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
            thumbnail: '/assets/bowtie-thumb.jpeg'
        };
        this.addGarmentModel.emit(updateGM);
    };
    GridCreateRowComponent.prototype.exitAddRow = function () {
        this.removeAddRow.emit(false);
    };
    ;
    return GridCreateRowComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], GridCreateRowComponent.prototype, "addGarmentModel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], GridCreateRowComponent.prototype, "removeAddRow", void 0);
GridCreateRowComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'grid-create-row',
        templateUrl: 'grid.create.row.component.html',
        styleUrls: ['grid.create.row.component.css']
    })
], GridCreateRowComponent);
exports.GridCreateRowComponent = GridCreateRowComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9ncmlkLWNyZWF0ZS1yb3cvZ3JpZC5jcmVhdGUucm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFxRTtBQVlyRSxJQUFhLHNCQUFzQjtJQU5uQztRQU9jLG9CQUFlLEdBQUcsSUFBSSxtQkFBWSxFQUFnQixDQUFDO1FBQ25ELGlCQUFZLEdBQUcsSUFBSSxtQkFBWSxFQUFXLENBQUM7UUFFcEQsb0JBQWUsR0FBQyxTQUFTLENBQUM7UUFDMUIsd0JBQW1CLEdBQUMsYUFBYSxDQUFDO1FBQ2xDLGdCQUFXLEdBQVMsVUFBVSxDQUFDO0lBZ0NwQyxDQUFDO0lBN0JHLGtEQUFpQixHQUFqQixVQUFrQixLQUFLO1FBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRCxpREFBZ0IsR0FBaEIsVUFBaUIsU0FBZ0I7UUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxVQUFVLENBQUM7UUFDbEMsSUFBSSxDQUFDLG1CQUFtQixHQUFDLFdBQVcsQ0FBQztJQUN6QyxDQUFDO0lBQUEsQ0FBQztJQUVGLGtEQUFpQixHQUFqQixVQUFrQixDQUFTO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxtQkFBbUIsR0FBQyxhQUFhLENBQUM7UUFFdkMsSUFBSSxRQUFRLEdBQTZCO1lBQ0MsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUUsQ0FBQztZQUM3QyxJQUFJLEVBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXO1lBQ3hCLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVztZQUN0QixLQUFLLEVBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZO1lBQzFCLFNBQVMsRUFBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQjtZQUNsQyxTQUFTLEVBQUMsMkJBQTJCO1NBQ3JDLENBQUM7UUFDM0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFFdkMsQ0FBQztJQUVELDJDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBQUEsQ0FBQztJQUVOLDZCQUFDO0FBQUQsQ0F0Q0EsQUFzQ0MsSUFBQTtBQXJDYTtJQUFULGFBQU0sRUFBRTs7K0RBQW9EO0FBQ25EO0lBQVQsYUFBTSxFQUFFOzs0REFBNEM7QUFGNUMsc0JBQXNCO0lBTmxDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixXQUFXLEVBQUUsZ0NBQWdDO1FBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO0tBQy9DLENBQUM7R0FDVyxzQkFBc0IsQ0FzQ2xDO0FBdENZLHdEQUFzQiIsImZpbGUiOiJhcHAvdmlldy1sYXllci9jb21tb24tdmlld3MvZ3JpZC1jcmVhdGUtcm93L2dyaWQuY3JlYXRlLnJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nRm9ybSwgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBHYXJtZW50TW9kZWwgfSBmcm9tICcuLi8uLi8uLi9idXNpbmVzcy1sYXllci9tb2RlbHMnO1xuXG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ2dyaWQtY3JlYXRlLXJvdycsXG4gICAgdGVtcGxhdGVVcmw6ICdncmlkLmNyZWF0ZS5yb3cuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydncmlkLmNyZWF0ZS5yb3cuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEdyaWRDcmVhdGVSb3dDb21wb25lbnR7XG4gICAgQE91dHB1dCgpIGFkZEdhcm1lbnRNb2RlbCA9IG5ldyBFdmVudEVtaXR0ZXI8R2FybWVudE1vZGVsPigpO1xuICAgIEBPdXRwdXQoKSByZW1vdmVBZGRSb3cgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgICAgbGl2ZUlucHV0X0NsYXNzPSdub1N0eWxlJztcbiAgICAgcmV2ZWFsUHVibGlzaF9DbGFzcz0ndW4tcmV2ZWFsZWQnO1xuICAgICB1cGRhdGVkVHlwZTpzdHJpbmcgPSdQaHlzaWNhbCc7XG5cblxuICAgIHVwZGF0ZUdhcm1lbnRUeXBlKHZhbHVlKXtcbiAgICAgICAgdGhpcy51cGRhdGVkVHlwZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHR1cm5QdWJsaXNoaW5nT24oZ2FybWVudElkOnN0cmluZyl7XG4gICAgICAgIHRoaXMubGl2ZUlucHV0X0NsYXNzID0gJ2lucHV0LW9uJztcbiAgICAgICAgdGhpcy5yZXZlYWxQdWJsaXNoX0NsYXNzPSdkby1yZXZlYWwnO1xuICAgIH07XG5cbiAgICBwdWJsaXNoR2FybWVudEFkZChmOiBOZ0Zvcm0pe1xuICAgICAgICB0aGlzLmxpdmVJbnB1dF9DbGFzcyA9ICdub1N0eWxlJztcbiAgICAgICAgdGhpcy5yZXZlYWxQdWJsaXNoX0NsYXNzPSd1bi1yZXZlYWxlZCc7XG5cbiAgICAgICAgbGV0IHVwZGF0ZUdNOkdhcm1lbnRNb2RlbCA9PEdhcm1lbnRNb2RlbD57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAwMCAtIDEpKSArMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTpmLnZhbHVlLmdhcm1lbnROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLnVwZGF0ZWRUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTpmLnZhbHVlLmdhcm1lbnRQcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52ZW50b3J5OmYudmFsdWUuZ2FybWVudEludmVudG9yeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsOicvYXNzZXRzL2Jvd3RpZS10aHVtYi5qcGVnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgIHRoaXMuYWRkR2FybWVudE1vZGVsLmVtaXQodXBkYXRlR00pXG5cbiAgICB9XG5cbiAgICBleGl0QWRkUm93KCl7XG4gICAgICAgIHRoaXMucmVtb3ZlQWRkUm93LmVtaXQoZmFsc2UpXG4gICAgfTtcblxufVxuIl19
