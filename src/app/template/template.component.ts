import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent {

  isVisible: boolean = false;

  toogle(){
    this.isVisible = !this.isVisible
  }

}
