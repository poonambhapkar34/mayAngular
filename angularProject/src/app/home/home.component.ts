import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myName = 'Jay Patil';
  childFlag = true;
  childData:any;
  userMobNo:any;
  constructor() { }

  ngOnInit(): void {
  }
  dataFromParToChild(data:any){
    this.myName = data

  }
  parentDataFun(data:any){
    console.log('datacoming from child===>'+ data);
  //  this.dataService.dataComingFromChild = data;
      }

      getData(data:any){
        console.log('data coming from child---->>>>>', data);
        this.childData = data;

      }

      sendData(data:any){
        this.userMobNo = data;

      }
     

}
