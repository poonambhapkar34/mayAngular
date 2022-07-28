import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit,OnChanges {
 @Input() name :any;
  constructor() { 
    console.log('constructor calling');
    
  }

  ngOnChanges(){
    console.log('ngOnchange calling');
    }

  ngOnInit(): void {
    console.log('oninit calling');
    
  }

}
