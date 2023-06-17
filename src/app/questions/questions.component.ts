import { Component, OnInit } from '@angular/core';

enum MyEnum {
  ACTIVE = 'active',
  FAILED = 'no success',
  P = 3.1456586
}

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  
  a:string = ''

  ngOnInit(): void {
    console.log(MyEnum.P)  
  }

  





}
