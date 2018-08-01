import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataContainerService {
 data:Object;
  constructor() { }
 getData(){
   return this.data;
 }

 setData(newData){
   this.data=newData;
 }
}
