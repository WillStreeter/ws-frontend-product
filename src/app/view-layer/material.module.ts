/**
 * Created by willstreeter on 9/18/17.
 */
import { NgModule } from '@angular/core';

import {
  MdButtonModule,
  MdButtonToggleModule,
  MdCheckboxModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdCardModule
} from '@angular/material';

@NgModule({
  imports: [
  MdButtonModule,
  MdButtonToggleModule,
  MdCheckboxModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdCardModule
  ],
  exports: [
  MdButtonModule,
  MdButtonToggleModule,
  MdCheckboxModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdCardModule
  ]
})
export class MaterialModule {}
