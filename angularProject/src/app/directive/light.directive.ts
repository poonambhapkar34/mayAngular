import { Directive, ElementRef, HostListener ,Input } from '@angular/core';

@Directive({
  selector: '[appLight]'
})
export class LightDirective {

  constructor(private el: ElementRef) { }

  @Input() appLight = '';
  
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appLight || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
   highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

