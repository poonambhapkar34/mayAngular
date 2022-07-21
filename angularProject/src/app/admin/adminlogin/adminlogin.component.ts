import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  constructor() { }
 
  ngOnInit(): void {
  }
  adminFormData(adminFormData:NgForm){
    console.log(adminFormData);
    


  }

}
