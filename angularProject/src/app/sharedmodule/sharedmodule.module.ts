import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChractersOnlyDirective } from '../directive/chracters-only.directive';



@NgModule({
  declarations: [
    ChractersOnlyDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ChractersOnlyDirective
  ]
})
export class SharedmoduleModule { }
