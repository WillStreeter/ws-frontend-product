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
            thumbnail: '/assets/bowtie-thumb.jpeg'
        };
        this.addGarmentModel.emit(updateGM);
    };
    GridCreateRowComponent.prototype.validate = function (evt) {
        var theEvent = evt || window.event;
        var key = theEvent.keyCode;
        key = String.fromCharCode(key);
        var regex = /[0-9]|\./;
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault)
                theEvent.preventDefault();
        }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9ncmlkLWNyZWF0ZS1yb3cvZ3JpZC5jcmVhdGUucm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFxRTtBQVlyRSxJQUFhLHNCQUFzQjtJQU5uQztRQU9jLG9CQUFlLEdBQUcsSUFBSSxtQkFBWSxFQUFnQixDQUFDO1FBQzVELG9CQUFlLEdBQUMsU0FBUyxDQUFDO1FBQzFCLHdCQUFtQixHQUFDLGFBQWEsQ0FBQztRQUNsQyxnQkFBVyxHQUFTLFVBQVUsQ0FBQztJQXVDcEMsQ0FBQztJQXBDRyxrREFBaUIsR0FBakIsVUFBa0IsS0FBSztRQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsaURBQWdCLEdBQWhCLFVBQWlCLFNBQWdCO1FBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxtQkFBbUIsR0FBQyxXQUFXLENBQUM7SUFDekMsQ0FBQztJQUFBLENBQUM7SUFFRixrREFBaUIsR0FBakIsVUFBa0IsQ0FBUztRQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztRQUNqQyxJQUFJLENBQUMsbUJBQW1CLEdBQUMsYUFBYSxDQUFDO1FBRXZDLElBQUksUUFBUSxHQUE2QjtZQUNDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUM7WUFDN0MsSUFBSSxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVztZQUN4QixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDdEIsS0FBSyxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWTtZQUMxQixTQUFTLEVBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0I7WUFDbEMsU0FBUyxFQUFDLDJCQUEyQjtTQUNyQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBRXZDLENBQUM7SUFFRCx5Q0FBUSxHQUFSLFVBQVMsR0FBTztRQUNWLElBQUksUUFBUSxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ25DLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDM0IsR0FBRyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUUsR0FBRyxDQUFFLENBQUM7UUFDakMsSUFBSyxLQUFLLEdBQUcsVUFBVSxDQUFDO1FBQ3hCLEVBQUUsQ0FBQSxDQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdEIsUUFBUSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDN0IsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQztnQkFBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEQsQ0FBQztJQUNQLENBQUM7SUFFTCw2QkFBQztBQUFELENBM0NBLEFBMkNDLElBQUE7QUExQ2E7SUFBVCxhQUFNLEVBQUU7OytEQUFvRDtBQURwRCxzQkFBc0I7SUFObEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFdBQVcsRUFBRSxnQ0FBZ0M7UUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7S0FDL0MsQ0FBQztHQUNXLHNCQUFzQixDQTJDbEM7QUEzQ1ksd0RBQXNCIiwiZmlsZSI6ImFwcC92aWV3LWxheWVyL2NvbW1vbi12aWV3cy9ncmlkLWNyZWF0ZS1yb3cvZ3JpZC5jcmVhdGUucm93LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCxJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdGb3JtLCBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEdhcm1lbnRNb2RlbCB9IGZyb20gJy4uLy4uLy4uL2J1c2luZXNzLWxheWVyL21vZGVscyc7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnZ3JpZC1jcmVhdGUtcm93JyxcbiAgICB0ZW1wbGF0ZVVybDogJ2dyaWQuY3JlYXRlLnJvdy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2dyaWQuY3JlYXRlLnJvdy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgR3JpZENyZWF0ZVJvd0NvbXBvbmVudHtcbiAgICBAT3V0cHV0KCkgYWRkR2FybWVudE1vZGVsID0gbmV3IEV2ZW50RW1pdHRlcjxHYXJtZW50TW9kZWw+KCk7XG4gICAgIGxpdmVJbnB1dF9DbGFzcz0nbm9TdHlsZSc7XG4gICAgIHJldmVhbFB1Ymxpc2hfQ2xhc3M9J3VuLXJldmVhbGVkJztcbiAgICAgdXBkYXRlZFR5cGU6c3RyaW5nID0nUGh5c2ljYWwnO1xuXG5cbiAgICB1cGRhdGVHYXJtZW50VHlwZSh2YWx1ZSl7XG4gICAgICAgIHRoaXMudXBkYXRlZFR5cGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICB0dXJuUHVibGlzaGluZ09uKGdhcm1lbnRJZDpzdHJpbmcpe1xuICAgICAgICB0aGlzLmxpdmVJbnB1dF9DbGFzcyA9ICdpbnB1dC1vbic7XG4gICAgICAgIHRoaXMucmV2ZWFsUHVibGlzaF9DbGFzcz0nZG8tcmV2ZWFsJztcbiAgICB9O1xuXG4gICAgcHVibGlzaEdhcm1lbnRBZGQoZjogTmdGb3JtKXtcbiAgICAgICAgdGhpcy5saXZlSW5wdXRfQ2xhc3MgPSAnbm9TdHlsZSc7XG4gICAgICAgIHRoaXMucmV2ZWFsUHVibGlzaF9DbGFzcz0ndW4tcmV2ZWFsZWQnO1xuXG4gICAgICAgIGxldCB1cGRhdGVHTTpHYXJtZW50TW9kZWwgPTxHYXJtZW50TW9kZWw+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwMDAgLSAxKSkgKzEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6Zi52YWx1ZS5nYXJtZW50TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdGhpcy51cGRhdGVkVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6Zi52YWx1ZS5nYXJtZW50UHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmVudG9yeTpmLnZhbHVlLmdhcm1lbnRJbnZlbnRvcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbDonL2Fzc2V0cy9ib3d0aWUtdGh1bWIuanBlZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICB0aGlzLmFkZEdhcm1lbnRNb2RlbC5lbWl0KHVwZGF0ZUdNKVxuXG4gICAgfVxuXG4gICAgdmFsaWRhdGUoZXZ0OmFueSkge1xuICAgICAgICAgIGxldCB0aGVFdmVudCA9IGV2dCB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICAgICAgbGV0IGtleSA9IHRoZUV2ZW50LmtleUNvZGU7XG4gICAgICAgICAga2V5ID0gU3RyaW5nLmZyb21DaGFyQ29kZSgga2V5ICk7XG4gICAgICAgICAgbGV0ICByZWdleCA9IC9bMC05XXxcXC4vO1xuICAgICAgICAgIGlmKCAhcmVnZXgudGVzdChrZXkpICkge1xuICAgICAgICAgICAgdGhlRXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmKHRoZUV2ZW50LnByZXZlbnREZWZhdWx0KSB0aGVFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==
