import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss']
})
export class DebugComponent  implements OnInit{

  text: string = 'init';
  second: string = '____'

  ngOnInit(): void {
  }

  secondFn(){
   this.second = 'second done!';
  }

  change(){
    this.text = 'canged';
    this.text = '1';
    this.text = '2';
    this.secondFn();
    this.text = '2';
    this.text = '2';
  }

}
