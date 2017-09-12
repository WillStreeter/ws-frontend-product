import { Component,Input, Output, EventEmitter} from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { GarmentModel } from '../../../business-layer/models';



@Component({
    moduleId: module.id,
    selector: 'grid-row',
    templateUrl: 'grid.row.component.html',
    styleUrls: ['grid.row.component.css']
})
export class GridRowComponent{
    @Input() garment:GarmentModel;
    @Output() updateGarmentModel = new EventEmitter<GarmentModel>();
    isChecked:boolean = false;
    isReadOnly:boolean = true;
     liveInput_Class='noStyle';
     revealPublish_Class='un-revealed';
     updatedType:string ='';


    get id() {
      return this.garment.id;
    }

    get name() {
      return this.garment.name;
    }

    get type() {
       this.updatedType = this.garment.type
        return  this.updatedType;
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


    updateGarmentType(value){
        this.updatedType = value;
    }


    turnPublishingOn(garmentId:string){
        this.isChecked = !this.isChecked ;
        if(this.isChecked){
            this.isReadOnly = false;
            this.liveInput_Class = 'input-on';
            this.revealPublish_Class='do-reveal';
        }else{
            this.isReadOnly = true;
            this.liveInput_Class = 'noStyle';
            this.revealPublish_Class='un-revealed';
        }
    };

    publishGarmentUpdate(f: NgForm){
        this.isReadOnly = true;
        this.isChecked= false;
        this.liveInput_Class = 'noStyle';
        this.revealPublish_Class='un-revealed';

        let updateGM:GarmentModel =<GarmentModel>{
                                                  id:this.garment.id,
                                                  name:f.value.garmentName,
                                                  type: this.updatedType,
                                                  price:f.value.garmentPrice,
                                                  inventory:f.value.garmentInventory,
                                                  thumbnail:this.garment.thumbnail
                                                 };
        this.updateGarmentModel.emit(updateGM)

    }

}
