import { Component } from '@angular/core';
import { FormGroup,FormBuilder, } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  studentDataForm : any;
  constructor(private fb: FormBuilder ) { }

  ngOnInit(): void {
this.studentDataForm = this.fb.group({
  adminName:['poo']
})

  }
}
