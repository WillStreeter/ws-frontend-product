"use strict";
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
            price: (f.value.garmentPrice).replace(/(?:[a-zA-Z]|\s|,|\$)+/ig, ''),
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
GridRowComponent.decorators = [
    { type: core_1.Component, args: [{
                moduleId: module.id,
                selector: 'grid-row',
                templateUrl: 'grid.row.component.html',
                styleUrls: ['grid.row.component.css']
            },] },
];
GridRowComponent.ctorParameters = function () { return []; };
GridRowComponent.propDecorators = {
    'garment': [{ type: core_1.Input },],
    'rowUpdateState': [{ type: core_1.Input },],
    'updateGarmentModel': [{ type: core_1.Output },],
    'addRowState': [{ type: core_1.Output },],
};
exports.GridRowComponent = GridRowComponent;
//# sourceMappingURL=grid.row.component.js.map