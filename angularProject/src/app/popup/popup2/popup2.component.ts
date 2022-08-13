import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-popup2',
  templateUrl: './popup2.component.html',
  styleUrls: ['./popup2.component.scss']
})
export class Popup2Component implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  subDataSet(data:any){

    this.dataService.subjectData.next({userData: data})


  }



}
