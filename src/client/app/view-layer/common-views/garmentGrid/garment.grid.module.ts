
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { GarmentGridComponent } from './garment.grid.component';
import { GridRowComponent } from '../grid-row/grid.row.component';
import { MaterialModule } from '@angular/material';


@NgModule({
    imports: [ RouterModule,
               RouterModule,
               FormsModule,
        ReactiveFormsModule,
               CommonModule,
               MaterialModule,
               FlexLayoutModule ],
    declarations: [ GarmentGridComponent,GridRowComponent ],
    exports: [GarmentGridComponent, GridRowComponent]
})

export class GarmentGridModule { }
