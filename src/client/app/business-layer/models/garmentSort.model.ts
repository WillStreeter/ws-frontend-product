
import { GarmentModel} from './garment.model';

export interface GarmentSortModel {
    //garmentCollectonModel id
    collectionId:string;
    sortType:string;
    products:GarmentModel[];
}