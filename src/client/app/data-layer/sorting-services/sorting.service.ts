/**
 * Created by willstreeter on 9/8/17.
 */
import { Store } from "@ngrx/store";
import { Subscription } from 'rxjs/Subscription';
import * as fromRoot from '../ngrx-data/reducers/index';
import { GarmentModel, GarmentCollectionModel } from "../../business-layer/models/index";
import { SORT_BASES  } from "../../business-layer/shared-types/sorters/sort.config.types";

@Injectable()
export class SortingServices {

    sortState$:Subscription;
    constructor( private store: Store<fromRoot.State>){}



    private doAlphaSort(list:Array<GarmentModel>, base:string){
       if(base)
        return list.sort((firstTerm, secondTerm) =>(firstTerm[base].localeCompare(secondTerm[base])));
    }

    private doNumericalSort(list:Array<GarmentModel>, base:string){
        return list.sort((firstTerm, secondTerm) =>(firstTerm[base] - (secondTerm)[base]));
    }

    private doTypeSort(list:Array<GarmentModel>, type:string){
      let Physical:Array<GarmentModel> = [];
      let Digital:Array<GarmentModel>  = [];
      let Service:Array<GarmentModel>  = [];

      list.forEach( (item)=>{
          switch(item.type){
              case "Physical":
                Physical.push(item);
              break;
              case "Digital":
                Digital.push(item);
              break;
              case "Service":
                Service.push(item);
              break;
          }
      });

      let typeSorted:Array<GarmentModel>;

      switch(type){
          case "Physical":
              typeSorted= [...Physical,...Digital, ...Service];
          break;
          case "Digital":
              typeSorted= [...Digital,...Physical, ...Service];
          break;
          case "Service":
              typeSorted= [...Service,...Physical, ...Digital];
          break;
      }
      return typeSorted;
    }


    sortGarmentCollection(garmentCollection:GarmentCollectionModel){
        return garmentCollection.products =  this.sortCollection(garmentCollection.products);
    }


    sortCollection(collectionList:Array<GarmentModel>){
       let sortStateVal:any;
       this.sortState$= this.store.select(fromRoot.getPortalState).subcribe((val)=>{
            sortStateVal = val;
       });
       this.sortState$.unsubscribe();

       if(SORT_BASES[sortStateVal.sortBase] === "string"){
          collectionList = this.doAlphaSort(collectionList, sortStateVal.sortBase);
          if(sortStateVal.sortType == "Descending"){
             collectionList = collectionList.reverse();
          }
       }else if(SORT_BASES[sortStateVal.sortBase] === "number"){
          collectionList = this.doNumericalSort(collectionList, sortStateVal.sortBase);
          if(sortStateVal.sortType == "Descending"){
             collectionList = collectionList.reverse();
          }
       }else{
          collectionList = this.doTypeSort(collectionList, sortStateVal.sortBase);

       }

       return collectionList;

    }

}