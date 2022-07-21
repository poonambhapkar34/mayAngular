import { Injectable } from '@angular/core';
console.log('global Data service')

@Injectable({
  providedIn: 'root'
})
export class DataService {
   //let storageData = 'I live in Mumbai';
   storageData : string = 'I live in Mumbai' ;
   // storageData = 'I live in Mumbai';
   cars:any;
   fruit: any;
  constructor() { }

  dataServiceFunction(){
   return this.fruit = { 'fruitName':'Apple',
                  'color':'red',
                  'price':200 }
  }

}
