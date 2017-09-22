import { Component,Input, Output, EventEmitter, OnChanges, SimpleChanges, } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { GarmentModel } from '../../../business-layer/models';



@Component({
    moduleId: module.id,
    selector: 'grid-row',
    templateUrl: 'grid.row.component.html',
    styleUrls: ['grid.row.component.scss']
})
export class GridRowComponent  implements OnChanges{
    @Input()  garment:GarmentModel;
    @Input()  rowUpdateState:boolean;
    @Output() updateGarmentModel = new EventEmitter<GarmentModel>();
    @Output() addRowState = new EventEmitter<boolean>();
    isChecked:boolean = false;
    isReadOnly:boolean = true;
    liveInput_Class='noStyle';
    revealPublish_Class='un-revealed';
    updatedType:string ='';
    originalGarment:GarmentModel;
    formattedAmount: string = '';

     ngOnChanges(changes: SimpleChanges) {
       if(changes['garment']){
               const priceConversion= parseFloat(changes['garment'].currentValue.price).toFixed(2);
               this.formattedAmount =  '$'+ priceConversion;
               this.updatedType =  changes['garment'].currentValue.type;
               this.originalGarment = <GarmentModel>{
                                                          id: changes['garment'].currentValue.id,
                                                          name:changes['garment'].currentValue.name,
                                                          type: changes['garment'].currentValue.type,
                                                          price:changes['garment'].currentValue.price,
                                                          inventory:changes['garment'].currentValue.inventory,
                                                          thumbnail:changes['garment'].currentValue.thumbnail
                                                    };
       }
    }

    updateGarmentType(value){
        this.updatedType = value;
    }


    turnPublishingOn(garmentId:number){
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
        this.updateEditRowState();
    };

    publishGarmentUpdate(f: NgForm){
        this.isReadOnly = true;
        this.isChecked= false;
        this.liveInput_Class = 'noStyle';
        this.revealPublish_Class='un-revealed';
        this.formattedAmount = '$'+(f.value.garmentPrice).replace(/(?:[a-zA-Z]|\s|,|\$)+/ig,'');
        const priceConversion= parseFloat((f.value.garmentPrice).replace(/(?:[a-zA-Z]|\s|,|\$)+/ig,''));
        let updateGM:GarmentModel = <GarmentModel>{
                                                      id:this.garment.id,
                                                      name:f.value.garmentName,
                                                      type: this.updatedType,
                                                      price: parseFloat(priceConversion.toFixed(2)),
                                                      inventory:parseInt(f.value.garmentInventory),
                                                      thumbnail:this.garment.thumbnail
                                                  };
        this.updateGarmentModel.emit(updateGM)

    }

    private updateEditRowState(){
        this.addRowState.emit(this.isChecked)

    }

}
