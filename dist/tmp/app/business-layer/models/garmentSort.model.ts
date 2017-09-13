
import { GarmentModel} from './garment.model';

export interface GarmentSortModel {
    //garmentCollectonModel id
    collectionId:string;
    sortType:string;
    sortBase:string;
    subSetCollection:GarmentModel[];
    products:GarmentModel[];
}