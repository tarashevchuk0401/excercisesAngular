import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, interval, take, takeUntil } from 'rxjs';
// import * as git from 'git-rev-sync';


@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {
  commit: string = '';
  interval = interval(1000)
  numbers = interval(1000);

  constructor() {
  }

  ngOnInit(): void {
    // this.interval.pipe().subscribe(d => console.log(d))
  }
}
