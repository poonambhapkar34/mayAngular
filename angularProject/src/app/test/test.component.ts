import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  xyx:any;
   @Output() parentData = new EventEmitter<any>()
   subData:any

  constructor(public dataService:DataService) { 

  }

  ngOnInit(): void {
   console.log('testCompoData', this.dataService.storageData);
   console.log(this.dataService.dataServiceFunction());
   this.parentData.emit('jay');
   this.dataService.subjectData.subscribe(data=>{
    this.subData = data;
   })
   console.log('subject Data',this.dataService.subjectData) 

  }
  sendData(data:any){
    this.parentData.emit(data);

  }
  ngOnDestroy()
  {
    this.dataService.subjectData.next({})
    this.dataService.carsDetail.carName='';
    this.dataService.storageData = '';
  }

}
