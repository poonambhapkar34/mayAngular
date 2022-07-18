import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewmoduleRoutingModule } from './newmodule-routing.module';
import { LoginComponent } from './../newmodule/login/login.component';
import { LogoutComponent } from './../newmodule/logout/logout.component';
import { FormsModule } from '@angular/forms';
import { LightDirective } from "../directive/light.directive";


@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    LightDirective

  ],
  imports: [
    CommonModule,
    NewmoduleRoutingModule,
    FormsModule
  ]
})
export class NewmoduleModule { }
