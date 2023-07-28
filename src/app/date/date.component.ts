import { Component, OnInit } from '@angular/core';
import { interval, takeUntil } from 'rxjs';


@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  date: Date | undefined;
  res: any;
  stream$ = interval(1000).pipe(takeUntilDestroyed());

  ngOnInit(): void {
    this.date = new Date();

    this.stream$.pipe().subscribe(d => console.log(d))
  }

  onKeyPress(event: KeyboardEvent) {
    // Check if the pressed key is 'Enter' (keyCode 13)
    if (event.keyCode === 13) {
      console.log('Enter key pressed!');
    }
  }



}
function takeUntilDestroyed(): import("rxjs").OperatorFunction<number, unknown> {
  throw new Error('Function not implemented.');
}

