import { Component } from '@angular/core';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.scss']
})
export class GitComponent {

  beforeAmend:string = 'false'
  beforeAmend2:string = 'false';

  cherryPick: string = '8:56';


}
