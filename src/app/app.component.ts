import { Component } from '@angular/core';
import { VERSION } from '../environments/version'; // import the automatically generated file 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'excercisesAngular';
  constructor() {
    // use the properties of the VERSION constant
    console.log(`Application version is: version (from package.json)=${VERSION.version}, git-tag=${VERSION.tag}, git-hash=${VERSION.hash}`);
  }
}
