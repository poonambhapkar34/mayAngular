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

  //url = "https://jsonplaceholder.typicode.com/users"
  url = "http://localhost:3000/posts"


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
  //return this.http.get(this.url + "/" + "4")

  }

  postApiCall(data:any){
    return this.http.post(this.url, data)
  }

  deletApiCall(id:any){
    return this.http.delete(this.url + "/" + id)

  }
  putApiCall(id:any, body:any ){
   return this.http.put(this.url + "/" + id, body)
  }





}
