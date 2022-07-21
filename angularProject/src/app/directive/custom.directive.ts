import { Directive, ElementRef } from '@angular/core';
console.log('custom Directive');

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private  element : ElementRef) { 
    element.nativeElement.style.color = 'yellow'
  }
    
}
