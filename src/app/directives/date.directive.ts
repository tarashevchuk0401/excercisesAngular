// import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  @Input()
  private date: Date = new Date()
  private paragraph;

  @HostBinding('style.color') color!: string;

  constructor(private el: ElementRef, private rendere: Renderer2) { 
    this.paragraph = rendere.createElement('p')
  }


  
  @HostListener('mouseover')
  mouseEnter(eventDate: Event){
    // this.paragraph.innerHTML = this.date.toLocaleDateString();
    // this.rendere.appendChild(this.el.nativeElement, this.paragraph)

    // const p = this.el.nativeElement;
    // this.rendere.setStyle(p, 'color', 'blue');
    this.color = 'yellow'
  }
  @HostListener('mouseleave')
  mouseLeave(eventDate: Event){
    // this.rendere.removeChild(this.el.nativeElement, this.paragraph);  

    // const p = this.el.nativeElement;
    // this.rendere.setStyle(p, 'color', 'red');
    // this.rendere.removeClass(p, 'text');

    this.color = 'red'
  }

}
