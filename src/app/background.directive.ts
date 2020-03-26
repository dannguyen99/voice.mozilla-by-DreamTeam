/* tslint:disable:member-ordering */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[iconBackground]'
})
export class BackgroundDirective {

  constructor(private el: ElementRef) { }

  @Input('iconBackground') backgroundColor: string;

  @HostListener('click') onMouseClick() {
    this.highlight(this.backgroundColor || 'red');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
