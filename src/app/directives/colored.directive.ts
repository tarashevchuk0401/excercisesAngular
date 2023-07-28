import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColored]'
})
export class ColoredDirective  implements OnInit{

  constructor( private el: ElementRef, private renderer : Renderer2) { }

  ngOnInit(): void {
    const p = this.el.nativeElement;
    this.renderer.setStyle(p, 'color', 'green');
    this.renderer.addClass(p, 'smallfont');
    
  }

  directive(){
    
  }

}
