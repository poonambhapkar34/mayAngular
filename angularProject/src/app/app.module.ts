import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

import { PopupComponent } from './popup/popup/popup.component';
import { Popup2Component } from './popup/popup2/popup2.component';
import { UserModule } from './user/user.module';
import { FormsModule } from '@angular/forms';
import { CustomDirective } from './directive/custom.directive';
import { LightDirective } from './directive/light.directive';
import { ChractersOnlyDirective } from './directive/chracters-only.directive';
import { CurrencyPipe } from './pipe/currency.pipe';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
  
    PopupComponent,
    Popup2Component,
    CustomDirective,
    LightDirective,
    ChractersOnlyDirective,
    CurrencyPipe,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    FormsModule,
   // AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
