import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-adminlogout',
  templateUrl: './adminlogout.component.html',
  styleUrls: ['./adminlogout.component.scss']
})
export class AdminlogoutComponent implements OnInit {
  formData:any;

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {

  }
  getServiceData(){
 
    
  this.formData = this.dataservice.formData;
  console.log('formdata',this.formData);
    
  }

}
