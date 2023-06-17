import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

fromP: string = 'fromP';
res: string = '';

  parentFn(text:string){
    this.res = text;
  }
}
