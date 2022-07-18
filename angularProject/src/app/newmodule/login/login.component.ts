import { Component, OnInit } from '@angular/core';
import { DataService } from './../../data.service';
import { PopupdataService } from '../../popup/popupdata.service';
import { StorageService } from './../../storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    name:any;
    surname:string = 'patil';
    interpolationProp = 'I am Inside Interpolation Function';
    xyz = 1000;
    myName = 'poonam';
    disableName = "jay";
    disableFlag = true;
    ngName = 50000;
 
  constructor(private dataService:StorageService, private dService : DataService,
    public  popupdataService:PopupdataService) { }

  ngOnInit(): void {
   this.name='jay';
   console.log('login component');
   console.log('login components onInit Method');
   console.log('name',this.name);
   console.log('surname',this.surname);
   console.log('login component',this.dataService.serviceData);
   console.log('logincompostorageData', this.dService.storageData);
   console.log('loginCompoFunct', this.dService.dataServiceFunction());
   console.log('loginCompo', this.dService.cars);
   console.log(this.popupdataService.colors);
   console.log(typeof this.xyz);
   this.dService.storageData = 'i like pune';
   console.log('updatedProp', this.dService.storageData);
   
   
  }

  getInboxValue(value:any){
    console.log('value',value);
    
  }

  getInterpolation(){
    return this.interpolationProp;
   
  }

  buttonClick(event:any){
    alert('click event occured')
  }
  enableInputBox(){
    this.disableFlag = false;
  }

  getData(newName:any){
    var name = 'poonam';
    this.name = newName;
    console.log('this.name',this.name);
    console.log(name);
    name = newName;
    console.log(name);
    
    
  }
  
  getData2(newName2:any){

    // console.log('this.name', newName2.target.value);

    this.name = newName2
     console.log('this.name',this.name);
   
  }
  onKeypressEvent(eventwwww: any){
    console.log(eventwwww.target.value);
  }

  changeFun(data:any){
    console.log(data.target.value)
  }

  getServiceData(){
    console.log('buttonClick',this.dataService.serviceData);
    this.dataService.data(this.dataService.serviceData);
    this.dataService.setdata(this.dataService.newData = 2000)
   console.log('colors', this.popupdataService.colors);
    
  }

}
