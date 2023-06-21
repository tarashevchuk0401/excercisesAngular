import { Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.scss']
})
export class GitComponent implements OnChanges, DoCheck{

  chanelName: string = 'webTech';
  res: string = '_'

  ngOnChanges(changes: SimpleChanges): void{
    console.log('onchanges')
  }

  ngDoCheck(): void {
    console.log('doCheck')
  }

  show(){
    this.res = 'result';
  }

}
