/**
 * Created by willstreeter on 9/10/17.
 */
import { Component,Output, EventEmitter  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { MdButtonToggle } from '@angular/material';
import { MdMenu } from '@angular/material';
import { SortRequestModel } from '../../../business-layer/models';




@Component({
    moduleId: module.id,
    selector: 'grid-toolbar',
    templateUrl: 'grid.toolbar.component.html',
    styleUrls: ['grid.toolbar.component.scss']
})
export class GridToolbarComponent {
     @Output() updateSort = new EventEmitter<SortRequestModel>();


    updateChangeDirection():void{
        let newSort:SortRequestModel =<SortRequestModel>{
                                                          directionChange:true,
                                                          base:'',
                                                          direction:''
                                                         };
        this.updateSort.emit(newSort )
      }

    updateGridSortBase(baseId:string):void{
        let newSort:SortRequestModel =<SortRequestModel>{
                                                          directionChange:false,
                                                          base:baseId,
                                                          direction:''
                                                         };
        this.updateSort.emit(newSort )
    }
}
