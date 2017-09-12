import { Component,Input, Output, EventEmitter} from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { GarmentModel } from '../../../business-layer/models';



@Component({
    moduleId: module.id,
    selector: 'grid-create-row',
    templateUrl: 'grid.create.row.component.html',
    styleUrls: ['grid.create.row.component.css']
})
export class GridCreateRowComponent{
    @Output() addGarmentModel = new EventEmitter<GarmentModel>();
     liveInput_Class='noStyle';
     revealPublish_Class='un-revealed';
     updatedType:string ='Physical';


    updateGarmentType(value){
        this.updatedType = value;
    }

    turnPublishingOn(garmentId:string){
        this.liveInput_Class = 'input-on';
        this.revealPublish_Class='do-reveal';
    };

    publishGarmentAdd(f: NgForm){
        this.liveInput_Class = 'noStyle';
        this.revealPublish_Class='un-revealed';

        let updateGM:GarmentModel =<GarmentModel>{
                                                  id: Math.floor(Math.random() * (1000 - 1)) +1,
                                                  name:f.value.garmentName,
                                                  type: this.updatedType,
                                                  price:f.value.garmentPrice,
                                                  inventory:f.value.garmentInventory,
                                                  thumbnail:'/assets/bowtie-thumb.jpeg'
                                                 };
        this.addGarmentModel.emit(updateGM)

    }

    validate(evt:any) {
          let theEvent = evt || window.event;
          let key = theEvent.keyCode;
          key = String.fromCharCode( key );
          let  regex = /[0-9]|\./;
          if( !regex.test(key) ) {
            theEvent.returnValue = false;
            if(theEvent.preventDefault) theEvent.preventDefault();
          }
    }

}
