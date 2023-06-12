import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from '@material-ui/icons';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  output: string = 'out1';

 @Input() toC = '';
 @Input() test3C = '';

 @Output() out1 = new EventEmitter<string>();

 showText(){
  this.out1.emit(this.output)
 }

}
