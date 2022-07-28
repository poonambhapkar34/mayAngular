import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

import { PopupComponent } from './popup/popup/popup.component';
import { Popup2Component } from './popup/popup2/popup2.component';
import { UserModule } from './user/user.module';
import { CustomDirective } from './directive/custom.directive';
import { LightDirective } from './directive/light.directive';
import { ChractersOnlyDirective } from './directive/chracters-only.directive';
import { CurrencyPipe } from './pipe/currency.pipe'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminModule } from './admin/admin.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatButtonModule, } from "@angular/material/button";
import { MatSliderModule } from '@angular/material/slider';
import { ChildComponent } from './child/child.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CustomDirective,
    LightDirective,
    CurrencyPipe,
    PopupComponent,
   
    Popup2Component,
    PagenotfoundComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    ReactiveFormsModule
    // AdminModule
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
