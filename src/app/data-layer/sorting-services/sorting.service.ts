/**
 * Created by willstreeter on 9/8/17.
 */
import {Injectable} from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import * as fromRoot from '../ngrx-data/reducers/index';
import { GarmentModel, GarmentCollectionModel, GarmentSortModel } from '../../business-layer/models/index';
import { SORT_BASES  } from '../../business-layer/shared-types/sorters/sort.config.types';

@Injectable()
export class SortingServices {
    private sortState$:Subscription;
    private garmentStore$:Subscription;
    private currentGarmentCollection:GarmentCollectionModel;
    private garmentProducts:GarmentModel[];
    private sortStateVal:any;
    private currentPage:any;
    private viewablePerPage:any;
    private collectionId:string;

    constructor( private store: Store<fromRoot.State>){}

    getCollectionSubset(){
        this.setMostCurrentStoreValues();
        let collectionSubset = this.createGarmentSubSet();
        return Observable.of(<GarmentSortModel>{  collectionId:this.collectionId,
            sortType:this.sortStateVal.sortType,
            subSetCollection:collectionSubset,
            garments:this.garmentProducts })
    }

    sortGarmentCollection(){
        this.setMostCurrentStoreValues();
        this.sortCollection();
        let collectionSubset = this.createGarmentSubSet();
        return Observable.of(<GarmentSortModel>{  collectionId:this.collectionId,
                                                  sortType:this.sortStateVal.sortType,
                                                  subSetCollection:collectionSubset,
                                                  garments:this.garmentProducts });
     }

    searchGarmentCollection(searchTerm:string){
         this.setMostCurrentStoreValues();
         let termsInset:any[] = this.findTermsInCollectionNames(searchTerm);
         let clonedGM:GarmentModel[] = [...this.garmentProducts];
         termsInset.forEach( (item, index)=>{
             this.moveElementsInList(item.index, index, clonedGM)
         });
         return Observable.of(<GarmentSortModel>{  collectionId:this.collectionId,
             sortType:this.sortStateVal.sortType,
             subSetCollection:clonedGM,
             garments:this.garmentProducts });
    }

    private findTermsInCollectionNames(searchTerm:string){
           let stringObjects:any = { rank:-1, index:-1  };
           let termList = [];
           this.garmentProducts.forEach((item, index)=> {
               const rank: number = item.name.search(searchTerm);
               if (rank > -1) {
                   termList.push({rank: (rank+1), index: index})
               }
           });

           if(termList.length>0){
             return this.doNumericalSort( termList, 'rank');
           }else{
             return termList;
           }

     }

    private sortCollection(){
       if(SORT_BASES[this.sortStateVal.sortBase].dataType === 'string'){
          this.garmentProducts = this.doAlphaSort(this.garmentProducts,  SORT_BASES[this.sortStateVal.sortBase].attr);
          if(  this.sortStateVal.sortDirection == 'Descending'){
             this.garmentProducts = this.garmentProducts.reverse();
          }
       }else if(SORT_BASES[  this.sortStateVal.sortBase].dataType === 'number'){
          this.garmentProducts = this.doNumericalSort(this.garmentProducts,   SORT_BASES[this.sortStateVal.sortBase].attr);
          if(  this.sortStateVal.sortDirection == 'Descending'){
             this.garmentProducts = this.garmentProducts.reverse();
          }
       }else{
          this.garmentProducts = this.doTypeSort(this.garmentProducts,   SORT_BASES[this.sortStateVal.sortBase].attr);

       }
       return this.garmentProducts;
    }

    private setMostCurrentStoreValues(){

        this.garmentStore$ = this.store.select(fromRoot.getGarmentsState).subscribe((val)=>{
            this.collectionId = val.currentCollectionId;
            this.currentGarmentCollection = val.entities[this.collectionId];
            this.garmentProducts =  this.currentGarmentCollection.garments;
        });
        this.garmentStore$.unsubscribe();

        this.sortState$= this.store.select(fromRoot.getPortalState).subscribe((val)=>{
            this.sortStateVal = val;
        });
        this.sortState$.unsubscribe();
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
        return  [...list].sort((firstTerm, secondTerm) =>{
            return (firstTerm[base] - (secondTerm)[base])
        });
    }

    private doTypeSort(list:GarmentModel[] , type:string){
      let Physical:GarmentModel[] = [];
      let Digital:GarmentModel[]  = [];
      let Service:GarmentModel[]  = [];

      list.forEach( (item)=>{
          switch(item.type){
              case 'Physical':
                Physical.push(item);
              break;
              case 'Digital':
                Digital.push(item);
              break;
              case 'Service':
                Service.push(item);
              break;
          }
      });

      let typeSorted:GarmentModel[] ;

      switch(type){
          case 'Physical':
              typeSorted= [...Physical,...Digital, ...Service];
          break;
          case 'Digital':
              typeSorted= [...Digital,...Physical, ...Service];
          break;
          case 'Service':
              typeSorted= [...Service,...Physical, ...Digital];
          break;
      }
      return typeSorted;
    }

    private moveElementsInList(crntIndex:number, newIndex:number, list:any[]){
        list.splice(newIndex, 0, list.splice(crntIndex, 1)[0]);
    }

    private createGarmentSubSet(){
        const pages = Math.ceil(this.garmentProducts.length / this.sortStateVal.viewablePerPage);
        const start = (this.sortStateVal.currentPage - 1) * this.sortStateVal.viewablePerPage;
        const end = (this.sortStateVal.currentPage === pages) ?
            this.garmentProducts.length :
            this.sortStateVal.viewablePerPage * this.sortStateVal.currentPage;
        return this.garmentProducts.slice(start, end);
    }
}
