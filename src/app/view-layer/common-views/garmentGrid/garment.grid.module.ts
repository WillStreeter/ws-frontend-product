
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlMessagesComponent } from '../custom-validators/control.messaging.component';
import { ValidationService } from '../../../business-layer/validators/services/validation.service';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GarmentGridComponent } from './garment.grid.component';
import { GridRowComponent } from '../grid-row/grid.row.component';
import { GridCreateRowComponent } from '../grid-create-row/grid.create.row.component';
import { GridToolbarComponent } from '../grid-toolbar/grid.toolbar.component';
import { MaterialModule } from '@angular/material';


@NgModule({
    imports: [  FormsModule,
        ReactiveFormsModule,
               CommonModule,
               MaterialModule,
               FlexLayoutModule ],
    providers: [ ValidationService ],
    declarations: [ GarmentGridComponent,
                    ControlMessagesComponent,
                    GridCreateRowComponent,
                    GridToolbarComponent,
                    GridRowComponent ],
    exports: [GarmentGridComponent,
              ControlMessagesComponent,
              GridCreateRowComponent,
              GridToolbarComponent,
              GridRowComponent]
})

export class GarmentGridModule { }
