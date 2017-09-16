import { GarmentModel} from './garment.model';

export interface GarmentAddModel {
    //garmentCollectonModel id
    collectionId:string;
    product:GarmentModel;
}
