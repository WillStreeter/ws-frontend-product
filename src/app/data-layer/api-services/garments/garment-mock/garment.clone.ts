/**
 * Created by willstreeter on 9/19/17.
 */
import { GarmentModel, GarmentCollectionModel, GarmentSortModel } from '../../../../business-layer/models/index';


export class Garment {

    id:number;
    name:string;
    type:string;
    price:number;
    inventory:number;
    thumbnail:string;

	constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}