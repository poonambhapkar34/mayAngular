import { Component } from '@angular/core';
import { FormGroup,FormBuilder, } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  myName = 'Jay Patil';
  
  // ngOnchanges(){
  //   console.log('ngOnchange calling');
  // }

  
  ngOnInit(): void {

  }
  dataFromParToChild(data:any){
    this.myName = data

  }
}
