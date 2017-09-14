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
        template: "<!-- ngrx smart-container-->   <div fxLayout=\"row\" class=\"grid-create-row\">     <form #f=\"ngForm\" (ngSubmit)=\"publishGarmentAdd(f)\" novalidate>      <div fxLayout=\"column\" fxFlex=\"10\" >          <button type=\"button\"  md-icon-button  class='exit-add'(click)=\"exitAddRow()\">              <md-icon class=\"md-24\" aria-label=\"remove add row\">clear</md-icon>          </button>      </div>      <div class=\"garment-name\" fxLayout=\"column\" fxFlex=\"40\">          <input id=\"garmentName\"  ngModel placeholder=\"Garment Name\"  name=\"garmentName\">      </div>      <div class=\"garment-type\" fxLayout=\"column\" fxFlex=\"20\">                  <div class=\"garment-toolbar-type\" fxLayout=\"column\" fxFlex=\"20\">                     <button md-button type=\"button\"  [mdMenuTriggerFor]=\"type\" class=\"type-btn-trigger\">                          {{ updatedType}}                     </button>                     <md-menu #type=\"mdMenu\">                       <button md-menu-item type=\"button\" (click)=\"updateGarmentType('Physical')\">Physical</button>                       <button md-menu-item type=\"button\" (click)=\"updateGarmentType('Digital')\">Digital</button>                       <button md-menu-item type=\"button\" (click)=\"updateGarmentType('Service')\">Service</button>                     </md-menu>                  </div>      </div>      <div class=\"garment-price\" fxLayout=\"column\" fxFlex=\"15\">          <input id=\"garmentPrice\" ngModel  placeholder=\"price\" name=\"garmentPrice\">      </div>      <div class=\"garment-inventory\" fxLayout=\"column\" fxFlex=\"10\">          <input id=\"garmentInventory\" ngModel  placeholder=\"stock\" name=\"garmentInventory\">      </div>       <div fxLayout=\"column\" fxFlex=\"5\">                 <button type=\"submit\"                        class=\"save-button\">                        <md-icon class=\"save-icon\" aria-label=\"save changes\" >save</md-icon>                 </button>      </div>     </form>   </div>",
        styles: [".grid-create-row{border-bottom-style:solid;border-width:1px;border-bottom-color:#dbdbdb;min-height:55px}md-checkbox{margin:auto;color:#0082cb}.exit-add{padding-top:10px;color:#0082cb}.input-on{border-color:#c4c4c4}.img-thumb{width:35px;height:35px;margin:auto}.img-thumb img{width:100%;height:auto;border:1.75px solid #dbdbdb}.garment-inventory,.garment-name,.garment-price,.garment-type{margin:auto}input{border:1px solid transparent;padding:5px;padding-left:2px;margin:10px;font-size:1em;color:#646464}.garment-price input,.garment-type input{text-align:left}.garment-inventory input{text-align:right}.un-revealed{visibility:hidden}.do-reveal{visibility:visible}.save-button{background-color:transparent;border:none;padding-top:15px;color:#0082cb;width:20px} /*# sourceMappingURL=/app/view-layer/common-views/grid-create-row/grid.create.row.component.css.map */"]
    })
], GridCreateRowComponent);
exports.GridCreateRowComponent = GridCreateRowComponent;
