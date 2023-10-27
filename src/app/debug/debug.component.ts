import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss']
})
export class DebugComponent implements OnInit {
  // @ViewChild('elemet') element!: ElementRef;


  // constructor( private router : Router) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.element.nativeElement, 'color', 'blue');
    // console.log(this.element)
  }

test(){
  // window.scrollTo(100,100)
  // let elem = 
  // this.router.navigate([], { fragment: "<yourTarget>" });
}
    
  }






