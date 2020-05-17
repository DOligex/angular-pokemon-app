import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {
  public initialColor =   '#f5f5f5';
  public defaultColor = '#009688';
  public defaultHeight = 180;

constructor(private el: ElementRef) {
  this.setBorder(this.defaultColor);
  this.setHeight(this.defaultHeight);
}

@Input('pkmnBorderCard') borderColor: string;

@HostListener('mouseenter') onMouseEnter() {
  this.setBorder(this.borderColor || this.defaultColor);
}

@HostListener('mouseleave') onMouseLeave() {
  this.setBorder(this.initialColor);
}

private setBorder(color: string) {
  const border = 'solid 4px ' + color;
  this.el.nativeElement.style.border = border;
}

private setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';
}

}
