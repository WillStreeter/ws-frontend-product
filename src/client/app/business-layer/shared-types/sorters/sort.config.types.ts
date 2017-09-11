/**
 * Created by willstreeter on 9/8/17.
 */


 export const SORT_BASES =  {
                               "Name":{
                                   attr:"name",
                                   dataType:"string"
                               },
                               "Physical":{
                                   attr:"Physical",
                                   dataType:"term"
                               },
                               "Digital":{
                                   attr:"Digital",
                                   dataType:"term"
                               },
                               "Service":{
                                   attr:"Service",
                                   dataType:"term"
                               },
                               "Price":{
                                   attr:"price",
                                   dataType:"number"
                               },
                               "Inventory":{
                                   attr:"inventory",
                                   dataType:"number"
                               },
                             };



 export const SORT_CRITERIA = {
                               "Descending":"Descending",
                               "Ascending":"Ascending",
                              };





export const TYPE_LIST = ["Physical", "Digital", "Service"]