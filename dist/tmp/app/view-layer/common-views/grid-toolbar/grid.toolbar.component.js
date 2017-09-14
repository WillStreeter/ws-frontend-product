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
        template: "<!-- Created by willstreeter on 9/10/17. -->  <div fxLayout=\"row\" class=\"grid-toolbar-row\">      <div fxLayout=\"column\" fxFlex=\"5\">           <md-checkbox></md-checkbox>      </div>      <div class=\"garment-toolbar-name\" fxLayout=\"column\" fxFlex=\"45\">         <md-button-toggle class=\"toolbar-name\" (click)=\"updateGridSortBase('Name')\"         (dblclick)=\"updateChangeDirection()\">               Name              <i class=\"material-icons\">arrow_drop_down</i>              <i class=\"material-icons arrw-hidden\">arrow_drop_up</i>         </md-button-toggle>         <span>         </span>      </div>      <div class=\"garment-toolbar-type\" fxLayout=\"column\" fxFlex=\"20\">         <button md-button [mdMenuTriggerFor]=\"type\" class=\"type-btn-trigger\">              Type         </button>         <md-menu #type=\"mdMenu\">           <button md-menu-item  (click)=\"updateGridSortBase('Physical')\">Physical</button>           <button md-menu-item  (click)=\"updateGridSortBase('Digital')\">Digital</button>           <button md-menu-item  (click)=\"updateGridSortBase('Service')\">Service</button>         </md-menu>      </div>      <div class=\"garment-toolbar-price\" fxLayout=\"column\" fxFlex=\"10\">         <md-button-toggle (click)=\"updateGridSortBase('Price')\"         (dblclick)=\"updateChangeDirection()\">              Price              <i class=\"material-icons\">arrow_drop_down</i>              <i class=\"material-icons arrw-hidden\">arrow_drop_up</i>         </md-button-toggle>      </div>      <div class=\"garment-toolbar-inventory\" fxLayout=\"column\" fxFlex=\"10\">         <md-button-toggle (click)=\"updateGridSortBase('Inventory')\"         (dblclick)=\"updateChangeDirection()\">              Inventory              <i class=\"material-icons\">arrow_drop_down</i>              <i class=\"material-icons arrw-hidden\">arrow_drop_up</i>         </md-button-toggle>      </div>      <div fxLayout=\"column\" fxFlex=\"5\"></div> </div>",
        styles: [".grid-toolbar-row{border-bottom-style:solid;border-width:1px;border-bottom-color:#dbdbdb;min-height:55px}md-checkbox{margin:auto}.arrw-hidden{display:none}.garment-toolbar-inventory,.garment-toolbar-name,.garment-toolbar-price,.garment-toolbar-type{margin:auto}.type-btn-trigger{text-align:left;padding-left:10px}button .mat-button.cdk-focused.cdk-mouse-focused{background-color:transparent!important}.mat-button-toggle-checked{background-color:transparent}.mat-button-toggle-label-content{padding-left:1px!important} /*# sourceMappingURL=/app/view-layer/common-views/grid-toolbar/grid.toolbar.component.css.map */"]
    })
], GridToolbarComponent);
exports.GridToolbarComponent = GridToolbarComponent;
