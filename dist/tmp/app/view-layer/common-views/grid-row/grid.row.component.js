var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
let GridRowComponent = class GridRowComponent {
    constructor() {
        this.updateGarmentModel = new EventEmitter();
        this.addRowState = new EventEmitter();
        this.isChecked = false;
        this.isReadOnly = true;
        this.liveInput_Class = 'noStyle';
        this.revealPublish_Class = 'un-revealed';
        this.updatedType = '';
    }
    get id() {
        return this.garment.id;
    }
    get name() {
        return this.garment.name;
    }
    get type() {
        this.updatedType = this.garment.type;
        return this.updatedType;
    }
    get price() {
        return "$" + this.garment.price;
    }
    get inventory() {
        return this.garment.inventory;
    }
    get thumbnail() {
        return this.garment.thumbnail;
    }
    updateGarmentType(value) {
        this.updatedType = value;
    }
    turnPublishingOn(garmentId) {
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
    }
    ;
    publishGarmentUpdate(f) {
        this.isReadOnly = true;
        this.isChecked = false;
        this.liveInput_Class = 'noStyle';
        this.revealPublish_Class = 'un-revealed';
        let updateGM = {
            id: this.garment.id,
            name: f.value.garmentName,
            type: this.updatedType,
            price: parseInt((f.value.garmentPrice).replace(/(?:[a-zA-Z]|\s|,|\$)+/ig, '')),
            inventory: parseInt(f.value.garmentInventory),
            thumbnail: this.garment.thumbnail
        };
        this.updateGarmentModel.emit(updateGM);
    }
    updateEditRowState() {
        this.addRowState.emit(this.isChecked);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], GridRowComponent.prototype, "garment", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], GridRowComponent.prototype, "rowUpdateState", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], GridRowComponent.prototype, "updateGarmentModel", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], GridRowComponent.prototype, "addRowState", void 0);
GridRowComponent = __decorate([
    Component({
        moduleId: module.id,
        selector: 'grid-row',
        templateUrl: 'grid.row.component.html',
        styleUrls: ['grid.row.component.css']
    })
], GridRowComponent);
export { GridRowComponent };
