var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from '@angular/core';
let GridCreateRowComponent = class GridCreateRowComponent {
    constructor() {
        this.addGarmentModel = new EventEmitter();
        this.removeAddRow = new EventEmitter();
        this.liveInput_Class = 'noStyle';
        this.revealPublish_Class = 'un-revealed';
        this.updatedType = 'Physical';
    }
    updateGarmentType(value) {
        this.updatedType = value;
    }
    turnPublishingOn(garmentId) {
        this.liveInput_Class = 'input-on';
        this.revealPublish_Class = 'do-reveal';
    }
    ;
    publishGarmentAdd(f) {
        this.liveInput_Class = 'noStyle';
        this.revealPublish_Class = 'un-revealed';
        let updateGM = {
            id: Math.floor(Math.random() * (1000 - 1)) + 1,
            name: f.value.garmentName,
            type: this.updatedType,
            price: f.value.garmentPrice,
            inventory: f.value.garmentInventory,
            thumbnail: '/assets/bowtie-thumb.jpeg'
        };
        this.addGarmentModel.emit(updateGM);
    }
    exitAddRow() {
        this.removeAddRow.emit(false);
    }
    ;
};
__decorate([
    Output(),
    __metadata("design:type", Object)
], GridCreateRowComponent.prototype, "addGarmentModel", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], GridCreateRowComponent.prototype, "removeAddRow", void 0);
GridCreateRowComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'grid-create-row',
        templateUrl: 'grid.create.row.component.html',
        styleUrls: ['grid.create.row.component.css']
    })
], GridCreateRowComponent);
export { GridCreateRowComponent };
