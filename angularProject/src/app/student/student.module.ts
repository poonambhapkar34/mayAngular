import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { StudentlogoutComponent } from './studentlogout/studentlogout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {  MatButtonModule, } from "@angular/material/button";


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
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,


  
  ]
})
export class StudentModule { }
