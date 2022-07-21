import { Component, OnInit } from '@angular/core';
import { StorageService } from './../storage.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  data:any;
     hide =false;
     colors= ['red','orange','green','yellow','aqua','blue'];
     info = {
      myInfo: {
      name: 'poonam',
      age: 30,
      city: 'mumbai',
      phNo: 777777
      },
      myInfo2: {
      name: 'poonam2',
      age: 30,
      city: 'mumbai2',
      phNo: 7777772
     }
  }
   car:any = 'i10';
   colorOf = 'yellow';
   item = [
    {name:'santosh',age:'23',gmail:'santoshmulak98@gmail.com'},
    {name:'shivaji',age:'224',gmail:'shivaji98@gmail.com'},
    {name:'sachin',age:'20',gmail:'sachinmulak98@gmail.com'},
  ]
  styleProp = 'main';

  directiveColor= 'violet';
  name = 'Jay Patil'
  date = Date.now();
  amt:number=2000;


  constructor(private serviceStorage:StorageService) { }

  ngOnInit(): void {
    console.log('before defining',this.serviceStorage.serviceData);
    this.data = this.serviceStorage.serviceData
    this.serviceStorage.serviceData = 100;
    console.log('after defining',this.serviceStorage.serviceData);
    this.serviceStorage.serviceData = 'om';
    console.log('after reassigning',this.serviceStorage.serviceData);


  }
  getData(){
   let value = this.serviceStorage.getdata();
    console.log('value', value);
    
  }
  styleProperty(){
    return 'main1';
  }

}
