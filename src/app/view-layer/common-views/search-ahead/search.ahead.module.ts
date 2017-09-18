/**
 * Created by willstreeter on 9/10/17.
 */

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchAheadComponent } from './search.ahead.component';
import { MaterialModule } from '../../material.module';

@NgModule({
    imports: [  FormsModule,
        ReactiveFormsModule,
               CommonModule,
               MaterialModule,
               FlexLayoutModule ],
    declarations: [ SearchAheadComponent ],
    exports: [SearchAheadComponent]
})

export class SearchAheadModule { }
