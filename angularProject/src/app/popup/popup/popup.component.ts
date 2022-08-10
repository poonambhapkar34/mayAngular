import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  apiData:any;
  cars$ : any;
  carNames = ['minicup','volvo','jaguar','i10','i20'];
  datalist: any;


  constructor(private dataService : DataService) { }


  ngOnInit(): void {
    this.cars$ = of(this.carNames);

  }

  getData(){
    this.datalist =  this.dataService.getApiData()
       .subscribe((xyz)=>{
        this.apiData = xyz;
      console.log(xyz);
   
    })
    // this.dataService.getApiData().toPromise().then(resp=>
    //   console.log(resp))
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
  ngOnDestroy(){
    console.log('destor calling to unsubscribe');
    
    this.datalist.unsubscribe();

  }

}
