import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminlogoutComponent } from './adminlogout/adminlogout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
console.log('adminModule');


@NgModule({
  declarations: [
    AdminloginComponent,
    AdminlogoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  
})
export class AdminModule { }
