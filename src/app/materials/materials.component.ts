import { Component } from '@angular/core';


@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent {
  inputValue: string = 'z'
  opened: boolean = false;
  value = 'Clear me';
  favoriteColor: string = '';
  lang: string='';
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

  showInput(){
    console.log(this.inputValue)
  }

  showLanguage(){
    console.log(this.lang)
  }

  showColor(){
    console.log(this.favoriteColor)
  }


}
