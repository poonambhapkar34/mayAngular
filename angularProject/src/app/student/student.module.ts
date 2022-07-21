import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { StudentlogoutComponent } from './studentlogout/studentlogout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


console.log('studentComponent');

@NgModule({
  declarations: [
    StudentloginComponent,
    StudentlogoutComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  
  ]
})
export class StudentModule { }
