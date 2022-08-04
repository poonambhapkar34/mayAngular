import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { DataService } from ".././../data.service";

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {
  adminData = {
      name:'Jay',
      mobileNo:'9896666666'
  }
  carData:any;
  constructor(private dataService: DataService ) { }
 
  ngOnInit(): void {
    this.carData = this.dataService.carsDetail


  }
  adminFormData(adminFormData:NgForm , xyx?:any){
    console.log(adminFormData);
    console.log(' this.dataService.formData before assigning data====', this.dataService.formData);
   
    //this.dataService.formData = adminFormData;
    this.dataService.setFormData(adminFormData)
    console.log(' this.dataService.formData====', this.dataService.formData);
    
    
    
  }

}
