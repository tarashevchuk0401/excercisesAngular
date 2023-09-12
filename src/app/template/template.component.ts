import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {

  isVisible: boolean = false;
  result: number | undefined ;

  toogle(){
    this.isVisible = !this.isVisible
  }

  fibb(){
    //1,1,2,3,5,8
    // let last = 1;
    // let res = 0
    // // for(let i = 0; i < 3; i + last){
    // //   last = i;
    // //   res += i
    // // }
    // this.result = res
  }

}
