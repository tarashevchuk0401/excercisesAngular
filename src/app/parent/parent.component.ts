import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  fromP:string = 'fromP'
  inputValue: string = 'init'
  test3P:string = 'test3';
  output: string = ''

  parentFn(text: string){
   this.output = text
  }
}
