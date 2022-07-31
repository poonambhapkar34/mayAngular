import { Component } from '@angular/core';
import { FormGroup,FormBuilder, } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  myName = 'Jay Patil';
  childFlag = true;
  constructor(private route : Router){

  }
  
  // ngOnchanges(){
  //   console.log('ngOnchange calling');
  // }

  
  ngOnInit(): void {

  }
  dataFromParToChild(data:any){
    this.myName = data

  }
  ngDestroy(){
    this.childFlag = false
 
  }

}
