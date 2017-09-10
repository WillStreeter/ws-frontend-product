
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GridRowComponent  } from './grid-row.component';
import { MaterialModule } from '@angular/material';


@NgModule({
    imports: [ CommonModule,
               MaterialModule,
               FlexLayoutModule ],
    declarations: [ GridRowComponent ],
    exports: [GridRowComponent]
})

export class GridRowModule { }
