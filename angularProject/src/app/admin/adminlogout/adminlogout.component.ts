import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-adminlogout',
  templateUrl: './adminlogout.component.html',
  styleUrls: ['./adminlogout.component.scss']
})
export class AdminlogoutComponent implements OnInit {
  formData:any;
  getDataFlag: any =false;

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
    // this.formData = this.dataservice.formData;
    this.formData = this.dataservice.getFormData();
    console.log('formdata',this.formData);
    this.getDataFlag = true;
  }
  getServiceData(){

  }

}
