import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  apiData:any;

  constructor(private dataService : DataService) { }


  ngOnInit(): void {
  }

  getData(){
    this.dataService.getApiData().subscribe((data)=>{
      this.apiData = data;
      console.log(data);
      

    })
  }
  deleteRecord(id:any){
    this.dataService.deletApiCall(id).subscribe(data=>{
      console.log(data);
      
    })

  }

  putRecord(id:any){
    const body = {name: 'shreedharNew' };
    this.dataService.putApiCall(id , body).subscribe(data=>{
      console.log(data);
      
    })
  }

}
