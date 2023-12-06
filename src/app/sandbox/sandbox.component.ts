import { Component } from '@angular/core';
// import * as git from 'git-rev-sync';


@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent { 
  commit: string = '';

  getCommitHash() {
    // let rcommit =  git.short();
    // console.log(rcommit)
  }

}
