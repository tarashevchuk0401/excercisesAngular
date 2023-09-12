import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss']
})
export class DebugComponent  implements OnInit{

  @ViewChild('div') div!: ElementRef;

  constructor(private renderer: Renderer2){}

  ngOnInit(): void {
  
  }


test1(){
  // this.div.nativeElement.style.color='red'
  this.renderer.setStyle(this.div.nativeElement, 'color', 'red')
  this.renderer.createText
}

  
}
