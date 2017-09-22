import { Component,Input, Output, EventEmitter} from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { GarmentModel } from '../../../business-layer/models';



@Component({
    moduleId: module.id,
    selector: 'grid-create-row',
    templateUrl: 'grid.create.row.component.html',
    styleUrls: ['grid.create.row.component.scss']
})
export class GridCreateRowComponent{
    @Output() addGarmentModel = new EventEmitter<GarmentModel>();
    @Output() removeAddRow = new EventEmitter<boolean>();

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

        let updateGM:any = Object.assign({}, {
                                              name:f.value.garmentName,
                                              type: this.updatedType,
                                              price:f.value.garmentPrice,
                                              inventory:f.value.garmentInventory,
                                              thumbnail:'/assets/images/mock-thumbs/bowtie-thumb.jpeg'
                                             });

        this.addGarmentModel.emit(updateGM)

    }

    exitAddRow(){
        this.removeAddRow.emit(false)
    };

}
