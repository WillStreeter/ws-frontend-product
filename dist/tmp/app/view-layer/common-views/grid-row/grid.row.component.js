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
        template: "<!-- ngrx smart-container-->  <form  fxLayout=\"row\"            class=\"grid-row\" #f=\"ngForm\" (ngSubmit)=\"publishGarmentUpdate(f)\" novalidate  >      <div fxLayout=\"column\" fxFlex=\"5\">           <md-checkbox [checked]=\"isChecked\" [disabled]=\"rowUpdateState\"                (change)=\"turnPublishingOn(garment.id)\"></md-checkbox>      </div>      <div fxLayout=\"column\" fxFlex=\"5\">           <div class=\"img-thumb\">                <img src=\"{{thumbnail}}\" alt=\"{{name}}\">           </div>      </div>      <div class=\"garment-name\" fxLayout=\"column\" fxFlex=\"30\">          <input id=\"garmentName\"  [className]=\"liveInput_Class\"                  [(ngModel)]=\"garment.name\" [readonly]=\"isReadOnly\"  placeholder=\"\"  name=\"garmentName\">      </div>      <div class=\"garment-type\" fxLayout=\"column\" fxFlex=\"15\">          <div *ngIf=\"isReadOnly==false\">                   <div class=\"garment-toolbar-type\" fxLayout=\"column\" fxFlex=\"15\">                     <button md-button type=\"button\"  [mdMenuTriggerFor]=\"type\" class=\"type-btn-trigger\">                          {{ updatedType}}                     </button>                     <md-menu #type=\"mdMenu\">                       <button md-menu-item type=\"button\" (click)=\"updateGarmentType('Physical')\">Physical</button>                       <button md-menu-item type=\"button\" (click)=\"updateGarmentType('Digital')\">Digital</button>                       <button md-menu-item type=\"button\" (click)=\"updateGarmentType('Service')\">Service</button>                     </md-menu>                  </div>          </div>          <input *ngIf=\"isReadOnly==true\" id=\"garmentType\"  [(ngModel)]=\"type\" [readonly]=\"isReadOnly\"  placeholder=\"\" name=\"garmentType\">      </div>      <div class=\"garment-price\" fxLayout=\"column\" fxFlex=\"10\">          <input id=\"garmentPrice\" [className]=\"liveInput_Class\"           [(ngModel)]=\"garment.price\" [readonly]=\"isReadOnly\"  placeholder=\"\" name=\"garmentPrice\">      </div>      <div class=\"garment-inventory\" fxLayout=\"column\" fxFlex=\"10\">          <input id=\"garmentInventory\" [className]=\"liveInput_Class\"             [(ngModel)]=\"garment.inventory\" [readonly]=\"isReadOnly\"  placeholder=\"\" name=\"garmentInventory\">      </div>       <div fxLayout=\"column\" fxFlex=\"5\"  [className]=\"revealPublish_Class\">         <div>                 <button type=\"submit\"  id=\"{{garment.id}}\"                        class=\"save-button\">                        <md-icon class=\"save-icon\" aria-label=\"save changes\" >save</md-icon>                 </button>         </div>      </div>  </form>",
        styles: [".grid-row{border-bottom-style:solid;border-width:1px;border-bottom-color:#dbdbdb;min-height:55px}md-checkbox{margin:auto;color:#0082cb}.input-on{border-color:#c4c4c4}.img-thumb{width:35px;height:35px;margin:auto}.img-thumb img{width:100%;height:auto;border:1.75px solid #dbdbdb}.garment-inventory,.garment-name,.garment-price,.garment-type{margin:auto}input{border:1px solid transparent;padding:5px;padding-left:2px;margin:10px;font-size:1em;color:#646464}.garment-inventory input,.garment-price input,.garment-type input{text-align:left}.un-revealed{visibility:hidden}.do-reveal{visibility:visible}.save-button{background-color:transparent;border:none;padding-top:15px;color:#0082cb;width:20px} /*# sourceMappingURL=/app/view-layer/common-views/grid-row/grid.row.component.css.map */"]
    })
], GridRowComponent);
exports.GridRowComponent = GridRowComponent;
