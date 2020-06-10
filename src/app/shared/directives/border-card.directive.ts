import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {
  public initialColor =   '#f5f5f5';
  public defaultColor = '#009688';
  public defaultHeight = 180;
  // public defaultFont = 'arial';

constructor(private el: ElementRef) {
  this.setBorder(this.initialColor);
  this.setHeight(this.defaultHeight);
  // this.setFont(this.defaultFont);
}

@Input('pkmnBorderCard') borderColor: string;

@HostListener('mouseenter') onMouseEnter() {
  this.setBorder(this.borderColor || this.defaultColor);
}

@HostListener('mouseleave') onMouseLeave() {
  this.setBorder(this.initialColor);
  // this.setFont(this.defaultFont);
}

private setBorder(color: string) {
  const border = 'solid 4px ' + color;
  this.el.nativeElement.style.border = border;
}

private setHeight(height: number) {
    this.el.nativeElement.style.height = height + 'px';
}

// private setFont(font: string) {
//   const fontstyle = 'arial';
//   this.el.nativeElement.fontstyle = font;
// }
}
