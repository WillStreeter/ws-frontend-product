"use strict";
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
GridToolbarComponent.decorators = [
    { type: core_1.Component, args: [{
                moduleId: module.id,
                selector: 'grid-toolbar',
                templateUrl: 'grid.toolbar.component.html',
                styleUrls: ['grid.toolbar.component.css']
            },] },
];
GridToolbarComponent.ctorParameters = function () { return []; };
GridToolbarComponent.propDecorators = {
    'updateSort': [{ type: core_1.Output },],
};
exports.GridToolbarComponent = GridToolbarComponent;
//# sourceMappingURL=grid.toolbar.component.js.map