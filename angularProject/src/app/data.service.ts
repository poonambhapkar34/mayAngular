import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
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
   carsDetail= {
    carName:'mincuper',
    carPrice:'2500000'
   };
  matFormData:any;
  dataComingFromChild: any;

  formData:any;

  url = "https://jsonplaceholder.typicode.com/users"


  constructor(private http : HttpClient) { }

  dataServiceFunction(){
   return this.fruit = { 'fruitName':'Apple',
                  'color':'red',
                  'price':200 }
  }
 
  setFormData(formData:any){
    this.formData = formData;
  }

  getFormData(){
    return this.formData;
  }
  //API calls

  getApiData(){
   return this.http.get(this.url);

  }





}
