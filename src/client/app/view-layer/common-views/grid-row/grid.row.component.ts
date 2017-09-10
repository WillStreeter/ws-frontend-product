import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GarmentModel } from '../../../business-layer/models';



@Component({
    moduleId: module.id,
    selector: 'grid-row',
    templateUrl: 'grid.row.component.html',
    styleUrls: ['grid.row.component.css']
})
export class GridRowComponent{
    @Input() garment:GarmentModel;
    isReadOnly:boolean = true;


    get id() {
      return this.garment.id;
    }

    get name() {
      return this.garment.name;
    }

    get type() {
      return this.garment.type;
    }

    get price() {
       return "$"+this.garment.price;
    }

    get inventory(){
        return this.garment.inventory;
    }
    get thumbnail(){
       return this.garment.thumbnail;
    }

}
