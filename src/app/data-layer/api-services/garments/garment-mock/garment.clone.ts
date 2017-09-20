/**
 * Created by willstreeter on 9/19/17.
 */
import { GarmentModel, GarmentCollectionModel, GarmentSortModel } from '../../../business-layer/models/index';


export class Garment {

  private _garmentModel:GarmentModel;

  constructor(garmentModel:GarmentModel) {
         this._garmentModel = garmentModel;
  }

  get id(): number {
    return this._garmentModel.id;
  }

  get name(): string {
    return this._garmentModel.name;
  }


  get type(): string {
    return this._garmentModel.type;
  }

  get price(): number {
    return this._garmentModel.price;
  }


  get inventory(): number {
    return this._garmentModel.inventory;
  }


  get thumbnail(): string {
    return this._garmentModel.thumbnail;
  }

  clone() { return new Garment(this._garmentModel)}
}