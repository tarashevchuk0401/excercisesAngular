import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss']
})
export class DebugComponent implements OnInit {


  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.dateFn()
  }

  dateFn() {
    let startDate: Date = new Date();
    let currentDate: Date = new Date (startDate)
    let endDate = new Date('November 12, 2026');
    let valueOfFrequency = 1;
    let arr: any = [
      new Date()
    ];

    let handler = () => {
      if (currentDate < endDate) {
      let  newCurrentDate = new Date(currentDate.setMonth(currentDate.getMonth() + 4 * valueOfFrequency));

        if (newCurrentDate < endDate) {
          arr.push((newCurrentDate));
        }
        handler()
      } else return
    }

    handler()
    console.log(arr);
    // console.log(new Date().toLocaleTimeString('en-US'))

  }






}
