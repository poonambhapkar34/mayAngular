import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
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
  constructor() { }
 
  ngOnInit(): void {
   


  }
  adminFormData(adminFormData:NgForm){
    console.log(adminFormData);
    
  }

}
