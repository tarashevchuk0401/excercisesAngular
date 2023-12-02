import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from '@material-ui/icons';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  count: number = 0;

  increment(){
    this.count++;
  }
}
