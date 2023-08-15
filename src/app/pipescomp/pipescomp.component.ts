import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-pipescomp',
  templateUrl: './pipescomp.component.html',
  styleUrls: ['./pipescomp.component.scss']
})
export class PipescompComponent {

  @ViewChild('input') input: ElementRef | undefined

  typing(){
      // setTimeout(()=> {console.log(text)},1000)
    console.log(this.input);

    // input$ = fromEvent(this.input)
  }

}
