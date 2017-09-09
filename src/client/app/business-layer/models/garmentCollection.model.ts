/**
 * Created by willstreeter on 9/8/17.
 */

import { GarmentModel} from './garment.model';

export interface GarmentCollectionModel {
    id:string;
    products:GarmentModel[];
}