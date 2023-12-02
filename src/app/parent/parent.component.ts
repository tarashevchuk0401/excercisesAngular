import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

 @ViewChild(ChildComponent) child? : ChildComponent;

 increment(){
  this.child?.increment()
 }
  
}
