import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {

  isVisible: boolean = false;
  result: number | undefined;

  toogle() {
    this.isVisible = !this.isVisible
  }

  fibb() {
    //1,1,2,3,5,8, 13
    let n = 50
    let start = [1, 1];

    for (let i = 0; i < n - 2; i++) {
      start.push(start[start.length - 1] + start[start.length - 2])
    }

    console.log(start[start.length - 1])


  }


}
