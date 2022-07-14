import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appChractersOnly]'
})
export class ChractersOnlyDirective {

  constructor(private element : ElementRef) { }

  @HostListener('input',['$event']) onInputChange(event:any){
    let initialValue =  this.element.nativeElement.value;
    this.element.nativeElement.value = initialValue.replace(/[^a-zA-Z ]*/g, '')

  }

}
