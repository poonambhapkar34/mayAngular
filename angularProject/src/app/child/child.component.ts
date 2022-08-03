import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit,OnChanges {
 @Input() mobNo :any;
  constructor() { 
    console.log('constructor calling');
    
  }

  ngOnChanges(data:SimpleChanges){
    console.log('ngOnchange calling');
    console.log('data', data);
    
    }

  ngOnInit(): void {
    console.log('oninit calling');
    
  }
  ngDoCheck(){
    console.log('ngDoCheck calling');
      }
  docheck(data:any){
    console.log(data);
    
  }
  ngAfterContentInit(){
    console.log("ngContentInit calling");
    

  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked calling");
  }
  ngAfterViewInit(){
    console.log('afterview init');
    
  }
  ngAfterViewChecked(){
    console.log('ViewChecked calling');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy calling');
    
  }

} 
