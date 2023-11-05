import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface Operation {
  title: string,
  amount: number
}


@Component({
  selector: 'app-last-day',
  templateUrl: './last-day.component.html',
  styleUrls: ['./last-day.component.scss']
})
export class LastDayComponent {

array: Array<Operation> = [
  {title : 'first', amount : 909},
  {title : 'fsdfsfd', amount : 45},
  {title : 'ftadadsadada', amount : 109},
  {title : 'ftadadsadada', amount : 109},
  {title : 'fsadada', amount : 9},
  {title : 'first', amount : 909},
  {title : 'fsdfsfd', amount : 45},
  {title : 'ftadadsadada', amount : 109},
  {title : 'ftadadsadada', amount : 109},
  {title : 'fsadada', amount : 9},
  {title : 'first', amount : 909},
  {title : 'fsdfsfd', amount : 45},
  {title : 'ftadadsadada', amount : 109},
  {title : 'ftadadsadada', amount : 109},
  {title : 'fsadada', amount : 9},
]

}
