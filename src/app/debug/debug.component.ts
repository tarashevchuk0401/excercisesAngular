import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss']
})
export class DebugComponent  implements OnInit{


  @ViewChild('div1') div1!: ElementRef;
  @ViewChild('div2') div2!: ElementRef;
  @ViewChild('div3') div3!: ElementRef;

  constructor(private renderer: Renderer2) {}


  ngOnInit(): void {
    
  }


  changeColor(divRefName: string, color: string) {
    
  }
}
