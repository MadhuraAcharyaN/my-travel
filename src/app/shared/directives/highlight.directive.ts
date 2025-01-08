import {
  Directive,
  ElementRef,
  Host,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true,
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') bgColor: string = 'yellow';
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // el.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseover')
  onHoverElement(): void {
    this.bgColor = 'red';
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.bgColor = 'yellow';
  }
}
