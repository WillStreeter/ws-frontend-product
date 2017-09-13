"use strict";
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
GridCreateRowComponent.decorators = [
    { type: core_1.Component, args: [{
                moduleId: module.id,
                selector: 'grid-create-row',
                templateUrl: 'grid.create.row.component.html',
                styleUrls: ['grid.create.row.component.css']
            },] },
];
GridCreateRowComponent.ctorParameters = function () { return []; };
GridCreateRowComponent.propDecorators = {
    'addGarmentModel': [{ type: core_1.Output },],
    'removeAddRow': [{ type: core_1.Output },],
};
exports.GridCreateRowComponent = GridCreateRowComponent;
//# sourceMappingURL=grid.create.row.component.js.map