import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [
    trigger('enabledStateChange', [
      state(
        'default',
        style({
          opacity: 1,
          padding: '25px'
        })
      ),
      state(
        'disabled',
        style({
          opacity: 1,
          fontSize: '55px',
          color: 'red',
          backgroundColor: 'green',
          padding: '55px',
          width: '50%'
        })
      ),
      transition('void => default', animate('300ms ease-out')),
      transition('default => disabled', animate('300ms ease-out')),
      transition('disabled => default', animate('800ms linear')),
    ]),


    trigger('alfa', [
      state(
        'first',
        style({
          opacity: 0,
          backgroundColor: 'orange',
          transform: 'translateX(-1000px)',
          width: '1000px',
          height: '200px',
          margin: '5rem'

        })
      ),
      state(
        'second',
        style({
          opacity: 1,
          backgroundColor: 'green',
          width: '1000px',
          height: '200px',
          margin: '5rem'
      

        }),
      ),
      transition('void => first', animate('0ms linear')),
      transition('first => second', animate('2200ms ease-in')),
      transition('second => first', animate('2200ms ease-out')),
    ]),
  
    trigger('beta', [
      state(
        'first',
        style({
          opacity: 0,
          backgroundColor: 'orange',
          transform: 'translateX(3000px)',
          width: '1000px',
          height: '200px',
          margin: '5rem'

        })
      ),
      state(
        'second',
        style({
          opacity: 1,
          backgroundColor: 'green',
          width: '1000px',
          height: '200px',
          margin: '5rem'
      

        }),
      ),
      transition('void => first', animate('0ms linear')),
      transition('first => second', animate('2200ms ease-in')),
      transition('second => first', animate('2200ms ease-out')),
    ]),
  
  ]

})
export class AnimationComponent implements OnInit {
  items: string[] = ['1', '2 ', '3'];
  stateOfElement: string = 'default';
  stateMyAnimation: string = 'first';

  ngOnInit(): void {
    setTimeout(() => {
      this.stateMyAnimation = 'second'
    }, 10)
  }

  removeItem() {
    this.stateOfElement = 'disabled'
  }

  toDefault() {
    this.stateOfElement = 'default'
  }

  toFirst() {
    this.stateMyAnimation = 'first';
  }

  toSecond() {
    this.stateMyAnimation = 'second';
  }

  show(){
    console.log(123)
  }

}
