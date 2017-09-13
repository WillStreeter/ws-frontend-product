var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlMessagesComponent } from '../../common-views/custom-validators/control.messaging.component';
import { ValidationService } from '../../../business-layer/validators/services/validation.service';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GarmentGridComponent } from './garment.grid.component';
import { GridRowComponent } from '../grid-row/grid.row.component';
import { GridCreateRowComponent } from '../grid-create-row/grid.create.row.component';
import { GridToolbarComponent } from '../grid-toolbar/grid.toolbar.component';
import { MaterialModule } from '@angular/material';
let GarmentGridModule = class GarmentGridModule {
};
GarmentGridModule = __decorate([
    NgModule({
        imports: [FormsModule,
            ReactiveFormsModule,
            CommonModule,
            MaterialModule,
            FlexLayoutModule],
        providers: [ValidationService],
        declarations: [GarmentGridComponent,
            ControlMessagesComponent,
            GridCreateRowComponent,
            GridToolbarComponent,
            GridRowComponent],
        exports: [GarmentGridComponent,
            ControlMessagesComponent,
            GridCreateRowComponent,
            GridToolbarComponent,
            GridRowComponent]
    })
], GarmentGridModule);
export { GarmentGridModule };
