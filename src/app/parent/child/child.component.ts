import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from '@material-ui/icons';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit{

  @Input() fromC: string = ''
  @Output() newOut = new EventEmitter()

  outText: string = 'OUT_FROM_CHILD'

  @Output() out = new EventEmitter<string>();

ngOnInit(): void {
  this.showText(this.outText)
}

  showText(outText: string) {
    this.newOut.emit(outText)
  }

}
