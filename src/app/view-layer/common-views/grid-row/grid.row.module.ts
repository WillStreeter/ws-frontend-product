
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GridRowComponent  } from './grid.row.component';
import { MaterialModule } from '@angular/material';


@NgModule({
    imports: [ CommonModule,
               MaterialModule,
               FormsModule,
               FlexLayoutModule ],
    declarations: [ GridRowComponent ],
    exports: [GridRowComponent]
})

export class GridRowModule { }
