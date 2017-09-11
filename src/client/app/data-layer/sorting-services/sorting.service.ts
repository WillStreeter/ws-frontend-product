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
    currentGarmentCollection:Subscription;
    portalState:Subscription;
    sortStateVal:any;

    currentPage:any;
    viewablePerPage:any;
    collectionId:string;
    constructor( private store: Store<fromRoot.State>){}



    sortGarmentCollection(products:GarmentModel[]){
       let collectionSubset;
        this.currentGarmentCollection = this.store.select(fromRoot.getGarmentsState).subscribe((val)=>{
            this.collectionId = val.currentCollectionId;
        });
        this.currentGarmentCollection.unsubscribe();

        this.sortState$= this.store.select(fromRoot.getPortalState).subscribe((val)=>{
              this.sortStateVal = val;
        });
        this.sortState$.unsubscribe();
        const collectionList= this.sortCollection(products);
        if(collectionList.length){
           const pages = (collectionList.length/this.sortStateVal.viewablePerPage);
           const start = (this.sortStateVal.currentPage - 1) * this.sortStateVal.viewablePerPage;
           const end = (this.sortStateVal.currentPage === pages)?
                             collectionList.length -(pages * start ):
                             this.sortStateVal.viewablePerPage;

           collectionSubset = collectionList.slice(start, end );

           console.log(" collectionSubsetsliced =", collectionSubset)
        }
        return Observable.of(<GarmentSortModel>{ collectionId:this.collectionId,
                                                  sortType:this.sortStateVal.sortType,
                                                  subSetCollection:collectionSubset,
                                                  products:collectionList });
     }


    sortCollection(collectionList:GarmentModel[]){

       if(SORT_BASES[this.sortStateVal.sortBase].dataType === "string"){
          collectionList = this.doAlphaSort(collectionList,  SORT_BASES[this.sortStateVal.sortBase].attr);
          if(  this.sortStateVal.sortDirection == "Descending"){
             collectionList = collectionList.reverse();
          }
       }else if(SORT_BASES[  this.sortStateVal.sortBase].dataType === "number"){
          collectionList = this.doNumericalSort(collectionList,   SORT_BASES[this.sortStateVal.sortBase].attr);
          if(  this.sortStateVal.sortDirection == "Descending"){
             collectionList = collectionList.reverse();
          }
       }else{
          collectionList = this.doTypeSort(collectionList,   SORT_BASES[this.sortStateVal.sortBase].attr);

       }

       return collectionList;

    }

    private doAlphaSort(list:any, base:string){
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

    private doTypeSort(list:GarmentModel[] , type:string){
      let Physical:GarmentModel[] = [];
      let Digital:GarmentModel[]  = [];
      let Service:GarmentModel[]  = [];

      list.forEach( (item)=>{
          console.log('item.type =', item.type)
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

      let typeSorted:GarmentModel[] ;

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