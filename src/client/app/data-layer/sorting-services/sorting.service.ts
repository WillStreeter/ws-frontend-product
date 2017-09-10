/**
 * Created by willstreeter on 9/8/17.
 */
import {Injectable} from "@angular/core";
import { Store } from "@ngrx/store";
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import * as fromRoot from '../ngrx-data/reducers/index';
import { GarmentModel, GarmentCollectionModel, GarmentSortModel } from "../../business-layer/models/index";
import { SORT_BASES  } from "../../business-layer/shared-types/sorters/sort.config.types";


@Injectable()
export class SortingServices {

    sortState$:Subscription;
    currentCollectionId$:Subscription;
    sortStateVal:any;
    collectionId:string;
    constructor( private store: Store<fromRoot.State>){}



    sortGarmentCollection(products:GarmentModel[]){
       console.log('sortGarmentCollection = ', products)
        const collectionList= this.sortCollection(products);
        return Observable.of(<GarmentSortModel>{collectionId:this.collectionId,
                                  sortType:this.sortStateVal.sortType,
                                  products:collectionList });
    }


    sortCollection(collectionList:GarmentModel[]){

       this.currentCollectionId$ = this.store.select(fromRoot.getCurrentCollectionId).subscribe((val)=>{
            this.collectionId = val;
       });
        this.currentCollectionId$.unsubscribe();

       this.sortState$= this.store.select(fromRoot.getPortalState).subscribe((val)=>{
              this.sortStateVal = val;
       });
       this.sortState$.unsubscribe();

       if(SORT_BASES[this.sortStateVal.sortBase].dataType === "string"){
          collectionList = this.doAlphaSort(collectionList,  SORT_BASES[this.sortStateVal.sortBase].attr);
          if(  this.sortStateVal.sortType == "Descending"){
             collectionList = collectionList.reverse();
          }
       }else if(SORT_BASES[  this.sortStateVal.sortBase].dataType === "number"){
          collectionList = this.doNumericalSort(collectionList,   SORT_BASES[this.sortStateVal.sortBase].attr);
          if(  this.sortStateVal.sortType == "Descending"){
             collectionList = collectionList.reverse();
          }
       }else{
          collectionList = this.doTypeSort(collectionList,   SORT_BASES[this.sortStateVal.sortBase].attr);

       }

       return collectionList;

    }

    private doAlphaSort(list:any, base:string){
    console.log('list is =', list)
    console.log('base is =', base)
    let value:any = [...list].sort((firstTerm, secondTerm):number =>{
            const a = firstTerm[base].toLowerCase();
            const b = secondTerm[base].toLowerCase();
            if (a > b) {
                return 1;
            }

            if (a < b) {
                return -1;
            }

            return 0;
            });
     return value;
    }

    private doNumericalSort(list:any, base:string){
        return  [...list].sort((firstTerm, secondTerm) =>(firstTerm[base] - (secondTerm)[base]));
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


}